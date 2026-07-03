// const name1 = document.getElementById('name-var') as HTMLInputElement;
// const email = document.getElementById('email-var') as HTMLInputElement;
// const pass = document.getElementById('pass-var') as HTMLInputElement;
// const confirmPass = document.getElementById('confirm-var') as HTMLInputElement;
// const selection = document.getElementById('selection') as HTMLInputElement;
// const courseSelec = document.getElementById('course-selection') as HTMLInputElement;
// // Signin section
// function saveData() {
//     let users = JSON.parse(localStorage.getItem("users") || "[]");
//     const accInfo = {
//         name: name1.value,
//         email: email.value,
//         pass: pass.value,
//         selection: selection.value,
//         courseSelec: courseSelec.value
//     };
//     users.push(accInfo);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("Account Created Succesfully");
// }
// // Login function
// function signInBtn() {
//     const signEmail = document.getElementById('sign-email') as HTMLInputElement;
//     const signPass = document.getElementById('sign-pass') as HTMLInputElement;
//     type User = {
//   pass: string;
//   email: string;
//   selection:string;
//   };
//     const users: User[] = JSON.parse(
//   localStorage.getItem("users") || "[]"
// );
//     const found = users.find(user =>
//         user.email === signEmail.value && user.pass === signPass.value
//     );
//     if (found) {
//         if (found.selection==="Instractor"){
//             window.location.href="instaractor.html";
//         }
//         else if (found.selection==="Student"){
//             window.location.href="student.html";
//         }
//     } else {
//         alert("Email Or Password Is Wrong");
//     }
// }
// // Welcoming Function
// // function welcomeName(){
// //     const usersname = JSON.parse(
// //   localStorage.getItem("users") || "[]");
// //   document.getElementById('gu-name')!.textContent=usersname.name;
// // }
// // input variables
// const lecLang=document.getElementById('lec-lang') as HTMLInputElement;
// const lecTitle=document.getElementById('lec-title') as HTMLInputElement;
// const lecDesc=document.getElementById('lec-desc') as HTMLInputElement;
// // showing variables
// const showTitle=document.getElementById('show-title') as HTMLElement;
// const showDesc=document.getElementById('show-desc') as HTMLElement;
// const showLang=document.getElementById('show-lang') as HTMLElement;
// // storing data
// function inputData() {
//     let info = JSON.parse(localStorage.getItem("info") || "[]");
//     const inputInfo = {
//         language: lecLang.value,
//         title: lecTitle.value,
//         description: lecDesc.value,
//     };
//     info.push(inputInfo);
//     localStorage.setItem("info", JSON.stringify(info));
//     alert("Lecture has been added successfully");
//      showData();
// }
// // showing data
// const lectureList = document.getElementById("lecture-list") as HTMLElement;
// function showData() {
//     const info = JSON.parse(localStorage.getItem("info") || "[]");
//     lectureList.innerHTML = "";
//     info.forEach((lecture: any, index:number ) => {
//         lectureList.innerHTML += `
//             <div class="lecture-card">
//                 <div class="lecture-icon">
//                     <i class="fa-solid fa-book-open"></i>
//                 </div>
//                 <h3>${lecture.title}</h3>
//                 <p>${lecture.description}</p>
//                 <span class="lecture-language">
//                     <i class="fa-solid fa-code"></i>
//                     ${lecture.language}
//                 </span>
//                 <button onclick="deleteLecture(${index})">
//                     Delete Lecture
//                 </button>
//             </div>
//         `;
//     });
// }
// document.addEventListener("DOMContentLoaded", () => {
//     showData();
// });
// // Delete function
// function deleteLecture(index:number){
//     const info = JSON.parse(localStorage.getItem("info") || "[]")
//     info.splice(index, 1);
//     localStorage.setItem("info", JSON.stringify(info));
//     showData();
// }
// // Student show
// const lectureList2 = document.getElementById("lecture-list2") as HTMLElement;
// function showData2() {
//     const info = JSON.parse(localStorage.getItem("info") || "[]");
//     lectureList2.innerHTML = "";
//     info.forEach((lecture: any) => {
//         lectureList2.innerHTML += `
//             <div class="lecture-item">
//                 <h3>${lecture.title} <span>${lecture.language}</span></h3>      
//             </div>
//         `;
//     });
// }
// window.onload = showData2;
// // Add task 
// const taskTitle=document.getElementById('task-title') as HTMLInputElement;
// const taskDesc=document.getElementById('task-desc') as HTMLInputElement;
// const taskLang=document.getElementById('task-lang') as HTMLInputElement;
// const taskDate=document.getElementById('task-date') as HTMLInputElement;
// function taskData(){
//     let tInfo= JSON.parse(localStorage.getItem("tInfo") || "[]")
//     const taskInfo={
//         title:taskTitle.value,
//         description:taskDesc.value,
//         language:taskLang.value,
//         date:taskDate.value
//     }
//     tInfo.push(taskInfo);
//     localStorage.setItem("tInfo", JSON.stringify(tInfo))
//     showTask();
//     alert("Task has been added successfully")
// }
// // Showing task
// const taskList = document.getElementById("task-list") as HTMLElement;
// function showTask() {
//     const tInfo = JSON.parse(localStorage.getItem("tInfo") || "[]");
//     taskList.innerHTML = "";
//     tInfo.forEach((task: any, index:number ) => {
//         taskList.innerHTML += `
//            <div class="preview-card">
//                 <h3>${task.title}</h3>
//                 <p>
//                     ${task.description}
//                 </p>
//                 <div class="preview-info">
//                     <span><i class="fa-solid fa-code"></i> ${task.language}</span>
//                     <span><i class="fa-solid fa-calendar"></i> ${task.date}</span>
//                 </div>
//                 <button onclick="deleteTask(${index})">
//                     Delete Task
//                 </button>
//             </div>
//         `;
//     });
// }
// document.addEventListener("DOMContentLoaded", () => {
//     showTask();
// });
// // Delete function
// function deleteTask(index:number){
//     const tInfo = JSON.parse(localStorage.getItem("tInfo") || "[]")
//     tInfo.splice(index, 1);
//     localStorage.setItem("tInfo", JSON.stringify(tInfo));
//     showTask();
// }
// // student show
// const taskList2 = document.getElementById("task-list2") as HTMLElement;
// function showTask2() {
//     const tInfo = JSON.parse(localStorage.getItem("tInfo") || "[]");
//     taskList2.innerHTML = "";
//     if(tInfo.length===0){
//         taskList2.innerHTML = `
//          <div class="no-tasks">
//                 <h2>No Tasks</h2>
//                 <p>Please wait until your teacher adds tasks.</p>
//             </div>
//         `;
//         return;
//     }
//     tInfo.forEach((task: any, index:number) => {
//         taskList2.innerHTML += `
//             <div class="student-task-card">
//             <div class="task-top">
//                 <h2>${task.title}</h2>
//                 <span class="task-language">${task.language}</span>
//             </div>
//             <p>
//                 ${task.description}
//             </p>
//             <div class="task-footer">
//                 <span><i class="fa-solid fa-calendar"></i> ${task.date}</span>
//                 <button class="student-task-btn" onclick="openTaskDialog(${index})">Start Task</button>
//             </div>
//         </div>
//         `;
//     });
//     if(taskList2){
//     }
// }
// window.onload = showTask2;
// // Task dialog
// const dialog=document.getElementById('taskDialog') as HTMLDialogElement;
// let selectedTaskIndex = -1;
// function openTaskDialog(index: number){
//     selectedTaskIndex = index;
//     dialog.showModal();
// }
// const closeBtn=document.getElementById('closeDialog') as HTMLButtonElement | null;
// closeBtn.addEventListener("click", () =>{
//     dialog.close();
// })
// // task submittion
// const studentAnswer=document.getElementById('studentAnswer') as HTMLInputElement;
// function submitTask() {
//     const tasks = JSON.parse(localStorage.getItem("tInfo") || "[]");
//     const task = tasks[selectedTaskIndex];
//     const responses = JSON.parse(localStorage.getItem("responses") || "[]");
//     const response = {
//         title: task.title,
//         language: task.language,
//         date: task.date,
//         answer: studentAnswer.value,
//         status: "Pending"
//     };
//     responses.push(response);
//     localStorage.setItem("responses", JSON.stringify(responses));
//     alert("Task submitted successfully!");
//     dialog.close();
//     showResponses();
// }
// // Student response page
// const studentList=document.getElementById('student-list') as HTMLElement;
// function showResponses(){
//      const responses = JSON.parse(localStorage.getItem("responses") || "[]");
//     studentList.innerHTML="";
//     if(responses.length === 0){
//         studentList.innerHTML = `
//             <div class="empty-response">
//                 No submitted tasks yet.
//             </div>
//         `;
//         return;
//     }
//     responses.forEach((response:any)=>{
//         studentList.innerHTML += `
//             <tr>
//                     <td>${response.title}</td>
//                     <td>${response.language}</td>
//                     <td>${response.date}</td>
//                     <td><span class="status submitted">${response.status}</span></td>
//                     <td><button class="view-btn">View</button></td>
//                 </tr>
//         `;
//     });
// }
// document.addEventListener("DOMContentLoaded",showResponses);
function $(id) {
    return document.getElementById(id);
}
function saveData() {
    const name1 = $('name-var');
    const email = $('email-var');
    const pass = $('pass-var');
    const confirmPass = $('confirm-var');
    const selection = $('selection');
    const courseSelec = $('course-selection');
    if (!name1 || !email || !pass || !confirmPass || !selection || !courseSelec) {
        return;
    }
    if (pass.value !== confirmPass.value) {
        alert("Passwords do not match");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const accInfo = {
        name: name1.value,
        email: email.value,
        pass: pass.value,
        selection: selection.value,
        courseSelec: courseSelec.value,
    };
    users.push(accInfo);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account Created Successfully");
}
function signInBtn() {
    const signEmail = $('sign-email');
    const signPass = $('sign-pass');
    if (!signEmail || !signPass)
        return;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find((user) => user.email === signEmail.value && user.pass === signPass.value);
    if (found) {
        localStorage.setItem("currentUser", JSON.stringify(found));
        if (found.selection === "Instractor") {
            window.location.href = "instaractor.html";
        }
        else if (found.selection === "Student") {
            window.location.href = "student.html";
        }
    }
    else {
        alert("Email Or Password Is Wrong");
    }
}
function welcomeName() {
    const el = $('gu-name');
    if (!el)
        return;
    const current = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (current && current.name) {
        el.textContent = current.name;
    }
}
function inputData() {
    const lecLang = $('lec-lang');
    const lecTitle = $('lec-title');
    const lecDesc = $('lec-desc');
    if (!lecLang || !lecTitle || !lecDesc)
        return;
    const info = JSON.parse(localStorage.getItem("info") || "[]");
    const inputInfo = {
        language: lecLang.value,
        title: lecTitle.value,
        description: lecDesc.value,
    };
    info.push(inputInfo);
    localStorage.setItem("info", JSON.stringify(info));
    alert("Lecture has been added successfully");
    showData();
}
function showData() {
    const lectureList = $("lecture-list");
    if (!lectureList)
        return;
    const info = JSON.parse(localStorage.getItem("info") || "[]");
    lectureList.innerHTML = "";
    info.forEach((lecture, index) => {
        lectureList.innerHTML += `
            <div class="lecture-card">
                <div class="lecture-icon">
                    <i class="fa-solid fa-book-open"></i>
                </div>

                <h3>${lecture.title}</h3>

                <p>${lecture.description}</p>

                <span class="lecture-language">
                    <i class="fa-solid fa-code"></i>
                    ${lecture.language}
                </span>

                <button onclick="deleteLecture(${index})">
                    Delete Lecture
                </button>
            </div>
        `;
    });
}
function deleteLecture(index) {
    const info = JSON.parse(localStorage.getItem("info") || "[]");
    info.splice(index, 1);
    localStorage.setItem("info", JSON.stringify(info));
    showData();
}
function showData2() {
    const lectureList2 = $("lecture-list2");
    if (!lectureList2)
        return;
    const info = JSON.parse(localStorage.getItem("info") || "[]");
    lectureList2.innerHTML = "";
    info.forEach((lecture) => {
        lectureList2.innerHTML += `
            <div class="lecture-item">
                <h3>${lecture.title} <span>${lecture.language}</span></h3>
            </div>
        `;
    });
}
function taskData() {
    const taskTitle = $('task-title');
    const taskDesc = $('task-desc');
    const taskLang = $('task-lang');
    const taskDate = $('task-date');
    if (!taskTitle || !taskDesc || !taskLang || !taskDate)
        return;
    const tInfo = JSON.parse(localStorage.getItem("tInfo") || "[]");
    const taskInfo = {
        title: taskTitle.value,
        description: taskDesc.value,
        language: taskLang.value,
        date: taskDate.value,
    };
    tInfo.push(taskInfo);
    localStorage.setItem("tInfo", JSON.stringify(tInfo));
    showTask();
    alert("Task has been added successfully");
}
function showTask() {
    const taskList = $("task-list");
    if (!taskList)
        return;
    const tInfo = JSON.parse(localStorage.getItem("tInfo") || "[]");
    taskList.innerHTML = "";
    tInfo.forEach((task, index) => {
        taskList.innerHTML += `
            <div class="preview-card">
                <h3>${task.title}</h3>

                <p>${task.description}</p>

                <div class="preview-info">
                    <span><i class="fa-solid fa-code"></i> ${task.language}</span>
                    <span><i class="fa-solid fa-calendar"></i> ${task.date}</span>
                </div>

                <button onclick="deleteTask(${index})">
                    Delete Task
                </button>
            </div>
        `;
    });
}
function deleteTask(index) {
    const tInfo = JSON.parse(localStorage.getItem("tInfo") || "[]");
    tInfo.splice(index, 1);
    localStorage.setItem("tInfo", JSON.stringify(tInfo));
    showTask();
}
function showTask2() {
    const taskList2 = $("task-list2");
    if (!taskList2)
        return;
    const tInfo = JSON.parse(localStorage.getItem("tInfo") || "[]");
    taskList2.innerHTML = "";
    if (tInfo.length === 0) {
        taskList2.innerHTML = `
            <div class="no-tasks">
                <h2>No Tasks</h2>
                <p>Please wait until your teacher adds tasks.</p>
            </div>
        `;
        return;
    }
    tInfo.forEach((task, index) => {
        taskList2.innerHTML += `
            <div class="student-task-card">
                <div class="task-top">
                    <h2>${task.title}</h2>
                    <span class="task-language">${task.language}</span>
                </div>

                <p>${task.description}</p>

                <div class="task-footer">
                    <span><i class="fa-solid fa-calendar"></i> ${task.date}</span>
                    <button class="student-task-btn" onclick="openTaskDialog(${index})">Start Task</button>
                </div>
            </div>
        `;
    });
}
let selectedTaskIndex = -1;
function openTaskDialog(index) {
    const dialog = $('taskDialog');
    if (!dialog)
        return;
    selectedTaskIndex = index;
    dialog.showModal();
}
function submitTask() {
    const dialog = $('taskDialog');
    const studentAnswer = $('studentAnswer');
    if (!studentAnswer)
        return;
    const tasks = JSON.parse(localStorage.getItem("tInfo") || "[]");
    const task = tasks[selectedTaskIndex];
    if (!task)
        return;
    const responses = JSON.parse(localStorage.getItem("responses") || "[]");
    const response = {
        title: task.title,
        language: task.language,
        date: task.date,
        answer: studentAnswer.value,
        status: "Pending",
    };
    responses.push(response);
    localStorage.setItem("responses", JSON.stringify(responses));
    alert("Task submitted successfully!");
    dialog?.close();
    showResponses();
}
function showResponses() {
    const studentList = $('student-list');
    if (!studentList)
        return;
    const responses = JSON.parse(localStorage.getItem("responses") || "[]");
    studentList.innerHTML = "";
    if (responses.length === 0) {
        studentList.innerHTML = `
            <tr>
    <td colspan="5" class="empty-response">
        No submitted tasks yet.
    </td>
</tr>
        `;
        return;
    }
    responses.forEach((response, index) => {
        studentList.innerHTML += `
            <tr>
                <td>${response.title}</td>
                <td>${response.language}</td>
                <td>${response.date}</td>
                <td>
    <span class="status ${response.status.toLowerCase()}">
        ${response.status}
    </span>
</td>
                <td><button class="view-btn" onclick="openTaskDialog2(${index})">View</button></td>
            </tr>
        `;
    });
}
let selectedTaskIndex2 = -1;
function openTaskDialog2(index) {
    selectedTaskIndex2 = index;
    const responses = JSON.parse(localStorage.getItem("responses") || "[]");
    const answer = document.getElementById("student-answer-view");
    const status = document.getElementById("task-status");
    answer.value = responses[index].answer;
    status.value = responses[index].status;
    const dialog = document.getElementById("taskDialog2");
    dialog.showModal();
}
function saveStatus() {
    const responses = JSON.parse(localStorage.getItem("responses") || "[]");
    const status = document.getElementById("task-status");
    responses[selectedTaskIndex2].status = status.value;
    localStorage.setItem("responses", JSON.stringify(responses));
    showResponses();
    closeDialog2();
}
function closeDialog2() {
    const dialog = document.getElementById("taskDialog2");
    dialog.close();
}
document.addEventListener("DOMContentLoaded", () => {
    welcomeName();
    showData();
    showTask();
    showData2();
    showTask2();
    showResponses();
    const closeBtn = $('closeDialog');
    const dialog = $('taskDialog');
    closeBtn?.addEventListener("click", () => dialog?.close());
});
//# sourceMappingURL=type.js.map