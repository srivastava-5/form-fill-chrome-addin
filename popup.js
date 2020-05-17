var flow = document.getElementById("flow");
var pageDrpdown = document.getElementById("page");


flow.addEventListener("change",updatePageValues);

function updatePageValues(){
    strFlow = flow.value;
    
    
    pageOptions = [];
    switch(strFlow) {
        case "Borrower":
            var pageOptions=["Loan Amount","PAN" , "PhoneNo", "Email"];
            break;
        case "Borrower(IEC)":
            var pageOptions=["Default","Advanced EMI"];
            break;
        case "Investor":
            var pageOptions=["ILoan Amount","IPAN" , "IPhoneNo", "IEmail"];
            break;
        default:
      }

      optionValues = ""
      for(i=0;i<pageOptions.length;i++)
      {
        optionValues=optionValues+"<option value="+pageOptions[i]+">"+pageOptions[i]+"</option>";
      }
      pageDrpdown.innerHTML = optionValues;
      
      
    }




    var btnFillForm = document.getElementById("submit");
    btnFillForm.addEventListener("click",sendInfoToFormFill);


function sendInfoToFormFill(e){
    e.preventDefault()
    let params = {
        active: true,
        currentWindow: true
    }
    
    chrome.tabs.query(params,gotTabs);  
     
    function gotTabs(tabs){
        let msg = {
            flow: flow.value,
            page: pageDrpdown.value

        }
        console.log({msg});
        chrome.tabs.sendMessage(tabs[0].id,msg); 
    }
}