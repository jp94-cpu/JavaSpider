// The code below is about creating the question pop window with questionPage() function.

// We need to define questionPage () before the collision detector as that function will call the questionPage () function.
// We need to define questionPageClose() before questionPage because questionPage calls questionPageClose

// function questionPageClose () {
// -when "next" button is pressed, the pop window closes, and the canvas is reset
// }

// function questionPage () {
// -define window ; width, height, how it looks
// -logic, pick the next question on the list
// -if answer is correct, show "Well done" message and show "Next" button)
// questionPageClose();
// }


function spiderMeetsFly () {
if (spider.x + spider.width >= fly.x &&
spider.x<=fly.x+fly.width &&
spider.y+spider.height>= fly.y &&
spider.y <= fly.y+fly.height);
{questionPage()}
}
