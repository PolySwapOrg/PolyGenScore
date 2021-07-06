import React from "react";
import "./Main.css";
import SocialIcons from "../components/SocialIcons";
import DegenReport from "./DegenReport";
import DegenFactors2 from "./DegenFactors2";
import DegenFactors from "./DegenFactors";
import CompleteAnalytics from "./CompleteAnalytics";
import DoughnutChart from "../components/DoughnutChart";
import Twitter from "../components/Twitter";
import MetaMaskOnboarding from '@metamask/onboarding';
import list from "./Address";

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect Wallet';
const CONNECTED_TEXT = 'Connected';
const WRONG_CONNECTED_TEXT = 'Wrong Network';

function createScore(contract, score,type,url) {
  return { contract, score,type,url};
}

function Main (){

  // Here I'm logging the Context
    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState(0);
    const [networkId, setNetworkId] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [scores,setScores ] = React.useState([]);
    const [fcontract,setFContract ] = React.useState([]);
    const [tcontract,setTContract ] = React.useState([]);
    const [totalsum,setTotalSum ] = React.useState(0);
    const onboarding = React.useRef();
    const scoreList =[];
    const pcoreList =[];


    function apiFetch(acc) {
      fetch("https://api.polygonscan.com/api?module=account&action=txlist&address="+acc+"&startblock=1&endblock=99999999&sort=asc&apikey=FU3PWR4G96FC7HAUBU8AMD31RWFRHWCK2")
        .then(res => res.json())
        .then(
          (res) => {
            setIsLoaded(true);
            setItems(res.result);
            setScores(filterIt(res.result));
            setFContract(findUnique(res.result,"contract"));
            setTContract(findUnique(res.result,"type"));
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }

  function frequency(arr, key){
  let arr2 = [];
  arr.forEach((x)=>{

    // Checking if there is any object in arr2
    // which contains the key value
     if(arr2.some((val)=>{ return val[key] == x[key] })){

       // If yes! then increase the occurrence by 1
       arr2.forEach((k)=>{
         if(k[key] === x[key]){
           k["occurrence"]++
         }
      })

     }else{
       // If not! Then create a new object initialize
       // it with the present iteration key's value and
       // set the occurrence to 1
       let a = {}
       a[key] = x[key]
       a["occurrence"] = 1
       arr2.push(a);
     }
  })
  return arr2
}
    function findUnique(data,needle)
    {
      data.forEach(function (i, index,arr)
    {
      list.forEach((item) => {
        if(i.to == item.Id)
        pcoreList.push(createScore(item.name,item.score,item.type,item.url));
      });
    })
    console.log("pcore",needle,pcoreList);
      return frequency(pcoreList,needle);
    }

    function filterIt(data)
    {

      data.forEach(function (i, index,arr)
    {
      list.forEach((item) => {
        if(i.to === item.Id.toLowerCase())
        {
        scoreList.push(createScore(item.name,item.score,item.type,item.url));
      }
      });
    })
console.log("Score List",scoreList);
  var sum =0;
  const result = [];
  const map = new Map();
  for (const item of scoreList) {
      if(!map.has(item.contract)){
          map.set(item.contract, true);    // set any value to Map
          result.push({
              contract: item.contract,
              score: item.score,
              website :item.url,
              type : item.type
          });
          sum+=item.score;
      }
  }
  console.log(sum);
  setTotalSum(sum);
  console.log("filtered Data : ", result);
  return result;
    }

    React.useEffect(() => {
      if (!onboarding.current) {
        onboarding.current = new MetaMaskOnboarding();
      }
    }, []);

    React.useEffect(() => {
      console.log("chainChanged");
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum.on('chainChanged', (chainId) => {
          if(chainId==='0x89')
          {
          // setButtonText(accounts[0].toString().substring(0, 5)+"...."+accounts[0].toString().substring(37, 42));
          setDisabled(true)
        }
        else {
          setButtonText(WRONG_CONNECTED_TEXT);
          setDisabled(false);

        }
          setNetworkId(chainId);
    });
      }
    },[networkId]);

    React.useEffect(() => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum
          .request({ method: 'eth_chainId' })
          .then((chainId) =>
          {setNetworkId(chainId);
              console.log("eth_chainId");
          }).catch((error) => console.error(error));
      }
    }, [networkId]);

    React.useEffect(() => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        if (accounts.length > 0 && networkId==='0x89') {
          setButtonText(accounts[0].toString().substring(0, 5)+"...."+accounts[0].toString().substring(37, 42));
          // buttonText
          setDisabled(true)
          onboarding.current.stopOnboarding();
        } else if(accounts.length > 0 ){
          setButtonText(WRONG_CONNECTED_TEXT);
          setDisabled(false);
        }
        else {
          setButtonText(CONNECT_TEXT);
          setDisabled(false);
        }
      }
    }, [accounts]);


    React.useEffect(() => {
      function handleNewAccounts(newAccounts) {
        apiFetch(newAccounts);
        setAccounts(newAccounts);
      }
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(handleNewAccounts);
        window.ethereum.on('accountsChanged', handleNewAccounts);
        return () => {

        };
      }
    }, []);

  const handleClick = () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((newAccounts) =>
            {
              setAccounts(newAccounts);
              apiFetch(newAccounts);

            })
            .then(function switchNetwork() {
              window.ethereum
                .request({
                  method: 'wallet_addEthereumChain',
                  params:  [
                      {
                          "chainId": "0x89",
                          "chainName": "Matic Network",
                          "rpcUrls": [
                              "https://rpc-mainnet.maticvigil.com/"
                          ],
                          "iconUrls": [
                              "https://xdaichain.com/fake/example/url/xdai.svg",
                              "https://xdaichain.com/fake/example/url/xdai.png"
                          ],
                          "nativeCurrency": {
                              "name": "MATIC",
                              "symbol": "MATIC",
                              "decimals": 18
                          },
                          "blockExplorerUrls": [
                              "https://polygonscan.com/"
                          ]
                      }
                  ],
                })
                .then((result) => {
                  setNetworkId(0x89);
                  setButtonText(accounts[0].toString().substring(0, 5)+"...."+accounts[0].toString().substring(37, 42));
                  setDisabled(true);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
            );
        } else {
          onboarding.current.startOnboarding();
        }
    };

    return (
      <div>
        <div className="total">
        {
        accounts===0 &&  scores.length==0 && fcontract.length== 0 &&   tcontract.length == 0 && totalsum===0 &&
        <h3> You don't have enough transactions to generate Polygen Score! </h3>
        }
          <div className="button-container">
            <button disabled={isDisabled} className="toggle-button" onClick={handleClick}>
            {buttonText}
            </button>
          </div>
          <div className="total-container-1">
          {
            scores.length>0 &&
            <DegenReport sum ={totalsum} />
          }
            {
              scores.length>0 &&
            <DoughnutChart sum ={totalsum} scores={scores}/>
            }
            {
              scores.length>0 &&
            <Twitter sum ={totalsum}/>
            }

          </div>
          {
            fcontract.length> 0 &&   tcontract.length> 0 &&
          <DegenFactors fcontract = {fcontract} tcontract = {tcontract} />
         }
        {
          fcontract.length> 0 &&   tcontract.length> 0 &&
        <DegenFactors2 fcontract = {fcontract} tcontract = {tcontract} />
        }
          {
            scores.length>0 &&
          <CompleteAnalytics scores={scores}/>
        }
        </div>
      </div>
    );

}

export default Main;
