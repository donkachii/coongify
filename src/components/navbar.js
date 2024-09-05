'use client';

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ['Home', 'Features', 'About', 'Contact'];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			style={{
				background:
					'conic-gradient(from 0deg at 50% 50%, rgba(229, 141, 210, 0.20) 183.6deg, rgba(187, 228, 220, 0.20) 360deg), #FFF',
			}}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand>
					<Image
						src='/assets/images/logo.png'
						alt='Vercel Logo'
						width={72}
						height={16}
					/>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex' justify='center'>
				<div className='flex items-center bg-white rounded-full overflow-hidden'>
					{menuItems.map((item, index) => (
						<NavbarItem key={index}>
							<Link
								href='#'
								className={`px-4 py-2 ${
									index > 0 ? 'border-none border-gray-300' : ''
								} text-black rounded-full hover:bg-gray-100`}>
								{item}
							</Link>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					<Button
						as={Link}
						href='#'
						className='bg-orange-500 text-white'
						radius='full'>
						Sign Up
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Link
						href='#'
						className='text-black px-4 py-2 rounded-md hover:bg-gray-100'>
						Login
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={index}>
						<Link color={'foreground'} className='w-full' href='#' size='lg'>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default Header;
