import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<footer className='footer-bg '>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0'>
					{/* Logo */}
					<div>
						<Image
							src='/assets/images/logo.png'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</div>

					{/* Services */}
					<div>
						<h3 className='font-bold text-lg '>Our Services</h3>
						<ul className='ul'>
							<li>
								<a href='#' >
									Pricing
								</a>
							</li>
							<li>
								<a href='#'>
									Tracking
								</a>
							</li>
							<li>
								<a href='#' >
									Report a Bug
								</a>
							</li>
							<li>
								<a href='#' >
									Terms of Services
								</a>
							</li>
						</ul>
					</div>

					{/* App */}
					<div>
						<h3 className='font-bold text-lg'>Our App</h3>
						<ul className='ul'>
							<li>
								<a href='#' >
									How it Works
								</a>
							</li>
							<li>
								<a href='#' >
									Features
								</a>
							</li>
							<li>
								<a href='#'>
									User Testimonials
								</a>
							</li>
							<li>
								<a href='#'>
									Accessibility
								</a>
							</li>
						</ul>
					</div>

					{/* Help Center */}
					<div>
						<h3 className='font-bold text-lg'>Support</h3>
						<ul className='ul'>
							<li>
								<a href='#'>
									Help Center
								</a>
							</li>
							<li>
								<a href='#'>
									FAQs
								</a>
							</li>
							<li>
								<a href='#'>
								Contact Us
								</a>
							</li>
							<li>
								<a href='#' >
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
