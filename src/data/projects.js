import randol from "../images/projects-randol-rn.png";
import randol1 from "../images/projects-randol-rn1.png";
import randol2 from "../images/projects-randol-rn2.png";
import leon from "../images/leon-agency.png";
import leon1 from "../images/leon-agency1.png";
import leon2 from "../images/leon-agency2.png";
import kasper from "../images/Kasper.png";
import kasper1 from "../images/Kasper1.png";
import kasper2 from "../images/Kasper2.png";
import dental from "../images/Dental-Store.png";
import dental1 from "../images/Dental-Store1.png";
import dental2 from "../images/Dental-Store2.png";
import wallet from "../images/online-wallet.png";
import wallet1 from "../images/online-wallet1.png";
import wallet2 from "../images/online-wallet2.png";
import furniture from "../images/furniture.png";
import furniture1 from "../images/furniture1.png";
import furniture2 from "../images/furniture2.png";
import chat from "../images/chat.png";
import chat1 from "../images/chat1.png";
import chat2 from "../images/chat2.png";
import retink from "../images/retink.jpeg";
import retink1 from "../images/retink1.png";
import retink2 from "../images/retink2.png";
import learnGerman from "../images/learn-german.jpeg";
import learnGerman1 from "../images/learn-german1.png";
import learnGerman2 from "../images/learn-german2.png";

