$(document).ready(function(){
    // $(this).scrollTop(0);

    var tableActive = false;

    $('#switch-to-table').click(function(){
        if (tableActive){
            tableActive = false;
            $('#edu-section-content').removeClass('active-tab');
        } else {
            tableActive = true;
            $('#edu-section-content').addClass('active-tab');
        }
    });

    $('#info-show-btn').click(function(){
        $('body').addClass('active-info');
    });

    $('#layoff').click(function(){
        $('body').removeClass('active-info');
    });

    $('#close-info-btn').click(function(){
        $('body').removeClass('active-info');
    });


    $('#download-btn').click(function(){
        const invoice = document.getElementById("resume");
        
        var opt = {
            margin: 0.1,
            filename: 'resume.pdf',
            image: {type: 'jpeg', quality: '0.98'},
            enableLinks: true,
            html2canvas: {scale: 2},
            jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
        };
        
        $("#main-resume").addClass('download-active');
        $("#contact-section").addClass('download-active');
        html2pdf().from(invoice).set(opt).save();
    });

    $('#edit-btn').click(function(){
        $('#main-resume').removeClass('download-active');
        $('#contact-section').removeClass('download-active');
    });

    $('#preview-btn').click(function(){
        $('#main-resume').addClass('download-active');
        $('#contact-section').addClass('download-active');
    });

    $('#add-edutab-btn').click(function(){
        document.getElementById('education-table').innerHTML += `<tr>
                                                                    <td contenteditable='true'>Name of institute</td>
                                                                    <td contenteditable='true'>Degree or Course</td>
                                                                    <td contenteditable='true'>CGPA/grade</td>
                                                                    <td contenteditable='true'>Excellence award</td>
                                                                    <td><span contenteditable="true">from</span>-<span contenteditable="true">to</span></td>
                                                                    <td><div class="delete-info fa fa-trash" onclick="deleteFromList(this.parentNode)"></div></td>
                                                                </tr>`;
    });


    $('#add-certificate-btn').click(function(){
        document.getElementById('certi-list').innerHTML += '<li class="skill-item"><div class="skill-text" contenteditable="true">Certificate/Achievement</div> <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>';
    });


    $('#add-skill-btn').click(function(){
        document.getElementById('skill-list').innerHTML += '<li class="skill-item"><div class="skill-text" contenteditable="true">Skill name</div> <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>';
    });


    $('#add-edu-btn').click(function(){
        document.getElementById('edu-list').innerHTML +=    `<li class="content-item">
                                                                <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div>
                                                                <div class="content-item-head" contenteditable="true">Institution Name</div>
                                                                
                                                                <div class="brief-cont">
                                                                    <div class="content-item-role" contenteditable="true">Degree</div>
                                                                    <div class="content-item-role">Grade: <span contenteditable="true">CGPA/grade</span></div>
                                                                    <div class="content-item-duration"><span contenteditable="true">from</span> - <span contenteditable="true">to</span></div>
                                                                </div>
                                                                
                                                                <ul class="content-item-desc-list">
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Academic Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Academic Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Academic Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Academic Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                </ul>
                                                            </li>`;
    });

    $('#add-project-btn').click(function(){
        document.getElementById('project-list').innerHTML +=    `<li class="content-item">
                                                                    <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div>
                                                                    <div class="content-item-head" contenteditable="true">Project Name</div>
                                                                    
                                                                    <div class="brief-cont">
                                                                        <div class="content-item-duration"><span contenteditable="true">from</span> - <span contenteditable="true">to</span></div>
                                                                    </div>
                                                                    
                                                                    <ul class="content-item-desc-list">
                                                                        <li class="content-item-desc-item"><div class='content-desc-text' ><b>Skills Used:</b> <span contenteditable="true">XYZ, ABC, ...</span></div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                        <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Project Description</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                        <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Project Description</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                        <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Project Description</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                    </ul>
                                                                </li>`;
    });


    $('#add-job-btn').click(function(){
        document.getElementById('job-list').innerHTML +=    `<li class="content-item">
                                                                <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div>
                                                                
                                                                <div class="content-item-head" contenteditable="true">Company Name</div>
                                                                
                                                                <div class="brief-cont">
                                                                    <div class="content-item-role" contenteditable="true">Position</div>
                                                                    <div class="content-item-duration"><span contenteditable="true">from</span> - <span contenteditable="true">to</span></div>
                                                                </div>

                                                                <ul class="content-item-desc-list">
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Notable Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Notable Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Notable Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                    <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Notable Achievements</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
                                                                </ul>
                                                            </li>`;
    });


    let deleteFromList = ()=>{
        console.log('delete Check')
        this.parentNode.parentNode.removeChild(this.parentNode);
    };


    $('#user-web-link').keyup(function(){
        $('#user-website').attr('href',this.value);
    });
    
    const dragcont = document.querySelectorAll('.left-section');
    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', ()=>{
            draggable.classList.add('dragging');
            console.log("Drag start");
        });

        draggable.addEventListener('dragend', ()=>{
            draggable.classList.remove('dragging');
            console.log("Drag End");
        });
    });

    dragcont.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElem = getdragAfter(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            console.log(afterElem);
            if (afterElem == null){
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElem);
            }

        });
    });

    function getdragAfter(container, y){
        const draggableElems = [...container.querySelectorAll('.draggable:not(.dragging)')];
        
        return draggableElems.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height/4;
            if (offset < 0 && offset > closest.offset){
                return {offset: offset, element: child};
            } else {
                return closest;
            }
        }, {offset: Number.NEGATIVE_INFINITY}).element;
    }
});

