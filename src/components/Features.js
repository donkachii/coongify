import { SlMicrophone } from 'react-icons/sl';
import { CiMenuFries } from "react-icons/ci";
import { FaArrowRightLong, FaCircle } from 'react-icons/fa6';
import { RiVoiceprintLine } from 'react-icons/ri';
import { VscFeedback } from 'react-icons/vsc';
import { IoDocumentOutline } from 'react-icons/io5';

const features = [
	{
		title: 'Text-to-Speech (TTS) Conversion',
		description:
			'Converts written text into spoken words, enabling users to listen to content easily.',
		icon: <SlMicrophone className='text-pink-500  text-2xl' />,
		icon1: <FaArrowRightLong className='text-pink-500  text-2xl' />,
		icon2: <CiMenuFries className='text-pink-500  text-2xl' />,
	},
	{
		title: 'Customization',
		description:
			'Allows users to adjust pitch, speed, and volume for personalized experience.',
		icon: <RiVoiceprintLine className='text-emerald-500 text-2xl' />,
	},
	{
		title: 'Real-time Speech Feedback',
		description: 'Provides instant feedback to improve accessibility.',
		icon: <VscFeedback className='text-yellow-500 text-2xl' />,
	},
	{
		title: 'Document Upload and Conversion',
		description: 'Upload PDFs and other documents for speech conversion.',
		icon: <IoDocumentOutline className='text-orange-500 text-2xl' />,
		icon2: <SlMicrophone className='text-orange-500  text-2xl' />,
		icon1: <FaArrowRightLong className='text-orange-500  text-2xl' />,
	},
];

const Features = () => {
	return (
		<section
			className='p-28 text-center '
			style={{
				background:
					'conic-gradient(from 0deg at 50% 50%, rgba(229, 141, 210, 0.20) 183.6deg, rgba(187, 228, 220, 0.20) 360deg), #FFF',
			}}>
			<div className='flex items-center justify-center'>
				<h2 className='text-3xl font-bold mb-14 flex items-center'>
					<FaCircle className='featureIcon' />{' '}
					Features
				</h2>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
				{features.map((feature, index) => (
					<div key={index} className='containerDiv '>
						<div className='flex items-center mb-4'>
							<p>{feature.icon}</p>
							<p className='mx-3'>{feature.icon1}</p>
							{feature.icon2}
						</div>
						<h3 className='title'>{feature.title}</h3>
						<p className='des'>{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
