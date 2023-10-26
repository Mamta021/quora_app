import React from 'react'
import './Addquestion.css';
 function Addquestion() {
function addquestionfun(){
}
  return (
    <div>
      <div className="addquestion">
      <button type="button" className="btn-close" aria-label="Close" onClick={addquestionfun}></button>
        <button type='button' className='addquestionbtn'>Add Question</button>
        <button type='button' className='createpostbtn'>Create post</button><br /><hr />
        
        <div className="questionSection">
        <div className='publicbtn'>
        <a href="#">
     < img  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" width={30} height={30} padding-left={30} className='profile rounded-circle'/>
    </a>
    <a href=""><i className="bi bi-caret-right-fill"></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></a>
          <button>public</button>
          {/* <ul>
            <li>none</li>
            <li>none</li>
            <li>none</li>
            </ul> */}
        </div> <br />
       <textarea name="" id="textarea" cols="30" rows="10">Start your question with "What", "How", "Why", etc</textarea>
        <hr />
        <div className="btn2">
        <button className='cancelbtn'>cancel</button>
        <button className='createbtn'>create</button>
        </div>
      </div>
      
      </div>
    </div>
  )
}
export default Addquestion