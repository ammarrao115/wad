var profiles=[
    {
        name: "Muhammad Ali Jinnah",
        bMonth: "December",
        bDate: 25,
        bYear: 1876,
        title: "Founder of PAKISTAN",
        img: "images/muhammad_ali.jpg",
        commentsArr:[]
    }
    ,{
        name:"Imran Khan",
        bMonth:"October",
        bDate:5,
        bYear:1952,
        title:"Prime Minister of PAKISTAN",
        img:"images/imran_khan.JPG",
        commentsArr: ["testing"]
    }
    ,{
        name:"Rao Ammar",
        bMonth:"March",
        bDate:1,
        bYear:1998,
        title:"Student",
        img:"images/dummy_male.jpg",
        commentsArr:[]
    }];


var pointer=0;
displayer();

function displayer() {
    var img=document.getElementById("dp");
    var name=document.getElementById("name");
    var dob=document.getElementById("dob");
    var position=document.getElementById("position");

    img.src=profiles[pointer].img;
    name.innerText=profiles[pointer].name;
    dob.innerHTML="<em> Born: <em>" + " " + profiles[pointer].bMonth + " " + profiles[pointer].bYear + ", " + profiles[pointer].bDate;

    displayComments();
}

function nextProfile() {
    if(pointer>=profiles.length -1)
    {
        pointer=0;
    }
    else
    {
        pointer++;
    }
    displayer();
}

function prevProfile() {
    if(pointer<=profiles.length-1)
    {
        pointer=profiles.length-1;
    }
    else
    {
        pointer--;
    }
    displayer();
}

function displayComments() {
    var myComments=document.getElementById("comment-list");
    myComments.innerText=" ";

    for(var i=profiles[pointer].commentsArr.length-1;i>=0;i--)
    {
        var createdElement =  "<div class='comment'>"+ profiles[pointer].commentsArr[i] +"</div>";
        myComments.innerHTML += createdElement;
    }
}

function shareBtn() {
    var nullError=document.getElementById("nullError");
    nullError.innerText=" ";

    var comment=document.getElementById("comment-area");
    var myComment=comment.value.trim();

    if (myComment.length==0)
    {
        nullError.style.display="Inline";
        nullError.style.color="red";
        nullError.innerHTML="enter a valid comment";
    }
    else
    {
        profiles[pointer].commentsArr.push(myComment);
        comment.innerText=" ";
        displayComments();
    }
}