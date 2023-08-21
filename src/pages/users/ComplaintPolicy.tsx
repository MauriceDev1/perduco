import { A } from "@solidjs/router";
import { Component, createSignal } from "solid-js"
import { useComplaintModalContext } from "../../context/ComplaintContext";

const ComplaintPolicy:Component = () => {
    const {setModalState} = useComplaintModalContext();
    
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
                <h2 class="text-2xl py-3">
                    What to do if we cannot resolve your complaint
                </h2>
                <p>
                    If at the end of the eight week period, you have 
                    not received a satisfactory response and remain 
                    dissatisfied, you can refer the matter to the Legal 
                    Ombudsman who can consider your complaint.
                    <br /><br />
                    The Legal Ombudsman can help you if we are unable to 
                    resolve your complaint ourselves. They will look at 
                    your complaint independently and it will not affect 
                    how we handle your case.
                    <br /><br />
                    Before accepting a complaint for investigation, the 
                    Legal Ombudsman will check that you have tried to 
                    resolve your complaint with us first. If you have, 
                    then you must take your complaint to the Legal 
                    Ombudsman:
                </p>
                <ul class="list-inside list-disc py-3">
                    <li>
                        Within six months of receiving our final response 
                        to your complaintand
                    </li>
                    <li>
                        No more than one year from the date of the act or 
                        omission being complained about; or
                    </li>
                    <li>
                        No more than one year from the date when you should 
                        reasonably have known that there was cause for complaint.
                    </li>
                </ul>
                <h2 class="text-2xl py-3">
                    For more information about the Legal Ombudsman contact:
                </h2>
                <ul>
                    <li>
                        <a href="www.legalombudsman.org.uk" class="text-red-600">www.legalombudsman.org.uk</a>
                    </li>
                    <li>
                        Call: <a href="tel:0300 555 0333" class="text-red-600">0300 555 0333</a> between 9.00 to 17.00.
                    </li>
                    <li>
                        Email: <a href="mailto:enquiries@legalombudsman.org.uk" class="text-red-600">enquiries@legalombudsman.org.uk</a>
                    </li>
                    <li>
                        Legal Ombudsman PO Box 6806, Wolverhampton, WV1 9WJ
                    </li>
                </ul>
                <h2 class="text-2xl py-3">
                    What to do if you are unhappy with our behaviour
                </h2>
                <p>
                    The Solicitors Regulation Authority can help if you are concerned 
                    about our behaviour. This could be for things like dishonesty, taking 
                    or losing your money or treating you unfairly because of your age, a 
                    disability or other characteristic. Visit their website to see how 
                    you can raise your concerns with the Solicitors Regulation Authority.
                </p>
                <h2 class="text-2xl py-3">
                    Complaints About Fees
                </h2>
                <p>
                    If you are dissatisfied with our bill, you have the right to apply to 
                    the High Court for an assessment of our charges by an Officer of the 
                    Court under ss. 70, 71 and 72 of the Solicitors Act 1974. We hope that 
                    before making such an application you would first use our complaints 
                    procedure explained above.
                </p>
                <h2 class="text-2xl py-3">
                    Complaints about Misconduct
                </h2>
                <p>
                    If you have any concerns about our conduct or breach of the SRA Code 
                    or Conduct, you can also contact our regulatory body, the Solicitors 
                    Regulation Authority. Their details are:
                </p>
                <h2 class="text-2xl py-3">
                    The Solicitors Regulation Authority
                </h2>
                <p>
                    The Cube
                    <br />
                    Wharfside Street
                    <br />
                    Birmingham
                    <br />
                    B1 1RN
                    <br />
                    <a class="text-red-600" href="tel:0370 606 2555">0370 606 2555</a>
                    <br/>
                    <A target="_blank" class="text-red-600" href="http://www.sra.org.uk/consumers/problems/report-solicitor.page">http://www.sra.org.uk/consumers/problems/report-solicitor.page</A>
                </p>
                <button
                    class="bg-black text-white h-9 px-5 rounded-sm mt-5"
                    onClick={() => setModalState(true)}
                >
                    Client Complaint Form
                </button>
            </div>
        </div>
    )
}

export default ComplaintPolicy;