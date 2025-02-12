import PagesComp from '@/app/components/pagesComp/PagesComp'
import React from 'react'

export default function page() {
    return (
        <div>
            <PagesComp title="Privacy Policy" name="Privacy Policy" />

            <p className='[&>*]:font-bold [&>*]:text-gray-500 text-gray-400 w-[90%] m-auto'>
                Please read this privacy policy before using the site or submitting any personal information. By using the site, you are accepting the practices described in this privacy policy.
                <br /><br />
                <span>The collection of Information:</span><br />
                We collect personally identifiable information, like names, postal addresses, email addresses, etc., when voluntarily submitted by our visitors. The information you provide is used to fulfill your specific request. This information is only used to fulfill your specific request, unless you give us permission to use it in another manner, for example, to add you to one of our mailing lists.
                <br /><br />
                <span> Distribution of Information:</span><br />
                We may share information with governmental agencies or other companies assisting us in fraud prevention or investigation. We may do so when:<br /> (1) permitted or required by law; or,<br /> (2) trying to protect against or prevent actual or potential fraud or unauthorized transactions; or, <br />(3) investigating fraud which has already taken place. The information is not provided to these companies for marketing purposes.
                <br /><br />
                <span> Commitment to Data Security:</span><br />
                Your personally identifiable information is kept secure. Only authorized employees, (who have agreed to keep information secure and confidential) have access to this information. All emails and newsletters from this site allow you to opt out of further mailings.
                <br /><br />
                Luxeurs will take reasonable technical and organizational precautions to prevent the loss, misuse or alteration of your personal information.<br />
                Luxeurs will store all the personal information you provide on its secure servers. Information relating to electronic transactions entered into via this website will be protected by encryption technology.
                <br /><br />
                <span> Updating this Statement:</span><br />
                Luxeurs may update this privacy policy by posting a new version on this website.<br />
                You should check this page occasionally to ensure you are familiar with any changes.
                <br /><br /><br /><br />

            </p>
        </div>
    )
}
