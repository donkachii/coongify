import Image from 'next/image';
import { MyButton } from './MyButton';
import boys from "../../public/assets/images/image.png"



const Heros = () => {
	
	return (
		<main
			className='grid lg:grid-cols-2 w-full h-auto pt-32'
			style={{
				background:
					'conic-gradient(from 0deg at 50% 50%, rgba(229, 141, 210, 0.20) 183.6deg, rgba(187, 228, 220, 0.20) 360deg), #FFF',
			}}>
			<div className='p-16 border-b-1 border-gray-400 rounded-b-full max-w-5xl mx-auto'>
				<h2 className='headText'>Make your life easier with</h2>
				<h1 className='headTitle bg-gradient-to-r from-[#F37934] via-[#E58DD2] to-[#BBE4DC] bg-clip-text text-transparent'>
					Coongify
				</h1>
				<div className='lg:flex items-center mt-4'>
					<MyButton radius='full'>Explore More</MyButton>
					<p className='text-2xl ml-4'>Get Started</p>
				</div>
			</div>
			<div>
				<Image
					width={500}
					radius='full'
					height={300}
					alt='boys with headphones'
					src={boys}
					className='lg:pl-6  '
				/>
			</div>
		</main>
	);
};

export default Heros;
