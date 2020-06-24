let mainNav = document.getElementById('js-menu');let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');});




var numlines = 1;
var abort = false;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function randomlinegenerator(){
    abort = true;
    removelines();
    numlines =  Math.floor((Math.random() * 100) + 1); 
    for(var i = 0; i < numlines; i++)
    {
        linegenerator(i);
        addcss(i);
    }
    await sleep(1000);
    abort = false;
}
function linegenerator(i){
    var tag = document.createElement("div");
    tag.classList.add("vertical-line");
    tag.setAttribute("id",i);
    var element = document.getElementById("container");
    element.appendChild(tag);
    // var cssedit = document.getElementsByClassName("vertical-line");
    // for(var x in cssedit)
    // {
    //     x.style.border = j.toString();
    // }
}
function addcss(i){
    var line = document.getElementById(i);
    var val = 10/numlines;
    var num = Math.floor((Math.random() * 500) + 5);
    line.classList.add(num);
    line.style.height = num+"px";
    line.style.width = val + "%";
    line.style.borderLeft = val*screen.width/170 + "em solid rgb(17, 153, 194)";
    // line.style.height = "10px";
}
function removelines(){
    for(var j = 0; j < numlines; j++)
    {
        var line = document.getElementById(j);
        if(line != null)
        {
            line.remove();
        }
    }
}
async function numlinegenerator(){
    abort = true;
    var x = document.getElementById("form");
    var text = x.elements[0].value;
    removelines();
    numlines = text.toString();
    for(i = 0; i < numlines; i++)
    {
        linegenerator(i);
        addcss(i);
    }
    await sleep(1000);
    abort = false;
}









async function bubblesort(){
    var lines = document.getElementsByClassName("vertical-line");
    var temp;
    var n = lines.length - 1;
    var val = 10/numlines;
    for(var i = 0; i < n+2; i++)
    {
        for(var j=0;j<n-i;j++)
        {
            if(abort)
            {
                return;
            }
            val1 = parseInt(lines[j].style.height,10);
            val2 = parseInt(lines[j+1].style.height,10);
            if(val1 > val2)
            {
                lines[j].style.borderLeft = val*screen.width/170 + "em solid rgb(0, 253, 177)";
                lines[j+1].style.borderLeft = val*screen.width/170 + "em solid rgb(0, 253, 177)";
                await sleep(80);
                temp = lines[j].style.height;
                lines[j].style.height = lines[j+1].style.height;
                lines[j+1].style.height = temp;
                await sleep(80);
                lines[j].style.borderLeft = val*screen.width/170 + "em solid rgb(17, 153, 194)";
                lines[j+1].style.borderLeft = val*screen.width/170 + "em solid rgb(17, 153, 194)";
            }

        }
    }
}

async function selectionsort(){
    var lines = document.getElementsByClassName("vertical-line");
    var n = lines.length;
    var val = 10/numlines;
    for(var i = 0; i < n; i++)
    {
        if(abort)
        {
            return;
        }
        lines[i].style.borderLeft = val*screen.width/170 + "em solid rgb(0, 253, 177)";
        var min_idx = i;
        var minval = parseInt(lines[i].style.height,10);
        lines[min_idx].style.borderLeft = val*screen.width/170 + "em solid rgb(0, 253, 177)";
        for(var j = i+1; j < n;j++)
        {
            if(abort)
            {
                return;
            }
            var val1 = parseInt(lines[j].style.height,10);
            if(minval > val1)
            {
                lines[min_idx].style.borderLeft = val*screen.width/170 + "em solid rgb(17, 153, 194)";
                minval = val1;
                min_idx = j;
                lines[min_idx].style.borderLeft = val*screen.width/170 + "em solid rgb(0, 253, 177)";
                await sleep(50);
            }
        }
        if(abort)
        {
            return;
        }
        var temp = lines[i].style.height;
        lines[i].style.height = lines[min_idx].style.height;
        lines[min_idx].style.height = temp;
        await sleep(50);
        lines[i].style.borderLeft = val*screen.width/170 + "em solid rgb(17, 153, 194)";
    }
}

async function insertionsort(){
    if(abort)
    {
        return;
    }
    var lines = document.getElementsByClassName("vertical-line");
    var n = lines.length;
    var val = 10/numlines;
    for(var i = 1;i < n;i++)
    {
        if(abort)
        {
            return;
        }
        var key = parseInt(lines[i].style.height,10);
        var j = i - 1;
        while(j >= 0 && key < parseInt(lines[j].style.height,10))
        {
            lines[j].style.borderLeft = val*screen.width/170 + "em solid rgb(0, 253, 177)";
            lines[j+1].style.borderLeft = val*screen.width/170 + "em solid rgb(0, 253, 177)";
            if(abort)
            {
                return;
            }
            lines[j+1].style.height = lines[j].style.height;
            j = j - 1
            await sleep(50);
            lines[j+1].style.borderLeft = val*screen.width/170 + "em solid rgb(17, 153, 194)";
            lines[j+2].style.borderLeft = val*screen.width/170 + "em solid rgb(17, 153, 194)";

        }
        if(abort)
        {
            return;
        }
        lines[j+1].style.height = key+"px";
    }
}

function countsort(){
    
}




































const pivot = (arr, start = 0, end = arr.length + 1) => {

    console.log(arr.length,start);      
    let pivot = arr[start].style.height,
        pointer = start;
  
    for (let i = start; i < arr.length; i++) {
      if (arr[i].style.height < pivot  ) {
        pointer++;
        var temp = arr[pointer].style.height;
        arr[pointer].style.height = arr[i].style.height;
        arr[i].style.height = temp;
      }
    };
    var temp = arr[pointer].style.height;
    arr[pointer].style.height = arr[start].style.height;
    arr[start].style.height = temp;
    return pointer;
  }
  
const quickSort = (arr, start = 0, end = arr.length) => {
    let pivotIndex = pivot(arr, start, end);
  
    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    console.log("quicksort",arr.length,start,pivotIndex,end);      
    quickSort(arr, pivotIndex + 1, end);
  
    return arr;
  };

function quicksort1(){
    if(abort)
    {
        return;
    }
    var lines = document.getElementsByClassName("vertical-line");
    var n = lines.length;
    var val = 10/numlines;
    lines = quickSort(lines,0,n-1);
}






function mergesort1(){
    var lines = Array.from(document.getElementsByClassName("vertical-line"));
    mergesort(lines);
}
function mergesort(lines){
    var n = lines.length;
    if(n > 1)
    {
        var mid = Math.floor(n/2);
        var l = lines.slice(0,mid);
        var r = lines.slice(mid,n);
        console.log(l.length,r.length);
        mergesort(l);
        mergesort(r);
        var i,j,k;
        i = 0;
        j = 0;
        k = 0;
        while(i < l.length && j < r.length)
        {
            if(parseInt(l[i].style.height,10) < parseInt(r[j].style.height,10))
            {
                var temp = lines[k].style.height;
                lines[k].style.height = l[i].style.height;
                l[i].style.height = temp;
                i = i + 1;
            }
            else
            {
                var temp = lines[k].style.height;
                lines[k].style.height = r[j].style.height;
                r[j].style.height = temp;
                j = j + 1;
            }
            k = k + 1;
        }
        while(i < l.length)
        {
            lines[k].style.height = l[i].style.height;
            i = i + 1;
            k = k + 1;
        }
        while(j < r.length)
        {
            lines[k].style.height = r[j].style.height;
            j = j + 1;
            k = k + 1;
        }
    }
}