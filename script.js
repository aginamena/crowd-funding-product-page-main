// bookmark button
var content_element = document.querySelector("#content");
var bookmark = document.querySelector("#bookmark");
var bookmark_text = document.querySelector("#bookmark-text");
var back_up_button = document.querySelector("#back-this-project-button");
var close_button = document.querySelector("#close-button");
var projects = document.querySelector("#projects");
var radio_button = document.querySelectorAll(".radio-button");
var continue_button = document.querySelectorAll(".continue-button");
var got_it_button = document.querySelector("#got-it-button");


for(let i = 0; i<continue_button.length; i++){
  // ading event listeners to all the continue buttons
  continue_button[i].addEventListener("click", (event)=>{
    let clicked_event = event.target.previousElementSibling;
    let parent_element = event.target.parentElement;
    let input_value = clicked_event.value;
    let min_input = clicked_event.getAttribute("placeholder");
    // checking if the input_value is empty

    if(input_value == ""){
      parent_element.style.cssText = "display:flex;justify-content:space-around;border:"
      +"padding-bottom: 20px;padding-top:20px; border:2px solid red";
    }
    else{
      // closing content two
      let content_two = document.querySelector("#content-two");
      content_two.style = "display:none";
      let completed_page = document.querySelector("#completed-page");
      completed_page.style = "display:block;";
    }
    // console.log(clicked_event);
    // console.log(parent_element);
  })
}

for(let i = 0; i<radio_button.length; i++){
  radio_button[i].addEventListener("click", (event)=>{
    let second_selected_pledge = document.querySelector("#second-selected-pledge");
    let second_modal_item = document.querySelector("#second-modal-item");
    let third_selected_pledge = document.querySelector("#third-selected-pledge");
    let third_modal_item = document.querySelector("#third-modal-item");
    let first_selected_pledge = document.querySelector("#first-selected-pledge");
    let first_modal_item = document.querySelector("#first-modal-item");
    let clicked_event = event.target;
    let clicked_att = clicked_event.getAttribute("id");

    // media querry in javascrip
    let screen_size = window.matchMedia( "(max-width: 456px)" );
    if(clicked_att === "first-radio-button"){
      first_modal_item.style = "border:3px solid hsl(176, 50%, 47%); border-bottom:1px solid grey;";
      if(screen_size.matches){
        first_selected_pledge.style = "display:block; text-align : center;";
      }else{
        first_selected_pledge.style = "display:flex;";
      }
      close_opened_selected_pledge(second_modal_item, second_selected_pledge, third_modal_item, third_selected_pledge);
    }else if(clicked_att === "second-radio-button"){
      second_modal_item.style = "border:3px solid hsl(176, 50%, 47%);border-bottom:1px solid grey;";
      if(screen_size.matches){
        second_selected_pledge.style = "display:block; text-align : center;";
      }else{
        second_selected_pledge.style = "display:flex;";
      }
      close_opened_selected_pledge(first_modal_item, first_selected_pledge, third_modal_item, third_selected_pledge);
    }else{
      third_modal_item.style = "border:3px solid hsl(176, 50%, 47%);border-bottom:1px solid grey;";
      if(screen_size.matches){
        third_selected_pledge.style = "display:block; text-align : center;";
      }else{
        third_selected_pledge.style = "display:flex;";
      }
      close_opened_selected_pledge(second_modal_item, second_selected_pledge, first_modal_item, first_selected_pledge);
    }

  });
}

got_it_button.addEventListener("click", ()=>{
  let completed_page = document.querySelector("#completed-page");
  completed_page.style = "display:none;";
  content_element.style = "filter:brightness(1);";
  reset_clicked_selected_pledge();
});
bookmark.addEventListener("click", () =>{
  if(bookmark_text.textContent == "Bookmark"){
    bookmark_text.style = "color:hsl(176, 50%, 47%);font-weight:bold;";
    bookmark_text.textContent = "Bookmarked";
    bookmark.style = "width:180px;";
  }else{
    bookmark_text.textContent = "Bookmark";
    bookmark_text.style = "color:black";
    bookmark.style = "width:160px";
  }
});

// we want to be able to click on the button to view a modal
back_up_button.addEventListener("click", ()=>{
  // body_element.style = "filter:brightness(0.5);";
  let content_two = document.querySelector("#content-two");
  // making content two to be displayed on the screen
  content_two.style = "display:block;";
  // we also grey out the list of projects section
  content_element.style = "filter:brightness(0.8);";
});

// adding event listener on the close close_button
close_button.addEventListener("click", ()=>{
  let content_two = document.querySelector("#content-two");
  // making content-two not to be displayed on the screen when The
  // user clicks on x
  content_two.style = "display:none;";
  // restoring list of projects back to its original opacity
  content_element.style = "filter:brightness(1);";
  // body_element.style = "filter:brightness(1);";
  reset_clicked_selected_pledge();
});


function close_opened_selected_pledge(other_modal_item_one, other_selected_pledge_one,
  other_modal_item_two, other_selected_pledge_two){
    other_selected_pledge_two.style = "display:none;";
    other_selected_pledge_one.style = "display:none;";
    other_modal_item_one.style = "border:1px solid grey;";
    other_modal_item_two.style = "border:1px solid grey;";
}

function reset_clicked_selected_pledge(){
  let modal_list = document.querySelectorAll(".modal-item");
  let pledge_list = document.querySelectorAll(".selected-pledge");
  for(let i = 0; i<modal_list.length; i++){
    modal_list[i].style = "border:1px solid grey;";
  }
  for(let i = 0; i<pledge_list.length; i++){
    pledge_list[i].style = "display:none;";
  }
}
