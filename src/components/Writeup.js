import Image from 'next/image';
import group from '../../public/assets/images/group.jpeg';

const Writeup = () => {
	return (
		<div className='group relative '>
			<div className='  grid md:grid-cols-2 p-20 max-w-5xl mx-auto'>
				<div className=' flex'>
					<Image
						src={group}
						alt='group'
						width={400}
						height={300}
						className='rounded-full shadow-lg'
					/>
				</div>

				<div className='bg-white shadow-md w-96 p-12 rounded-full md:ml-[-100px] mt-[-50px] absolute right-[30rem]  top-60'>
					<p className='text-gray-800 text-[14px] '>
						At <span className='text-[#F37934] font-semibold'>Coongrify</span>,
						we believe that learning should be accessible to everyone. Our
						mission is to empower visually impaired individuals through
						cutting-edge text-to-speech technology, making educational content
						easier to access and more engaging. With a focus on personalized
						user experiences, we strive to enhance the way our users interact
						with information, enabling them to learn more efficiently.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Writeup;
