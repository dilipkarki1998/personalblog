import "./postdetails.css";

export default function postdetails() {
  return (
    <>
    <div className="postdetails">
      <div className="postdetailswrapper">
      <img className="detailimg" 
             src="./images/dilip.jpg" alt=""/>
             <h1 className=" posttitlefull">
               this is my first blog
               
             </h1>
             <div className="posteditinfo">
               <i class="postedit fa-solid fa-pen-to-square"></i>
               <i class="postedit fa-solid fa-trash-can"></i>
               </div>
             <span className="postauthor">
               Author:<b>Dilip Karki</b>
             </span>
             <span className="posttime">
               1 hours ago
             </span>
             <p className="blogdetails">
             To achieve login functionality, we need to create a JS function
              to handle form submission with validations. The handleSubmit()
               function accesses the event object of the form element,
              event.preventDefault() code avoids default form submit action
               which includes reloading of the page.To achieve login functionality, 
               we need to create a JS function to handle form submission with validations. The handleSubmit()
               function accesses the event object of the form element,
              event.preventDefault() code avoids default form submit action
               which includes reloading of the page.To achieve login functionality,
                we need to create a JS function handle form submission with validations. The handleSubmit()
               function accesses the event object of the form element,
              event.preventDefault() code avoids default form submit action
               which includes reloading of the page.
             </p>
      </div>
      </div>
    
    </>
  );
}
