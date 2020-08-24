$(document).ready(function(){


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
        html2pdf().from(invoice).set(opt).save();
    });

    $('#edit-btn').click(function(){
        $('#main-resume').removeClass('download-active');
    });

    $('#preview-btn').click(function(){
        $('#main-resume').addClass('download-active');
    });



    $('#add-certificate-btn').click(function(){
        document.getElementById('certi-list').innerHTML += '<li class="skill-item"><div class="skill-text" contenteditable="true">Certificate name</div> <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>';
    });


    $('#add-skill-btn').click(function(){
        document.getElementById('skill-list').innerHTML += '<li class="skill-item"><div class="skill-text" contenteditable="true">Skill name</div> <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>';
    });


    $('#add-edu-btn').click(function(){
        document.getElementById('edu-list').innerHTML +=    `<li class="content-item">
                                                                <div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div>
                                                                <div class="content-item-head" contenteditable="true">School Name</div>
                                                                
                                                                <div class="brief-cont">
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
                                                                        <li class="content-item-desc-item"><div class='content-desc-text' contenteditable="true">Project Description</div><div class="delete-info fa fa-trash" onclick="deleteFromList(this)"></div></li>
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
    
});

