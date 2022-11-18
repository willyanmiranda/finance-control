import * as C from "./styles";
import {
    FaArrowRight,
    FaArrowLeft
  } from "react-icons/fa";

   export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
   }

  export const filterList = (currentMonth, transactionsList) => {
    let newList = [];
    let year = currentMonth.split("-")[0]
    let month = currentMonth.split("-")[1]

    for(let i in transactionsList) {
      if(transactionsList[i].date.split("-")[0] === year && transactionsList[i].date.split("-")[1] === month ) {
        newList.push(transactionsList[i])
      }
    }
     return newList
   }


export const Months = (props) => {

    const formateDate = () => {
        let year = props.currentMonth.split("-")[0]
        let month = props.currentMonth.split("-")[1]
        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        return `${months[parseInt(month) - 1]} ${year}`
    }

    const handlePrevMonth = () => {
        let year = props.currentMonth.split("-")[0];
        let month = props.currentMonth.split("-")[1];
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        props.handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let year = props.currentMonth.split("-")[0];
        let month = props.currentMonth.split("-")[1];
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 );
        props.handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }


    return(
        <C.Container>
             <FaArrowLeft onClick={handlePrevMonth}/>
            <C.Title>{formateDate()}</C.Title>
             <FaArrowRight onClick={handleNextMonth}/>
        </C.Container>
    )
}
