import Image from 'next/image';
import group from '../../public/assets/images/group.jpeg';
import { FaCircle } from 'react-icons/fa6';

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

			<div className=' group w-full h-96 pb-8 relative'>
				<div className='flex justify-center items-center flex-col md:flex-row '>
					<Image
						src={group}
						alt='group'
						width={400}
						height={300}
						className='rounded-full shadow-lg'
					/>
				</div>

				<div className='bg-white shadow-md w-96 p-12 rounded-full md:ml-[-100px] mt-[-50px] absolute left-96 top-40'>
					<p className='text-gray-800 text-[14px] '>
						At{' '}
						<span className='text-[#F37934] font-semibold'>Coongrify</span>,
					 we believe that learning should be accessible to everyone. Our
						mission is to empower visually impaired individuals through
						cutting-edge text-to-speech technology, making educational content
						easier to access and more engaging. With a focus on personalized
						user experiences, we strive to enhance the way our users interact
						with information, enabling them to learn more efficiently and
						independently. At Vocal Visioon, we're committed to breaking down
						barriers and providing tools that make a real difference in the
						lives of our users.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
