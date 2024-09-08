import { FaCircle } from 'react-icons/fa6';
import Writeup from './Writeup';

const About = () => {
	return (
		<>
			<section
				className='py-12 text-center'
				style={{
					background:
						'conic-gradient(from 180deg at 50% 50%, rgba(255, 165, 0, 0.2), rgba(229, 141, 210, 0.3), rgba(187, 228, 220, 0.3), rgba(255, 165, 0, 0.2))',
				}}>
				<div className='flex items-center justify-end max-w-5xl mx-auto'>
					<h2 className='text-3xl font-bold flex items-center'>
						<FaCircle className='aboutIcon mr-2' /> About
					</h2>
				</div>
			</section>
			<Writeup/>
		</>
	);
};

export default About;
