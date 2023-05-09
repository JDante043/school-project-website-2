function checkprice(){
    var price = 0;
    var cpu = document.getElementById("cpuinput").value;
    var gpu = document.getElementById("gpuinput").value;

    if (cpu === "Intel"){
        price += 550;
    }
    else if (cpu === "AMD"){
        price += 500;
   }

    if (gpu === "Integrated"){
        price += 0;
    }
    else if (gpu === "Intel"){
       price += 150;
    }
    else if (gpu === "AMD"){
       price += 250;
    }
    else if (gpu === "Nvidia"){
       price += 500;
    }

    document.getElementById("totalprice").innerHTML = `Total price: $${price}`;

}

function verification(){
    var buyer = "";
    buyer += document.getElementById("nameinput").value;
    var address = "";
    address += document.getElementById("addressinput").value;
    var cpu = document.getElementById("cpuinput").value;
    var gpu = document.getElementById("gpuinput").value;

    console.log(buyer);
    console.log(address);

    if (buyer !== "" && address !== ""){
        if(confirm(`Please re-check the following information:\nBuyer: ${buyer}\nAddress: ${address}\nCPU: ${cpu}\nGPU: ${gpu}`)){
            window.location.href="./verified.html";
        }
        else{

        }
    }
    else if (buyer !== "" && address === ""){
        alert("Address not filled!");
    }
    else if (buyer == "" && address !== ""){
        alert("Name not filled!");
    }
    else{
        alert("Name & address not filled!");
    }
}