export const projectsData = [
	// ===================== LearnGerman =======================
	{
		id: 1,
		title: 'LearnGerman App',
		category: 'Full-stack Web Application',
		img: learnGerman,
		ProjectHeader: {
			title: 'LearnGerman App',
			publishDate: 'Apr 12, 2023',
			tags: 'UI / Frontend / Backend',
		},
	ProjectImages: [
		{
			id: 1,
			title: 'Project UI',
			img: learnGerman,
		},
		{
			id: 2,
			title: 'Project UI',
			img: learnGerman1,
		},
		{
			id: 3,
			title: 'Project UI',
			img: learnGerman2,
		},
	],ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'LearnGerman',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Courses platform for learning German language',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://omarfarids.github.io/learn-german-fe/',
			},
			{
				id: 4,
				title: 'Github repository',
				details: 'https://github.com/omarfarids/learn-german-fe',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			`The purpose of this website is to offer free and effective German lessons for learners of all levels. The website strives to help learners improve their language skills in a enjoyable and interactive way.`	
			,
			Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					"React", "Typescript", "Tailwind", "Node", "Express", "MongoDB"
				],
			},
		],
		ProjectDetailsHeading: 'Description',
		ProjectDetails: [
			{
				id: 1,
				details:
					`If you are looking for a free and effective way to learn German, you have come to the right place.  `
			},
			{
				id: 2,
				details:
					`Our website offers you a variety of lessons that cover all aspects of the German language, from grammar and vocabulary to pronunciation and culture. You will be able to practice your skills with interactive exercises, listen to native speakers, read authentic texts and learn useful tips for everyday situations.`			},
			{
				id: 3,
				details:
					`Our website follows the Common European Framework of Reference for Languages, which is an internationally recognized standard for measuring language proficiency. You will be able to track your progress and prepare for exams such as the Goethe-Zertifikat.`			},
			{
				id: 4,
				details:
					` Learning German is not only fun, but also beneficial for your personal and professional life. German is spoken by about 130 million people around the world, and it is the most widely spoken native language in the European Union1. German is also the language of writers and thinkers, such as Goethe, Kant, Marx and Nietzsche2. `	},
		
			{
				id: 5,
				details:
					` German has some unique features that make it a rich and expressive language, such as its ability to form long compound words, its use of three genders for nouns and its distinctive letter ß3. By learning German, you will be able to access a whole new world of literature, culture, history and science. Don’t wait any longer and join us today!

					Receive`		}
				],
		
	},
	
	},

	// ===================== Furniture Home =======================
	{
		id: 2,
		title: 'Furniture Home',
		category: 'Frontend Application',
		img: furniture,
		ProjectHeader: {
			title: 'Furniture Home',
			publishDate: 'Sep 16, 2022',
			tags: 'UI / Frontend',
		},
		
	ProjectImages: [
		{
			id: 1,
			title: 'Project UI',
			img: furniture,
		},
		{
			id: 2,
			title: 'Project UI',
			img: furniture1,
		},
		{
			id: 3,
			title: 'Project UI',
			img: furniture2,
		},
	],ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Furniture Home',
			},
			{
				id: 2,
				title: 'Services',
				details: 'eCommerce plateform for furniture.',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://furniture-home.netlify.app/',
			},
			{
				id: 4,
				title: 'Github repository',
				details: 'https://github.com/omarfarids/Furniture-House',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			`Furniture Home is an eCommerce website that allows users to buy furniture from different sellers, designers and artisans.  Furniture Home aims to provide users with unique pieces of furniture at very special prices.`	
			,
			Technologies: [
			{
				title: 'Tools & Technologies',
				techs: ["React", "JavaScript", "SASS", "Bootstrap", "Rest API"],
			},
		],
		ProjectDetailsHeading: 'Description',
		ProjectDetails: [
			{
				id: 1,
				details:
					`Are you looking for a new way to furnish your home with style and personality? Do you want to discover unique pieces of furniture that will make your space stand out? If so, you should check out Furniture Home, the eCommerce website for furniture lovers.`
			},
			{
				id: 2,
				details:
					`Furniture Home is more than just an online store. It’s a platform where you can browse, compare and buy furniture from different sellers, designers and artisans. You can find everything from sofas and tables to lamps and rugs, all with very special prices and discounts.`	
			},{
				id: 3,
				details:
					`Furniture Home is also a community where you can share your ideas, feedback and reviews with other furniture enthusiasts. You can get inspired by the latest trends, tips and tricks, and learn how to create your own furniture projects. You can also join contests and giveaways to win amazing prizes.`
			},{
				id: 4,
				details:
					`Whether you are looking for a complete makeover or just a touch of flair, Furniture Home is the website for you. Visit Furniture Home today and discover the furniture of your dreams.`},
			
				],
		
	},
	
	},


	// ===================== Retink =======================
	{
		id: 3,
		title: 'Retink',
		category: 'Frontend Application',
		img: retink,
		ProjectHeader: {
			title: 'Retink',
			publishDate: 'Nov 19, 2022',
			tags: 'UI / Frontend',
		},
	
		ProjectImages: [
			{
				id: 1,
				title: 'Project UI',
				img: retink,
			},
			{
				id: 2,
				title: 'Project UI',
				img: retink1,
			},
			{
				id: 3,
				title: 'Project UI',
				img: retink2,
			},
		],ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Retink',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Content marketing website',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://omarfarids.github.io/retink',
				},
				{
					id: 4,
					title: 'Github repository',
					details: 'https://github.com/omarfarids/retink',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				`Boost your sales 10x faster with content customized by our unique partnership of human creativity and AI optimization`,
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"React", "TypeScript", "TailwindCSS"
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`If you are looking for a way to increase your sales and grow your business, you need to have a powerful content strategy. Content is the key to attract, engage and convert your potential customers. But creating content that works is not easy. You need to know your audience, your goals and your competitors. You also need to optimize your content for different platforms, channels and devices.`
				},
				{
					id: 2,
					details:
						`That’s why you need Retink, the website that helps you create amazing content with the help of human creativity and AI optimization. Retink is a platform where you can connect with professional content writers who can craft customized content for your business. You can choose from different types of content, such as blog posts, landing pages, social media posts, emails, ads and more.`},
				{
					id: 3,
					details:
						`But Retink is not just a content writing service. It’s also a content optimization tool that uses AI to analyze your content and suggest improvements. You can use Retink to test different versions of your content and see which one performs better. You can also use Retink to track and measure the results of your content campaigns and learn how to optimize them further.`},
				{
					id: 4,
					details:
						`With Retink, you can boost your sales 10x faster with content that is tailored to your needs and goals. You can save time, money and effort by outsourcing your content creation and optimization to Retink. You can also learn from the best practices and insights that Retink provides.`},
			
				{
					id: 5,
					details:
						`Retink is the ultimate solution for your content marketing needs. Visit Retink today and see how it can transform your business.`}
					],
			
		},
		
	},

	// ========================= chat app ======================== 
	{
		id: 4,
		title: 'Chat App',
		category: 'Full-stack Web Application',
		img: chat,
		ProjectHeader: {
			title: 'Chat App',
			publishDate: 'Oct 7, 2022',
			tags: 'UI / Frontend / Backend',
		},

		ProjectImages: [
			{
				id: 1,
				title: 'Project UI',
				img: chat,
			},
			{
				id: 2,
				title: 'Project UI',
				img: chat1,
			},
			{
				id: 3,
				title: 'Project UI',
				img: chat2,
			},
		],ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Chat App',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Chat application website',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://chattie-online.netlify.app/',
				},
				{
					id: 4,
					title: 'Github repository',
					details: 'https://github.com/omarfarids/chattie',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				`ChatApp is a website that aims to 

				Provide a platform for online socializing and networking,
				Connect users with similar interests and hobbies,
				Foster a friendly and supportive community and
				Promote intercultural exchange and language learning.`,
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"React", "JavaScript", "Firebase", "SASS", "Tailwind"
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`Are you looking for a fun and easy way to make new friends online? Do you want to chat with people who share your hobbies and passions? If so, you should check out ChatApp, the website that connects you with like-minded people through 5 chat rooms: chitchat, english club, coding geek, sports and travel.`
				},
				{
					id: 2,
					details:
						`ChatApp is a website that lets you join any of the 5 chat rooms and start chatting with other users. You can choose the chat room that suits your interests and mood, or switch between them as you like. You can also create your own profile and customize it with your name, age, location, and a short bio. You can also upload a profile picture and an emoji that represents you.`
				},
				{
					id: 3,
					details:
						`ChatApp is more than just a chat website. It is a community of friendly and supportive people who are eager to learn from each other and have fun. You can chat about anything you want, from casual topics like movies and music, to more serious ones like politics and religion. You can also ask for advice, share your opinions, or just vent your feelings. You can also send emojis, gifs, stickers, and images to spice up your conversations.`
				},
				{
					id: 4,
					details:
						`ChatApp is the perfect website for anyone who wants to expand their social circle and meet new people from different backgrounds and cultures. You can chat with people from all over the world and learn about their lifestyles, customs, and languages. You can also practice your English skills in the english club chat room.`}	,
				{
					id: 5,
					details:
						`It would be our pleasure to have you in our community in ChatApp.`
				}					
			],
			
		},
	},

	// ========================= online wallet ======================== 
	{
		id: 5,
		title: 'Online wallet',
		category: 'Frontend Application',
		img: wallet,
		ProjectHeader: {
			title: 'Online wallet',
			publishDate: 'Jun 16, 2022',
			tags: 'UI / Frontend',
		},

		ProjectImages: [
			{
				id: 1,
				title: 'Project UI',
				img: wallet,
			},
			{
				id: 2,
				title: 'Project UI',
				img: wallet1,
			},
			{
				id: 3,
				title: 'Project UI',
				img: wallet2,
			},
		],ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Online wallet',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Static online wallet website',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://omarfarids.github.io/online-wallet/',
				},
				{
					id: 4,
					title: 'Github repository',
					details: 'https://github.com/omarfarids/online-wallet',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				`Online Wallet is a website that aims to 

				Provide a platform for online payment simulation and education,
				Show users how an online money wallet works and what benefits it can offer,
				Promote digitalization and financial inclusion and 
				Encourage users to adopt online wallets in the future`,
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"React", "SASS", "JavaScript"
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`Do you want to experience the convenience and security of online payments without actually spending any money? Do you want to learn how an online wallet works and what benefits it can offer you? If so, you should check out Online Wallet, the website that simulates an online money wallet for educational purposes.`
				},
				{
					id: 2,
					details:
						`Online Wallet is a website that shows you how an online money wallet works, but does not make any actual money transactions. You can create a virtual account and add or withdraw fake money using different payment methods, such as credit cards, bank transfers, or QR codes. You can also send or receive money from other users, pay bills, or shop online using your Online Wallet balance.`
				},
				{
					id: 3,
					details:
						`Online Wallet is more than just a website. It is a tool that helps you understand the advantages of online wallets and digitalization. Some of the benefits are:`
				},
				{
					id: 4,
					details:
						`Convenience: You don’t need to carry cash or cards with you. You can pay with your mobile phone anytime, anywhere.`
				},		
				{
					id: 5,
					details:
						`Security: Your personal information is kept secure because you don’t have to share it often. Online wallets use one of the most secure payment methods available: tokenization1.`
				},
				{
					id: 6,
					details:
						`Time-saving: You save time when transferring information between devices or websites.`
									},
				{
					id: 7,
					details:
						`Detailed records: You can keep track of your finances, since there are detailed records of every transaction.`
				},
				{
					id: 8,
					details:
						`Online Wallet is the perfect website for anyone who wants to explore the world of online payments and learn how they can benefit from them. You can try out different features and scenarios without risking any real money. You can also compare different online wallets and see which one suits your needs best.`
				},
			],
			
		},
	},

	
	// ========================= Randol app ======================== 
	{
		id: 6,
		title: 'Randol styling catalog',
		category: 'Frontend Application',
		img: randol,
		ProjectHeader: {
			title: 'Randol styling catalog',
			publishDate: 'Jan 25, 2022',
			tags: 'UI / Static Page / HTML & CSS',
		},

		ProjectImages: [
			{
				id: 1,
				title: 'Project UI',
				img: randol,
			},
			{
				id: 2,
				title: 'Project UI',
				img: randol1,
			},
			{
				id: 3,
				title: 'Project UI',
				img: randol2,
			},
		],ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Randol styling catalog',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Static layout for styling Catalog website',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://omarfarids.github.io/Randol-styling-catalog-template/',
				},
				{
					id: 4,
					title: 'Github repository',
					details: 'https://github.com/omarfarids/Randol-styling-catalog-template',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				`Randol is a website that aims to 

				Provide a static layout for styling catalog website,
				Showcase different styles for decoration,
				Promote the advantages of using a catalog website and 
				Inspire users to create their own catalog website or decorate their spaces`,
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"HTML", "CSS", "JavaScript"
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`Do you have a passion for decoration and want to find the best styles for your space? Do you want to see a wide range of products and themes that suit your taste and budget? If so, you should check out Randol, the website that offers a stunning catalog of styles for decoration.`
				},
				{
					id: 2,
					details:
						`Randol is a website that presents a static layout of a catalog website that you can use to choose styles for decoration. You can browse through different sections, such as curtains, pillows, mirrors, plants, and more. You can also sort products by various criteria, such as style, brand, rating, or popularity. You can see clear pictures and comprehensive information of each product, as well as user feedback and recommendations.`
				},
				{
					id: 3,
					details:
						`Randol is the perfect website for anyone who wants to learn how a catalog website works and what advantages it can offer. You can use it as an example or a model for creating your own catalog website. You can also use it as a source of inspiration and ideas for your decoration projects.`
				},
			],
			
		},
	},

	
	// ========================= Kasper app ======================== 
	{
		id: 7,
		title: 'kasper for designs',
		category: 'Frontend Application',
		img: kasper,
		ProjectHeader: {
			title: 'kasper for designs',
			publishDate: 'Dec 25, 2021',
			tags: 'UI / Static Page / HTML & CSS',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Project UI',
				img: kasper,
			},
			{
				id: 2,
				title: 'Project UI',
				img: kasper1,
			},
			{
				id: 3,
				title: 'Project UI',
				img: kasper2,
			},
		],ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'kasper for designs',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Static layout for styling Catalog website',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://omarfarids.github.io/kasper-designing-template/',
				},
				{
					id: 4,
					title: 'Github repository',
					details: 'https://github.com/omarfarids/kasper-designing-template',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				`Kasper's goals are to 

				Provide a static layout for styling catalog website,
				Showcase different styles for design,
				Promote the benefits of using a catalog website and 
				Inspire users to create their own catalog website or design their projects`,
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"HTML", "CSS", "JavaScript"
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`If you love design and want to find the best styles for your project, you need to check out Kasper, the website that has a wonderful catalog of styles for design.`
				},
				{
					id: 2,
					details:
						`Kasper is a website that shows you a static layout of a catalog website that you can use to choose styles for design. You can discover different categories, such as backgrounds, shapes, patterns, textures, and more. You can also filter products by different criteria, such as style, size, format, or price. You can view beautiful pictures and comprehensive information of each product, as well as user feedback and ratings.`
				},
				{
					id: 3,
					details:
						`Kasper is the perfect website for anyone who wants to learn how a catalog website works and what benefits it can offer. You can use it as a sample or a template for creating your own catalog website. You can also use it as a source of inspiration and ideas for your design projects.`
				},
			],
			
		},
	},
	
	// ========================= Leon app ======================== 
	{
		id: 8,
		title: 'Leon agency',
		category: 'Frontend Application',
		img: leon,
		ProjectHeader: {
			title: 'Leon agency',
			publishDate: 'Dec 3, 2021',
			tags: 'UI / Static Page / HTML & CSS',
		},

		ProjectImages: [
			{
				id: 1,
				title: 'Project UI',
				img: leon,
			},
			{
				id: 2,
				title: 'Project UI',
				img: leon1,
			},
			{
				id: 3,
				title: 'Project UI',
				img: leon2,
			},
		],ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Leon agency',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Static Webdevelopment agency website',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://omarfarids.github.io/Leon-agancy/',
				},
				{
					id: 4,
					title: 'Github repository',
					details: 'https://github.com/omarfarids/Leon-agancy',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				`Leon is not just a website. It is a tool that helps you appreciate the benefits of using a web development agency for your project needs.`,
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"HTML", "CSS", "JavaScript"
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`Do you have a passion for web development and want to find the best agency to help you with your project? Do you want to see a large selection of services and portfolios that match your goals and budget? If so, you should check out Leon, the website that features a splendid catalog of web development agency services.`
				},
				{
					id: 2,
					details:
						`Leon is a website that displays a static layout of a catalog website that you can use to choose web development agency services. You can explore different services, such as web design, UI & UX design, graphic design, and web development. You can also filter services by various criteria, such as price, duration, quality, or rating. You can see impressive portfolios and thorough information of each service, as well as user reviews and ratings.`
				},
				{
					id: 3,
					details:
						`Leon is the perfect website for anyone who wants to learn how a web development agency works and what benefits it can offer. You can use it as an example or a model for choosing a web development agency service. You can also use it as a source of inspiration and ideas for your project.`
				},
			],
			
		},
	},

	// ========================= Dental app ======================== 
	{
		id: 9,
		title: 'Dental store',
		category: 'Frontend Application',
		img: dental,
		ProjectHeader: {
			title: 'Dental store',
			publishDate: 'Feb 3, 2021',
			tags: 'UI / Static Page / HTML & CSS',
		},

		
		ProjectImages: [
			{
				id: 1,
				title: 'Project UI',
				img: dental,
			},
			{
				id: 2,
				title: 'Project UI',
				img: dental1,
			},
			{
				id: 3,
				title: 'Project UI',
				img: dental2,
			},
		],ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Dental store',
				},
				{
					id: 2,
					title: 'Services',
					details: 'eCommerce Dental store website',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://omarfarids.github.io/Dental-store/',
				},
				{
					id: 4,
					title: 'Github repository',
					details: 'https://github.com/omarfarids/Dental-store',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				`Dental Store is more than just a website. It is a tool that helps you discover the benefits of using an ecommerce website for your dental care needs.`,
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						"HTML", "CSS", "JavaScript"
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`If you are passionate about dental care and want to find the best online store to buy dental tools and equipment, you will love Dental Store, the website that has a fantastic catalog of dental tools and equipment.`
				},
				{
					id: 2,
					details:
						`Dental Store is a website that presents a static layout of an ecommerce website that you can use to buy dental tools and equipment. You can browse through different products, such as x-rays, implants, braces, and more. You can also sort products by various factors, such as type, price, brand, or rating. You can see clear pictures and detailed information of each product, as well as user reviews and ratings.`
				},
				{
					id: 3,
					details:
						`Dental Store is a website that aims to Provide a static layout for an ecommerce website,
						Showcase different dental tools and equipment,
						Promote the benefits of using an ecommerce website and 
						Inspire users to buy dental tools and equipment online or improve their dental care.`
				},
				{
					id: 4,
					details:
					`Dental Store is the perfect website for anyone who wants to learn how an ecommerce website works and what benefits it can offer. You can use it as an example or a model for buying dental tools and equipment online. You can also use it as a source of inspiration and ideas for your dental care needs.`
				},
			],
			
		},

	},
];
