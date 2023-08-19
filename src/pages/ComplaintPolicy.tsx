import { A } from "@solidjs/router";
import { Component } from "solid-js"

const ComplaintPolicy:Component = () => {
    return (
        <div class="w-full bg-gray-50 flex justify-center py-10">
            <div class="w-10/12">
                <h1 class="text-3xl pb-3">Complaints Handling Policy</h1>
                <h2 class="text-2xl py-3">
                    Complaints Policy
                </h2>
                <p>
                    We value your business and do not wish you to have any reason 
                    to be unhappy with us. We are confident of providing a high-quality 
                    service. It is therefore important that you raise any concerns you 
                    may have with us immediately so that we may address them. This will 
                    help us to improve our standards.
                    <br /><br />
                    If you are dissatisfied with the service received or if you are 
                    dissatisfied with regard to a charge on a bill received, please 
                    first contact the member of staff who is dealing with your matter 
                    and they will try to resolve your concerns informally. Our aim will 
                    always be to deal with your concerns as quickly as possible and 
                    without recourse to our formal complaint’s procedure, if that is 
                    possible.
                    <br /><br />
                    If you remain dissatisfied, the member of staff will explain to 
                    you how to make a formal complaint under the firm’s complaints procedure 
                    by providing you with a copy of the firm’s complaints procedure, 
                    which can also be found on the Firm’s website at 
                    <A href="/privacy_policy" class="text-red-600">https://www.perducolaw.co.uk/complaints-policy</A>.
                </p>
                <div class="pl-5">
                    <h3 class="text-xl py-3">
                        Stage 1
                    </h3>
                    <p>
                        A formal written complaint must be raised with the Firm’s Supervisor, 
                        Tulshi Shah (tulshi@perducolaw.com) who will investigate the matter 
                        further in accordance with our written complaints policy. 
                        Alternatively, you may wish to use the attached ‘Client 
                        Complaint Form’. Please outline the cause of your dissatisfaction 
                        and if possible, the action you would like us to take in order to 
                        remedy that dissatisfaction.
                    </p>
                    <h3 class="text-xl py-3">
                        Stage 2
                    </h3>
                    <p>
                        We will acknowledge receipt of your complaint within five working 
                        days and a thorough investigation will be undertaken and a written 
                        response addressing the issue(s) raised shall be provided within 
                        fourteen days. If it is possible to reach an mutually acceptable 
                        resolution to your complaint, we will do so.
                    </p>
                    <h3 class="text-xl py-3">
                        Stage 3
                    </h3>
                    <p>
                        If matters cannot be resolved or you remain dissatisfied, an official 
                        complaint can be made to the Firm’s Compliance Officer, Munshat 
                        Chowdhury (munshat@perducolaw.com) who shall have eight weeks 
                        from the date we received your complaint to fully consider your 
                        complaint and respond accordingly including any recommendations 
                        to resolve the complaint.
                        <br /><br />
                        The Firm’s Compliance Officer will have full access to all the information 
                        and personnel that they require to investigate your complaint properly. 
                        They may contact you directly to discuss and confirm your heads of 
                        complaints and request any further information from you to assist 
                        the investigation.
                        <br /><br />
                        We will record your complaint in our central register which is reviewed 
                        regularly by the Firm.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ComplaintPolicy;