let interviewList= [];
let rejectList = [];

let total = document.getElementById('total');
let interview = document.getElementById('interviewCount');
let reject = document.getElementById('rejectCount');

const jobsCont= document.getElementById('jobsCont');
let totalJobs=jobsCont.children.length;
const mainContainer= document.querySelector('main');

const allFilter= document.getElementById('allFilter');
const interviewFilter= document.getElementById('interviewFilter');
const rejectedFilter= document.getElementById('rejectedFilter');

function calcCount (){
    total.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}
calcCount ();

function toggleStyle(id){
    allFilter.classList.remove('text-white', 'bg-primary', 'font-semibold');
    interviewFilter.classList.remove('text-white', 'bg-primary', 'font-semibold');
    rejectedFilter.classList.remove('text-white', 'bg-primary', 'font-semibold');

    allFilter.classList.add('text-[#64748B]')
    interviewFilter.classList.add('text-[#64748B]')
    rejectedFilter.classList.add('text-[#64748B]')

    const selected = document.getElementById(id);

    selected.classList.remove('text-[#64748B]');
    selected.classList.add ('text-white', 'bg-primary', 'font-semibold');
}
