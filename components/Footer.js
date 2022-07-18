import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer(props) {
    return (
            <footer className="relative container mx-auto p-6">
                <div className="flex">
                    <ul className="flex m-auto">
                         <li className="m-4">
                             <LinkedInIcon />
                             <a href="https://www.linkedin.com/in/milanexpo/" target="_blank" className="m-1">Milan Videnović</a>
                         </li>
                         <li className="m-4">
                             <GitHubIcon/>
                             <a href="https://github.com/vvvmilan" target="_blank" className="m-1">vvvmilan</a>
                         </li>
{/*                         <li className="m-4">
                             <GitHubIcon/>
                             <a href="https://gitlab.com/vvvmilan" target="_blank" className="m-1">vvvmilan</a>
                         </li>*/}
                         <li className="m-4">
                             <EmailIcon/>
                             <a href="mailto:milan@expostudio.rs" target="_blank" className="m-1">milan@expostudio.rs</a>
                         </li>
                     </ul>
                </div>
                <hr/>
                <div className="flex mt-4">
                    <p className="m-auto">
                       © Milan Videnović - <a href="mailto:milan@expostudio.rs" className="hover:underline">Tangled Hub</a> - 2022. All rights reserved.
                    </p>
                </div>






            {/*//     <div className="sm:flex sm:items-center sm:justify-between">*/}
            {/*//         <ul className="flex flex-wrap items-center m-auto mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">*/}
            {/*//             <li>*/}
            {/*//                 <a href="https://www.linkedin.com/in/milanexpo/" className="mr-4 hover:underline md:mr-6 ">Milan Videnović</a>*/}
            {/*//             </li>*/}
            {/*//             <li>*/}
            {/*//                 <a href="https://github.com/vvvmilan" className="mr-4 hover:underline md:mr-6">vvvmilan</a>*/}
            {/*//             </li>*/}
            {/*//             <li>*/}
            {/*//                 <a href="https://gitlab.com/vvvmilan" className="mr-4 hover:underline md:mr-6">vvvmilan</a>*/}
            {/*//             </li>*/}
            {/*//             <li>*/}
            {/*//                 <a href="mailto:milan@expostudio.rs" className="mr-4 hover:underline md:mr-6 ">milan@expostudio.rs</a>*/}
            {/*//             </li>*/}
            {/*//         </ul>*/}
            {/*//     </div>*/}
            {/*//     <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>*/}
            {/*//     <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">*/}
            {/*//         © Milan Videnović - <a href="mailto:milan@expostudio.rs" className="hover:underline md:mr-6 ">Tangled Hub</a> - 2022. All rights reserved.*/}
            {/*//     </span>*/}
            </footer>
    );
}

export default Footer;

