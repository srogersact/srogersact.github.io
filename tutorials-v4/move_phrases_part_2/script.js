// Web page loading event
window.addEventListener("load", e => {

    // how many problems are there?
    var numProblems = analysis_problems.length + composition_problems.length;
    console.log(`There are ${numProblems} problems defined in problems.js`);

    // select all of the 'you_try' div elements on the page
    var youTryDivs = document.getElementsByClassName('you_try');
    var numYouTryDivs = youTryDivs.length;
    console.log(`There are ${numYouTryDivs} 'you_try' div elements in index.html`);

    // select all of the specific analysis/composition 'you_try' div elements on the page
    var youTryAnalysisDivs = document.getElementsByClassName('analysis');
    var youTryCompositionDivs = document.getElementsByClassName('composition');
    var numYouTryAnalysisDivs = youTryAnalysisDivs.length;
    var numYouTryCompositionDivs = youTryCompositionDivs.length;
    console.log(`There are ${numYouTryAnalysisDivs} analysis div elements & ${numYouTryCompositionDivs} composition div elements in index.html`);

    /* ********************************************************************** *
     *                           Analysis Problems
     * ********************************************************************** */

    for (var i = 0; i < numYouTryAnalysisDivs; ++i) {
        var youTryDiv = youTryAnalysisDivs[i];
        youTryDiv.id = `analysis${i}`;
        youTryDiv.innerHTML = '';  // TODO: Should we be blindly clearing the div? Or something else?

        var prompt = document.createElement('p');
        prompt.innerHTML = `<b>ANALYZE: </b><br>${analysis_problems[i].composedSentence}`;

        var textArea = document.createElement('textarea');
        textArea.id = `analysis${i}`;
        textArea.name = "sentence_solution"; // TODO: make sure value matches for the solution checking below
        textArea.cols = "50";
        textArea.rows = "5";

        // create a button to conceal the answer until clicked...
        var submitButton = document.createElement('button');
        submitButton.id = i;
        submitButton.textContent = 'Please check my work now.';
        submitButton.className = 'button';
        submitButton.addEventListener("click", e => {
            // console.log(`DEBUG:: Event type: ${e.type}, target: ${e.target.id}, targetParentNode: ${e.target.parentNode}`);
            // console.log(`${e.target.parentNode.querySelector('textarea').value}`)
            var targetNode = e.target;
            var targetId = e.target.id;
            var parentNode = e.target.parentNode;

            // check to make sure the feedbackElement doesn't exist already; create it if it doesn't...
            let feedbackElementId = `feedback_analysis${targetId}`;
            let feedbackElement = document.getElementById(`${feedbackElementId}`);
            if (!feedbackElement) {
                feedbackElement = document.createElement("p");
                parentNode.insertBefore(feedbackElement, targetNode.nextSibling);
            }
            feedbackElement.id = feedbackElementId;
            feedbackElement.className = 'feedback';

            // take the text box contents and compare to the answer
            var solution = parentNode.querySelector('textarea').value;

            // check: is empty?
            if (solution === "") {
                feedbackElement.innerHTML = `Please give it a try.`;
                feedbackElement.style.color = 'red';
                return;
            }

            // check: does their solution match my solution?
            if (solution.trim() === analysis_problems[targetNode.id].analyzedSentence) {
                feedbackElement.innerHTML = `Way to go!! <br>Now you have shorter sentences that may be easier to understand.`;
                feedbackElement.style.color = 'green';
                return;
            }

            // check: in all other cases, prompt them to try again.
            feedbackElement.innerHTML = `Oops! <br>Please try again!`;
            feedbackElement.style.color = 'red';

        }, this);

        youTryDiv.appendChild(prompt);
        youTryDiv.appendChild(textArea);
        youTryDiv.appendChild(submitButton);
    }

    /* ********************************************************************** *
     *                          Composition Problems
     * ********************************************************************** */

    for (var i = 0; i < numYouTryCompositionDivs; ++i) {
        var youTryDiv = youTryCompositionDivs[i];
        youTryDiv.id = `composition${i}`;
        youTryDiv.innerHTML = '';  // TODO: Should we be blindly clearing the div? Or something else?

        var prompt = document.createElement('p');
        prompt.innerHTML = `<b>Move the phrase from the end of the sentence to the beginning. </b><br>${composition_problems[i].analyzedSentence}`;

        var textArea = document.createElement('textarea');
        textArea.id = `composition${i}`;
        textArea.name = "sentence_solution"; // TODO: make sure value matches for the solution checking below
        textArea.cols = "50";
        textArea.rows = "5";

        // create a button to conceal the answer until clicked...
        var submitButton = document.createElement('button');
        submitButton.id = i;
        submitButton.textContent = 'Please check my work now.';
        submitButton.className = 'button';
        submitButton.addEventListener("click", e => {
            // console.log(`DEBUG:: Event type: ${e.type}, target: ${e.target.id}, targetParentNode: ${e.target.parentNode}`);
            // console.log(`${e.target.parentNode.querySelector('textarea').value}`)
            var targetNode = e.target;
            var targetId = e.target.id;
            var parentNode = e.target.parentNode;

            // check to make sure the feedbackElement doesn't exist already; create it if it doesn't...
            let feedbackElementId = `feedback_composition${targetId}`;
            let feedbackElement = document.getElementById(`${feedbackElementId}`);
            if (!feedbackElement) {
                feedbackElement = document.createElement("p");
                parentNode.insertBefore(feedbackElement, targetNode.nextSibling);
            }
            feedbackElement.id = feedbackElementId;
            feedbackElement.className = 'feedback';

            // take the text box contents and compare to the answer
            var solution = parentNode.querySelector('textarea').value;

            // check: is empty?
            if (solution === "") {
                feedbackElement.innerHTML = `Please give it a try.`;
                feedbackElement.style.color = 'red';
                return;
            }

            // check: does their solution match my solution?
            if (solution.trim() === composition_problems[targetNode.id].composedSentence) {
                feedbackElement.innerHTML = `That's right!!`;
                feedbackElement.style.color = 'green';
                return;
            }

            // check: in all other cases, prompt them to try again.
            feedbackElement.innerHTML = `Does the phrase need a comma? <br>Are there extra spaces?`;
            feedbackElement.style.color = 'red';

        }, this);

        youTryDiv.appendChild(prompt);
        youTryDiv.appendChild(textArea);
        youTryDiv.appendChild(submitButton);
    }

});
