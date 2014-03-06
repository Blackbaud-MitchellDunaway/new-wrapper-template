We know that we can’t put an S-tag directly into the custom.js file for the Participant Center (because the custom.js file doesn’t get rendered through our template engine).  But, there is a hidden function within PC2 that will render S-tags for us!  For example, the following code will retrieve the name of the current TeamRaiser event and place it on the page:
 
                                YAHOO.Convio.PC2.Component.Content.renderSTag({
                                                success: function(o) {
                                                                var response = YAHOO.lang.JSON.parse(o.responseText).getTagInfoResponse;
                                                                if(YAHOO.lang.isUndefined(response.preview))
                                                                                YAHOO.log('Empty stag response', 'warn', 'custom.js');
                                                                else {
                                                                                document.getElementById('hd-event-name').innerHTML = response.preview;
                                                                                window.EVENT_NAME = response.preview;
                                                                }
                                                },
                                                failure: function(o) {
                                                                YAHOO.log(o.responseText, 'error', 'custom.js');
                                                }
                                }, '[[S42:' + YAHOO.Convio.PC2.Config.Teamraiser.getFrId() + ':title]]');
 
As an alternative, you can also put S-tags into the “Participant Center Wrapper” (the “header” area that gets configured through the admin side) and retrieve it through custom.js – for example, if I add the following element to the “wrapper” for a PC2 instance:
                                <div id="hd-event-name">[[S42:0:title]]</div>
 
Then I can reference it in custom.js and use that value elsewhere:
                                YAHOO.Convio.PC2.Utils.require("pc2:wrapperLoaded", function() {
                                                var eventName = document.getElementById('hd-event-name').innerHTML;
                                                // do other stuff with the eventName variable here
                                });
 
Be wary with this, however, and test your code thoroughly to ensure the S-tags render properly!
 
Stephen Richarme
Lead Web Developer 
Blackbaud, Inc.
2000 Daniel Island Drive, Charleston, SC 29492
Direct: 512.652.7913 
stephen.richarme@blackbaud.com  |  blackbaud.com
This email contains confidential and proprietary information. It is for the intended recipient only. If an addressing or transmission error has misdirected this email, please notify the author by replying to this email. If you are not the intended recipient, you may not use, disclose, distribute, copy, or print this email.
 
 