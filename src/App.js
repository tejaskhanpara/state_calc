import './App.css';
import mycss from './mycss.module.css';
import {useState} from "react";


var cnt=0,first,num=0,m;

function App() {

    
    const [count,setCount] = useState(0);
    
      const numClick = (n) =>{
        var num = count+n+"";
        setCount(num);
      }
      

      const clear = (n) =>{
         num = count.substring(0,count.length -1);
        setCount(num);
      }

      const all = (n) =>{
          setCount(0);
      }

      const sum = (n) =>{
          first = count;
          m=n;

          setCount(0);
          if(m=='+')
          {
            cnt = 1;
          }
          if(m=='-')
          {
            cnt = 2;
          }
          if(m=='*')
          {
            cnt = 3;
          }
          if(m=='/')
          {
            cnt = 4;
          }
          if(m=='%')
          {
            cnt = 5;
          }

      }

      const eql = () =>{
         const num1 = count;
         if(cnt == 1)
         {
           var ans = parseFloat(first)+parseFloat(num1);
           setCount(ans);
         }
         if(cnt == 2)
         {
           var ans = parseFloat(first)-parseFloat(num1);
           setCount(ans);
         }
         if(cnt == 3)
         {
           var ans = parseFloat(first)*parseFloat(num1);
           setCount(ans);
         }
         if(cnt == 4)
         {
           var ans = parseFloat(first)/parseFloat(num1);
           setCount(ans);
         }
         if(cnt == 5)
         {
           var ans = parseFloat(first)%parseFloat(num1);
           setCount(ans);
         }
      }
  

  return (
    <div className={mycss.cal}>
      <form className={mycss.main}>
        <div className={mycss.one}>
          <h3>Calculator</h3>
        </div>
        <div>
          <input type="text"  value={count}></input>
        </div>
        <div>
          <button  onClick={() => all()}  >AC</button>
          <button  onClick={() => clear()} >C</button>
          <button  onClick={() => sum('%')}  >%</button>
          <button  onClick={() => sum('-')}  >-</button>
        </div>
        <div>
          <button onClick={() => setCount(7)}>7</button>
          <button onClick={() => numClick(8)}>8</button>
          <button onClick={() => numClick(9)}>9</button>
          <button onClick={() => sum('*')} >*</button>
        </div>
        <div>
          <button onClick={() => numClick(4)}>4</button>
          <button onClick={() => numClick(5)}>5</button>
          <button onClick={() => numClick(6)}>6</button>
          <button onClick={() => sum('/')} >/</button>
        </div>
        <div>
          <button onClick={() => numClick(1)}>1</button>
          <button onClick={() => numClick(2)}>2</button>
          <button onClick={() => numClick(3)}>3</button>
          <button onClick={() => sum('+')} >+</button>
        </div>
        <div>
          <button onClick={() =>numClick(0)} className={mycss.twozero}>0</button>
          <button onClick={() =>numClick('.')} className={mycss.zero}>.</button>
          <button onClick={() => eql('=')} className={mycss.equal} >=</button>
        </div>
      </form>
    </div>
  );
}

export default App;
