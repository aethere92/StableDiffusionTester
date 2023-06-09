document.addEventListener('DOMContentLoaded', async function () {
	let obj;

	try {
		const url = 'https://raw.githubusercontent.com/scroobius-pip/arible_prompts/main/prompts.arible';
		const response = await fetch(url);
		obj = await response.json();
		console.log('fetched');
	} catch (err) {
		console.log('errored');
		obj = {
			'neo-fauvism_painting': {
				summary: 'neo-fauvism painting',
				camera: '',
				tags: ['portrait', 'neo-fauvism', 'digital illustration', 'poster art', 'square'],
				female_prompt: "a painting of a woman's face with a pink background, a character portrait by Petros Afshar, behance contest winner, neo-fauvism, behance hd, digital illustration, poster art",
				male_prompt: "a painting of a man's face with a pink background, a character portrait by Petros Afshar, behance contest winner, neo-fauvism, behance hd, digital illustration, poster art",
				images: ['https://replicate.delivery/pbxt/IjOuEG1gDErrAF3IeEKHJAnu5hQBzNygapxlqXkyZjAUiRWIA/seed-2250575127.png', 'https://replicate.delivery/pbxt/AWDzzorbfSyHHKWMkshnsNVLPkQkADNiwrj39yc1EBeiJjsQA/seed-2250575127.png'],
			},
			"1930's influencer": {
				summary: "1930's influencer",
				camera: 'Leica III rangefinder camera paired with 50mm f/2 Summicron lens',
				tags: ['portrait', 'official', 'formal', 'vintage', 'full body'],
				female_prompt:
					'Striking portrait of a 1930s female influencer, radiating power and self-assurance with each pose. Captured in a high-resolution, ultra-realistic photo, revealing every detail of her immaculate style and graceful demeanour. Vintage Leica III rangefinder camera, paired with a 50mm f/2 Summicron lens renowned for its superior sharpness and exquisite colour rendition. Camera settings chosen to balance natural light and shadows, with aperture f/4, ISO 400, and shutter speed 1/125 sec. Flawlessly styled attire to reflect the glamour of the era, with form-fitting satin gown in deep emerald green adorned with lace and pearl accents. Artfully applied makeup with a bold red lip and smoky eye enhancing her breathtaking beauty. Sleek chignon hairstyle framing her face. Carefully composed to focus on her dominating posture and entrancing gaze in a timeless art deco background of geometric shapes and metallic accents for a touch of luxury. Breathtaking portrait of a 1930s female influencer enshrining her timeless beauty in photographic art to amaze audiences forever.',
				male_prompt:
					'Dashing portrait of a 1930s male influencer, conveying strength and sureness through each pose. Captured in a high-resolution, ultra-realistic photo, highlighting every detail of his impeccable style and distinguished bearing. Vintage Leica III rangefinder camera paired with a 50mm f/2 Summicron lens praised for its outstanding sharpness and gorgeous colour representation. Camera settings chosen to balance natural light and shadows, with aperture f/4, ISO 400, and shutter speed 1/125 sec. Impeccably styled apparel to reflect the grace of the era, with tailored tuxedo suit in deep midnight blue garnished with velvet lapels and epaulets. Meticulously applied makeup with an intense red lip and smoky eye elevating his arresting beauty. Neat slicked back hairstyle accentuating his facial features . Carefully composed to focus on his commanding posture and mesmerizing gaze against an immortal art deco background of geometric shapes  and metallic accents for an added touch of extravagance. Exquisite portrait of a 1930s male influencer immortalizing his lasting charisma  in photographic art that will enchant viewers for generations.',
				images: ['https://replicate.delivery/pbxt/LofGQm1fKhnmfIcBLvfWeWdsKfNhqYKheTazOWzie9eWj0TXhA/out-0.png'],
			},
			'1930s portrait': {
				summary: '1930s portrait',
				camera: 'Leica III rangefinder camera 50mm f/2 Summicron lens; f/4 aperture ISO 400 shutter speed 1/125 sec.',
				tags: ['portrait', 'official', 'formal', 'vintage', 'high resolution'],
				female_prompt:
					"Stunning portrait of a 1930s female influencer, exuding power and confidence with every pose. Captured in an ultra-realistic photograph that highlights every intricate detail of her impeccable style and elegant demeanor. Her attire is meticulously styled to reflect the glamour and sophistication of the era, with a form-fitting satin gown in deep emerald green, adorned with delicate lace and pearl accents. Her makeup is flawlessly applied, with a bold red lip and a smoky eye, enhancing her captivating beauty and allure. Her hair is styled in a sleek and sophisticated chignon, with a few wisps artfully framing her face. The composition is carefully crafted to emphasize the subject's commanding presence, focusing on her captivating gaze and confident posture. The influencer is posed in front of an art deco backdrop, featuring geometric shapes and metallic accents for added luxury. ",
				male_prompt:
					"Handsome portrait of a 1930s male influencer, exuding authority and poise with every pose. Captured in an ultra-realistic photograph that highlights every intricate detail of his impeccable style and dignified demeanor. His attire is meticulously styled to reflect the glamour and sophistication of the era, with an expertly tailored suit in dark navy blue, paired with an embellished tie bar and pocket square accents. His grooming is impeccably groomed, with slicked back hair framing his face perfectly. The composition is carefully crafted to emphasize the subject's commanding presence, focusing on his piercing gaze and poised posture. The influencer is posed in front of an art deco backdrop, featuring geometric shapes and metallic accents for added luxury.",
				images: ['https://replicate.delivery/pbxt/ThsPlQyW3bZXDxzjqlL4dHMGoPc7r3ZJZi2aMfZr9Vkr70VIA/out-0.png'],
			},
			"1970's woody portrait": {
				summary: "1970's woody portrait",
				camera: 'Canon F-1',
				tags: ['portrait', "70's", 'whiskey', 'wood', 'stained glass'],
				female_prompt:
					'Enchanting portrait of a woman in 1970s, stylishly dressed and smiling mischievously against a backdrop of upscale charm, rich wood, stone, stained glass, and shamrock ferns. Intimate smoky ambience with moody lighting, crystal whiskey glasses and Canon F-1 photography. ',
				male_prompt:
					'Striking portrait of a man in 1970s, handsomely dressed and looking curious against a backdrop of upscale charm, rich wood, stone, stained glass and shamrock ferns. Intimate smoky ambience with moody lighting, crystal whiskey glasses and Canon F-1 photography. ',
				images: ['https://replicate.delivery/pbxt/Ss10En9jR4KxFtTdqRvwkeJvJBVKUvv8t3ObSpVThfwE5AsQA/seed-60342.png'],
			},
			'1970s fantasy kiss': {
				summary: '1970s fantasy kiss',
				camera: '',
				tags: ['fantasy', 'romantic', 'retro', 'passionate', 'vintage'],
				female_prompt:
					'Beautiful tiefling woman in passionate embrace with Cernunnos, in the style of 1970s Dungeons and Dragons box art. Rich textures and colors, dynamic composition, retro-inspired details and vintage atmosphere. Intense emotion and dramatic lighting.',
				male_prompt:
					'Handsome Cernunnos in passionate embrace with a gorgeous tiefling woman, in the style of 1970s Dungeons and Dragons box art. Rich textures and colors, dynamic composition, retro-inspired details and vintage atmosphere. Intense emotion and dramatic lighting.',
				images: ['https://replicate.delivery/pbxt/yqoCAP3dOy5qKBOniJUQZih3lfgd3v252YyjNzzdWehfzTXhA/out-0.png'],
			},
			'25 yo portrait': {
				summary: '25 yo portrait',
				camera: '35mm lens, f1.2 aperture',
				tags: ['full body', 'outside', 'handsome', 'art', '35mm'],
				female_prompt:
					'High resolution photography with a 35mm lens, f1.2 aperture, full body shot taken outside. Showcasing a slim 25-year-old woman with handsome features, dressed in a white t-shirt and sporting a straight hairtcut style, brown eyes, and glasses. Sam Does art style.',
				male_prompt:
					'High resolution photography with a 35mm lens, f1.2 aperture, full body shot taken outside. Showcasing a slim 25-year-old man with handsome features, dressed in a white t-shirt and sporting a straight hairtcut style, brown eyes, and glasses. Sam Does art style.',
				images: ['https://replicate.delivery/pbxt/grBdzz2uVcrwF9gQPaPRAyHg1RHOFlf0Gkt2EaxDUigBeprQA/out-0.png'],
			},
			'3d portrait': {
				summary: '3d portrait',
				camera: 'Pixar Animation Studio',
				tags: ['portrait', '3D', 'animation', 'Disney', 'detailed'],
				female_prompt: 'Striking 3D portrait of a young woman with a cheerful expression and mesmerizing eyes. Pixar style animation, exceptionally detailed, Disney style artistry, ultra resolution and striking colors. ',
				male_prompt: 'Striking 3D portrait of a young man with a cheerful expression and mesmerizing eyes. Pixar style animation, exceptionally detailed, Disney style artistry, ultra resolution and striking colors. ',
				images: ['https://replicate.delivery/pbxt/lERpsTPzM3pWEBoJJv3Bz0dEBilcQeiiezqjjKWL5lTA9prQA/out-0.png'],
			},
			'Beaming gold': {
				summary: 'Beaming gold',
				camera: '',
				tags: ['portrait', 'casual', 'layers', 'decolleté', 'smiling'],
				female_prompt: 'Beaming woman with cascading golden wavy hair, half open decollete, and casual attire. Radiant smile, glowing complexion, and inviting vibes. Captivating beauty with a timeless elegance.',
				male_prompt: 'Charming man with sophisticated layered tousled hair, half open decollete, and casual attire. Alluring smile, radiant complexion, and captivating charisma. Timelessly attractive with an inviting presence.',
				images: ['https://replicate.delivery/pbxt/E7H1XJTBodZJK50ozTsNcPXnhQGFXL5ycwD61KxlVsj5DALE/seed-15352.png'],
			},
			'50s doodle portrait': {
				summary: '50s doodle portrait',
				camera: '',
				tags: ['mid-shot', '50s', 'doodle', 'polygons', 'pointillism'],
				female_prompt:
					"Captivating mid-shot of a stunning 50's model woman in a black and white Doodle drawing, with a full color background of iconic 50's objects, symbols, and polygons. Captivating Dot Matrix and Pointillism colour filter in background, realistic with extreme details. ",
				male_prompt:
					"Handsome mid-shot of a handsome 50's model man in a black and white Doodle drawing, with a full color background of iconic 50's objects, symbols, and polygons. Captivating Dot Matrix and Pointillism colour filter in background, realistic with extreme details. ",
				images: ['https://replicate.delivery/pbxt/Za3aCY0WRO6zKtHkBOLmySoSOq3n0fnilRB7h6qe7iey5TXhA/out-0.png'],
			},
			'80s aerobics': {
				summary: '80s aerobics',
				camera: '',
				tags: ['portrait', 'official', 'aerobics', 'vintage', 'comical'],
				female_prompt:
					"woman wearing vintage 80s aerobic instructor's outfit, comical dabbing pose, pithy facial expression and vibrant colors. Dynamic composition with intense details and chiaroscuro lighting, surrealistic atmosphere and true-to-life qualities.",
				male_prompt:
					"man wearing classic 80s aerobic instructor's outfit, comedic dabbing gesture, witty facial expression and vivid colors. Dynamic composition with crisp details and chiaroscuro lighting, surrealistic atmosphere and realistic qualities.",
				images: ['https://replicate.delivery/pbxt/U69AuXHRRB4KBNCbxfATRte9f3egIkZ8MwVqzQY2uIfsYCgFC/seed-23121.png'],
			},
			'80s anime': {
				summary: '80s anime',
				camera: '',
				tags: ['anime', '16k', 'retro', 'dramatic', 'intense'],
				female_prompt: 'Bleak 80s-style anime still of a woman with flowing hair, richly detailed 16k image quality. Nostalgic animation, rebel-vibe dull, theatrical atmosphere and intense colors.',
				male_prompt: 'Bleak 80s-style anime still of a man, richly detailed 16k image quality. Nostalgic animation, rebel-vibe dull, theatrical atmosphere and intense colors.',
				images: ['https://replicate.delivery/pbxt/LQbHyPpBLN74NRECJLHb3Tzm2zy8Nqe0jI8d7jzhq4siqAWIA/seed-7260.png'],
			},
			pond: {
				summary: 'pond',
				camera: 'Zeiss Tessar 2.8 50mm, Asahi Pentax,',
				tags: ['portrait', 'fashion', 'water', 'lilies', 'dynamic'],
				female_prompt:
					'Striking portrait of a  woman with luxurious hair, standing in a tranquil pond amidst water lilies and tulle. Fashion photography with dynamic blur and pastel colors. Different angle and lighting to create a dynamic scene, soft golden hour lighting and bright color accents. Minimalistic composition to focus on the beauty of the subject.',
				male_prompt:
					'Handsome portrait of a man with luscious hair, standing in a tranquil pond surrounded by water lilies and tulle. Fashion photography with dynamic blur and pastel colors. Different angle and lighting to create a dynamic scene, soft golden hour lighting and bright color accents. Minimalistic composition to focus on the beauty of the subject.',
				images: ['https://replicate.delivery/pbxt/0PJhT84IfMSpbqJXQZycRYsPsCBNv66KX0ckJrk7wW3NeprQA/out-0.png'],
			},
			'vibrant viking': {
				summary: 'vibrant viking',
				camera: '',
				tags: ['digital painting', 'viking', 'face paint', 'forest', 'vibrant'],
				female_prompt:
					'Vibrant digital painting of a young Viking woman in Heilung face paint and flowing colors. Background of lush forest and earthy tones, vibrant and alive with energy. Artistic representation of detail, movement and atmosphere.',
				male_prompt: 'Vibrant digital painting of a young male Viking in Heilung face paint and flowing colors. Background of lush forest and earthy tones, vibrant and alive with energy. Artistic representation of detail, movement and atmosphere.',
				images: ['https://replicate.delivery/pbxt/87zDO8PcjE7xIFTx0kvVX9r18w7nmbjPwLnbJZMNXtDdFALE/seed-45647.png'],
			},
			'abandoned sepulcher': {
				summary: 'abandoned sepulcher',
				camera: '',
				tags: ['adventure', 'fantasy', 'pulp fantasy', 'torch-light', 'gothic'],
				female_prompt:
					'Female cleric on an eerie adventure with a halfling fighter and elf wizard, exploring a lost abandoned sepulcher filled with skeletons, ghouls, and cobwebs. Drenched in torch-light and with an ominous gothic atmosphere, the scene is reminiscent of the art of Thomas Hart Benton, George Hurrell, and Hugh Ferriss. ',
				male_prompt:
					'Male halfling fighter on an eerie adventure with a female cleric and elf wizard, exploring a lost abandoned sepulcher filled with skeletons, ghouls, and cobwebs. Drenched in torch-light and with an ominous gothic atmosphere, the scene is reminiscent of the art of Thomas Hart Benton, George Hurrell, and Hugh Ferriss.',
				images: ['https://replicate.delivery/pbxt/j83cwPvLRA46KptFjxOgqrDTbogVb0nDSlUwAsKANi9AGALE/seed-47780.png'],
			},
			'abstract cityscape': {
				summary: 'abstract cityscape',
				camera: 'Ultra Realistic Cinematic Light',
				tags: ['abstract', 'futuristic', 'cityscape', 'female/male', 'full body'],
				female_prompt:
					'Abstract, futuristic cityscape with an attractive female in the center. Focused on the face with a beautiful look, cinematic lighting and ultra realistic details. Out of focus background and incredible 16k resolution produced in Unreal Engine 5 and Octan render.',
				male_prompt:
					'Abstract, futuristic cityscape with an handsome male in the center. Focused on the face with a mesmerizing look, cinematic lighting and ultra realistic details. Out of focus background and incredible 16k resolution produced in Unreal Engine 5 and Octan render.',
				images: ['https://replicate.delivery/pbxt/7V8QD2oVPDYbNFbRj7Et1aSyZyRCYmeaHSOg9x34aovb90VIA/out-0.png'],
			},
			'abstract figure': {
				summary: 'abstract figure',
				camera: 'Octan render, Unreal Engine 5',
				tags: ['abstract', 'futuristic', 'full body', 'beauty', 'attractive', 'Ultra Realistic'],
				female_prompt:
					'Abstract futuristic female figure gazing confidently at the viewer with a stunningly beautiful face in sharp focus. Ultra Realistic rendering with 16k resolution, cinematic lighting, and extreme details. Aesthetic blend of surreal and abstract elements set in an unreal world.',
				male_prompt:
					'Abstract futuristic male figure standing confidently with a captivatingly handsome face in sharp focus. Ultra Realistic rendering with 16k resolution, cinematic lighting, and extreme details. Aesthetic blend of surreal and abstract elements set in an unreal world.',
				images: ['https://replicate.delivery/pbxt/LUOShXdHFzZ4BJUe1WCx7pq2tj5rpZhfAqkeWIhyecGzvnuCB/out-0.png'],
			},
			'abstract futuristic': {
				summary: 'abstract futuristic',
				camera: 'Out of focus effect on the face',
				tags: ['full body', 'abstract', 'futuristic', 'creative', 'attractive'],
				female_prompt:
					'Abstract futuristic full body of a beautiful woman, creative abstract thinking with out of focus effect on the face, ultra-realistic 16k resolution with cinematic lighting and detailed textures, rendered in Unreal Engine 5 with Octan render. ',
				male_prompt:
					'Abstract futuristic full body of a handsome man, creative abstract thinking with out of focus effect on the face, ultra-realistic 16k resolution with cinematic lighting and detailed textures, rendered in Unreal Engine 5 with Octan render. ',
				images: ['https://replicate.delivery/pbxt/DbXvSVhR3X6cLRSDV3iIglUoqT0n4N9irRIHNKfskK1a90VIA/out-0.png'],
			},
			'academia portrait': {
				summary: 'academia portrait',
				camera: '',
				tags: ['botanical', 'makeup', 'holographic', 'metallic', 'style'],
				female_prompt:
					'Eager female with botanical academia style, Karrueche inspired clothing, Lisa Frank inspired makeup, antlers and holographic details, metallic accents and Qcernunnos fashion. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Confident male with botanical academia style, Karrueche inspired clothing, Lisa Frank inspired makeup, antlers and holographic details, metallic accents and Qcernunnos fashion. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/1ZFQTOKUaxYvAdc6zWE4W5xukTIhNW1dpT6lLpqlgHLWf0VIA/out-0.png'],
			},
			'academia singing': {
				summary: 'academia singing',
				camera: '',
				tags: ['singing', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Joyous female singing with her head back, in a botanical inspired academia. Karrueche style, Lisa frank inspired, metallic and holographic shamrock fashion. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Cheerful male singing with his head back, in a botanical inspired academia. Karrueche style, Lisa frank inspired, metallic and holographic shamrock fashion. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/nQwQRkfLLRW5IKcZQQGSrjWb3bZV1kLc8tfRnQ66vJnm0prQA/out-0.png'],
			},
			'academia style': {
				summary: 'academia style',
				camera: '',
				tags: ['portrait', 'botanical', 'fashion', 'holographic', 'metallic'],
				female_prompt:
					'A radiant female singing with her head held high, donning an academy-inspired look with botanical elements. An eye-catching ensemble featuring Karrueche style, Lisa Frank patterns, holographic material, and metallic accents. Adorned with a pot of gold and shamrocks for a fashionable and whimsical vibe. Smiling towards the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'A dashing male singing with his head held high, donning an academy-inspired look with botanical elements. An eye-catching ensemble featuring Karrueche style, Lisa Frank patterns, holographic material, and metallic accents. Adorned with a pot of gold and shamrocks for a fashionable and whimsical vibe. Smiling towards the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/GogydBHm2L6OIdRLI6tgQtkSjIYMXbigilsXMrq1Mk0f90VIA/out-0.png'],
			},
			'academic portrait': {
				summary: 'academic portrait',
				camera: '',
				tags: ['portrait', 'holographic', 'botanical', 'metallic', 'rainbow'],
				female_prompt:
					'Vibrant portrait of a woman with her head back singing, botanical academia, Karrueche inspired fashion with Lisa Frank, pot of gold, holographic and metallic shamrock details. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt: 'Rugged portrait of a man in botanical academia, Karrueche inspired fashion with Lisa Frank, pot of gold, holographic and metallic shamrock details. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/Gpj76YpkQcIkBNzlxGltwpGMwPPM3OAGMjX5wZNL5zdue0VIA/out-0.png'],
			},
			'academic singing': {
				summary: 'academic singing',
				camera: '',
				tags: ['singing', 'botanical', 'metallic', 'holographic', 'rainbow'],
				female_prompt:
					'Energetic female singing with her head back, botanical academia with Karrueche and Lisa Frank fashion, pot of gold and holographic elements, metallic colors and shamrock pattern, cheerful expression looking into the rainbow. Inspired by James Jean and Alberto Seveso.',
				male_prompt:
					'Vibrant male singing with his head back, botanical academia with Karrueche and Lisa Frank fashion, pot of gold and holographic elements, metallic colors and shamrock pattern, cheerful expression looking into the rainbow. Inspired by James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/ziBR4veBhPWjaKRMe9jahvpxE8wxSe5nClphxPYAb4CWvTXhA/out-0.png'],
			},
			'acrylic astronaut': {
				summary: 'acrylic astronaut',
				camera: '',
				tags: ['acrylic', 'retrofuturism', 'astronaut', 'space colony', 'intricate'],
				female_prompt:
					'Vibrant acrylic painting of a female astronaut in a distant view, retrofuturism and futuristic space colony background by Earl Moran. Rich textures and vibrant hues, intricate details, surrealistic themes and imaginative color scheme. ',
				male_prompt:
					'Vibrant acrylic painting of a male astronaut in a distant view, retrofuturism and futuristic space colony backdrop by Earl Moran. Rich textures and vibrant hues, intricate details, surrealistic themes and imaginative color scheme. ',
				images: ['https://replicate.delivery/pbxt/gzBdtKndYkr6MF1UWYfH84vT9LUrCVdTScDFiQ5UgeiL6prQA/out-0.png'],
			},
			'acrylic astronaut 2': {
				summary: 'acrylic astronaut 2',
				camera: '',
				tags: ['retrofuturism', 'astronaut', 'painting', 'colony', 'space'],
				female_prompt: 'Vibrant acrylic painting of a female astronaut, far away shot, capturing a retrofuturism scene, background of a sprawling space colony by Earl Moran. Rich colors, glimmering texture, intricate details and airy movement. ',
				male_prompt: 'Vibrant acrylic painting of a male astronaut, far away shot, capturing a retrofuturism scene, background of a sprawling space colony by Earl Moran. Rich colors, glimmering texture, intricate details and airy movement. ',
				images: ['https://replicate.delivery/pbxt/zSgNKyZYffq6VkeyWFyACbYft2BcmJ9ymecJ0OuxeBkh1e0VIA/out-0.png'],
			},
			'afremov portrait': {
				summary: 'afremov portrait',
				camera: '',
				tags: ['portrait', 'realistic', 'oil paint', 'emotional', 'high contrast'],
				female_prompt:
					'Breathtaking portrait of a beautiful woman with windblown hair, in the style of Leonid Afremov. Realistic emotional oil painting with impasto brush strokes, obscured facial features with an evocative expression, high contrast and vivid saturated colors, and a slight glow.',
				male_prompt:
					'Striking portrait of a handsome man with tousled hair, in the style of Leonid Afremov. Realistic emotional oil painting with impasto brush strokes, obscured facial features with an evocative expression, high contrast and vivid saturated colors, and a slight glow.',
				images: ['https://replicate.delivery/pbxt/wWwsxvTzMBrdA5ptmC1T8YJveWqgL5khUlmKN1ehdwXE2prQA/out-0.png'],
			},
			'african portrait': {
				summary: 'african portrait',
				camera: 'Hasselblad 24mm',
				tags: ['portrait', 'official', 'formal', 'full body', 'African'],
				female_prompt: 'Gorgeous full body shot of an African woman with detailed natural skin, no makeup and long dreadlocks with a satisfied look. Captured in vivid detail with Hasselblad 24mm photography to showcase her beauty and confidence.',
				male_prompt: 'Handsome full body shot of an African man with detailed natural skin, no makeup and long dreadlocks with a satisfied look. Captured in vivid detail with Hasselblad 24mm photography to showcase his beauty and confidence.',
				images: ['https://replicate.delivery/pbxt/5HqqV6c8IYbJIlbjSzIejfEByTorQPfXiF8q2WDtIVtNzTXhA/out-0.png'],
			},
			'african tribal': {
				summary: 'african tribal',
				camera: '',
				tags: ['portrait', 'tribal', 'dancing', 'sun', 'vibrant'],
				female_prompt:
					'Beautiful African tribal woman dancing gracefully with the sun beaming behind her, painted by Jeremy Mann with vibrant colors. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Handsome African tribal man dancing with poise and confidence with the sun radiating warmth behind him, painted by Jeremy Mann with passionate colors. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/V66dwuhjESrlJtWtLUwmtWlVQNvL0C725hpCfnoDWooq90VIA/out-0.png'],
			},
			'afro punk illustration': {
				summary: 'afro punk illustration',
				camera: ',',
				tags: ['comic-book', 'Afropunk', 'no expression', 'no emotion', 'illustrated'],
				female_prompt: 'A comic-book inspired Afropunk female with no expression, illustrated by Anna Dittmann in a comic book style with minimalistic details. No emotion, no background. Impeccable lines and vibrant colors.',
				male_prompt: 'A comic-book inspired Afropunk male with no expression, illustrated by Anna Dittmann in a comic book style with minimalistic details. No emotion, no background. Impeccable lines and vibrant colors.',
				images: ['https://replicate.delivery/pbxt/G0dtfwmtuHRmHKbZpkr8ohPVIqeH9EiuocSgsjxcjoOt6prQA/out-0.png'],
			},
			'afrofuturistic portrait': {
				summary: 'afrofuturistic portrait',
				camera: '',
				tags: ['portrait', 'afrofuturism', 'minimalist', 'cyberpunk', 'fashionable'],
				female_prompt:
					'Beautiful woman with white hair wearing a shamrock green hoodie, minimalism glowwave girl portrait, cypherpunk fashion illustration, afrofuturism style. Dark cyberpunk illustration, afrofuturism darksynth character portrait, rossdraws | afrofuturism hologram sci-fi hood, futuristic woman portrait in cyberpunk style. Portrait of Ororo Munroe, fashionable futuristic woman',
				male_prompt:
					'Handsome man with white hair wearing a shamrock green hoodie, minimalism glowwave boy portrait, cypherpunk fashion illustration, afrofuturism style. Dark cyberpunk illustration, afrofuturism darksynth character portrait, rossdraws | afrofuturism hologram sci-fi hood, futuristic man portrait in cyberpunk style. Portrait of Ororo Munroe, fashionable futuristic man',
				images: ['https://replicate.delivery/pbxt/6YdA0EDrEH5eMiiAzRg9N9A89f2fMOh0abmd0kIIEacByTXhA/out-0.png'],
			},
			'afropunk comic': {
				summary: 'afropunk comic',
				camera: '',
				tags: ['comic-book', 'afropunk', 'illustrated', 'unique', 'bold'],
				female_prompt: 'A female with an Afropunk style, no expression or emotion, illustrated by Anna Dittmann in a comic book style with no background. Masterful blend of colors and intricate details with bold lines and unique design elements.',
				male_prompt: 'A male with an Afropunk style, no expression or emotion, illustrated by Anna Dittmann in a comic book style with no background. Masterful blend of colors and intricate details with bold lines and unique design elements.',
				images: ['https://replicate.delivery/pbxt/lIevfOfmJ9P1kJDtpErzNzDCMJzmK7diydc5rmt7D5dSyTXhA/out-0.png'],
			},
			'afropunk illustration': {
				summary: 'afropunk illustration',
				camera: '',
				tags: ['illustration', 'comic-book', 'afropunk', 'character', 'minimalistic'],
				female_prompt: 'A female Afro Punk character, illustrated in a comic book style with no expression, no emotion, and a minimalistic background. Expertly crafted by Anna Dittmann to capture the essence of Afro Punk. ',
				male_prompt: 'A male Afro Punk character, illustrated in a comic book style with no expression, no emotion, and a minimalistic background. Expertly crafted by Anna Dittmann to capture the essence of Afro Punk. ',
				images: ['https://replicate.delivery/pbxt/y4X7fe7lIcmZT0dKArDxVs41zLqAhqskNuYCXzyWqrdm5prQA/out-0.png'],
			},
			'air elemental portrait': {
				summary: 'air elemental portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'dramatic', 'full body'],
				female_prompt:
					'Stunning woman with delicate features and dark skin, natural hair, beautiful dress in a dramatic air elemental pose. Captured by master photographers Annie Leibovitz, Mandy Jurgens, Roberto Ferri and Anders Zorn for an exquisite blend of fine details. ',
				male_prompt:
					'Handsome man with exquisite features and dark skin, natural hair, stylish attire in a captivating air elemental pose. Captured by master photographers Annie Leibovitz, Mandy Jurgens, Roberto Ferri and Anders Zorn for an extraordinary blend of fine details. ',
				images: ['https://replicate.delivery/pbxt/DjiTNA1ga66tFhELyVnKqv5saPxVPf5LnLVtgw7xGaAZ80VIA/out-0.png'],
			},
			'air portrait': {
				summary: 'air portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'fine features', 'dark skin', 'dramatic'],
				female_prompt:
					'Gorgeous woman with delicate features and dark skin, natural hair, stunning dress and air elemental. Vibrant colors, dramatic composition and intricate details by renowned photographers Annie Leibovitz, Mandy Jurgens, Roberto Ferri and Anders Zorn. ',
				male_prompt:
					'Handsome man with fine features and dark skin, natural hair, stylish clothes and air elemental. Vibrant colors, dramatic composition and intricate details by renowned photographers Annie Leibovitz, Mandy Jurgens, Roberto Ferri and Anders Zorn. ',
				images: ['https://replicate.delivery/pbxt/6BBKPTzhlN6uBdtsj41rn5sZRagbep1fKrYLeIgfgx1MsnuCB/out-0.png'],
			},
			'airbending portrait': {
				summary: 'airbending portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'landscape'],
				female_prompt:
					'Beautiful Water Tribe woman Avatar The Last Airbender, serenely water bending at a lake in Canada surrounded by majestic mountains and lush foliage. Elegant and graceful with long flowing hair and delicate features delicately lit with soft lighting. ',
				male_prompt:
					'Handsome Water Tribe man Avatar The Last Airbender, fiercely water bending at a lake in Canada surrounded by majestic mountains and lush foliage. Elegant and strong with short cut hair and strong features illuminated by soft lighting. ',
				images: ['https://replicate.delivery/pbxt/OxxoIweN9z1vZa6gmYFNAn8YfpcsvVlJPgbBTg1eHfpJ0DwCB/seed-11691.png'],
			},
			'airship portrait': {
				summary: 'airship portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'cityscape', 'square'],
				female_prompt: 'Beautiful woman in a red dress and long hair standing on the ground with a majestic city in the background. Airship soaring in the sky, black and white with vibrant touches of red, realistic and stunningly detailed. ',
				male_prompt: 'Handsome man with an airship flying in the background, black and white with vibrant touches of red. Realistic depiction of a majestic city, standing on solid ground, looking up at the airship. ',
				images: ['https://replicate.delivery/pbxt/IDV3oiX16X52LlrjRtNzf82VKwpRf4ZAiHMRIC6t0mKV4prQA/out-0.png'],
			},
			'albino warrior': {
				summary: 'albino warrior',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'full body'],
				female_prompt:
					'Powerful albino warrior, Eugena Washington, standing in a desert with her majestic black horse.Detailed character design with neutral grey color palette and subtle lighting. Photorealistic quality and an epic sunset background.',
				male_prompt:
					'Vigorous albino warrior, Eugena Washington, standing in a desert with his majestic black horse.Detailed character design with neutral grey color palette and subtle lighting. Photorealistic quality and an epic sunset background.',
				images: ['https://replicate.delivery/pbxt/x2sA5fZ3UqWVe00XGmB7eS4hG7zbyWFVV6NCumM3Nby2uTXhA/out-0.png'],
			},
			'alcohol ink': {
				summary: 'alcohol ink',
				camera: '',
				tags: ['portrait', 'fantasy', 'devil', 'sunglasses', 'antlers'],
				female_prompt:
					'Beautiful 26-year-old blond female Devil-wifu wearing an emerald tile suit, large antlers, and stunning sunglasses, bending slightly to look above the shades at the camera. Masterful Alcohol Ink by Kawacy illustration style with bright colors and smooth shapes in a dynamic composition.',
				male_prompt:
					'Handsome 26-year-old blond male Devil-wifu wearing an emerald tile suit, large antlers, and amazing sunglasses, bending slightly to look above the shades at the camera. Masterful Alcohol Ink by Kawacy illustration style with bold colors and sleek shapes in a dynamic composition.',
				images: ['https://replicate.delivery/pbxt/tmOX3sci8Z57CZ9G1u1OeqAdYm9Lmxqn9K5IXRFRMbaN80VIA/out-0.png'],
			},
			'alice warrior': {
				summary: 'alice warrior',
				camera: 'Canon EOS R5',
				tags: ['POV', 'Harajuku', 'Cyberpunk', 'Atompunk', 'Realistic'],
				female_prompt:
					'Goddess-like young ethereal female as astronaut of Alice in Wonderland, a Harajuku high school student, in full body shot. Featuring long legs, torso, midriff and tall boots, all in a finely detailed wet golden low cut armor. With pale skin and clear hair, Mila Azul mixes with Tao Tsuchiya to create an innocent yet carbybody look. A mixture of samuraipunk cyberpunk atompunk styles create a cinematographic quality that is both absolute realistic and unreal. ',
				male_prompt:
					'Powerful figure of young male warrior dressed as an astronaut from Alice in Wonderland, with Harajuku high school style. Full body shot featuring long legs and torso, midriff and tall boots, all in a finely detailed wet golden low cut armor. With pale skin and clear hair he exudes power and strength embodying the samuraipunk cyberpunk atompunk look. Cinematographic quality that is both absolute realistic and unreal.',
				images: ['https://replicate.delivery/pbxt/5Gb11oOqeP0KUaffKXR5R0UC76foBeKG8cyU200vbRnIHPdFC/out-0.png'],
			},
			'alien battle': {
				summary: 'alien battle',
				camera: 'Hyper-realistic style, intense colors, 3D, 4K resolution',
				tags: ['alien', 'epic', 'superpower', 'bio-luminescent', 'matrix'],
				female_prompt:
					'Gorgeous young female alien goddess with malachite stone, intense blue eyes, and golden hair. Enchanting bio-mechanical nixie tube armor and powerful electric superpowers. Mesmerizing battle against a dark evil villain with a jeweled third eye in an epic colorful bio-luminescence background with a geometric matrix. Hyper-realistic style, intense colors, 3D, and 4K resolution creating an otherworldly and captivating image.',
				male_prompt:
					'Handsome young male alien god with malachite stone, intense blue eyes, and golden hair. Powerful bio-mechanical nixie tube armor and electric superpowers. Spectacular battle against a dark evil villain with a jeweled third eye in an epic colorful bio-luminescence background with a geometric matrix. Hyper-realistic style, intense colors, 3D, and 4K resolution creating an otherworldly and captivating image.',
				images: ['https://replicate.delivery/pbxt/3rbNjfKGDQxVUCnibfOnY20ofs4XPn5bMXheOABxd3G0lnuCB/out-0.png'],
			},
			'alien portrait': {
				summary: 'alien portrait',
				camera: '3D 4K resolution',
				tags: ['portrait', 'fantasy', 'sci-fi', 'power', 'colorful'],
				female_prompt:
					'Beautiful young alien goddess with malachite stonework, sharp blue eyes, golden hair, and nixie tube armor. Possessing powerful electric superpowers, she stands against an ominous villain with a jeweled third eye in a captivating and otherworldly bio-luminescence background with a geometric matrix. Rendered in hyper-realistic style, intense colors, 3D and 4K resolution make this image mesmerizing.',
				male_prompt:
					'Handsome young alien warrior with malachite stonework, sharp blue eyes, golden hair, and nixie tube armor. Possessing powerful electric superpowers, he stands against an ominous villain with a jeweled third eye in a captivating and otherworldly bio-luminescence background with a geometric matrix. Rendered in hyper-realistic style, intense colors, 3D and 4K resolution make this image mesmerizing.',
				images: ['https://replicate.delivery/pbxt/49GsPeXWycTlYqUqEEyWD5O6YTQSTbZaCyfMlaPFxwHk5prQA/out-0.png'],
			},
			'alien sculpture': {
				summary: 'alien sculpture',
				camera: 'photography, super HD 3K resolution',
				tags: ['scifi', 'futuristic', 'retrofuturism', 'dramatic', 'minimal'],
				female_prompt:
					'A mysterious cinematic shoot of a strange alien sculpture, abstract hair shapes with glowing flowers, woman with an uncanny futuristic mask, bionic clothes and standing in a minimal art gallery interior room. Vintage futurism ambience, white, black, red and gold colors palette. Dystopian reality and retrofuturism sci-fi scene. Real life photorealistic photography with super HD 3K resolution.',
				male_prompt:
					'A mysterious cinematic shoot of a strange alien sculpture, abstract hair shapes with glowing flowers, man with an uncanny futuristic mask, bionic clothes and standing in a minimal art gallery interior room. Vintage futurism ambience, white, black, red and gold colors palette. Dystopian reality and retrofuturism sci-fi scene. Real life photorealistic photography with super HD 3K resolution.',
				images: ['https://replicate.delivery/pbxt/FZcXe7ppJekT2EdmgsLaaUiVmNlkUZZYQ4WErrRrjomW4prQA/out-0.png'],
			},
			'alien tidepool': {
				summary: 'alien tidepool',
				camera: 'beautiful photography with dramatic lighting',
				tags: ['portrait', 'fantasy', 'beach', 'water', 'dramatic'],
				female_prompt:
					'Young woman standing on the beach, hesitating before stepping into the alien tidepool. The shimmering water tugging at her ankles and enticing her to explore. Dramatic lighting in the style of Jingna Zhang and James Jean, featuring lovely photography with vivid colors and details.',
				male_prompt:
					'Young man standing on the beach, hesitating before stepping into the alien tidepool. The shimmering water tugging at his ankles and enticing him to explore. Dramatic lighting in the style of Jingna Zhang and James Jean, featuring stunning photography with vivid colors and details.',
				images: ['https://replicate.delivery/pbxt/Y6YS3QEEtT6lPtxZDknSYZY5cOeXJ6pe3j10FnmPPPMo7prQA/out-0.png'],
			},
			'amazon warrior': {
				summary: 'amazon warrior',
				camera: '',
				tags: ['fantasy', 'Amazon', 'mountain', 'lion', 'dynamic'],
				female_prompt:
					'Gorgeous woman Amazon warrior wearing saber tooth tiger fur amidst snow-capped mountains. Superb blend of fantasy and realism, majestic scenery, graceful movements and strong characters, intense emotion and captivating details.  ',
				male_prompt:
					'handsome human faced, man Amazon warrior wearing saber tooth tiger fur amidst snow-capped mountains. Superb blend of fantasy and realism, majestic scenery, graceful movements and strong characters, intense emotion and captivating details. ',
				images: ['https://replicate.delivery/pbxt/ibVTbIpeOmWlcy9pdGFOpR0SOWtUgynlfUPWHiiDVj8BuNsQA/seed-3316.png'],
			},
			'amazonian cave portrait': {
				summary: 'amazonian cave portrait',
				camera: '',
				tags: ['portrait', 'landscape', 'jungle', 'waterfall', 'ruins'],
				female_prompt:
					'A beautiful photo of a woman inside a lush Amazonian cave with waterfalls, moss-covered ancient ruins, gazing intently into the cave. Dramatic lighting and intense colors, mesmerizing details of the environment, and breathtaking atmosphere.',
				male_prompt:
					'A handsome photo of a man inside a lush Amazonian cave with waterfalls, moss-covered ancient ruins, gazing intently into the cave. Dramatic lighting and intense colors, mesmerizing details of the environment, and breathtaking atmosphere.',
				images: ['https://replicate.delivery/pbxt/sAEu00tIRM7iDJ9GhnlnvY6OmXuMt09Iga8x378EBIy1d6KE/out-0.png'],
			},
			'amazonian portrait': {
				summary: 'amazonian portrait',
				camera: '',
				tags: ['portrait', 'landscape', 'mystical', 'ancient ruins', 'square'],
				female_prompt: 'Beautiful photo of a stunning woman in an Amazonian cave, surrounded by spectacular waterfalls, moss-covered ancient ruins, and entrancing cave walls. Mystical atmosphere, surreal beauty, dreamy colors and smooth lines. ',
				male_prompt:
					'Handsome photo of a dashing man in a mysterious Amazonian cave, surrounded by majestic waterfalls, lush moss-covered ancient ruins and awe-inspiring cave walls. Captivating atmosphere, surreal beauty, dreamy colors and smooth lines. ',
				images: ['https://replicate.delivery/pbxt/ht8IwyVEpApFB5n88asYBx9lbqkerq8JzR8dihEcXXKzMAWIA/seed-36270.png'],
			},
			'ambient portrait': {
				summary: 'ambient portrait',
				camera: '',
				tags: ['portrait', 'ambient light', 'european', 'red hair', 'shadow'],
				female_prompt: 'Striking portrait of a woman in an ambient light setting, with an enthusiastic and joyful expression, European features, bright red hair and beautiful shadows. ',
				male_prompt: 'Dashing portrait of a man in an ambient light setting, with an enthusiastic and joyful expression, European features and handsome shadows. ',
				images: ['https://replicate.delivery/pbxt/Dlm1XbeItKVsPK7B1kvNeOpAmNm7ZPLAgkx4lRiUS4Rf0TXhA/out-0.png'],
			},
			'american pie portrait': {
				summary: 'american pie portrait',
				camera: '30-megapixel 4k 85mm lens F:8 ISO 100 Shutter Speed 1:125',
				tags: ['portrait', 'official', 'formal', 'high quality', 'detail'],
				female_prompt:
					'Miss American Pie close up portrait of a beautiful woman with red and  hair, exquisite detail, 30-megapixel 4k 85mm lens, sharp focus, f:8 ISO 100 shutter speed 1:125, diffuse backlighting, award-winning photography, small catchlight, high sharpness and facial symmetry. 8K resolution.',
				male_prompt:
					'Mr. American Pie close up portrait of a handsome man with golden hair and unique features, exquisite detail, 30-megapixel 4k 85mm lens, sharp focus, f:8 ISO 100 shutter speed 1:125, diffuse backlighting award-winning photography small catchlight high sharpness and facial symmetry. 8K resolution.',
				images: ['https://replicate.delivery/pbxt/PXsSV9Ei3kZWGd3IuJnOdth6kcPkm3B6CWsjseSVe2M55prQA/out-0.png'],
			},
			'american pie portrait 2': {
				summary: 'american pie portrait 2',
				camera: '85mm lens, f:8 aperture, ISO 100 settings, 1/125 shutter speed',
				tags: ['portrait', 'official', 'formal', 'realistic', 'high-resolution'],
				female_prompt:
					'Miss American 🥧 close up portrait of a beautiful woman with red and  hair, exquisite detail, 30-megapixel resolution, 4K resolution, 85mm lens, sharp focus, f:8 aperture, ISO 100 settings, 1/125 shutter speed. Diffuse backlighting to bring out the beauty of her face and features. Award-winning photograph with small catchlight to add depth and sparkle to the eyes. High sharpness and facial symmetry for maximum realism.',
				male_prompt:
					'Mr American 🥧 close up portrait of a handsome man with red and  hair. Exquisite detail at 30-megapixel resolution and 4K resolution with an 85mm lens for sharp focus. F:8 aperture, ISO 100 setting and 1/125 shutter speed for perfect lighting conditions. Diffuse backlighting to bring out the beauty of his face and features. Award-winning photograph with small catchlight for added sparkle in the eyes. High sharpness and facial symmetry for maximum realism.',
				images: ['https://replicate.delivery/pbxt/rOjw0KiGfVxmSahAkOxxuJZjU2nz09vvv6eeiTGy7pqelnuCB/out-0.png'],
			},
			'ancient rome': {
				summary: 'ancient rome',
				camera: 'Sony camera',
				tags: ['portrait', 'ancient', 'realistic', 'cinematic', 'professional'],
				female_prompt: 'Striking portrait of a woman in an ancient Roman setting, highly realistic visuals with cinematic depth and sharpness. Professional lighting techniques, vivid colors, and extreme detail for a surreal look. ',
				male_prompt: 'Strong portrait of a man in an ancient Roman setting, highly realistic visuals with cinematic depth and sharpness. Professional lighting techniques, vivid colors, and extreme detail for a surreal look. ',
				images: ['https://replicate.delivery/pbxt/mzfTeu1fPQRRAJg3KIpa6odxzuqqkbPBiVEhDhDN6QvIwTXhA/out-0.png'],
			},
			'ancient rome portrait': {
				summary: 'ancient rome portrait',
				camera: 'Sony camera',
				tags: ['portrait', 'official', 'formal', 'realistic', 'cinematic'],
				female_prompt:
					'Striking portrait of a woman in ancient Rome, ultra-realistic with cinematic elements. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, professional lighting, extreme details and sharpening techniques. ',
				male_prompt:
					'Distinguished portrait of a man in ancient Rome, ultra-realistic with cinematic elements. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, professional lighting, extreme details and sharpening techniques. ',
				images: ['https://replicate.delivery/pbxt/hWnMFrdM5bZhBJzRj3nfHSurWblYwigrg1D2lOT6TBtOeprQA/out-0.png'],
			},
			'android portrait': {
				summary: 'android portrait',
				camera: '',
				tags: ['portrait', 'modern', 'android', 'retro futuristic', 'symmetric'],
				female_prompt:
					'Beautiful retro-futuristic female android glancing at the camera, white with azure decorations, panels, cables, connection lines, gears, in an energetic retro-futuristic setting. Exquisite blend of pencil and watercolor with fine details, symmetry and harmony of the scene. ',
				male_prompt:
					'Handsome retro-futuristic male android glancing at the camera, white with blue decorations, panels, cables, connection lines, gears in an electric retro-futuristic setting. Exquisite blend of pencil and watercolor with fine details, symmetry and harmony of the scene.',
				images: ['https://replicate.delivery/pbxt/wTdCfvr85ZwgZCYPo2hbItdQibTsUg6LVcIxD0cttsHG80VIA/out-0.png'],
			},
			'android retro': {
				summary: 'android retro',
				camera: '',
				tags: ['android', 'futuristic', 'plastic', 'retro', 'decorative'],
				female_prompt:
					'Striking female android with white and blue decorations, realistic plastic skin, lens eyes, intricate panels, cable lines, intricate gears, and vibrant retro futuristic environment. Hyperrealistic details, soft lighting, and captivating details.',
				male_prompt:
					'Handsome male android with white and blue decorations, realistic plastic skin, lens eyes, intricate panels, cable lines, intricate gears, and vibrant retro futuristic environment. Hyperrealistic details, soft lighting and captivating details.',
				images: ['https://replicate.delivery/pbxt/JF3sggQ8V8b5NdmsxZg84InNhUtWovUpk4gZOPeBdNqw90VIA/out-0.png'],
			},
			'android swim': {
				summary: 'android swim',
				camera: '',
				tags: ['portrait', 'cyberpunk', 'underwater', 'android', 'futuristic'],
				female_prompt:
					'Enchanting portrait of a female android, gracefully swimming through an underwater city, her metallic body glimmering in the alluring light of the futuristic metropolis. Delicate brushstrokes, bold colors, and Frank Frazetta-style artistic direction.',
				male_prompt:
					'Magnetic portrait of a male android, gracefully swimming through an underwater city, his metallic body gleaming in the mesmerizing light of the futuristic metropolis. Delicate brushstrokes, bold colors, and Frank Frazetta-style artistic direction.',
				images: ['https://replicate.delivery/pbxt/ClwrIUuWGCIfeUWwdCj5CZkuhPjeFPpZYmQtsaa0xeGlhnuCB/out-0.png'],
			},
			'angel portrait': {
				summary: 'angel portrait',
				camera: '',
				tags: ['portrait', 'dramatic', 'angel wings', 'elaborate', 'anatomical'],
				female_prompt:
					'Beautiful portrait of a young woman with angel wings wearing an elaborate costume, dramatic lighting, and anatomical accuracy. Inspired by the works of Dean Cornwell, Earl Norem and James Avati, with special attention to the placement of bones, joints, and tendons in her hands. ',
				male_prompt:
					'Handsome portrait of a young man with angel wings wearing an elaborate costume, dramatic lighting, and anatomical accuracy. Inspired by the works of Dean Cornwell, Earl Norem and James Avati, with special attention to the placement of bones, joints, and tendons in his hands. ',
				images: ['https://replicate.delivery/pbxt/XSWsqlbgiQbgHdui814yXy3qneeO3wskv0JZFqhKvWfO0TXhA/out-0.png'],
			},
			'angry nurse': {
				summary: 'angry nurse',
				camera: '',
				tags: ['courtroom', 'sketch', 'angry', 'nurse', 'portrait'],
				female_prompt: 'Courtroom sketch of a female nurse with long black hair and glasses, wearing pink scrubs, a hint of anger visible on her face. Detailed yet expressive sketch, capturing the mood and emotion of the moment. ',
				male_prompt: 'Courtroom sketch of a male nurse with short black hair and glasses, wearing blue scrubs, a hint of frustration visible on his face. Detailed yet expressive sketch, capturing the mood and emotion of the moment. ',
				images: ['https://replicate.delivery/pbxt/mjzdRAR1hp5GPdrpYXWNY9jePIofXxvQLsYEwhMpphueyTXhA/out-0.png'],
			},
			'angry nurse sketch': {
				summary: 'angry nurse sketch',
				camera: '',
				tags: ['portrait', 'official', 'angry', 'long hair', 'courtroom'],
				female_prompt:
					'Forceful courtroom sketch of an enraged female nurse with long black hair, glasses and pink scrubs. Captivating composition of lines and shadows, masterful blend of charcoal and pencils, creative perspective, dynamic contrast and hyperrealistic details.',
				male_prompt:
					'Powerful courtroom sketch of an angered male nurse with long black hair, glasses and pink scrubs. Captivating composition of lines and shadows, masterful blend of charcoal and pencils, creative perspective, dynamic contrast and hyperrealistic details.',
				images: ['https://replicate.delivery/pbxt/py8zReOZhOSaHyxhHObkZ1KocT7DCR2mq0mAv2fCElL08prQA/out-0.png'],
			},
			'angular figure': {
				summary: 'angular figure',
				camera: 'grainy photograph',
				tags: ['photograph', 'ethereal', 'jumpsuit', 'minimalist', 'tesseract'],
				female_prompt:
					'Ethereal glow on an angular woman wearing a black PVC jumpsuit, minimalist design with a tesseract pattern, sleek hairstyle and outstretched arms, tiny black dots and shiny black rubbery backdrop with iridescent bubbles. High-contrast grainy photograph with cold starburst light.',
				male_prompt:
					'Ethereal glow on an angular man wearing a black PVC jumpsuit, minimalist design with a tesseract pattern, sleek hairstyle and outstretched arms, tiny black dots and shiny black rubbery backdrop with iridescent bubbles. High-contrast grainy photograph with cold starburst light.',
				images: ['https://replicate.delivery/pbxt/wnBW9FoWu9rzNdmrB74vdVlA2MLwPuL71M1Qhzme8uhZ80VIA/out-0.png'],
			},
			'anime cyberpunkmarket': {
				summary: 'anime cyberpunkmarket',
				camera: '65mm film, Super Panavision 70 lenses',
				tags: ['anime', 'streetwear', 'cyberpunk', '2077', 'flat-shading'],
				female_prompt:
					'Anime inspired scene of a woman, with wild red hair and freckles, dressed in urban streetwear, walking through a bustling cyberpunk market. Artwork by Ilya Kuvshinov and Akihiko Yoshida, with futuristic 2077 vibes, 65mm film, Super Panavision 70 lenses and neon lighting for dynamic flat-shading details. ',
				male_prompt:
					'Anime inspired scene of a man, with wild red hair and freckles, dressed in urban streetwear, walking through a bustling cyberpunk market. Artwork by Ilya Kuvshinov and Akihiko Yoshida, with futuristic 2077 vibes, 65mm film, Super Panavision 70 lenses and neon lighting for dynamic flat-shading details. ',
				images: ['https://replicate.delivery/pbxt/xewlAlWoE3WEX6aegkIaeXFyxcj1xIV6RXPEcmRaIzQczTXhA/out-0.png'],
			},
			'anime killer': {
				summary: 'anime killer',
				camera: '',
				tags: ['anime', 'closeup', 'killer', 'forest', 'eerie'],
				female_prompt: 'Intense closeup anime illustration of a female killer with long straight black hair, mysterious black eyes behind glasses, and a captivating trenchcoat. ',
				male_prompt: 'Intense closeup anime illustration of a male killer with dark shaggy hair, mysterious eyes hidden behind glasses, and a captivating trenchcoat. ',
				images: ['https://replicate.delivery/pbxt/ksFbxq5VFpYiChAwAfG6LPGnd5McDsvDSYwU7qltEes22prQA/out-0.png'],
			},
			'anime portrait': {
				summary: 'anime portrait',
				camera: 'Unreal engine',
				tags: ['anime', 'CG', 'cinematic', 'colorful', 'photography'],
				female_prompt:
					'Anime-styled young woman with a beautiful smile and radiant face, photorealistic CG work featuring a cinematic angle and lighting, vibrant neon colors, ultra-detailed drawing with many lines and finely drawn eyes. Award-winning photography with a 64K resolution and high sharpness. ',
				male_prompt:
					'Anime-styled young man with an inviting smile and handsome face, photorealistic CG work featuring a cinematic angle and lighting, vibrant neon colors, ultra-detailed drawing with many lines and finely drawn eyes. Award-winning photography with a 64K resolution and high sharpness. ',
				images: ['https://replicate.delivery/pbxt/krMaifIZ0YUCWaXgykOnklIprUPy2cevRyAuK43LPAcS8prQA/out-0.png'],
			},
			'anime rooftop portrait': {
				summary: 'anime rooftop portrait',
				camera: '',
				tags: ['portrait', 'anime', 'Korean', 'cityscape', 'lights'],
				female_prompt: 'Semi-realistic anime-style portrait of a Korean woman, aged 28, with white hair. She stands atop a rooftop overlooking a vibrant cityscape with glimmering lights. Captured in a beautiful bloom.',
				male_prompt: 'Semi-realistic anime-style portrait of a Korean man, aged 28, with white hair. He stands atop a rooftop overlooking a vibrant cityscape with glimmering lights. Captured in a beautiful bloom.',
				images: ['https://replicate.delivery/pbxt/mKqOTF2fohVxGaYbWktemuGpBU3qX42rG6u32bfRQfgOvnuCB/out-0.png'],
			},
			'apocalyptic portrait': {
				summary: 'apocalyptic portrait',
				camera: '',
				tags: ['portrait', 'post-apocalyptic', 'fantasy', 'monsters', 'dynamic'],
				female_prompt:
					'A stunning portrait of a woman in a leather catsuit, heavy makeup, long earrings, and fierce expression. Post-apocalyptic cityscape in the background with monsters and deformed creatures. Gritty and grimdark atmosphere with dynamic lighting and sharp contrast. ',
				male_prompt:
					'A handsome portrait of a muscular middle-aged man with a shaved head, heavy makeup, long earrings, and leather catsuit. Post-apocalyptic cityscape in the background with monsters and deformed creatures. Gritty and grimdark atmosphere with dynamic lighting and sharp contrast.',
				images: ['https://replicate.delivery/pbxt/CeEPOc6dN3X7T6NkUbOPkR27IICxjIu5TGCUVWKXgLY970VIA/out-0.png'],
			},
			'apollo fashion': {
				summary: 'apollo fashion',
				camera: 'Fuji color film',
				tags: ['fashion', 'space', 'retro', 'vernissage', 'fuji'],
				female_prompt:
					'Photo of female fashion models (of various ethnicities) wearing iconic NASA Apollo spacesuits at a fashionable vernissage in the 1990s, with other guests and onlookers in the background. Captured on Fuji color film for an airy, retro-vintage feel.',
				male_prompt:
					'Photo of male fashion models (of various ethnicities) wearing iconic NASA Apollo spacesuits at a fashionable vernissage in the 1990s, with other guests and onlookers in the background. Captured on Fuji color film for an airy, retro-vintage feel.',
				images: ['https://replicate.delivery/pbxt/LRjHQbGZ3lpNE5Bs81IiAzVSuiHBWSeiAfbzxETSjYCH7prQA/out-0.png'],
			},
			'aquatic portrait': {
				summary: 'aquatic portrait',
				camera: 'Mamiya C33, 80mm lens, expired Kodak Kodacolor 400 film',
				tags: ['surrealism', 'watery', 'blue', 'Mamiya C33', 'Kodak Kodacolor400'],
				female_prompt:
					'An ethereal woman floating in a pool of water inspired by Elsa Bleda and Sydney Sweeney, surrealistic scene with blue hued eyes gazing towards the viewer. Masterful blend of soft focus, mists, and dreamlike colors, using a Mamiya C33 with an 80mm lens and expired Kodak Kodacolor 400 film.',
				male_prompt:
					'A dashing man floating in an aquatic pool inspired by Elsa Bleda and Sydney Sweeney, surrealistic scene with blue hued eyes gazing towards the viewer. Masterful blend of soft focus, mists, and dreamlike colors, using a Mamiya C33 with an 80mm lens and expired Kodak Kodacolor 400 film.',
				images: ['https://replicate.delivery/pbxt/ihct1I8larLGNxyzlq87KEOGIeltfmx8cQ2CnLbkziy84prQA/out-0.png'],
			},
			'araki style': {
				summary: 'araki style',
				camera: '',
				tags: ['character design', 'exaggerated', 'manga', 'traditional', 'colorful'],
				female_prompt:
					'Graceful character design of a beautiful woman with an exaggerated body shape, delicate features and few clothes. Inspired by the artstyle of Hirohiko Araki: Steel Ball Run, JOJOLION, Diamond is Unbreakable. Manga panel hand drawn in traditional Japanesse letters and colorful, with finely intricate details and ultra high quality. ',
				male_prompt:
					'Powerful character design of a strong man with an exaggerated body shape, striking features and few clothes. Inspired by the artstyle of Hirohiko Araki: Steel Ball Run, JOJOLION, Diamond is Unbreakable. Manga panel hand drawn in traditional Japanesse letters and colorful, with finely intricate details and ultra high quality. ',
				images: ['https://replicate.delivery/pbxt/pdMJ5PakdTY8KJQf8McfSL6v5sYGHFqPV5WFnWoGBo3F3prQA/out-0.png'],
			},

			'aristocratic portrait': {
				summary: 'aristocratic portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'Gothic', 'dramatic', 'impressionism'],
				female_prompt:
					'Aristocratic Queen Tsarina, Queen of Bones, regal and aloof expression with sharp features, long braids and a black uniform, her ominous presence captured in a face portrait with an elaborate European Gothic crown. A horror-infused composition of symmetry and darkness, sitting on a Gothic throne with black and gold accents, porcelain skin and dramatic face paint. Inspired by Edmund Blair Leighton, HR Giger, Zdislav Beksinski and Henri de Toulouse-Lautrec. Captured in a foggy setting with sparks of light in an oil painting style reminiscent of impressionism and chiaroscuro.',
				male_prompt:
					'Aristocratic King Tsar, King of Bones, regal and aloof expression with sharp features, long hair and a black uniform, his ominous presence captured in a face portrait with an elaborate European Gothic crown. A horror-infused composition of symmetry and darkness, sitting on a Gothic throne with black and gold accents, porcelain skin and dramatic face paint. Inspired by Edmund Blair Leighton, HR Giger, Zdislav Beksinski and Henri de Toulouse-Lautrec. Captured in a foggy setting with sparks of light in an oil painting style reminiscent of impressionism and chiaroscuro.',
				images: ['https://replicate.delivery/pbxt/nQ3DNedFOawdMKzN4e5K9oOmdkTLGJKkEtm9eihQTqDkuTXhA/out-0.png'],
			},
			'armored knight': {
				summary: 'armored knight',
				camera: '',
				tags: ['anime', 'knight', 'dragon', 'beach', 'dawn'],
				female_prompt:
					'Anime inspired illustration of an olive-skinned female knight in armor with a black ponytail and glasses, gently petting a majestic white dragon on a beach at dawn. Unique visual style, powerful colors, dynamic lighting and shadow effect, fairy tale atmosphere. ',
				male_prompt:
					'Anime inspired illustration of a dashing male knight in armor with a  ponytail and glasses, tenderly petting a majestic white dragon on a beach at dawn. Unique visual style, powerful colors, dynamic lighting and shadow effect, magical tone. ',
				images: ['https://replicate.delivery/pbxt/4leTe78JFnvg0kiSJOICeNCFVSO6MXddjNBefaLXTLsTvOdFC/out-0.png'],
			},
			'artgerm portrait': {
				summary: 'artgerm portrait',
				camera: '',
				tags: ['portrait', 'anime', 'doe eyes', 'shading', 'centered'],
				female_prompt: 'Beautifully drawn anime portrait of a gorgeous woman with large doe eyes, dynamic pose and perfectly shaded features. Captivating artwork by Artgerm and Kleggt, with an ultra-realistic display of the Doe eye supremacy. ',
				male_prompt: 'Impressive anime portrait of a handsome man with stunning doe eyes, graceful pose and flawlessly shaded features. Exquisite artwork by Artgerm and Kleggt, with an ultra-realistic display of the Doe eye supremacy. ',
				images: ['https://replicate.delivery/pbxt/rLYfAi9D3ZUYZyeRqb7KxLGK7E4lV8Pve2bs6dKg8tNh6TXhA/out-0.png'],
			},
			'artistic portrait': {
				summary: 'artistic portrait',
				camera: 'Not applicable',
				tags: ['portrait', 'official', 'artistic', 'dynamic', 'vibrant'],
				female_prompt: 'Stunning portrait of a woman, with a beautiful expression and delicate features. Captured in a dynamic composition, with vivid and stunning colors, and art by Yanjun Cheng and Andrey Remnev.',
				male_prompt: 'Handsome portrait of a man, with a strong expression and chiseled features. Captured in a dynamic composition, with vibrant and stunning colors, and art by Yanjun Cheng and Andrey Remnev.',
				images: ['https://replicate.delivery/pbxt/pjjKObsizfQ9TqhnhvaHtdWNDQKaDjLlbqbd8ICdkzs980VIA/out-0.png'],
			},
			'astronaut painting': {
				summary: 'astronaut painting',
				camera: '',
				tags: ['space', 'astronaut', 'retrofuturism', 'acrylic painting', 'expansive'],
				female_prompt:
					'Fascinating acrylic painting of a female astronaut in a distant view, retrofuturism and sci-fi aesthetic with a sprawling space colony backdrop. Energetic composition, unique color palette with bright shades, dynamic brushwork and meticulous details by Earl Moran. ',
				male_prompt:
					'Enticing acrylic painting of a male astronaut in a far away shot, retrofuturism and sci-fi atmosphere with an expansive space colony backdrop. Exciting composition, vibrant color palette, energetic brushwork and meticulous details by Earl Moran. ',
				images: ['https://replicate.delivery/pbxt/eej3vqkdjorX8kgipoXfnOsS7XAiQSpsO2JL9eN9TRDCxnuCB/out-0.png'],
			},
			'aubrey hepburn portrait': {
				summary: 'aubrey hepburn portrait',
				camera: 'Studio photography',
				tags: ['portrait', 'iconic', 'vibrant', 'magazine', 'professional'],
				female_prompt: 'Glamorous portrait of Aubrey Hepburn as Velma, with vibrant colors and an adorable 20-year-old body quality photography for magazine. Professional glossy studio photography with high resolution and exquisite details.',
				male_prompt: 'Charming portrait of a man in an iconic role, with vibrant colors and an elegant body quality photography for magazine. Professional glossy studio photography with high resolution and exquisite details.',
				images: ['https://replicate.delivery/pbxt/UOpMPe21c3wERyTueGYt7YivvR6a6fCQ4yeiHjlRxIQaknuCB/out-0.png'],
			},
			'aurora vega': {
				summary: 'aurora vega',
				camera: '',
				tags: ['portrait', 'official', 'white dress/suit', ' hair', 'confident'],
				female_prompt: 'Aurora Vega, an exquisite woman with cascading  locks in sharp layers, wearing a luminous white gown and exuding confidence. Elegant details, sleek silhouette, glamorous pose and subtle color gradation.',
				male_prompt: 'Handsome portrait of a man with striking hairstyle, wearing a sophisticated white suit and exuding confidence. Elegant details, sleek silhouette, glamorous pose and subtle color gradation.',
				images: ['https://replicate.delivery/pbxt/sEscBBK5zIozDZpVonuZ9jRHjCVS7dxiTGGDe80eS27K8prQA/out-0.png'],
			},
			'avant garde fashion': {
				summary: 'avant garde fashion',
				camera: '',
				tags: ['anime', 'cyberpunk', 'fashion', 'runway', 'proportional'],
				female_prompt:
					'Gorgeous Anime woman with a proportional body wearing an avant-garde biomechanical cyberpunk fashion made with the equation πr squared on the runway at Paris Fashion Week. Futuristic style, exquisite details and unique shapes, bold colors and intricate textures, sleek silhouette, and creative dynamism.',
				male_prompt:
					'Handsome Anime man with a proportional body wearing an avant-garde biomechanical cyberpunk fashion made with the equation πr squared on the runway at Paris Fashion Week. Futuristic style, exquisite details and unique shapes, bold colors and intricate textures, sleek silhouette, and creative dynamism.',
				images: ['https://replicate.delivery/pbxt/mfRkeS0jg3jNkEKgEPjjwUTrdAdGvTBrZHor8DavCqyq7prQA/out-0.png'],
			},
			'avant garde portrait': {
				summary: 'avant garde portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'full body'],
				female_prompt:
					'Stunning model female in an avant-garde look featuring Versace filigree lace crop top and a magnificent Cernunnos headdress. Highly detailed and intricate design, cinematic pose and dynamic natural lighting adding depth to the image. ',
				male_prompt: 'Handsome model male in an avant-garde look featuring Versace filigree lace crop top, a magnificent Cernunnos headdress with intricate details, and a dynamic pose framed by natural lighting. ',
				images: ['https://replicate.delivery/pbxt/JpJKNCq9MupLJFukmdhyw8WOV3NuIBrlslaXtlmsPTIKe0VIA/out-0.png'],
			},
			'cinematic epic portrait': {
				summary: 'cinematic epic portrait',
				camera: '64K photography, high-sharpness',
				tags: ['anime', 'cinematic', 'CG', 'colorful', 'neon'],
				female_prompt:
					'Enchanting portrait of a young woman, with a bright smile and beautiful features. Cinematic lighting and angle create an otherworldly atmosphere. Hand-crafted CG work with neon colors, surreal details and ultra sharpness. A hypnotizing photo worthy of an award.',
				male_prompt:
					'Dashing portrait of a young man, with a distinguished smirk and strong features. Cinematic lighting and angle create an otherworldly atmosphere. Hand-crafted CG work with neon colors, surreal details and ultra sharpness. A mesmerizing photo worthy of an award.',
				images: ['https://replicate.delivery/pbxt/ufyyVjhi2OwefIcjFZoG8dyExJiAFn2lJ6oxu83xC7Do2TXhA/out-0.png'],
			},
			'award-winning portrait': {
				summary: 'award-winning portrait',
				camera: 'Canon DSLR, f/2.8 exposure, 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Perfectly beautiful portrait of a female with flora and fauna, elegant textile drapery with ornamental details, photorealistic wide view with grayscale color gradation, masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. Cinematic and award winning photo.',
				male_prompt:
					'Handsome portrait of a man with foliage and majestic creatures, sophisticated backdrop with ornate drapery and decorative details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. Cinematic and award winning photo.',
				images: ['https://replicate.delivery/pbxt/zWfg85DbIyUELyPU1kOnMAxwjgmLVt21s3v2pWuatRxF90VIA/out-0.png'],
			},
			'award winning art': {
				summary: 'award winning art',
				camera: '',
				tags: ['fantasy', 'warrior', 'monsters', 'shamrock', 'mystic'],
				female_prompt:
					'Fierce female warrior in shining translucent silver armor facing off a horde of demonic monstrous creatures advancing below a canopy of giant shamrock leaves. Majestic ray of light piercing the dark eerie dreamy mystic ambiance, incredible volumetric lighting and shadows, shining with strength and bravado amidst a foreboding doom. Inspired by Moebius and Frazetta.',
				male_prompt:
					'Powerful male warrior in shining translucent silver armor facing off a horde of demonic monstrous creatures advancing below a canopy of giant shamrock leaves. Majestic ray of light piercing the dark eerie dreamy mystic ambiance, incredible volumetric lighting and shadows, standing tall with might and courage amidst a foreboding doom. Inspired by Moebius and Frazetta.',
				images: ['https://replicate.delivery/pbxt/3ZmgOgpqPJ4XHVQ4f7xyX3JAfAD4qnpVtEJfvVxlE2NcwTXhA/out-0.png'],
			},
			'baker anime': {
				summary: 'baker anime',
				camera: '',
				tags: ['baker', 'character design', 'background art', 'fine art key visual', '3:2'],
				female_prompt:
					'Vibrant portrait of a female baker, character design by Akihiko Yoshida for Atelier Lulua, KyoAni, Granblue Fantasy. Background art by Krenz Cushart for Atelier Firis, Space Dandy, K-ON. Fine art key visual by Masamune Shirow for Shining Resonance, Guilty Crown, Last Exile. ',
				male_prompt:
					'Dynamic portrait of a male baker, character design by Akihiko Yoshida for Atelier Lulua, KyoAni, Granblue Fantasy. Background art by Krenz Cushart for Atelier Firis, Space Dandy, K-ON. Fine art key visual by Masamune Shirow for Shining Resonance, Guilty Crown, Last Exile.',
				images: ['https://replicate.delivery/pbxt/c4yITdAwkf3fDknN8ZBymihONVJH0MG8tWFkWHfev5GEsnuCB/out-0.png'],
			},
			'bakery scene': {
				summary: 'bakery scene',
				camera: '',
				tags: ['portrait', 'official', 'bakery', 'food', 'cozy'],
				female_prompt:
					'Young woman in Parisian bakery, carefully arranging a tray of freshly baked pies. Rich dark chocolate curls and warm brown eyes, a simple dress with white apron and rosy cheeks from the heat of the ovens. Flaky crust and sweet fruity aroma, customers chatting and clatter of dishes in the background. Step back to appreciate her work, proud smile filled with satisfaction. Golden crusts and colorful fruit spilling out from the edges, creating delicious pies.',
				male_prompt:
					'Young man in Parisian bakery, carefully arranging a tray of freshly baked pies. Rich dark chocolate curls and warm brown eyes, a simple dress with white apron and rosy cheeks from the heat of the ovens. Flaky crust and sweet fruity aroma, customers chatting and clatter of dishes in the background. Step back to appreciate his work, proud smile filled with satisfaction. Golden crusts and colorful fruit spilling out from the edges, creating delicious pies.',
				images: ['https://replicate.delivery/pbxt/Evt3XHXa6rLhMJuQemfQ2rzIsf7PTdaiBVa0auq0Izkw5TXhA/out-0.png'],
			},
			'baroque character': {
				summary: 'baroque character',
				camera: '',
				tags: ['portrait', 'closeup', 'comic', '18th century', 'rococo'],
				female_prompt:
					'Glamorous portrait of a beautiful adult woman from the 18th century, baroque collar, and rococo dress. Close up of her face with multiple angles, comic-style design concept featuring Kaiserin Maria Theresia wearing a chemisette and capelet. Grey hair in baroque style, silk lace details and hyperrealistic detailing. ',
				male_prompt:
					'Handsome close up portrait of an adult male character from the 18th century. Multiple angles, comic-style design concept with a bold baroque collar and rococo outfit. Hyperrealistic detailing and grey hair in baroque style for an exquisite look. ',
				images: ['https://replicate.delivery/pbxt/9Y3yCajntqaQKdmS5WL2oc5YceApQFYe1FXyJ1RCfoQeynuCB/out-0.png'],
			},
			"barrett's privateers": {
				summary: "barrett's privateers",
				camera: 'No information provided',
				tags: ['seaside', 'storytelling', 'nostalgic', 'rugged', 'weathered'],
				female_prompt:
					'A determined woman looking out at the sea, reminiscing a story of lost glory and broken promises, with only a tattered flag and a broken heart to show for her days of privateering. Moody lighting, deep blues and sun-kissed sepia tones create a mysterious atmosphere.',
				male_prompt: 'A strong man standing at the Halifax harbour, reflecting on days gone by with a somber expression upon his face. Nostalgic mood, weathered textures and faded colors evoke an emotional story of lost dreams. ',
				images: ['https://replicate.delivery/pbxt/KP8h5iffJEiwP0iqgljU3U5QvVmfRraegL5mR5fUPsqlXPdFC/out-0.png'],
			},
			'bartender portrait': {
				summary: 'bartender portrait',
				camera: '',
				tags: ['portrait', 'official', 'restaurant', 'furniture', 'mid-century'],
				female_prompt: 'Cheerful photo of a female bartender smiling into the camera, in a restaurant decorated with mid-century furniture. Soft lighting, natural colors and subtle details, vintage atmosphere and modern charm. ',
				male_prompt: 'Happy photo of a male bartender smiling into the camera, in a restaurant furnished with mid-century furniture. Soft lighting, natural colors and delicate details, vintage atmosphere and modern flair. ',
				images: ['https://replicate.delivery/pbxt/IrCllMD8NF7YAl5sURfdxJQWUvOoGD7hGCA22CMfjKvS5prQA/out-0.png'],
			},
			'battle axe hero': {
				summary: 'battle axe hero',
				camera: '',
				tags: ['fantasy', 'heroic', 'lumberjack', 'axe', 'flower'],
				female_prompt:
					'Beautiful and powerful looking woman, cheerful expression, fit physique, muscular arms, wielding a battle axe in the forest, lumberjack look, a flower on the side of her head. Heroic fantasy hero with a Final Fantasy feel. Dungeons and Dragons vibe, strong vibes + Pixar art style + Overwatch art style.',
				male_prompt:
					'Handsome and strong looking man, happy looking man, muscular body, strong arms holding a battle axe in the forest. Lumberjack look, a flower on the side of his head. Heroic fantasy hero with a Final Fantasy feel. Dungeons and Dragons vibe, shaved hair on one side + trimmed beard, strong vibes + Pixar art style + Overwatch art style.',
				images: ['https://replicate.delivery/pbxt/Fed95DkDcVyuLag3L3qLAAkKbW7ZfO4gKtuLHbtQhABXNCsQA/seed-48528.png'],
			},
			'battle ranger': {
				summary: 'battle ranger',
				camera: 'photo',
				tags: ['portrait', 'fantasy', 'battle', 'heroic', 'holographic'],
				female_prompt:
					'Powerful key visual of a female battle ranger, heroic stance, alien liquid armor and holographic energy force field. Highly detailed photography mixed with overlay watercolored pencil, cinematic setting, dynamic lighting and extreme resolution. ',
				male_prompt:
					'Fierce key visual of a male battle ranger, heroic stance, alien liquid armor and holographic energy force field. Highly detailed photography mixed with overlay watercolored pencil, cinematic setting, dynamic lighting and extreme resolution. ',
				images: ['https://replicate.delivery/pbxt/JbSS7owKxyasD9nY3RxDdd1HeUumSMgtx6Nr04g4xfly7prQA/out-0.png'],
			},
			'beach bar portrait': {
				summary: 'beach bar portrait',
				camera: '',
				tags: ['portrait', 'ethnic', 'beach', 'festive', 'vibrant'],
				female_prompt:
					'Ethnic black and Puerto Rican woman lounging in a bustling beach bar, casual but festive mood and warm atmosphere. Silky fabrics and natural fibers, vibrant colors, and playful accessories. Radiant expression with a hint of nostalgia.',
				male_prompt: 'Ethnic black and Puerto Rican man reclining at a lively beach bar, cheerful aura with festive decorations. Soft materials, bright colors, and whimsical trinkets. Joyful expression with a touch of nostalgia.',
				images: ['https://replicate.delivery/pbxt/8ykb65RDo4aoB5zeZqp3uSojW5GnhdUclcKibDVzutNB90VIA/out-0.png'],
			},
			'beach portrait': {
				summary: 'beach portrait',
				camera: '',
				tags: ['portrait', 'official', 'flowers', 'sunny', 'refined'],
				female_prompt:
					"Stunning oil painting of a beautiful woman on a beach, surrounded by colorful flowers and bathed in warm sunshine. The woman's poise should be graceful and tranquil, while the vibrant hues of the flowers capture the natural beauty of the scene. Refined, sophisticated painting style with an emphasis on capturing the peaceful atmosphere.",
				male_prompt:
					'Handsome oil painting of a man on a beach, surrounded by vivid flowers and mellowed by warm sunlight. His pose should be composed and serene, contrasted with the lively colors of the flowers. Refined, sophisticated painting style with an emphasis on conveying the tranquil atmosphere.',
				images: ['https://replicate.delivery/pbxt/19bEzbBNhzrPDNbGBZqB6ScQuo9nLilkOBxz1bnaNGEud6KE/out-0.png'],
			},
			'bedtime portrait': {
				summary: 'bedtime portrait',
				camera: 'HDR quality 8K resolution',
				tags: ['portrait', 'dramatic', '', 'blue-eyed', 'night'],
				female_prompt:
					'A  woman with blue eyes, like a clone of Blake Lively, Gemma Ward, or Natalie Dormer, laying in bed at night wearing an unbuttoned translucent old shirt and short shorts with a plunging neckline. Wide angle full shot side facing the scene, gorgeous detailed blue eyes, messy long  hair, dynamic pose, perfect shading and cinematic composition. Cinematic lighting and dramatic lighting for HDR quality 8K resolution.',
				male_prompt:
					'A handsome man with blue eyes and  hair like a striking combination of Blake Lively, Gemma Ward, or Natalie Dormer in bed at night. Unbuttoned translucent old shirt and short shorts with plunging neckline. Wide angle full shot side facing the camera capturing all the exquisite details of his face. Messy long  hair adding to the dynamic pose while perfect shading and cinematic composition is captured with HDR quality 8K resolution.',
				images: ['https://replicate.delivery/pbxt/JgfxEKuEnbRKX6XjnJIKy2HdU4i9xwthoYbZkKl7FWIn50VIA/out-0.png'],
			},
			'bio-mech portrait': {
				summary: 'bio-mech portrait',
				camera: 'Very detailed photography',
				tags: ['portrait', 'fantasy', 'blue', 'humanoid', 'detailed'],
				female_prompt: 'Stunning portrait of a beautiful blue female biomechanical humanoid alien, design by Enki Bilal. Very detailed photography and dreamy fantasy atmosphere, inspired by the Star Wars universe. ',
				male_prompt: 'Handsome portrait of a blue male biomechanical humanoid alien, design by Enki Bilal. Very detailed photography and dreamy fantasy atmosphere, inspired by the Star Wars universe. ',
				images: ['https://replicate.delivery/pbxt/La9baMZTZSLkIp4SgsHuPs7fOGuyUEe4XTYr7l9ef87MknuCB/out-0.png'],
			},

			'biomech goddess': {
				summary: 'biomech goddess',
				camera: 'Octane Render, cinematic lighting, atmospheric lighting, volumetric lighting, 8k',
				tags: ['biotechnology', 'alien', 'biomech', 'fantasy', 'nebula'],
				female_prompt:
					'Gorgeous human female goddess wearing a biomorphic ant exosuit, inspired by Luis Royo and Peter Gric designs. Majestic nebula with volumetric clouds, stars and vapors, extreme detail and photorealistic quality. Cinematic lighting with octane render, atmospheric lighting and 8k.',
				male_prompt:
					'Powerful biotechnology organic alien living biomech ant, inspired by Luis Royo and Peter Gric designs. Majestic nebula with volumetric clouds, stars and vapors, extreme detail and photorealistic quality. Cinematic lighting with octane render, atmospheric lighting and 8k',
				images: ['https://replicate.delivery/pbxt/9TEFLag5IWIzGBzNweziQqnukfvClzMLUlrc5QMGMnfwzTXhA/out-0.png'],
			},
			'biomechanical cyborg': {
				summary: 'biomechanical cyborg',
				camera: '',
				tags: ['retro futurism', 'biomechanical', 'cyborg', 'abandoned', 'shamrock'],
				female_prompt:
					'A strange, otherworldly scene of a female biomechanical cyborg robot, deactivated and abandoned in a shady shamrock field. Nature has taken over, with lots of moss and dust covering it. Spiritual energy, low-angled light and early morning mist add to the mysterious atmosphere of the countryside with hills in the distance. Hyperdetailed painting style inspired by Donato Giancola, Anders Zorn, Giovanni Battista Tiepolo and Joel Sartore. Wet hyper-detailed vibrant cinematic raking light, stunning subsurface scattering, chromatic aberration and unique perspective for a photorealistic finish.',
				male_prompt:
					'A strange, otherworldly scene of a male biomechanical cyborg robot, deactivated and abandoned in a shady shamrock field.  Nature has taken over, with lots of moss and dust covering it. Spiritual energy, low-angled light and early morning mist add to the mysterious atmosphere of the countryside with hills in the distance. Hyperdetailed painting style inspired by Donato Giancola, Anders Zorn, Giovanni Battista Tiepolo and Joel Sartore. Wet hyper-detailed vibrant cinematic raking light, stunning subsurface scattering, chromatic aberration and unique perspective for a photorealistic finish.',
				images: ['https://replicate.delivery/pbxt/Ze6sfeTI7zKX1JLnfmHJdbYVeRSVtvacPZVjAIhYx3eT5e0VIA/out-0.png'],
			},
			'biomechanical portrait': {
				summary: 'biomechanical portrait',
				camera: 'Star Wars universe',
				tags: ['portrait', 'sci-fi', 'cyberpunk', 'futuristic', 'detailed'],
				female_prompt:
					'Stunning portrait of a beautiful blue female biomechanical humanoid alien, features of Brie Larson, design by Enki Bilal, very detailed photography, star wars universe. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Handsome portrait of a blue male biomechanical humanoid alien with features of Brie Larson, design by Enki Bilal. Captivating realism with intricate details and vivid colors. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/VHdaaM0XL35OLtfNLfMgHLG4LdHqBKPlphffag1UTqM9eOdFC/out-0.png'],
			},
			'biomechanical robot': {
				summary: 'biomechanical robot',
				camera: '',
				tags: ['retro', 'futuristic', 'cyborg', 'robot', 'mysterious'],
				female_prompt:
					'Strange and otherworldly retro futurism biomechanical cyborg female robot, deactivated and abandoned in a shamrock field that glistens in the light. Nature has taken over, with lots of shamrock moss and dust on it, spiritual energy, low-angled light and morning mist over a countryside with hills and a forest in the distance. Hyperdetailed by Donato Giancola, Anders Zorn, Giovanni Battista Tiepolo, Joel Sartore. Wet hyper-detailed vibrant cinematic raking light, stunning subsurface scattering and chromatic aberration for a unique perspective, photorealistic.',
				male_prompt:
					'Strange and otherworldly retro futurism biomechanical cyborg male robot, deactivated and abandoned in a shamrock field that glistens in the light. Nature has taken over, with lots of shamrock moss and dust on it, spiritual energy, low-angled light and morning mist over a countryside with hills and a forest in the distance. Hyperdetailed by Donato Giancola, Anders Zorn, Giovanni Battista Tiepolo, Joel Sartore. Wet hyper-detailed vibrant cinematic raking light, stunning subsurface scattering and chromatic aberration for a unique perspective , photorealistic.',
				images: ['https://replicate.delivery/pbxt/MasIKO8b8SqxINOYrFVo5fQfXLBT2TDdWev1kjhxGfoUtnuCB/out-0.png'],
			},
			'biotech ant': {
				summary: 'biotech ant',
				camera: 'Octane render, photographic lighting, 8K volumetric lighting.',
				tags: ['biotechnology', 'organic', 'alien', 'nebula', 'exosuit'],
				female_prompt:
					'Majestic biotechnological alien living biomech ant, gorgeous human female goddess wearing a biomorphic ant exosuit to contain her power. Set amidst a beautiful nebula, clouds, vapors and stars. High detailed 8K volumetric lighting and cinematic atmosphere. Octane render for photorealistic textures and photorealism.',
				male_prompt:
					'Dynamic biotechnological alien living biomech ant designed in the style of Luis Royo and Peter Gric. Handsome human male hero wearing a biomechanical ant exosuit to contain his power. Surrounded by a majestic nebula, clouds, vapors and stars. High detailed 8K volumetric lighting and cinematic atmosphere. Octane render for photorealistic textures and photorealism.',
				images: ['https://replicate.delivery/pbxt/fpPuex4dVrvmNkqT1kffSZJpH1afyfEwIrpa5HGtkc4YUf0VIA/out-0.png'],
			},
			'black-winged angel': {
				summary: 'black-winged angel',
				camera: '',
				tags: ['angel', 'garden', 'vibrant', 'emerald', 'wings'],
				female_prompt:
					'A beautiful black-winged angel woman with hair loosely pinned to her head, smelling flowers in a garden, wearing a vibrant emerald green dress. The stunning light reflects off her wings and creates a captivating atmosphere. Soft colors and delicate details create an enchanted composition that brings you into the moment.',
				male_prompt:
					'A handsome black-winged angel man with hair loosely pinned to his head, smelling flowers in a garden, wearing a vibrant emerald green dress. The stunning light reflects off his wings and creates an enchanting atmosphere. Soft colors and delicate details create a captivating composition that transports you into the moment.',
				images: ['https://replicate.delivery/pbxt/eKB7NtNcuGzuJKugyj3HaY7i5QErfdytfA5A1grIlerBwnuCB/out-0.png'],
			},
			'blond cafe': {
				summary: 'blond cafe',
				camera: '',
				tags: ['face', 'cafe', 'style', 'dynamic', '8k'],
				female_prompt:
					' woman with blue eyes sitting in a cafe, elegant and knowing expression, Blake Lively/Gemma Ward/Natalie Dormer-esque features and Abbey Chase from Danger Girl comics style. Unbuttoned blue translucent shirt, highly realistic render quality, Scott J Campbell-inspired art direction, dynamic pose and cinematic composition at 8K resolution.',
				male_prompt:
					'Handsome man with blond hair and bright blue eyes seated in a cafe. Elegant expression, intrepid gaze. He wears a buttoned up shirt in the style of Abbey Chase from Danger Girl comics. Ultra realistic render quality in the same style as artist Scott J Campbell, dynamic pose and cinematic composition at 8K resolution.',
				images: ['https://replicate.delivery/pbxt/Nw7h8fOYFJ0sMyubluDPaHRjRGqwudBXDHqtjm3MteZevTXhA/out-0.png'],
			},
			'blond portrait': {
				summary: 'blond portrait',
				camera: 'None (illustration)',
				tags: ['portrait', 'fantasy', 'autumn', 'illustration', 'animals'],
				female_prompt:
					'Beautiful woman with golden hair, wearing a rustic safari dress and holding a yellow umbrella, sitting by a majestic lion in the bottom of the tree. Captivating autumn illustration by Alex Ross, soft illumination with warm colors, detailed textures and vivid shadows.',
				male_prompt:
					'Handsome man with blond hair, wearing a safari inspired outfit and holding an iconic yellow umbrella, standing nearby a majestic lion at the bottom of the tree. Captivating autumn illustration by Alex Ross, soft illumination with warm colors, detailed textures and vivid shadows.',
				images: ['https://replicate.delivery/pbxt/ZbI7HhzoBBbeVa37nORfqaD9mUxF1Sw6fAvw2xeeRnjYFPdFC/out-0.png'],
			},
			'blue-eyed portrait': {
				summary: 'blue-eyed portrait',
				camera: 'HDR 8K capture',
				tags: ['portrait', 'hot-spring', 'style', 'photography', 'cinematic'],
				female_prompt:
					'Stunning  woman with bright blue eyes, wading through a hot spring wearing a stylish tube top and short shorts. Plunging neck line and detailed facial features, wide angle shot for full body composition, side facing shot for a dynamic pose. Photography featuring gorgeous detailed blue eyes, messy  hair, perfect shading and cinematic composition. Elaborate cinematic lighting and dramatic HDR 8K capture.',
				male_prompt:
					'Handsome male with bright blue eyes wading through a hot spring wearing stylish tube top and short shorts. Plunging neck line and detailed facial features, wide angle shot for full body composition, side facing shot for dynamic pose. Photography featuring gorgeous detailed blue eyes, messy hair style, perfect shading and cinematic composition. Elaborate cinematic lighting and dramatic HDR 8K capture.',
				images: ['https://replicate.delivery/pbxt/5ndfrFVTQ20qKSm7Df8oeFloogqlY6BQ0k4uQqpedZVyjnuCB/out-0.png'],
			},
			'blue-haired portrait': {
				summary: 'blue-haired portrait',
				camera: 'DSLR Telephoto lens',
				tags: ['portrait', 'fantasy', 'blue hair', 'floral', 'dark medieval'],
				female_prompt:
					'Close-up of a woman with blue hair, floral garlands, storybook illustration in dark medieval fantasy style, inspired by Gustav Klimt, Ayami Kojima, Craig Mullins, Eyvind Earle, Alan Lee, Henri Rousseau and Guillermo del Toro. Photorealistic quality and high resolution with a DSLR Telephoto lens.',
				male_prompt:
					'Close-up of a man with blue hair, floral garlands, storybook illustration in dark medieval fantasy style, inspired by Gustav Klimt, Ayami Kojima, Craig Mullins, Eyvind Earle, Alan Lee, Henri Rousseau and Guillermo del Toro. Photorealistic quality and high resolution with a DSLR Telephoto lens.',
				images: ['https://replicate.delivery/pbxt/jffSQK7SUzt4F03m6ko1XfKvsaqPthZ5t1dzfDt7K2sFknuCB/out-0.png'],
			},
			'blue alien portrait': {
				summary: 'blue alien portrait',
				camera: 'Very detailed photography',
				tags: ['portrait', 'fantasy', 'biomechanical', 'alien', 'sci-fi'],
				female_prompt: 'Beautiful portrait of a blue female biomechanical humanoid alien, featuring the likeness of Brie Larson and inspired by Enki Bilal. Detailed photography and set design inspired by the Star Wars universe. ',
				male_prompt: 'Handsome portrait of a blue male biomechanical humanoid alien, featuring the likeness of Brie Larson and inspired by Enki Bilal. Detailed photography and set design inspired by the Star Wars universe. ',
				images: ['https://replicate.delivery/pbxt/YB8i13v2eIzOISyXcnVXRx6Xzo8XYFrw5EiQc5e7XCXB9prQA/out-0.png'],
			},
			'blue catsuit': {
				summary: 'blue catsuit',
				camera: '',
				tags: ['official', 'formal', 'blue', 'full body', 'square'],
				female_prompt: 'Tall and gorgeous blond woman in a striking blue catsuit, high definition detail and vibrant colors, perfect symmetry, and captivating poses. ',
				male_prompt: 'Handsome tall man wearing a sleek blue catsuit, fine art quality with dynamic angles and crisp silhouettes. ',
				images: ['https://replicate.delivery/pbxt/OJkYhHnlfkwsKSrImrqjWlRpIttjb9rL61UwrdnxUaoy80VIA/out-0.png'],
			},
			'blue fighter': {
				summary: 'blue fighter',
				camera: '',
				tags: ['fighter', 'anime', 'mortal kombat', 'fantasy', 'realism'],
				female_prompt: 'Fierce female warrior with blue hair, grey skin, bold blue braid, piercing blue eyes and long legs. Muscular physique with tights and extreme anime elements of realism. ',
				male_prompt: 'Daring male fighter with light  hair, grey skin, long hair braids and intense blue eyes. Muscled body and legs with tights and edgy anime style. ',
				images: ['https://replicate.delivery/pbxt/Eyj6tyZ4CJbtJRO44z0s8ETrbyKwPqhxzhB19uIHjqQXd6KE/out-0.png'],
			},
			'blue hair portrait': {
				summary: 'blue hair portrait',
				camera: 'DSLR and telephoto lens',
				tags: ['portrait', 'fantasy', 'floral', 'illustration', 'medieval'],
				female_prompt:
					'Close-up of a woman with blue hair, adorned with intricate floral garlands and storybook illustration. Dark medieval fantasy style combining elements from Gustav Klimt, Ayami Kojima, Craig Mullins, Eyvind Earle, Alan Lee, Henri Rousseau and Guillermo del Toro. Captured with DSLR and telephoto lens.',
				male_prompt:
					'Close-up of a man with blue hair, adorned with intricate floral garlands and storybook illustration. Dark medieval fantasy style combining elements from Gustav Klimt, Ayami Kojima, Craig Mullins, Eyvind Earle, Alan Lee, Henri Rousseau and Guillermo del Toro. Captured with DSLR and telephoto lens.',
				images: ['https://replicate.delivery/pbxt/PAbTXU5gSEqXAtkrvwnVn9U2Moy2eTYSBWPvz2ehClSp7prQA/out-0.png'],
			},
			'borderlands portrait': {
				summary: 'borderlands portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'cell-shading', 'scavenger', 'dynamic'],
				female_prompt:
					'Beautiful woman with tight scavenger clothes, red hair shaved on the sides, fierce countenance in the style of Borderlands and Breath of the Wild. Cell-shaded artistry by Moebius. Exquisite composition, captivating details and bright colors for an awe-inspiring scene.',
				male_prompt:
					'Handsome man with tight scavenger clothes, red hair shaved on the sides, fierce countenance in the style of Borderlands and Breath of the Wild. Cell-shaded artistry by Moebius. Exquisite composition, captivating details and bright colors for an awe-inspiring scene.',
				images: ['https://replicate.delivery/pbxt/Nq4uMwPdNLbwPxb31rxvUcZNSlkm6VIsjXdCI5SXp4u2e0VIA/out-0.png'],
			},
			'botanical portrait': {
				summary: 'botanical portrait',
				camera: '',
				tags: ['portrait', 'botanical', 'holographic', 'metallic', 'shamrock'],
				female_prompt:
					'Striking portrait of a woman with her head back singing, in a beautiful botanical academia. Aesthetic blend of Karrueche, Lisa Frank, and holographic fashion. Detailed pot of gold and metallic shamrocks light up her smile as she looks into the rainbow. Painted in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Handsome portrait of a man in a stunning botanical academy. Aesthetic blend of Karrueche, Lisa Frank, and holographic fashion. Detailed pot of gold and metallic shamrocks light up his smile as he looks into the rainbow. Painted in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/3GFe8hmUarXnAyTZdxORhWiERnDDBFC5HD0BALu2jx5I70VIA/out-0.png'],
			},
			'botanical glamour': {
				summary: 'botanical glamour',
				camera: "Karrueche Lisa Frank Antlers Holographic Metallic Q'Cernunnos Fashion James Jean Alberto Seveso",
				tags: ['botanical', 'holographic', 'metallic', 'rainbow', 'glamorous'],
				female_prompt:
					"Nervous but determined woman, gritting her teeth, flaunting botanical academia with Karrueche aesthetics, amidst a Lisa Frank holographic and metallic glamour. Q'Cernunnos fashion, smiling into the rainbow in the style of James Jean and Alberto Seveso.",
				male_prompt:
					"Confident but reflective man, gritting his teeth, flaunting botanical academia with Karrueche aesthetics, amidst a Lisa Frank holographic and metallic glamour. Q'Cernunnos fashion, smiling into the rainbow in the style of James Jean and Alberto Seveso.",
				images: ['https://replicate.delivery/pbxt/3toBiSiG0tZJO5TgVuVeuAFLPqLeOkI8ml7XkR3qXq6S8prQA/out-0.png'],
			},
			'botanical music portrait': {
				summary: 'botanical music portrait',
				camera: '',
				tags: ['music', 'botanical', 'academia', 'holographic', 'metallic'],
				female_prompt:
					'Beautiful woman with her head thrown back, singing in the style of botanical academia, adorned in Karrueche, Lisa Frank, and metallic shamrock fashion. Smiling into the rainbow with a pot of gold and holographic vibes. Inspired by James Jean and Alberto Seveso.',
				male_prompt:
					'Handsome man with his head thrown back singing in the style of botanical academia, adorned in Karrueche, Lisa Frank, and metallic shamrock fashion. Smiling into the rainbow with a pot of gold and holographic vibes. Inspired by James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/seq8VHobzZWRYqRRnj85BEo95CCy301pgiadEE1AqvGS80VIA/out-0.png'],
			},

			'botanical qcernunnos': {
				summary: 'botanical qcernunnos',
				camera: '',
				tags: ['botanical', 'karrueche', 'Lisa frank', 'moose antler', 'holographic', 'metallic'],
				female_prompt: 'Energetic female with botanical academia, Karrueche-inspired fashion, Lisa Frank and Moose Antlers details, holographic and metallic colors. Smiling into the rainbow in the style of James Jean and Alberto Seveso. ',
				male_prompt: 'Dynamic man with botanical academia, Qcernunnos-inspired fashion, Moose Antlers details, holographic and metallic colors. Gritting teeth into the rainbow in the style of James Jean and Alberto Seveso. ',
				images: ['https://replicate.delivery/pbxt/jpemvWww0UxbViVaIP7LzPNdgxExAy7uusY1cmCT1uev5prQA/out-0.png'],
			},
			'botanical singing': {
				summary: 'botanical singing',
				camera: '',
				tags: ['singing', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Joyful woman singing with her head tilted back, surrounded by lush botanical academia décor. Karrueche influenced style with Lisa Frank inspired fashion, a pot of gold and holographic fabric, shining shamrock details and metallic accents. Smiling into the rainbow composition in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Content man singing with his head titled back, surrounded by lush botanical academia décor. Karrueche influenced style with Lisa Frank inspired fashion, a pot of gold and holographic fabric, shining shamrock details and metallic accents. Smiling into the rainbow composition in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/zu9dlu0rt445MByk4CMf7FItCeJRzxIcD6WZpgOGV9Yd5prQA/out-0.png'],
			},
			'boyfriend butler': {
				summary: 'boyfriend butler',
				camera: '',
				tags: ['portrait', 'fantasy', 'polynesian', 'romance', 'illustration'],
				female_prompt:
					'Idealistic and cheerful portrait of a handsome boyfriend butler with an athletic, well-proportioned body, perfect features and sparkling eyes. Polynesian-inspired romance fantasy manhwa anime illustration in high resolution and vivid colors. ',
				male_prompt:
					'Idealistic and cheerful portrait of a handsome boyfriend butler with an athletic, well-proportioned body, perfect features and sparkling eyes. Polynesian-inspired romance fantasy manhwa anime illustration in high resolution and vivid colors. ',
				images: ['https://replicate.delivery/pbxt/eEyuvcGCfOhbnUoSf1DftfzIo4fllCbvrLvAnW3sekb0DeprQA/out-0.png'],
			},
			'braided portrait': {
				summary: 'braided portrait',
				camera: '',
				tags: ['portrait', 'ginger-haired', 'braid', 'expressionless', 'photorealistic'],
				female_prompt:
					'Young ginger-haired woman with intricately braided hair, bored expression, photorealistic detail and vivid colors. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft ambient lighting, and extreme details.',
				male_prompt:
					'Young ginger-haired man with intricately braided hair, expressionless face, photorealistic detail and vivid colors. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft ambient lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/rjmmXupyMX6ZJBYtjFAjtsWy08LINWsjNAtn3J9hWCnzd6KE/out-0.png'],
			},
			'broken dreams': {
				summary: 'broken dreams',
				camera: 'Digital Camera with product photography features',
				tags: ['portrait', 'dramatic', 'digital painting', 'emotional', 'product'],
				female_prompt:
					'Vivid portrait of a woman of broken dreams, surrealistic elements, detailed realism, striking dramatic lighting, deep emotion and intricate digital painting. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Haunting portrait of a man of broken dreams, surrealistic elements, detailed realism, striking dramatic lighting, deep emotion and intricate digital painting. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/ROSmFek2SOWpe0fGbYEuGdGSuIrVoV2TB7N1V42ZfaE0hnuCB/out-0.png'],
			},
			'broken dreams portrait': {
				summary: 'broken dreams portrait',
				camera: 'Digital Photography',
				tags: ['portrait', 'emotional', 'striking', 'dramatic', 'product'],
				female_prompt: 'Striking portrait of a woman with broken dreams, intricate details and deep emotions, dramatic lighting for impactful storytelling. Digital painting creates an illusion of depth and texture. ',
				male_prompt: 'Intense portrait of a man with broken dreams, intricate details and deep emotions, dramatic lighting for impactful storytelling. Digital painting creates an illusion of depth and texture. ',
				images: ['https://replicate.delivery/pbxt/br4UlhSkJhoVG5ThezpdWJjFR2fQGQHtZDT8lac4wk4n4prQA/out-0.png'],
			},
			'brooke-style portrait': {
				summary: 'brooke-style portrait',
				camera: 'Photography',
				tags: ['portrait', 'pastel', 'shamrock', 'soft focus', 'Brooke Didonato'],
				female_prompt: 'Serene portrait of a woman with shamrock, evoking the art style of Brooke Didonato. Soft focus and pastel colors bring out the beauty in subtle details, creating an intimate atmosphere of tranquility. ',
				male_prompt: 'Calm portrait of a man with shamrock, evoking the art style of Brooke Didonato. Soft focus and pastel colors bring out the masculinity in subtle details, creating an air of peace and relaxation. ',
				images: ['https://replicate.delivery/pbxt/r7fEuPbFWBy9ZSpvgEwpqf1FT0WvvG5w6q1RaaErJ3Gz8prQA/out-0.png'],
			},
			'brown-haired youth': {
				summary: 'brown-haired youth',
				camera: '',
				tags: ['portrait', 'casual', 'dominant', 'long hair', 'square'],
				female_prompt: 'Young woman with silky light brown hair, very long and straight, piercing eyes, casual clothing, dominant looking, cute pose. 20 years old with an irresistible charm.',
				male_prompt: 'Young man with soft brown hair, very long and straight, piercing eyes, casual clothing, dominant look and a cute pose. 20 years of age with an alluring charisma.',
				images: ['https://replicate.delivery/pbxt/1n2gSW0XW3r4IB1UrblidO5FIFhwwgMprfSDfsXDYalQ6prQA/out-0.png'],
			},
			'business sunset': {
				summary: 'business sunset',
				camera: '',
				tags: ['portrait', 'official', 'business', 'sunset', 'urban'],
				female_prompt: 'Beautiful brunette business woman at sunset with Bucharest skyline in the backdrop. Soft, warm lighting and exquisite details, timeless composition with dawn colors tone, golden ratio and lifelike textures.',
				male_prompt: 'Handsome business man at sunset with Bucharest skyline in the backdrop. Soft, warm lighting and exquisite details, timeless composition with dawn colors tone, golden ratio and lifelike textures.',
				images: ['https://replicate.delivery/pbxt/X66CeaWu56wWTKrRvNZ8jpto7GcLZAQWpyefGZ2khNix0TXhA/out-0.png'],
			},
			'butler romance': {
				summary: 'butler romance',
				camera: '',
				tags: ['romance', 'fantasy', 'anime', 'illustration', 'bookmark'],
				female_prompt: 'Idyllic, cheerful girlfriend butler woman with an athletic body, well-proportioned and perfect looking directly at the viewer. Narrow romance fantasy manga anime illustration with bookmark aesthetic. ',
				male_prompt: 'Idyllic, cheerful handsome boyfriend butler man with an athletic body, well-proportioned and perfect looking directly at the viewer. Narrow romance fantasy manga anime illustration with bookmark aesthetic.',
				images: ['https://replicate.delivery/pbxt/9UOsyLU4wAbDJ5Xb2NsNfpLEer7TGY8peaxVSDixhcHKvTXhA/out-0.png'],
			},
			'butterfly armor': {
				summary: 'butterfly armor',
				camera: 'Unreal Engine',
				tags: ['futuristic', 'armor', 'butterfly', 'sword', 'temple'],
				female_prompt:
					'Futuristic portrait of a woman in butterfly armor, intricate structures and complex wings, wielding a biomechanical sword in an ancient temple. Vibrant orange and mars violet color scheme with Zdzislaw Beksinski and Sazen Lee influences. Photo-realistic 8K quality with epic cinematic atmosphere.',
				male_prompt:
					'Powerful portrait of a man in butterfly armor, intricate structures and complex wings, wielding a biomechanical sword in an ancient temple. Vibrant orange and mars violet color scheme with Zdzislaw Beksinski and Sazen Lee influences. Photo-realistic 8K quality with epic cinematic atmosphere.',
				images: ['https://replicate.delivery/pbxt/faBiQ0bcKQQ4PKt4KRN7eDuodY6cRaeutqiUHzbfRN7cknuCB/out-0.png'],
			},
			'butterfly monarch': {
				summary: 'butterfly monarch',
				camera: '',
				tags: ['portrait', 'fantasy', 'butterflies', 'insects', 'majestic'],
				female_prompt:
					"Strong and beautiful young woman in her 25's transformed into a regal butterfly queen with an anthropomorphic insect body. Glorious wings, majestic form, and a glowing aura of power and beauty. Captivating composition and hyperrealistic quality.",
				male_prompt:
					"Handsome young man in his 25's transforming into a powerful butterfly emperor with an anthropomorphic insect body. Grandiose wings, stately physique, and a brilliant aura of strength and charm. Mesmerizing composition and photorealistic details.",
				images: ['https://replicate.delivery/pbxt/dWecVjafoHsmrUtetfpNKZuQTGUkwZOx6bruWLZMtG7OwnuCB/out-0.png'],
			},
			'byzantine exploration': {
				summary: 'byzantine exploration',
				camera: 'Octane Render',
				tags: ['concept art', 'exploration', 'biblical', 'topaz', 'gilded'],
				female_prompt:
					'Gorgeous concept art environment of epic oil painting with Byzantine exploration by a female scientist dressed in a topaz hoodie, toga leather belt, dark azure intricate gilded boots, taking readings and scanning with a hand-held instrument. Attractive features and expressive eyes in a dramatic biblical scene, volumetric pastel light in an eerie Sandu Baciu style. ',
				male_prompt:
					'Stunning concept art environment of epic oil painting with Byzantine exploration by a male scientist dressed in a topaz hoodie, toga leather belt, dark azure intricate gilded boots, taking readings and scanning with a hand-held instrument. Attractive features and expressive eyes in a dramatic biblical scene, volumetric pastel light in an eerie Sandu Baciu style. ',
				images: ['https://replicate.delivery/pbxt/JmddWq5Kfp0wH6hZ6zdhBcfkZwDmo4PEgNfb9JGdDQJCxTXhA/out-0.png'],
			},
			'call center': {
				summary: 'call center',
				camera: 'Canon DSLR, Kodak Film',
				tags: ['official', 'formal', 'full body', 'reportage', 'telephoto'],
				female_prompt:
					'Beautiful young woman with a communications headset, intently working at the office desk, typing on the keyboard. Reportage shot with realistic light and detail, Kodak Film on Canon DSLR. Captivating telephoto view of serious concentration. ',
				male_prompt: 'Handsome young man with a communications headset, diligently working in the office, typing away. Reportage shot with realistic light and detail from Kodak Film on Canon DSLR. Fascinating telephoto view of intense focus.',
				images: ['https://replicate.delivery/pbxt/P2zedqIgolWHHCUOc06W41ZeJuAcUK8Y5zb81HzV2j9O7prQA/out-0.png'],
			},
			'cat-ear portrait': {
				summary: 'cat-ear portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'headphones', 'hair', 'detailed'],
				female_prompt: 'Adorable portrait of a young woman wearing cat ear headphones, long pink pretty hair, well composed with intricate details. Art by Artgerm, Lois van Baarle, and Ilya Kuvshinov.',
				male_prompt: 'Handsome portrait of a man wearing headphones with cat ears, long beautiful hair in pink hues. Perfectly composed with elaborate details. Art by Artgerm, Lois van Baarle and Ilya Kuvshinov.',
				images: ['https://replicate.delivery/pbxt/Sf8iNW1CXNX9fE5EUa4OqSggvXH7hDNC6S91XyGL6Cuz5prQA/out-0.png'],
			},
			'cat-kawaii illustration': {
				summary: 'cat-kawaii illustration',
				camera: '',
				tags: ['illustration', 'cat-themed', 'kawaii', 'anime', 'romance'],
				female_prompt:
					'Cute illustration of a woman in a kawaii anime manhwa style, with a cat-themed outfit and a smirking expression. Athletic body type with well-proportioned features and perfect symmetry, looking directly at the viewer. Idyllic romance fantasy atmosphere.',
				male_prompt:
					'Adorable illustration of a handsome villain butler man in a kawaii anime manhwa style, with a cat-themed outfit and a smirk. Athletic body type with well-proportioned features and perfect symmetry, looking directly at the viewer. Idyllic romance fantasy atmosphere.',
				images: ['https://replicate.delivery/pbxt/tH5dhBfjfbk6rUX3tNZdl4oF28ulGzrufzETaWFKPTI94TXhA/out-0.png'],
			},
			'cat-themed portrait': {
				summary: 'cat-themed portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'butler', 'athletic', 'adorable'],
				female_prompt: 'Idyllic, cheerful handsome female butler with athletic body and well-proportioned perfect features looking away, kawaii fantasy manhwa anime children illustration illus, cat-themed adorable.',
				male_prompt: 'Idyllic, cheerful handsome male butler with athletic body and well-proportioned perfect features looking directly at the viewer, kawaii fantasy manhwa anime children illustration illus, cat-themed adorable.',
				images: ['https://replicate.delivery/pbxt/7aTPtN85flWPdS0M15H8rUWBY55r4F0uMSSkMnkZVXD570VIA/out-0.png'],
			},
			'kawaii villain': {
				summary: 'kawaii villain',
				camera: '',
				tags: ['villain', 'anime', 'illustration', 'fantasy', 'kawaii', 'cat'],
				female_prompt: "Charming, smirking female villain with a perfectly proportioned athletic body, looking at the viewer with a kawaii romance fantasy anime-inspired children's illustration style, adorned in cute cat-themed clothing. ",
				male_prompt:
					"Sesquipedalian handsom male villain with an athletic body, well-proportioned, perfect and smirking, looking at the viewer. Kawaii romance fantasy manhwa anime children's illustration style, adorned in adorable cat-themed clothing.",
				images: ['https://replicate.delivery/pbxt/4mIuy5yMDj4ffUedqUGqgBNbxmkyxUZAKENmFffipYXkLPdFC/out-0.png'],
			},
			'celestial performance': {
				summary: 'celestial performance',
				camera: '8K resolution',
				tags: ['portrait', 'fantasy', 'aerial', 'grand piano', 'starry night'],
				female_prompt:
					'A celestial woman with light brown hair streaked with soft  highlights, wearing a shimmery silver spaghetti strap gown, floating amongst the clouds in the night sky and playing a transparent glass grand piano adorned with gold leaf. Her beautiful soft smooth and detailed hands rest lightly on the keyboard as the starry night sky fills the background. Feelings of reverence and a sense of awe fill the air during blue hour. Magic realism, impressionism, concept art, and 8K resolution.',
				male_prompt:
					'A divine man with dark brown hair styled in an intricate up-do with dangling wisps, floating amongst the clouds in the night sky and playing a transparent glass grand piano adorned with gold leaf. His beautiful soft smooth and detailed hands rest lightly on the keyboard as the starry night sky fills the background. Feelings of reverence and a sense of awe fill the air during blue hour. Magic realism, impressionism, concept art, and 8K resolution.',
				images: ['https://replicate.delivery/pbxt/if9lBsY01L1iQygVxsPP63IZkStilvLefGvL0qo5ZZPa6TXhA/out-0.png'],
			},
			'celtic fantasy study': {
				summary: 'celtic fantasy study',
				camera: '',
				tags: ['portrait', 'fantasy', 'library', 'magic', 'celtic'],
				female_prompt:
					'Mystical portrait of a woman in the style of Christina Hendricks, studying magic in a celtic fantasy library. Elegantly crafted with meticulous pencil and watercolor, golden ratio composition, vibrant color details, soft lighting, and intricate details. ',
				male_prompt:
					'Enchanting portrait of a man in the style of Waterhouse, studying magic in a celtic fantasy library. Skilfully crafted with meticulous pencil and watercolor, golden ratio composition, vibrant color details, soft lighting, and intricate details. ',
				images: ['https://replicate.delivery/pbxt/H86SmhVNAX5kE5pReaZq7AfzreVMVGu9Emb1YIS2LdOO1TXhA/out-0.png'],
			},
			'celtic library portrait': {
				summary: 'celtic library portrait',
				camera: 'Anne Stokes art style',
				tags: ['portrait', 'fantasy', 'library', 'illuminated', 'Celtic'],
				female_prompt:
					'Charming portrait of a woman in the style of Christina Hendricks, reading in an illuminated Celtic fantasy library. Sublime and surreal effects of vibrant colors, magical creatures, and intricate details. A captivating scene of pure serenity and ancient secrets.',
				male_prompt:
					'Attractive portrait of a man in the style of Christina Hendricks, studying in an illuminated Celtic fantasy library. Sublime and surreal effects of vibrant colors, magical creatures, and intricate details. A captivating scene of pure serenity and ancient secrets.',
				images: ['https://replicate.delivery/pbxt/eII2p4Jy6flpakSJr7nfw0OfYGOjMMRjWhsmQpSf3nrgfe0VIA/out-0.png'],
			},
			cernunnos: {
				summary: 'cernunnos',
				camera: '',
				tags: ['model', 'avant-garde', 'filigree', 'lacy', 'ornamented'],
				female_prompt:
					'Stunning model wearing a Versace filigree lace crop top, avant-garde and highly detailed. Intricate and cinematic pose with dynamic natural lighting. Cernunnos inspired look with elegant craftsmanship, subtle hues, and exquisite textures.',
				male_prompt:
					'Handsome model wearing a Versace filigree lace crop top, avant-garde and highly detailed. Intricate and cinematic pose with dynamic natural lighting. Cernunnos inspired look with elegant craftsmanship, subtle hues, and exquisite textures.',
				images: ['https://replicate.delivery/pbxt/kgt3KpS1EOqfACHZQenguDj3QZ0fAIo8TEdyMq3DP2EN0TXhA/out-0.png'],
			},
			'cernunnos armour': {
				summary: 'cernunnos armour',
				camera: '8k resolution medium distance tilt-shift look 32k precision',
				tags: ['full body', 'fantasy', 'armour', 'impasto', 'ukiyo-e'],
				female_prompt:
					'Gorgeous full body shot of a female Cernunnos in a highly detailed red + white kintsugi and ukiyo-e themed futuristic armor, with impasto technique, art by Apollonia Sinclair, Luis Royo and Jacob Hashimoto. 8K resolution, medium distance, with crosshatching effect, tilt-shift look, and 32K precision. ',
				male_prompt:
					'Handsome full body shot of a male Cernunnos in a highly detailed red + white kintsugi and ukiyo-e themed futuristic armor, with impasto technique, art by Apollonia Sinclair, Luis Royo and Jacob Hashimoto. 8K resolution, medium distance, with crosshatching effect, tilt-shift look, and 32K precision. ',
				images: ['https://replicate.delivery/pbxt/LAvSC1MMT1KcDtbFKPfg8e48tfftSOZhgWscSmabYkX3onuCB/out-0.png'],
			},
			'cernunnos art': {
				summary: 'cernunnos art',
				camera: '',
				tags: ['art', 'fantasy', 'ascii', 'surreal', 'mixed media'],
				female_prompt:
					'Gustav Klimt and Dave McKean inspired dreamlike art piece of a female Cernunnos falling into a vast forest, combining mixed media, ASCII art and paper mache pastiche. Exotic colors, dynamic composition and surrealistic atmosphere with hyperrealistic details.',
				male_prompt:
					'Gustav Klimt and Dave McKean inspired dreamlike art piece of a male Cernunnos falling into a vast forest, combining mixed media, ASCII art and paper mache pastiche. Exotic colors, dynamic composition and surrealistic atmosphere with hyperrealistic details.',
				images: ['https://replicate.delivery/pbxt/Gr0LmzOcEZbnPJwRGZUHopomE1NrLx3bmepyus3fSANL1prQA/out-0.png'],
			},
			'cernunnos dress': {
				summary: 'cernunnos dress',
				camera: '',
				tags: ['official', 'formal', 'design', 'sketch', 'twin peaks'],
				female_prompt:
					' woman with captivating beauty, wearing a Cernunnos dress with intricate black and white design, mystical aura and Twin Peaks inspired sketch by Ilya Kuvshinov. Dynamic composition, surrealistic atmosphere, and ethereal lighting.',
				male_prompt:
					'Handsome Irish man with attractive features, adorned in a stylish Cernunnos dress with intricate black and white design, mysterious ambiance and Twin Peaks inspired sketch by Ilya Kuvshinov. Dynamic composition, surrealistic atmosphere, and ethereal lighting.',
				images: ['https://replicate.delivery/pbxt/3I9HfB7DKk15E6NInykqvHGNfIsyYK0mQ0fUotFDWSxR5TXhA/out-0.png'],
			},
			'cernunnos fashion': {
				summary: 'cernunnos fashion',
				camera: 'Unreal Engine 5 Cinematic',
				tags: ['retro', 'boho', 'fashion', 'haute couture', 'hyper realistic'],
				female_prompt:
					'Ethereal Cernunnos female in retro boho fashion, haute couture with detailed hair texture and ornate eyebrows. Hyper-realistic beauty with insanely detailed textures, intricate details, and beautiful color-grading. Unreal Engine 5 cinematic featuring sharpening, grading, focus sharpening, depth of field, volumetric lighting, 8K resolution and full color. Ambient occlusion and high contrast for a hyper maximalist look.',
				male_prompt:
					'Rugged Cernunnos male in retro boho fashion with detailed hair texture and ornate eyebrows. Hyper-realistic beauty with insanely detailed textures, intricate details, and beautiful color-grading. Unreal Engine 5 cinematic featuring sharpening, grading, focus sharpening, depth of field, volumetric lighting, 8K resolution and full color. Ambient occlusion and high contrast for a hyper maximalist look.',
				images: ['https://replicate.delivery/pbxt/RGHRzJmMIMaYEVLIX9BdCGDw9fuyC3zXeHJRClA3vfogrTXhA/out-0.png'],
			},
			'cernunnos forest': {
				summary: 'cernunnos forest',
				camera: '',
				tags: ['mixed-media', 'ascii', 'paper-mache', 'Cernunnos', 'forest'],
				female_prompt:
					'Dynamic mixed media art with ascii and paper mache pastiche in a grandiose design by Gustav Klimt and Dave McKean of a female Cernunnos descending into a lush, mysterious forest. Colorful, intricate details and textures, powerful composition, bold strokes, extreme clarity, and high resolution.',
				male_prompt:
					'Mesmerizing mixed media art with ascii and paper mache pastiche in a grandiose design by Gustav Klimt and Dave McKean of a male Cernunnos descending into a lush, mysterious forest. Colorful, intricate details and textures, powerful composition, bold strokes, extreme clarity, and high resolution.',
				images: ['https://replicate.delivery/pbxt/5IFN0pug6ErTF5exGt4Eyhsuvvf84tLj9z26uAOwNWJz8prQA/out-0.png'],
			},

			'cernunnos paien': {
				summary: 'cernunnos paien',
				camera: '',
				tags: ['photography', 'planet', 'mist', 'sunrise', 'lake'],
				female_prompt: 'Majestic photography of a Cernunnos Paien woman on Planet IO, shrouded in mist and the rising sun, with a tranquil lake and galactic sky. Exquisite details, vibrant colors, surreal atmosphere, and textured backdrops. ',
				male_prompt: 'Majestic photography of a Cernunnos Paien man on Planet IO, shrouded in mist and the rising sun, with a tranquil lake and galactic sky. Exquisite details, vibrant colors, surreal atmosphere, and textured backdrops. ',
				images: ['https://replicate.delivery/pbxt/OLdMTD6ZWwafWaI17p0odnjqOGrS4geqxZLTa1aNfEB93TXhA/out-0.png'],
			},
			'cernunnos portrait': {
				summary: 'cernunnos portrait',
				camera: 'Not applicable',
				tags: ['portrait', 'mythology', 'nature', 'dark-skinned', 'full body'],
				female_prompt:
					'Striking portrait of a woman as Cernunnos, dark skinned and powerful, surrounded by nature elements. Organic flow of colors and textures, light and dark tones, intricate details and masterful blend of pencil and watercolor. Intense facial expressions, strong gaze and full body view with a golden ratio.',
				male_prompt:
					'Handsome portrait of a man as Cernunnos, dark skinned and powerful, surrounded by nature elements. Organic flow of colors and textures, light and dark tones, intricate details and masterful blend of pencil and watercolor. Intense facial expressions, strong gaze and full body view with a golden ratio.',
				images: ['https://replicate.delivery/pbxt/K9ywEIuIwXqDAd8kioQZiAferRUSaCDK1rvK74Yo0O6W1prQA/out-0.png'],
			},
			'cernunnos retro fashion shoot': {
				summary: 'cernunnos retro fashion shoot',
				camera: 'Unreal Engine 5 , Cinematic , Sharpen , Grading , Focus Sharp , Depth of Field ',
				tags: [
					'fashion',
					'hippie',
					'ornamented',
					'haute couture',
					'ethereal',
					'editorial photography',
					'photoshoot',
					'depth of field',
					'white balance',
					'32k',
					'super resolution',
					'megapixel',
					'pro photo rgb',
					'vr',
					'half rearlighting',
					'backlight',
					'naturallighting',
					'incandescent',
					'moodylighting',
					'cinematiclighting',
					'studiolighting',
					'softlighting',
					'volumetriccontejour',
					'beautifullighting',
					'accentlighting',
					'globalillumination',
					'screenspaceglobalillumination',
					'raytracingglobalillumination',
					'scatteringglowing shadowsroughshimmeringraytracingreflectionlumenreflectionsscreenspacereflectiondiffractiongradingchromaticaberrationgbdisplacementscanlienesraytracedantialiasingfkaatxaartxassaoshadersopenglshadersglskshaderpostprocessingpostproductioncellshadingtonemappingcgi vfxsfxinsanelydetailedandintricatehypermaximalisteleganthyperrealisticsuperdetaileddynamicposephotographyhyperrealisticvolumetricphotorealisticultraphotoreaultra detail8kfullcolorambientocclusionvolmetriclightinghighcontrast',
				],
				female_prompt:
					'Stunning portrait of a Cernunnos female with retro, ornamented beautiful hippy, boho fashion and haute couture. Ethereal fashion shoot with detailed hair texture and eyebrows. Hyper-detailed, beautifully color-coded, insane details and intricate details. Beautifully color graded in Unreal Engine 5 with Cinematic sharpening and grading. Focus sharp, Depth of Field and Super-Resolution Megapixel Pro Photo RGB. VR Half rear lighting, backlight, natural lighting, incandescent moody lighting and cinematic studio lighting. Soft light volumetric conte-jour for beautiful accent lighting. Global Illumination Screen Space Global Illumination Ray Tracing Global Illumination Scattering Glowing Shadows Rough Shimmering Ray Tracing Reflections Lumen Reflections Screen Space Reflections Diffraction Grading Chromatic Aberration GB Displacement Scan Lines Ray Traced Anti-Aliasing FKAA TXAA RTX SSAO Shaders OpenGL-Shaders GLSL-Shaders Post Processing Post Production Cell Shading Tone Mapping CGI VFX SFX insanely detailed and intricate hyper maximalist elegant hyper realistic super detailed dynamic pose photography Hyper realistic volumetric photorealistic ultra photoreal ultra-detailed 8K full color ambient occlusion volumetric lighting high contrast ',
				male_prompt:
					'Handsome portrait of a Cernunnos male with retro, ornamented beautiful hippy, boho fashion and haute couture. Ethereal fashion shoot with detailed hair texture and eyebrows. Hyper-detailed, beautifully color-coded, insane details and intricate details. Beautifully color graded in Unreal Engine 5 with Cinematic sharpening and grading. Focus sharp, Depth of Field and Super-Resolution Megapixel Pro Photo RGB. VR Half rear lighting, backlight, natural lighting, incandescent moody lighting and cinematic studio lighting. Soft light volumetric conte-jour for beautiful accent lighting. Global Illumination Screen Space Global Illumination Ray Tracing Global Illumination Scattering Glowing Shadows Rough Shimmering Ray Tracing Reflections Lumen Reflections Screen Space Reflections Diffraction Grading Chromatic Aberration GB Displacement Scan Lines Ray Traced Anti-Aliasing FKAA TXAA RTX SSAO Shaders OpenGL-Shaders GLSL-Shaders Post Processing Post Production Cell Shading Tone Mapping CGI VFX SFX insanely detailed and intricate hyper maximalist elegant hyper realistic super detailed dynamic pose photography Hyper realistic volumetric photorealistic ultra photoreal ultra-detailed 8K full color ambient occlusion volumetric lighting high contrast',
				images: ['https://replicate.delivery/pbxt/zERgLYnLVgo6BNX8nDZ0JICH05XJquuCJmfmle5TtTrM9prQA/out-0.png'],
			},
			'cernunnos romance': {
				summary: 'cernunnos romance',
				camera: '',
				tags: ['portrait', 'fantasy', 'romance', 'embrace', 'aura'],
				female_prompt: 'A beautiful woman embraced by Cernunnos in a fantastical romance. Glowing aura, colorful backdrop, and vivid expressions of love and trust. Softly lit with pastel hues, dreamy motion and glowing lens flares.',
				male_prompt: 'Cernunnos embracing a beautiful woman in a romantic fantasy. Glowing aura, colorful backdrop, and vivid expressions of love and trust. Softly lit with pastel hues, dreamy motion and glowing lens flares.',
				images: ['https://replicate.delivery/pbxt/6fzwWlhVJJV9L6Pk4tEyxRe3QDDrd24JU4OHnLVLvs9p7prQA/out-0.png'],
			},
			'cernunnos throne': {
				summary: 'cernunnos throne',
				camera: 'High detail',
				tags: ['portrait', 'fantasy', 'faeries', 'elks', 'artistic'],
				female_prompt:
					"Gender-fluid Cernunnos, half man and half woman, on the throne in a spring wood with a bone crown. Rich in details and artistic quality, ultrarealistic faeries and majestic elks, lush vegetation and vibrant colors. Inspired by da Vinci's artistry.",
				male_prompt:
					"Gender-fluid Cernunnos, half man and half woman, on the throne in a spring wood with a bone crown. Rich in details and artistic quality, ultrarealistic faeries and majestic elks, lush vegetation and vibrant colors. Inspired by da Vinci's artistry.",
				images: ['https://replicate.delivery/pbxt/5LlKVI4XpLbKDZaMOwnf3Pmh2lljHa98S891mhTueyf83TXhA/out-0.png'],
			},
			'creepy character grin': {
				summary: 'creepy character grin',
				camera: 'Vray Render Volumetric Lighting Postprocessing Sharp Focus',
				tags: ['character design', 'fantasy', 'embroidery', 'cybernetic', 'cinematic'],
				female_prompt:
					'Highly detailed character design, a woman with jagged broken teeth, wicked grin, wearing a red and blue tunic, intricate floral embroidery, cybernetic eyes, heavily lined, wrinkled, haggard face, spiked pauldrons, glowing details, ultrafine detail, epic cinematic lighting ,action scene ,seapunk ,salvagepunk ,cyberpunk art by Ruan Jei Josan Gonzalez Wayne Reynolds vray render volumetric lighting postprocessing sharp focus.',
				male_prompt:
					'Highly detailed character design, a man with jagged broken teeth, wicked grin, wearing a red and blue tunic ,intricate floral embroidery cybernetic eyes heavily lined wrinkled haggard face spiked pauldrons glowing details ultrafine detail epic cinematic lighting action scene seapunk salvagepunk cyberpunk art by Ruan Jei Josan Gonzalez Wayne Reynolds vray render volumetric lighting postprocessing sharp focus.',
				images: ['https://replicate.delivery/pbxt/VWBtEi2w6IbUPVbFRhKRfSnjXMKPbYwYvLFI7v0rKzI880VIA/out-0.png'],
			},

			'chernobyl cyberpunk': {
				summary: 'chernobyl cyberpunk',
				camera: 'unknown',
				tags: ['cyberpunk', 'apocalyptic', 'old age', 'neon lights', 'soviet'],
				female_prompt:
					'Weathered and wise old woman in a cyberpunk Chernobyl, adorned with a rustic scarf and hauntingly detailed face. An abandoned Soviet village shrouded in fog, covered in alien mushrooms and eerie amber light. A captivating blend of neon lamplights, apocalyptic colors, nuclearpunk style of Stalker games, and Ghibli influences by Moebius, Junji Ito, Masamune Shirow, and Zdzislaw Beksinski.',
				male_prompt:
					'Rugged man amidst the Chernobyl cyberpunk landscape, wearing a weathered scarf with an intricately detailed face. An eerie abandoned Soviet village enveloped by fog and alien mushrooms with neon lamplights illuminating the apocalyptic colors. A haunting blend of nuclearpunk style of Stalker games, Ghibli influences by Moebius, Junji Ito, Masamune Shirow, and Zdzislaw Beksinski.',
				images: ['https://replicate.delivery/pbxt/ieXSJVEfMjh2o0exqvD2BamZc7kfV3UMuBlHQmgDgBwTknuCB/out-0.png'],
			},
			'chicory flower': {
				summary: 'chicory flower',
				camera: '8K resolution',
				tags: ['forest', 'sunset', 'purple hair', 'elf ears', 'photorealistic'],
				female_prompt: 'Graceful woman at sunset holding a chicory flower in a lush forest, short purple hair, purple eyes, elf ears and a green dress. Photorealistic 8K resolution, hyperreal details, dazzling colors and subtle highlights. ',
				male_prompt:
					'Handsome man in the forest at sunset with a chicory flower. Short dark hair with blue eyes and an adventurous spirit. Wearing a denim jacket and brown trousers. Photorealistic 8K resolution, hyperreal details, dazzling colors and subtle highlights.',
				images: ['https://replicate.delivery/pbxt/Br526fPkr5UCEKG0eUQBvk4dOlDV7TsLFKJ41dJa0IbG5prQA/out-0.png'],
			},
			'cinematic lookbook': {
				summary: 'cinematic lookbook',
				camera: '35mm lens f/1.8 studio lighting ultra detailed global illumination & post production effects',
				tags: ['mid-body', 'model', 'beautiful', 'minimalist', 'gradient'],
				female_prompt:
					"Mid body shot of a beautiful female model with minimal makeup, a white gradient background, and realistic clear facial features. She is wearing an exaggerated black oversize puffer braided cape, a black puffer jumpsuit, and a black braided hairpiece. The scene is located in Iceland featuring minimal mountains and melting ice. The lookbook photoshoot is cinematic with a 35mm lens, f/1.8, studio lighting, ultra detailed global illumination, and post production effects. The model's dynamic pose displays her face feature while the camera zooms out to capture her human eyes along with a minimal shadow background. Half body shot of a real person.",
				male_prompt:
					"Mid body shot of a handsome male model with minimal makeup, a white gradient background, and realistic clear facial features. He is wearing an exaggerated black oversize puffer braided cape, a black puffer jumpsuit, and a black braided hairpiece. The scene is located in Iceland featuring minimal mountains and melting ice. The lookbook photoshoot is cinematic with a 35mm lens, f/1.8, studio lighting, ultra detailed global illumination, and post production effects. The model's dynamic pose displays his face feature while the camera zooms out to capture his human eyes along with a minimal shadow background. Half body shot of a real person.",
				images: ['https://replicate.delivery/pbxt/aYqDGeTrmqxtb6sDUEwv8vj7X83PVvSou9rfX8FofjaB3TXhA/out-0.png'],
			},
			'cinematic scene': {
				summary: 'cinematic scene',
				camera: 'Captured by ARRI, Sony, Canon, Nikon or Hasselblad cameras.',
				tags: ['professional', 'lighting', 'cinematic', 'details', 'gallery'],
				female_prompt:
					'Cinematic shot of a female psychologist in her living room with a male client, incredibly detailed and sharpened with professional lighting and 50mm, 80mm, or 100mm lens. Captured by ARRI, Sony, Canon, Nikon or Hasselblad cameras. Lightroom gallery quality and Behance photography level of detail. ',
				male_prompt:
					'Cinematic shot of a male client in the living room of a female psychologist, incredibly detailed and sharpened with professional lighting and 50mm, 80mm, or 100mm lens. Captured by ARRI, Sony, Canon, Nikon or Hasselblad cameras. Lightroom gallery quality and Behance photography level of detail. ',
				images: ['https://replicate.delivery/pbxt/4RXO8qfjhXxfeJkCSE2olxDk7Pt2GjOD8NefdbHv6kV0BPdFC/out-0.png'],
			},
			'civil warrior': {
				summary: 'civil warrior',
				camera: '30 megapixel 4k 85mm lens f/8 ISO 100 1/125 shutter speed',
				tags: ['portrait', 'professional', 'civil', 'medieval', 'exquisite'],
				female_prompt:
					'A 38-year-old female civil warrior, red hair, rugged yet professional attire, scar in face and serene eyes. Sun-kissed skin with a hint of a smile and light build. An exquisite detail portrait, highly complex with 30 megapixels, 4K resolution, 85 mm lens and sharp focus. Intricately detailed with long exposure time (f/8 ISO 100; shutter speed 1/125), diffuse back lighting and volumetric lighting. Award-winning photograph with monovisions, Elle magazine catchlight and low contrast but high sharpness and depth of field. Ultra detailed photography with HDR 8K.',
				male_prompt:
					'A 38-year-old male civil warrior, rugged yet professional attire, scar in face and serene eyes. Sun-kissed skin with a hint of a smile and light build. An exquisite detail portrait, highly complex with 30 megapixels, 4K resolution, 85 mm lens and sharp focus. Intricately detailed with long exposure time (f/8 ISO 100; shutter speed 1/125), diffuse back lighting and volumetric lighting. Award-winning photograph with monovisions, Elle magazine catchlight and low contrast but high sharpness and depth of field. Ultra detailed photography with HDR 8K.',
				images: ['https://replicate.delivery/pbxt/Qn2y8RUQ3za8H1oTkLy01ALWBNJfPCkgqOXPgJFLTW6G70VIA/out-0.png'],
			},
			'cliffside portrait': {
				summary: 'cliffside portrait',
				camera: 'unknown',
				tags: ['portrait', 'official', 'cliff', 'seascape', 'cinematic'],
				female_prompt:
					'Beautiful woman in a white dress, long dark hair with gentle wind blowing, gently caressing the curves of her pregnant body. Standing on the edge of a cliff overlooking a seascape and surrounded by lush field grass and flowers. Cinematic wide aspect ratio shot with extreme details and resolution.',
				male_prompt:
					'Handsome man in a tailored suit standing at the edge of a cliff overlooking a seascape, with lush field grass and flowers behind him. Wind blowing through his hair accentuates his masculine silhouette. Cinematic wide aspect ratio shot with extreme details and resolution.',
				images: ['https://replicate.delivery/pbxt/hSCecWGbXEXNOyU0PUUgZnxsL7dwKZteODKNSUADwWTfwTXhA/out-0.png'],
			},
			'climbing mountaineer': {
				summary: 'climbing mountaineer',
				camera: '',
				tags: ['adventure', 'outdoors', 'portrait', 'mountain', 'hiking'],
				female_prompt:
					'A bold Red Haired woman conquering a treacherous mountain, conquering the wild terrain and scaling the peak with determination. Adventurous composition with a determined look, layered textures, warm lighting and majestic landscape. ',
				male_prompt:
					'A brave Red Haired man tackling a perilous mountain range, conquering the treacherous terrain and surmounting the summit with ambition. Dynamic composition with an intense gaze, vivid details, soft lighting and powerful backdrop. ',
				images: ['https://replicate.delivery/pbxt/JkGFCIBYCwJQMpJQeWhawlgsIsmNxmSqoMzyCCBfIam07prQA/out-0.png'],
			},
			'climbing portrait': {
				summary: 'climbing portrait',
				camera: '',
				tags: ['portrait', 'official', 'mountains', 'adventure', 'redhead'],
				female_prompt:
					'Vivid portrait of a red-haired woman scaling the mountainside, powerful and determined. Balanced composition with strong colors and subtle shadows. Unique combination of realism and vivid imagination, depicting the courage and strength of a modern female.',
				male_prompt:
					'Bold portrait of a red-haired man conquering the mountainside, powerful and determined. Balanced composition with strong colors and subtle shadows. Unique combination of realism and vivid imagination, depicting the courage and strength of a modern man.',
				images: ['https://replicate.delivery/pbxt/M00sNFiJyhqZBRzKru4TwgREejDMFPLONApNe8k3YiGS9prQA/out-0.png'],
			},
			'club dance': {
				summary: 'club dance',
				camera: '',
				tags: ['full body', 'dance', 'club', 'colors', 'party'],
				female_prompt: 'Attractive young woman dancing in a vibrant and crowded club, illuminated with mesmerizing colors and dot matrix lights. Radiant energy, joyful movements and expression of freedom.',
				male_prompt: 'Handsome young man dancing in a vibrant and crowded club, illuminated with mesmerizing colors and dot matrix lights. Radiant energy, joyous movements and expression of liberty.',
				images: ['https://replicate.delivery/pbxt/qk6gMHQvNGKfeUFSXN556Bdllfdy0F0oE3Smym7YjGx44TXhA/out-0.png'],
			},
			'coffee shop portrait': {
				summary: 'coffee shop portrait',
				camera: 'Kodak Portra 800, 105mm f/1.8',
				tags: ['portrait', 'window', 'neon', 'reflection', 'evening'],
				female_prompt:
					'Beautiful shot through an outdoor window of a coffee shop, with neon sign lighting, window glares and reflections. Soft and dreamlike portrait of an woman sitting at a table in the golden evening light. Captured with Kodak Portra 800 and 105mm f/1.8 for depth of field and stunning clarity.',
				male_prompt:
					'Handsome shot through an outdoor window of a coffee shop, with neon sign lighting, window glares and reflections. Soft and dreamlike portrait of an man sitting at a table in the golden evening light. Captured with Kodak Portra 800 and 105mm f/1.8 for depth of field and stunning clarity.',
				images: ['https://replicate.delivery/pbxt/nVxuuflJfKgCc0xkNbeMK2rR91Selxfo92c5LOHnBYA4bPdFC/out-0.png'],
			},
			'colorful fantasy': {
				summary: 'colorful fantasy',
				camera: '',
				tags: ['fantasy', 'romance', 'illustration', 'children', 'cat-themed'],
				female_prompt: 'Vibrant idyllic, cheerful beautiful girlfriend maid woman with athletic body well-proportioned perfect beaming at me, kawaii chibi romance fantasy manhwa anime children illustration illus, CAFE cat-themed adorable.',
				male_prompt: 'Vibrant idyllic, cheerful handsome boyfriend butler man with athletic body well-proportioned perfect looking at me, kawaii chibi romance fantasy manhwa anime children illustration illus, CAFE cat-themed adorable.',
				images: ['https://replicate.delivery/pbxt/c3WkGZID4KIyN9hmDIodNT04YRvVRFlbMMH6lLBuH7bPf0VIA/out-0.png'],
			},
			'comic-afro': {
				summary: 'comic-afro',
				camera: '',
				tags: ['comic-book', 'afropunk', 'illustration', 'cartoonish', 'expressionless'],
				female_prompt: 'A comic-book inspired female with afropunk styling, no expression, no emotion in a cartoonish portrayal. Visualized by Anna Dittmann with a comic book style, and no background. ',
				male_prompt: 'A comic-book inspired male with afropunk styling, no expression, no emotion in a cartoonish portrayal. Visualized by Anna Dittmann with a comic book style, and no background. ',
				images: ['https://replicate.delivery/pbxt/rI0qfcH7Jow2Fqs8F60JKefeAWhd5h3CeJu4HUegOhmECf0VIA/out-0.png'],
			},
			'comic portrait': {
				summary: 'comic portrait',
				camera: '',
				tags: ['portrait', 'comic-book', 'afropunk', 'illustrated', 'expressionless'],
				female_prompt:
					'Female with an afropunk style and a comic book aesthetic, illustrated by Anna Dittmann. A stoic expressionless face in a vivid color scheme and dynamic composition with strong graphic elements and sharp details. No background.',
				male_prompt: 'Male with an afropunk style and a comic book aesthetic, illustrated by Anna Dittmann. A stoic expressionless face in a vivid color scheme and dynamic composition with strong graphic elements and sharp details. No background.',
				images: ['https://replicate.delivery/pbxt/jqtiyTfzfPkfjpLam13NlfxojE5OucueAEEofAt3pGHer80VIA/out-0.png'],
			},
			'concept art': {
				summary: 'concept art',
				camera: '',
				tags: ['portrait', 'vampire', 'digital art', 'dark fantasy', 'gothic'],
				female_prompt:
					'Beautiful dark-skinned female vampire, intricate detailing, vivid digital art, dark fantasy concept art, red eyes and lips, profile portrait with bokeh background, Gothic styling and white hair. Glossy and detailed painting by Tom Bagshaw and Stanley Artgerm Lau.',
				male_prompt:
					'Handsome dark-skinned male vampire, intricate detailing, vivid digital art, dark fantasy concept art, red eyes and lips, profile portrait with bokeh background, Gothic styling and white hair. Glossy and detailed painting by Tom Bagshaw and Stanley Artgerm Lau.',
				images: ['https://replicate.delivery/pbxt/TWULNFC3Mqa2MRh4xxBZcwZcfLToNot7Sfo1RBgKtfsuhTXhA/out-0.png'],
			},
			'condo portrait': {
				summary: 'condo portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'square'],
				female_prompt: 'Female face, looking forward with abstract, George Condo style, square eyes, business suit and deconstructivist background. Different color background for focus. Intense realism of vivid hues and deep shadows. ',
				male_prompt: 'Male face, looking forward with abstract, George Condo style, square eyes, business suit and deconstructivist background. Different color background for focus. Intense realism of vivid hues and deep shadows. ',
				images: ['https://replicate.delivery/pbxt/YhTFpyyJIQoTLlSJJD5F7ni1exxcgPG8xl2qd7dKmdeC1prQA/out-0.png'],
			},
			'copperhair photoshoot': {
				summary: 'copperhair photoshoot',
				camera: '22mm lens, DOF, Tilt Blur Shutter Speed 1/1000 F/2.2 Shot on film Real Film Grain Wide Angle Photograph',
				tags: ['beauty', 'fashion', 'editorial', 'photorealistic', 'supermodel'],
				female_prompt:
					'Modern beauty & fashion photography, stunning copper-haired female supermodel with long hair featuring a style reminiscent of Miles Aldridge. Editorial fashion photography for Vogue with hypermaximalist, elegant, hyper realistic and ultra photorealistic details of her face and skin texture. Professionally retouched and beautiful color grading shot from low angle with sharp focus and an Ultra-Wide Angle Depth of Field effect. Perfect composition and golden rule.',
				male_prompt:
					'Modern beauty & fashion photography, handsome copper-haired male supermodel with long hair featuring a style reminiscent of Miles Aldridge. Editorial fashion photography for Vogue with hypermaximalist, elegant, hyper realistic and ultra photorealistic details of his face and skin texture. Professionally retouched and beautiful color grading shot from low angle with sharp focus and an Ultra-Wide Angle Depth of Field effect. Perfect composition and golden rule.',
				images: ['https://replicate.delivery/pbxt/csPtPs6MIObOF1HmMUYaWDRgOo6SxdfsWL9oTo0weFgb9prQA/out-0.png'],
			},
			'cosmic astronaut': {
				summary: 'cosmic astronaut',
				camera: '',
				tags: ['astronaut', 'futuristic', 'neon', 'space', 'dot matrix'],
				female_prompt:
					'Female astronaut with neon futuristic spacesuit, lost in an infinite space. A blend of dot matrix art and dynamic energy, key visual, 6 colors and editorial illustration. Highly stylized, mesmerizing night sky photography of the Milky Way by Babak Tafreshi and Diane Arbus.',
				male_prompt:
					'Male astronaut with neon futuristic spacesuit, lost in an infinite space. A blend of dot matrix art and dynamic energy, key visual, 6 colors and editorial illustration. Highly stylized, mesmerizing night sky photography of the Milky Way by Babak Tafreshi and Diane Arbus.',
				images: ['https://replicate.delivery/pbxt/OXPDkPhmI9pxBt3tJzo2XOiCOToH8Kxr2W1h1fol1PxH70VIA/out-0.png'],
			},
			'couch portrait': {
				summary: 'couch portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'modern', 'full body'],
				female_prompt:
					'A woman seated on a couch in front of a TV, by Michael Craig-Martin. Captivating composition with a modern twist and pop art inspiration, vibrant colors, and cinematic quality. A stylishly posed figure embracing the classic and familiar scene of a living room.',
				male_prompt:
					'A man seated on a couch in front of a TV, by Michael Craig-Martin. Captivating composition with a modern twist and pop art inspiration, vibrant colors, and cinematic quality. A stylishly posed figure embracing the classic and familiar scene of a living room.',
				images: ['https://replicate.delivery/pbxt/jurt2EsL3b71O9Pdyoo0NNWXt62R5fI9clKUCKuI8XEQeprQA/out-0.png'],
			},
			'couture swamp': {
				summary: 'couture swamp',
				camera: '',
				tags: ['fashion', 'swamp', 'ladybug', 'shamrock', 'mossy'],
				female_prompt: 'A stunning couture swamp woman wearing ladybug garb, with a vibrant backdrop of shamrocks and mossy scenery. Intense green eyes and ivy-like hair draping down her back. Wet and muddy look full of energy and life.',
				male_prompt: 'A handsome couture swamp man wearing regal ladybug garb, with a vibrant backdrop of shamrocks and mossy scenery. Intense green eyes and ivy-like hair draping down his back. Wet and muddy look full of energy and life.',
				images: ['https://replicate.delivery/pbxt/7akYqW90gGroDFxgvDrHFxesdjfsdYSkQJHqdn3et3NSvTXhA/out-0.png'],
			},
			'cowboy fantasy': {
				summary: 'cowboy fantasy',
				camera: '',
				tags: ['fantasy', 'gunslinger', 'mountain', 'volumetric light', 'realism'],
				female_prompt:
					'Beautiful female gunslinger with bright blue eyes and long vibrant red hair, wearing a classic cowboy hat, posed in an alpine mountain landscape. Fantasy realism style, volumetric light and detail-rich textures for maximum impact. ',
				male_prompt:
					'Handsome male gunslinger with piercing blue eyes and long flowing red hair, donning a classic cowboy hat, posed in an alpine mountain landscape. Fantasy realism style, volumetric light and detailed textures for maximum impact. ',
				images: ['https://replicate.delivery/pbxt/X4xi0gMKE46SFFWJe3faKr1hwAfbJ7EfQnQzI86U7V8OjnuCB/out-0.png'],
			},
			'cowboy noir': {
				summary: 'cowboy noir',
				camera: 'Epic 8K quality',
				tags: ['Burlesque', 'Cowboy', 'Noir', 'Shadowy', 'Cinematic'],
				female_prompt:
					'Burlesque female cowboy in noir black attire, standing in a room of venetian blinds casting shadows on her face. Intricate details and high contrast, cinematic composition with a dynamic pose and raking light. Epic 8K quality with sharp details, god rays, crepuscular lighting and sci-fi vibes inspired by artwork of Magali Villeneuve, Luis Royo, Craig Mullins, James Gurney, Hajime Sorayama. ',
				male_prompt:
					'Daring male cowboy in a noir ensemble , standing in front of window with dot matrix blinds casting shadows on his face. Intricate details and high contrast, cinematic composition with a dynamic pose and raking light. Epic 8K quality with sharp details, god rays, crepuscular lighting and sci-fi vibes inspired by artwork of Magali Villeneuve, Luis Royo, Craig Mullins, James Gurney, Hajime Sorayama. ',
				images: ['https://replicate.delivery/pbxt/8EuOVdFUeVR2FqIXpYYUiL1XQ4ATldxnrnE5hvCGIoyB90VIA/out-0.png'],
			},
			'crustacean armor': {
				summary: 'crustacean armor',
				camera: 'Vray Render',
				tags: ['warrior', 'cyberpunk', 'ornate', 'armor', 'vibrant'],
				female_prompt:
					'Gorgeous female warrior wearing ornate red and gold crustacean armor, a large crown and a heavily muscled physique. Masterful blend of cyberpunk art by Geof Darrow, Katsuya Terada, and Josan Gonzalez with ultrafine details and Vray render. Middle-aged with greying beard, vibrant colors, dynamic composition and realistic textures.',
				male_prompt:
					'Majestic male warrior wearing ornate red and gold crustacean armor, a large crown and a heavily muscled physique. Masterful blend of cyberpunk art by Geof Darrow, Katsuya Terada, and Josan Gonzalez with ultrafine details and Vray render. Middle-aged with greying beard, vibrant colors, dynamic composition and realistic textures.',
				images: ['https://replicate.delivery/pbxt/w7y9kZSTyqbvAprCoA2ttR3NRjq2PMT7UB788V9a1me490VIA/out-0.png'],
			},
			'crustacean regalia': {
				summary: 'crustacean regalia',
				camera: 'VRay Render',
				tags: ['cyberpunk', 'armor', 'regal', 'muscular', 'render'],
				female_prompt:
					'Regal woman wearing ornate red and gold crustacean armor and a large crown, heavily muscled body, greyed beard, and captivating gaze. Ultrafine detail, cyberpunk art by Geof Darrow, Katsuya Terada, and Josan Gonzalez, vray render. ',
				male_prompt:
					'Powerful man wearing ornate red and gold crustacean armor and a large crown, heavily muscled body, greyed beard, and captivating gaze. Ultrafine detail, cyberpunk art by Geof Darrow, Katsuya Terada, and Josan Gonzalez, vray render.',
				images: ['https://replicate.delivery/pbxt/4zAj1Bamro4LCxeHi5BefdIAGNUOwIjh2T5ewH7K4BfXJPdFC/out-0.png'],
			},
			'crystal portrait': {
				summary: 'crystal portrait',
				camera: 'Canon EOS 5D Mark IV DSLR camera & EF 24-70mm f/2.8L II USM lens',
				tags: ['portrait', 'fantasy', 'gown', 'crystal', 'regal'],
				female_prompt:
					'Ethereal and captivating portrait of a woman, inspired by the beauty of Copper-Sulfate crystals. She is draped in an iridescent gown that shimmers with hues of blue and green, reminiscent of the vibrant and luminescent crystal formations. Her long, silky hair cascades down her back in loose waves. The photograph is captured with a Canon EOS 5D Mark IV DSLR camera and EF 24-70mm f/2.8L II USM lens, delivering exceptional clarity and detail. The aperture is set to f/5.6 for balance and the ISO to 400 for minimal noise. Her piercing gaze and regal demeanor convey strength and power.',
				male_prompt:
					'Magnetic portrait of a man, capturing the mesmerizing beauty of Copper-Sulfate crystals. He is draped in an iridescent gown that shimmers with hues of blue and green, reminiscent of the vibrant luminescence found in natural crystal formations. His hair hangs down his back in loose waves adding softness to the composition. The photograph is captured with a Canon EOS 5D Mark IV DSLR camera and EF 24-70mm f/2.8L II USM lens, delivering exceptional clarity and detail. The aperture is set on f/5.6 for balance, ISO 400 for minimal noise, and shutter speed 1/250 sec to freeze any motion. His piercing gaze conveys strength.',
				images: ['https://replicate.delivery/pbxt/i36XflI4awzsA6JJOX4XULOKZYk1mmciIu5cftQMfXPHqTXhA/out-0.png'],
			},
			'crystalline portrait': {
				summary: 'crystalline portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'wings', 'light', 'illustrative'],
				female_prompt:
					'Extreme closeup of a woman with glowing shamrock eyes and long, shimmering yellow crystalline diamond-like hair, small soft wings protruding from ears with subsurface scattering and a beam of sunlight. Mesmerizing color palette and captivating illustrative concept art by Kuvshinov Ilya.',
				male_prompt:
					'Extreme closeup of a man with glowing shamrock eyes and long, shimmering yellow crystalline diamond-like hair, small soft wings protruding from ears with subsurface scattering and a beam of sunlight. Mesmerizing color palette and captivating illustrative concept art by Kuvshinov Ilya.',
				images: ['https://replicate.delivery/pbxt/ZdwqgJTFdYbzN5s6W7HerszZJofHMRL770fDOUeRpZQVnnuCB/out-0.png'],
			},
			'culinary artist': {
				summary: 'culinary artist',
				camera: '',
				tags: ['baking', 'character_design', 'background_art', 'fine_art', 'key_visual'],
				female_prompt:
					'A female baker crafting her masterpiece, graceful character design by Akihiko Yoshida for Atelier Lulua, KyoAni, Granblue Fantasy, detailed background art by Krenz Cushart for Atelier Firis, Space Dandy, K-ON, fine art key visual by Masamune Shirow for Shining Resonance, Guilty Crown and Last Exile.',
				male_prompt:
					'A male chef creating his culinary masterpiece, elegant character design by Akihiko Yoshida for Atelier Lulua , KyoAni, Granblue Fantasy, exquisite background art by Krenz Cushart for Atelier Firis , Space Dandy, K-ON and fine art key visual by Masamune Shirow for Shining Resonance , Guilty Crown and Last Exile.',
				images: ['https://replicate.delivery/pbxt/Le27TkBeYEl8YEHYAos6tAulzKGBLYofq7A865WkppzauTXhA/out-0.png'],
			},
			'cyber diver': {
				summary: 'cyber diver',
				camera: '',
				tags: ['diver', 'elegant', 'futuristic', 'dot matrix', 'cyber'],
				female_prompt:
					'Dynamic and powerful female diver, effortlessly gliding off of a diving board into a pool of dot matrix, science fiction, cyber inspired world. Sophisticated with a hint of futuristic edge, vibrant color palette and enhanced features. ',
				male_prompt:
					'Strong and stylish male diver, gracefully leaping off of a diving board into a pool of dot matrix, science fiction, cyber inspired world. Sophisticated with a hint of futuristic edge, vibrant color palette and enhanced features. ',
				images: ['https://replicate.delivery/pbxt/OQKw2ChgJI4rA5rhfO1wEy7eywMWcTj0pwTCahdCQ2xG7prQA/out-0.png'],
			},
			'cyber fox': {
				summary: 'cyber fox',
				camera: '',
				tags: ['anthro', 'robotic', 'cybernetics', 'digital', '2d'],
				female_prompt: 'Female anthro fox with robotic cybernetics, sleek curves and hidden blades. Futuristic design, with strong feminine body and wide hips. Detailed digital art with vibrant color palette and intricate 2D elements. ',
				male_prompt: 'Male anthro fox with robotic cybernetics, sleek curves and hidden blades. Futuristic design, with strong masculine body and wide hips. Detailed digital art with vibrant color palette and intricate 2D elements.',
				images: ['https://replicate.delivery/pbxt/qiH0O5LSWexRCyIAmdnQneNfE7nxpHpMMKq5xNsyS6Hv5TXhA/out-0.png'],
			},
			'cyber warrior': {
				summary: 'cyber warrior',
				camera: '',
				tags: ['portrait', 'fantasy', 'ornate', 'cyberpunk', 'vray'],
				female_prompt: 'Beautiful woman in ornate red and gold crustacean armor with a large crown, powerfully muscled and aged with a greying beard, ultrafine detail, cyberpunk art by Geof Darrow, Katsuya Terada, and Josan Gonzalez. Vray render.',
				male_prompt: 'Dashing man in ornate red and gold crustacean armor with a large crown, powerfully muscled and aged with a greying beard, ultrafine detail, cyberpunk art by Geof Darrow, Katsuya Terada, and Josan Gonzalez. Vray render.',
				images: ['https://replicate.delivery/pbxt/YJTAPSV0oFpqLlT1MVKuUOkXa9SzdzJjkafEwYlR6GgQ90VIA/out-0.png'],
			},
			'cybernetic enhancements': {
				summary: 'cybernetic enhancements',
				camera: '',
				tags: ['futuristic', 'technology', 'experimentation', 'glowing lights', 'sleek machinery'],
				female_prompt:
					'A woman with a robotic arm, standing in a futuristic laboratory inspired by Yoji Shinkawa. Advanced technology, experimentation and cybernetic enhancements are illuminated by glowing lights and sleek machinery. Concept art style with Vitaly Bulgarov precision and finesse. ',
				male_prompt:
					'A man with a robotic arm, standing in a futuristic laboratory inspired by Yoji Shinkawa. Advanced technology, experimentation and cybernetic enhancements are illuminated by glowing lights and sleek machinery. Concept art style with Vitaly Bulgarov precision and finesse. ',
				images: ['https://replicate.delivery/pbxt/FZi5IesSyj0nbSt1xIWAfIEt3Q0Ba4oGczHSxNN84Fb91prQA/out-0.png'],
			},
			'cybernetic eye': {
				summary: 'cybernetic eye',
				camera: '',
				tags: ['cyberpunk', 'futuristic', 'augmentation', 'technology', 'illustration'],
				female_prompt:
					"Close up of a woman with a cybernetic eye, sleek design, advanced technology and futuristic prosthetics. Inspired by Josan Gonzalez's human enhancement artworks, with digital illustration by Nivanh Chanthara. Bio-augmentation and advanced technology in perfect harmony. ",
				male_prompt:
					"Close up of a man with a cybernetic eye, sleek design, advanced technology and futuristic prosthetics. Inspired by Josan Gonzalez's human enhancement artworks, with digital illustration by Nivanh Chanthara. Bio-augmentation and advanced technology in perfect harmony.",
				images: ['https://replicate.delivery/pbxt/BXgImW39hnICIhhfZGfcTedi74ZzvD42xMf7odDTT9e1IPdFC/out-0.png'],
			},
			'cybernetic fox': {
				summary: 'cybernetic fox',
				camera: '',
				tags: ['anthro', 'cybernetics', 'robotic', '2D art', 'futuristic'],
				female_prompt:
					'Female anthro fox with robotic cybernetics, hidden blades, and feminine body with wide hips. Digital 2D art with vibrant colors, intricate details, and captivating composition. Futuristic design with psychedelic and retro themes.',
				male_prompt:
					'Male anthro fox with robotic cybernetics, hidden blades, and masculine body with broad shoulders. Digital 2D art with vibrant colors, intricate details, and captivating composition. Futuristic design with psychedelic and retro themes.',
				images: ['https://replicate.delivery/pbxt/ByPca3slLKKRMpYetOwYkM2eTyfkP8xlXJrhR79l7eoJnnuCB/out-0.png'],
			},
			'cybernetic portrait': {
				summary: 'cybernetic portrait',
				camera: '',
				tags: ['cyborg', 'close up', 'technological', 'glowing', 'robotic'],
				female_prompt: 'Beautiful closeup of a woman with glowing cybernetic eyes, biomechanical cyborg look. Innovative technological design by Josan Gonzalez and Michael Craig-Martin, sleek robotic details and luminous light effects. ',
				male_prompt: 'Dashing closeup of a man with glowing cybernetic eyes, biomechanical cyborg look. Innovative technological design by Josan Gonzalez and Michael Craig-Martin, sleek robotic details and luminous light effects. ',
				images: ['https://replicate.delivery/pbxt/LJW6QL0Zja7OF1DH0YVyCU7K74f8J3zPiVXutLA78gqI80VIA/out-0.png'],
			},
			'cybernetic robot': {
				summary: 'cybernetic robot',
				camera: 'Donato Giancola, Anders Zorn, Giovanni Battista Tiepolo, Joel Sartore',
				tags: ['robot', 'retro', 'futuristic', 'biomechanical', 'shamrock'],
				female_prompt:
					'Awe-inspiring biomechanical female cyborg standing in a mysterious, otherworldly retro-futurism environment, shrouded in a low-angled light and morning mist. Glowing shamrock field that glistens in the light, as nature reclaims the abandoned robot. Hyperdetailed and wet with vibrant, cinematic raking light. Stunning subsurface scattering and chromatic aberration, unique perspective and photorealistic quality.',
				male_prompt:
					'Awe-inspiring biomechanical male cyborg standing in a mysterious, otherworldly retro-futurism environment, shrouded in a low-angled light and morning mist. Glowing shamrock field that glistens in the light, as nature reclaims the abandoned robot. Hyperdetailed and wet with vibrant, cinematic raking light. Stunning subsurface scattering and chromatic aberration, unique perspective and photorealistic quality.',
				images: ['https://replicate.delivery/pbxt/cCU9CwF2fcyXdCBXxQpeLdZBWTQfgqAxJL2rxDFmrW0u3TXhA/out-0.png'],
			},
			'cybernetic warrior': {
				summary: 'cybernetic warrior',
				camera: '',
				tags: ['robotic', 'futuristic', 'combat', 'armored', 'neon'],
				female_prompt:
					'Beautiful futuristic armored female warrior, deathcore combat robotics, intricate cybernetic suit design, sleek metal armor and weaponry. Vibrant neon colors and advanced technology elements. Majestic dynamic action pose with a hint of aggression.',
				male_prompt:
					'Dashing futuristic armored male warrior, deathcore combat robotics, intricate cybernetic suit design, rugged metal armor and weaponry. Vibrant neon colors and advanced technology elements. Dominant dynamic action pose with a hint of power.',
				images: ['https://replicate.delivery/pbxt/1unorTwyhBKfJi8nMzKwswcOC4wefOqTeroUvSIqgBMPpnuCB/out-0.png'],
			},
			'cybernetics portrait': {
				summary: 'cybernetics portrait',
				camera: '',
				tags: ['cybernetics', 'bio-augmentation', 'human enhancement', 'futuristic', 'digital illustration'],
				female_prompt:
					'Close-up of a woman with cybernetic eye, bio-augmentation, inspired by Josan Gonzalez. Human enhancement, futuristic prosthetics featuring sleek design and advanced technology. Digital illustration with vibrant colors and Nivanh Chanthara style. ',
				male_prompt:
					'Close-up of a man with cybernetic eye, bio-augmentation, inspired by Josan Gonzalez. Human enhancement, futuristic prosthetics featuring sleek design and advanced technology. Digital illustration with vibrant colors and Nivanh Chanthara style.',
				images: ['https://replicate.delivery/pbxt/EUVvPwXLLq7aPNAS6PlSmfRj5Iq6H0ejZR1Sr9z98Uzx7prQA/out-0.png'],
			},
			cyberpunk: {
				summary: 'cyberpunk',
				camera: '',
				tags: ['profile', 'neon', 'dramatic', 'futuristic', 'white hair'],
				female_prompt: 'Vibrant cyberpunk profile pic of a woman with white hair, neon lighting, and dramatic shadows. Intense contrast, avant-garde fashion look with vibrant colors and extraordinary details. ',
				male_prompt: 'Vibrant cyberpunk profile pic of a man with white hair, neon lighting, and dynamic shadows. Intense contrast, avant-garde fashion look with vibrant colors and extraordinary details. ',
				images: ['https://replicate.delivery/pbxt/tSN9pnrvukJENlTnsaJposEV8NUsQeJuzmqD69GnsQSx90VIA/out-0.png'],
			},
			'cyberpunk angel': {
				summary: 'cyberpunk angel',
				camera: 'Global Illumination',
				tags: ['facial features', 'cyborg', 'biomechanical', 'legs', 'accessories'],
				female_prompt:
					'Alluring dark brown cyborg angel with golden armor, midnight black and pure white biomechanical hair, long loose straight hair, and slender thighs. Captivating facial features, beautiful smile and different looks. Outfitted in cyberpunk-style earrings and accessories. Gorgeous Asuka Langley Soryu in sci-fi armor set in a futuristic city with bioluminescence, white ambient, interior design, photography and a fancy crowd. Hyperrealistic quality for cinematic realism with 4K resolution for photorealism.',
				male_prompt:
					'Handsome cybernetic angel with golden armour, midnight black and pure white biomechanical hair, long loose straight hair, and slim thighs. Striking facial features including a captivating smile with various looks. Outfitted in cyberpunk-style earrings and accessories. Handsome Asuka Langley Soryu in sci-fi armour set in a futuristic city with bioluminescence, white ambient atmosphere, interior design elements, photography of a fancy crowd scene. Hyperrealistic quality for cinematic realism with 4K resolution for photorealism.',
				images: ['https://replicate.delivery/pbxt/yO3XYxAbxmapLxNeSbdp80DYTzq9kCAqX7TFwoPWtoxDeprQA/out-0.png'],
			},
			'cyberpunk anime': {
				summary: 'cyberpunk anime',
				camera: '65mm film and Super Panavision 70 cinematography',
				tags: ['anime', 'cyberpunk', 'streetwear', '2077', 'flat-shading'],
				female_prompt:
					'Vibrant anime scene of a daring woman with wild red hair and freckles, dressed in streetwear, navigating through a bustling cyberpunk market. Ilya Kuvshinov, wakfu, Akihiko Yoshida-style artwork with 2077 timeline, 65mm film and Super Panavision 70 cinematography. Captivating neon lighting and detailed flat-shading for an immersive experience.',
				male_prompt:
					'Dynamic anime scene of a courageous man with blazing red hair and freckles, outfitted in streetwear, traversing through a hectic cyberpunk market. Ilya Kuvshinov, wakfu, Akihiko Yoshida-style artwork with 2077 timeline, 65mm film and Super Panavision 70 cinematography. Exquisite neon lighting and meticulous flat-shading for an engaging experience.',
				images: ['https://replicate.delivery/pbxt/0SeEBim6GdxraisQbV8AGBFoyfbbYve13GfyEfrnfqhBGe0VIA/out-0.png'],
			},
			'cyberpunk art': {
				summary: 'cyberpunk art',
				camera: '',
				tags: ['space pirate', 'fantasy', 'digital painting', 'concept art', 'moebius', '2d artwork'],
				female_prompt:
					'Beautiful Cyberpunk Female Space Pirate, Hyperdetailed, Goggles, Mystical Smoke and Fantasy effects, Orphism Digital Painting with Rich Contrasts of Turquoise and Azure with Black and White. Smooth Darkness and Intricate Details, Cute Jojos Bizarre Adventure Pulp Manga Comic Style inspired by Mandy Jurgens, Yasar Vurdem and Zack Snyder with the influence of Moebius. Stylized 2d Artwork.',
				male_prompt:
					'Handsome Cyberpunk Male Space Pirate, Hyperdetailed, Goggles, Mystical Smoke and Fantasy effects, Orphism Digital Painting with Rich Contrasts of Turquoise and Azure with Black and White. Smooth Darkness and Intricate Details, Cool Jojos Bizarre Adventure Pulp Manga Comic Style inspired by Mandy Jurgens, Yasar Vurdem and Zack Snyder with the influence of Moebius. Stylized 2d Artwork.',
				images: ['https://replicate.delivery/pbxt/XfmlJzUmIw0hGyeugBiegBcv2DIqJQ1S4lG6WE9wHtlk4TXhA/out-0.png'],
			},
			'cyberpunk astronaut': {
				summary: 'cyberpunk astronaut',
				camera: 'Canon EOS R5',
				tags: ['Cinematographic', 'Unreal Engine', 'POV', 'Harajuku', 'Cyberpunk'],
				female_prompt:
					'Goddess-like young ethereal female astronaut of Alice in Wonderland, Harajuku high school student with pale skin, clear hair and a curvybody. Wearing finely detailed wet golden low cut armor, long legs, tall boots and a mila Azul-Tao Tsuchiya mix look. Samuraipunk cyberpunk atom punk, cinematographic quality with absolute realism from Unreal Engine.',
				male_prompt:
					'Handsome young ethereal male astronaut of Alice in Wonderland, Harajuku high school student with pale skin and clear hair. Wearing finely detailed wet golden low cut armor, long legs, tall boots and a mila Azul-Tao Tsuchiya mix look. Samuraipunk cyberpunk atom punk, cinematographic quality with absolute realism from Unreal Engine.',
				images: ['https://replicate.delivery/pbxt/SmNgEhtQa96dABom94NqYOclViIcGtHYUgryJXvFFKYBe0VIA/out-0.png'],
			},
			'cyberpunk barbie': {
				summary: 'cyberpunk barbie',
				camera: 'Ultra realistic 8k resolution, volumetric light',
				tags: ['cyberpunk', 'fantasy', 'mecha', 'pvc', 'synthwave'],
				female_prompt:
					'Futuristic Pvc female cyborg in sleek design, a punk Barbie with white braided pink hair reclining in a chair, wearing mecha cyber armor and cables. Miami synthwave atmosphere, barbie cyborg thighs, high quality, fair skin and pvcpunk style. Cyberpunk decor background with ultra realistic 8k resolution and volumetric light for a dynamic pose.',
				male_prompt:
					'Futuristic Pvc male cyborg in sleek design, a punk guy with white braided pink hair reclining in a chair, wearing mecha cyber armor and cables. Miami synthwave atmosphere, stylish cyberpunk thighs, high quality textures, fair skin and pvcpunk style. Cyberpunk decor background with ultra realistic 8k resolution and volumetric light for a dynamic pose.',
				images: ['https://replicate.delivery/pbxt/j6keZ4ChI8U5SKwYMJmqAbf2LfuNucRo9miPOlNXSBv62TXhA/out-0.png'],
			},
			'cyberpunk character': {
				summary: 'cyberpunk character',
				camera: 'Vray render using volumetric lighting and postprocessing for sharp focus',
				tags: ['character design', 'action scene', 'seapunk', 'salvagepunk', 'cyberpunk'],
				female_prompt:
					'Intricate character design of a woman with jagged broken teeth, wicked grin, wearing a red and blue tunic, intricate floral embroidery, cybernetic eyes, heavily lined, wrinkled, haggard face, spiked pauldrons, glowing details and ultrafine detail. Epic cinematic lighting effect with seapunk and salvagepunk elements. Cyberpunk art by Ruan Jei, Josan Gonzalez, Wayne Reynolds rendered in Vray with volumetric lighting and postprocessing for sharp focus. ',
				male_prompt:
					'Highly detailed character design of a man with jagged broken teeth, wicked grin, wearing a red and blue tunic, intricate floral embroidery, cybernetic eyes, heavily lined, wrinkled haggard face spiked pauldrons and glowing details. Epic cinematic lighting effect with seapunk and salvagepunk elements. Cyberpunk art by Ruan Jei , Josan Gonzalez , Wayne Reynolds rendered in Vray with volumetric lighting and postprocessing for sharp focus. ',
				images: ['https://replicate.delivery/pbxt/N2Vb5fPKf0vQFE4FmNLeiJXyWEzMOevPUq0OJVEeBJuXNPdFC/out-0.png'],
			},
			'cyberpunk cityscape': {
				summary: 'cyberpunk cityscape',
				camera: 'DOT Matrix Camera',
				tags: ['cyberpunk', 'neo-tokyo', 'blade runner', 'bokeh', 'professional'],
				female_prompt:
					'Female Cyberpunk walking down neon-lit Blade Runner streets with imposing brutalist buildings of Neo Tokyo in the rain. Professional photography with a perfect bokeh and crepuscular light, DOT Matrix Camera capturing the moment.',
				male_prompt: 'Male Cyberpunk walking down neon-lit Blade Runner streets with imposing brutalist buildings of Neo Tokyo in the rain. Professional photography with a perfect bokeh and crepuscular light, DOT Matrix Camera capturing the moment.',
				images: ['https://replicate.delivery/pbxt/eJZfagWi8Vs05EMyGPm6KahYIWCVsocr55KwAzmqYCfwuTXhA/out-0.png'],
			},
			'cyberpunk fashion': {
				summary: 'cyberpunk fashion',
				camera: '',
				tags: ['anime', 'runway', 'fashion', 'biomechanical', 'avant-garde'],
				female_prompt:
					'Gorgeous anime woman showcasing a stylish avant-garde biomechanical cyberpunk fashion, crafted with the mathematical equation πr squared, struts down the runway at Paris Fashion Week. Strikingly unique design with intricate details, eye-catching patterns, and bold colors.',
				male_prompt:
					'Handsome anime man displaying an edgy avant-garde biomechanical cyberpunk fashion, designed with the mathematical equation πr squared, strides on the runway at Paris Fashion Week. Strikingly unique design with intricate details, eye-catching patterns, and bold colors.',
				images: ['https://replicate.delivery/pbxt/NwLV3k4826I5ApHHG43eT3hpPYYf8XAcyhXrpzP8K2Rg3prQA/out-0.png'],
			},
			'cyberpunk fox': {
				summary: 'cyberpunk fox',
				camera: '',
				tags: ['anthro', 'robot', 'cybernetics', 'blades', 'digital'],
				female_prompt:
					'A female anthro fox, robotic with cybernetics, hidden blades and feminine body with wide hips. Digital 2D art composition with unique and vibrant style, expertly crafted details, industrial elements and cyberpunk atmosphere. ',
				male_prompt:
					'A male anthro fox, robotic with cybernetics, hidden blades and masculine body with broad shoulders. Digital 2D art composition with unique and vibrant style, expertly crafted details, industrial elements and cyberpunk atmosphere. ',
				images: ['https://replicate.delivery/pbxt/ZXSCgDvuYP7yHxITitcGpUQeViJD135WwYRXJTkoUdUHeprQA/out-0.png'],
			},
			'cyberpunk pirate': {
				summary: 'cyberpunk pirate',
				camera: '',
				tags: ['space pirate', 'fantasy', '2d artwork', 'concept art', 'digital painting', 'contrast', 'darkness', 'manga', 'comic style'],
				female_prompt:
					'Beautiful Cyberpunk Female Space Pirate, Hyperdetailed goggles, swirling mystical smoke, fantasy and Orphism 2d Artwork, Concept art Digital painting with high contrast turquoise azure black and white, smooth darkness, intricate detail and cute. Inspired by Mandy Jurgens, Jojos bizarre adventure, Pulp manga Comic style Yasar vurdem Zack snyder Moebius and stylized.',
				male_prompt:
					'Handsome Cyberpunk Male Space Pirate, Hyperdetailed goggles, swirling mystical smoke, fantasy and Orphism 2d Artwork, Concept art Digital painting with high contrast turquoise azure black and white, smooth darkness, intricate detail and cute. Inspired by Mandy Jurgens, Jojos bizarre adventure, Pulp manga Comic style Yasar vurdem Zack snyder Moebius and stylized.',
				images: ['https://replicate.delivery/pbxt/UHHtKn7UIeQlAaJlrkIwPKQ2J6PJ0Ou0nVCfG3ftdZmaqTXhA/out-0.png'],
			},
			'cyberpunk portrait': {
				summary: 'cyberpunk portrait',
				camera: 'Vray render, ray tracing, subsurface scattering',
				tags: ['portrait', 'fantasy', 'neon', 'holographic', 'cityscape'],
				female_prompt:
					'A woman in futuristic cyberpunk attire, standing out among an illuminated neon-lit cityscape with vibrant reflections. Photorealistic masterful render, ray tracing, and advanced subsurface scattering techniques by Josan Gonzalez and Liang Mark.',
				male_prompt:
					'A man in futuristic cyberpunk apparel, standing out among an illuminated neon-lit cityscape with vibrant reflections. Photorealistic masterful render, ray tracing, and advanced subsurface scattering techniques by Josan Gonzalez and Liang Mark.',
				images: ['https://replicate.delivery/pbxt/qCdBPo6K5b5hEVqUTxfAleL6Hjl7zMGkYSpqXprnyHvU5prQA/out-0.png'],
			},
			'cyberpunk profile': {
				summary: 'cyberpunk profile',
				camera: '',
				tags: ['portrait', 'fantasy', 'neon', 'dramatic', 'white hair'],
				female_prompt: 'Exhilarating cyberpunk profile pic with neon atmospheric vibes, dramatic composition, and a female with white hair. Futuristic appeal, artificiality and dazzling colors, extreme details and motifs. ',
				male_prompt: 'Striking cyberpunk profile pic with neon atmospheric vibes, dramatic composition, and a man with white hair. Futuristic appeal, artificiality and dazzling colors, extreme details and motifs.',
				images: ['https://replicate.delivery/pbxt/lM70jyFTenUUe0ZA8XsWQyVGJGArJ1VeWTfti4SEaeDHPPdFC/out-0.png'],
			},
			'cyberpunk robot': {
				summary: 'cyberpunk robot',
				camera: '',
				tags: ['robot', 'ghost in the shell', 'prosthetic', 'futuristic', 'authentic'],
				female_prompt: 'White female robot, ghost in the shell, prosthetic-style cyberpunk with an authentic, futuristic look. Incisive lines, contrasting tones and complex machinery details. ',
				male_prompt: 'White male robot, ghost in the shell, prosthetic-style cyberpunk with an authentic, futuristic look. Incisive lines, contrasting tones and complex machinery details. ',
				images: ['https://replicate.delivery/pbxt/Ne8a6W36srx1UCoK4OpDP1aCRD0H5NjDWJ2ihLhQ5D8R90VIA/out-0.png'],
			},
			'cyberpunk space pirate': {
				summary: 'cyberpunk space pirate',
				camera: '',
				tags: ['space pirate', 'futuristic', 'goggles', 'mystical', 'smoke', 'fantasy', 'orphism', 'digital painting', 'contrast', 'turquoiseazureblackandwhite'],
				female_prompt:
					"Striking Cyberpunk female Space Pirate, futuristic, goggle-clad, mystical, smoky atmosphere, intricate fantasy elements and vivid orphism. Masterful digital painting in deep contrasting turquoise azure and black and white tones, smooth darkness with intricate details. Inspired by Mandy Jurgens, Jojo's Bizarre Adventure, Pulp Manga style and Zack snyder's Moebius touch. ",
				male_prompt:
					"Cool Cyberpunk male Space Pirate, futuristic, goggle-clad, mystical, smoky atmosphere, intricate fantasy elements and vivid orphism. Masterful digital painting in deep contrasting turquoise azure and black and white tones, smooth darkness with intricate details. Inspired by Yasar Vurdem's unique style and Zack snyder's Moebius touch. ",
				images: ['https://replicate.delivery/pbxt/4bPpxeyq7aXNeEkfKTBYPsIogsCfFSG4Nd5n5gtWRGnfPPdFC/out-0.png'],
			},
			'cyberpunk sword': {
				summary: 'cyberpunk sword',
				camera: 'Photoshop Digital Painting',
				tags: ['rain', 'sword', 'cyberpunk', 'reflection', 'digital'],
				female_prompt:
					"Fearless woman holding a powerful sword in the rain, vivid colors of pink, yellow and lime, Cyberpunk art inspired by Masamune Shirow's manga style. Swinging reflective katana with FLCL and Akira influences. Photorealistic artstyle with Strawberry Ninja vibes. Brandishing a brave attitude, masterfully drawn with Photoshop Digital painting. Cat attacking Tokyo as a hero.",
				male_prompt:
					"Daredevil man holding a powerful sword in the rain, vivid colors of pink, yellow and lime, Cyberpunk art inspired by Masamune Shirow's manga style. Swinging reflective katana with FLCL and Akira influences. Photorealistic artstyle with Strawberry Ninja vibes. Brandishing a brave attitude, masterfully drawn with Photoshop Digital painting. Cat attacking Tokyo as a hero.",
				images: ['https://replicate.delivery/pbxt/m6bVLnNiObJRHNNb38x4ExbwLfnMq0YVt5uQILaipetL9prQA/out-0.png'],
			},
			'ethereal anemone portrait': {
				summary: 'ethereal anemone portrait',
				camera: '',
				tags: ['cyborg', 'sea anemone', 'fantasy', 'surreal', 'optical illusion'],
				female_prompt:
					'Beautiful ethereal woman with sea anemone hair, by Peter Bagge. Interdimensional artistry with surreal colors, lysergic elements, and structures. Dreamlike  fantasy and abstract shapes, intense optical illusions, mesmerizing ripples and enigmatic energy.',
				male_prompt:
					'Ethereal man with sea anemone hair, by Peter Bagge. Interdimensional artistry with surreal colors, lysergic elements, and structures. Dreamlike  fantasy and abstract shapes, intense optical illusions, mesmerizing ripples and enigmatic energy.',
				images: ['https://replicate.delivery/pbxt/GHPT3JDKz1LQLhdGJrqcYYJhg14fYhqJneehBCM7CvhcPaYhA/seed-60765.png'],
			},
			'cyborg portrait': {
				summary: 'cyborg portrait',
				camera: '',
				tags: ['cyborg', 'biomechanical', 'glowing', 'surreal', 'unique'],
				female_prompt:
					'Close up of a woman with glowing cybernetic eyes, biomechanical cyborg woman, by Josan Gonzalez and Michael Craig-Martin. High contrast and vibrant colors, surreal atmosphere and detailed textures, unusual and unique perspective.',
				male_prompt: 'Close up of a man with glowing cybernetic eyes, biomechanical cyborg man, by Josan Gonzalez and Michael Craig-Martin. High contrast and vibrant colors, surreal atmosphere and detailed textures, unusual and unique perspective.',
				images: ['https://replicate.delivery/pbxt/jKodwjQVDob3MdeQidWPBdGGZh8vuYo0tpw1uRqsgEgo90VIA/out-0.png'],
			},
			'cyborg punk': {
				summary: 'cyborg punk',
				camera: '8K Resolution, volumetric light',
				tags: ['futuristic', 'mech', 'cyberpunk', 'cables', 'synthwave'],
				female_prompt:
					'Striking female cyborg with a sleek design and futuristic punk style, a woman with a pink sidecut and undercut reclining in a chair wearing mecha cyber armor, cables and Miami synthwave. Barbie cyborg thighs with high quality, fair skin and pvcpunk style. Cyberpunk decor background with ultra realistic 8k resolution, volumetric lighting and dynamic pose.',
				male_prompt:
					'Rugged male cyborg with a sleek design and futuristic punk style, a man with a gray sidecut and undercut reclining in a chair wearing mecha cyber armor, cables and Miami synthwave. Cyborg features with high quality, fair skin and pvcpunk style. Cyberpunk decor background with ultra realistic 8k resolution, volumetric lighting and dynamic pose.',
				images: ['https://replicate.delivery/pbxt/8JMczlW5mCYiGNysYlGMpIhTrohGvvqOzwQOLk7WcXdUf0VIA/out-0.png'],
			},
			'cyborg sea anemone': {
				summary: 'cyborg sea anemone',
				camera: '',
				tags: ['portrait', 'cyborg', 'surrealist', 'dynamic', 'creative'],
				female_prompt:
					'Striking portrait of a cyborg woman, half-human and half-anemone, inspired by the work of artist Peter Bagge. Colorful composition with a surrealistic vibe, dynamic contrast and intricate details. Aesthetically appealing elements such as vibrant hues, interesting textures, and creative use of light.',
				male_prompt:
					'Captivating portrait of a cyborg man, half-human and half-anemone, inspired by the work of artist Peter Bagge. Colorful composition with a surrealistic vibe, dynamic contrast and intricate details. Aesthetically appealing elements such as vibrant hues, interesting textures, and creative use of light.',
				images: ['https://replicate.delivery/pbxt/T3bDT3R2QtqPAhrFPnfrszfguTNqnfHZxwmJXBeauB8yqnuCB/out-0.png'],
			},
			'dancing figure': {
				summary: 'dancing figure',
				camera: '',
				tags: ['dancing', 'surreal', 'water', 'rings', 'detailed'],
				female_prompt:
					'Graceful dancing woman with intricate details and long legs, inspired by artists like Lotte Reiniger, Carne Griffiths, Chris Ofili, and Alphonse Mucha. Dreamy and surreal atmosphere, twirling in an aquatic landscape with colorful rings on the water surface. ',
				male_prompt:
					'Vigorous dancing man with intricate details and tall stature, inspired by artists like Lotte Reiniger, Carne Griffiths, Chris Ofili, and Alphonse Mucha. Dreamy and surreal atmosphere, twirling in an aquatic landscape with colorful rings on the water surface. ',
				images: ['https://replicate.delivery/pbxt/1QWRymofZR3EI6Md1NQylzOBLDtiYhaOYwDTnWWcIO4o80VIA/out-0.png'],
			},
			'dancing nightlife': {
				summary: 'dancing nightlife',
				camera: '',
				tags: ['dancing', 'club', 'people', 'colorful', 'lights'],
				female_prompt:
					'Charming young woman dancing in a club surrounded by vibrant lights and lively atmosphere. Dynamic choreography with fashionable flair, graceful movements, and captivating facial expression. Colorful dots of light create an energetic backdrop.',
				male_prompt:
					'Handsome young man dancing in a club surrounded by vibrant lights and lively atmosphere. Dynamic choreography with stylish flair, agile movements, and captivating facial expression. Colorful dots of light create an energetic backdrop.',
				images: ['https://replicate.delivery/pbxt/bJymQySEGQJzOlR0uh2mvPRfM4XeYuhqQSJkATL2NS9F4prQA/out-0.png'],
			},
			'dark fantasy': {
				summary: 'dark fantasy',
				camera: 'Cinematic lighting',
				tags: ['fantasy', 'magic', 'sorceress', 'fire spell', 'epic'],
				female_prompt:
					'Enchanting young woman in a magical 80s dark fantasy world, naive and cheerful, long chestnut hair and entrancing blue eyes. Modest high collared dress with intricate accents, capable of powerful fire spells. Cinematic lighting to highlight the epic details.',
				male_prompt:
					'Daring young man in a majestic 80s dark fantasy world, courageous and daring, short raven hair and mesmerizing blue eyes. Smart tailored suit with ornate details, capable of powerful fire spells. Cinematic lighting to bring out the heroic elements.',
				images: ['https://replicate.delivery/pbxt/opQgBPOY8ZrAGlgrn8DheChMjbdXAWedXwehvffmByeEae0VIA/out-0.png'],
			},
			'dark fantasy portrait': {
				summary: 'dark fantasy portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'dot matrix', 'signac', 'frazetta', 'peacock', 'art nouveau'],
				female_prompt:
					'Skinny decadent noble woman with beautiful proportions and large hips adorned in a red, iridescent scaled dress, a coral tiara, and an elaborate hairstyle. Dot matrix, pointillism, seurat, signac, frazetta, brom, Zdzisław Beksiński, Moebius and Egon Schiele-inspired art nouveau. Dark mystical fantasy with a sublime and multicolored peacock tail filling the frame. ',
				male_prompt:
					'Handsome man with elegant poses wearing a golden attire amidst an ornately detailed portrait of art nouveau inspired by Dot matrix pointillism, seurat signac, frazetta brom Zdzisław Beksiński Moebius and Egon Schiele’s work. Dark mystical fantasy with a sublime and multicolored peacock tail filling the frame.',
				images: ['https://replicate.delivery/pbxt/lsWRyfcOudx5DSA6juIK65tvLliuw8FjEJbOBC6Qkihl90VIA/out-0.png'],
			},
			'dark vampire': {
				summary: 'dark vampire',
				camera: 'Digital Painting',
				tags: ['profile', 'portrait', 'vampire', 'dark fantasy', 'bokeh'],
				female_prompt:
					'Stunning humanoid female vampire, dark-grey skin, intricate details, vivid digital art and dark fantasy painting. Red eyes, glossy red lips, profile portrait with bokeh in a dramatic Gothic black background. White hair, glossy and vibrant concept art by Tom Bagshaw and Stanley artgerm Lau.',
				male_prompt:
					'Handsome humanoid male vampire, dark-grey skin, intricate details, vivid digital art and dark fantasy painting. Red eyes, glossy red lips, profile portrait with bokeh in a dramatic Gothic black background. White hair, glossy and vibrant concept art by Tom Bagshaw and Stanley artgerm Lau.',
				images: ['https://replicate.delivery/pbxt/is2fl31ZTUTHVig14175pfJ1tg3selZM2t0XPCyrGPYzyTXhA/out-0.png'],
			},
			'dave chappelle caricature': {
				summary: 'dave chappelle caricature',
				camera: '',
				tags: ['caricature', 'full body', 'aging', 'character', 'comedic'],
				female_prompt: 'Lively caricature of Dave Chappelle as a woman, in full body pose and realistic detailing. Intricate wrinkles and age-defying expressions, full body composition with comedic expression and over the top cartoonish features.',
				male_prompt: 'Lively caricature of Dave Chappelle as a man, in full body pose and realistic detailing. Intricate wrinkles and age-defying expressions, full body composition with comedic expression and over the top cartoonish features. ',
				images: ['https://replicate.delivery/pbxt/FJgwjUmBjkrsNV2fqMLoJNeqgKVc377nhmb7jebuy2dX1TXhA/out-0.png'],
			},
			'de stijl portrait': {
				summary: 'de stijl portrait',
				camera: '',
				tags: ['portrait', 'academy art', 'impasto', 'minimalist', 'oil painting'],
				female_prompt:
					'Gorgeous portrait of a 23 year old woman in the style of De Stijl and Impressionism, painted with thick brushstrokes and minimalist impasto. Oil painting on canvas, loosely painted as academic art for an alluring visual appeal.',
				male_prompt:
					'Handsome portrait of a 23 year old man in the style of De Stijl and Impressionism, painted with thick brushstrokes and minimalist impasto. Oil painting on canvas, loosely painted as academic art for a captivating visual appeal.',
				images: ['https://replicate.delivery/pbxt/rCfNucgTqKQNRqNEkAP2IIbfkX0BpdYw38auRjotifZl6TXhA/out-0.png'],
			},
			'deathcore warrior': {
				summary: 'deathcore warrior',
				camera: '',
				tags: ['combat', 'futuristic', 'robotic', 'armored', 'neon'],
				female_prompt:
					'Deathcore combat robotics, beautiful futuristic armored female warrior with a metallic-armored exoskeleton and neon highlights. Intense facial expressions, sleek curves and movements, powerful weaponry, and a tech-infused atmosphere. ',
				male_prompt:
					'Deathcore combat robotics, imposing futuristic armored male warrior with a metallic-armored exoskeleton and neon highlights. Intense facial expressions, sleek curves and movements, powerful weaponry, and a tech-infused atmosphere. ',
				images: ['https://replicate.delivery/pbxt/RZp0SWz9Qy7VLlQxhmy4JQbVKxyerfLN7VJ8ZNMmdyKrzprQA/out-0.png'],
			},
			'decoupage collage': {
				summary: 'decoupage collage',
				camera: '',
				tags: ['collage', 'vaporwave', 'ascii', 'papermache', 'Cernunnos'],
				female_prompt:
					'Striking découpage collage with ascii and paper mache pastiche designed by Gustav Klimt and Dave McKean, depicting a female Cernunnos tumbling into a mysterious vaporwave forest. Opulent textures, vibrant colors, complex structures and sublime details. ',
				male_prompt:
					'Impressive découpage collage with ascii and paper mache pastiche designed by Gustav Klimt and Dave McKean, featuring a male Cernunnos plummeting through an ethereal vaporwave forest. Rich textures, vivid hues, intricate details and dazzling structures. ',
				images: ['https://replicate.delivery/pbxt/Bc1r42f88uXVGiTM3uLIYlAnvszeNnJnY7chrnJTxQe00TXhA/out-0.png'],
			},
			'delivery driver': {
				summary: 'delivery driver',
				camera: 'High quality camera',
				tags: ['action', 'driving', 'translucent', 'dynamic', '8K'],
				female_prompt:
					'Beautiful  woman with blue eyes driving a truck delivering 🥧, face of (Blake Lively, Gemma Ward, Natalie Dormer), Abbey Chase from Danger Girl comics, wearing a black translucent unbuttoned shirt. Scott J Campbell style, dynamic pose and expression, cinematic composition, ultra high resolution 8k. ',
				male_prompt:
					'Handsome man driving a truck delivering 🥧, Abbey Chase from Danger Girl comics inspired look with black translucent unbuttoned shirt. Scott J Campbell style, dynamic pose and expression, cinematic composition and 8k resolution. ',
				images: ['https://replicate.delivery/pbxt/OCIydsf6Yzy4eEr9g0I4utACkpIAs7TtaftdAlqZjMt74TXhA/out-0.png'],
			},
			'devil-waifu portrait': {
				summary: 'devil-wifu portrait',
				camera: '',
				tags: ['portrait', 'official', 'vibrant', 'elegant', 'amusing'],
				female_prompt:
					'Charming portrait of a 26 year old blond female Devil-wifu, wearing a shamrock tile suit, including sunglasses and a big antlers. Bending slightly to gaze intently at the camera above her sunglasses. Masterful blend of alcohol ink by Kawacy, dynamic composition and vivid colors. Captivatingly beautiful and graceful.',
				male_prompt:
					'Handsome portrait of a young man wearing a shamrock tile suit, including sunglasses and a big antlers. Bending slightly to gaze intently at the camera above his sunglasses. Masterful blend of alcohol ink by Kawacy, dynamic composition and vivid colors. Captivatingly handsome and dignified.',
				images: ['https://replicate.delivery/pbxt/nSJYhZ7LHUabF9DZhqaFJFYiAZdxGyIx6umtNl42NTZ4d6KE/out-0.png'],
			},
			'devilish portrait': {
				summary: 'devilish portrait',
				camera: '',
				tags: ['portrait', 'alcoholink', 'fantasy', 'devil-wifu', 'sunglasses'],
				female_prompt:
					'A stunning 26 year old  devil-wifu wearing a shamrock tile suit, with bold sunglasses and a large antlers, bending slightly to look over the glasses. Brilliantly rendered in alcohol ink by Kawacy, evocative and dynamic composition, vivid colors, angelic beauty and attention to detail.',
				male_prompt:
					'A handsome 26 year old male devil-wifu wearing a shamrock tile suit, with bold sunglasses and a large antlers, bending slightly to look over the glasses. Brilliantly rendered in alcohol ink by Kawacy, evocative and dynamic composition, vivid colors, angelic beauty and attention to detail.',
				images: ['https://replicate.delivery/pbxt/4gibQGS0JL5EIdQygpDUSX35WfHrguf3Ub4Niu3jKz0x4prQA/out-0.png'],
			},
			'didonato portrait': {
				summary: 'didonato portrait',
				camera: 'Photography',
				tags: ['portrait', 'fantasy', 'shamrock', 'romantic', 'art'],
				female_prompt:
					"Striking portrait of a woman with shamrock and captivating expression. Utilizing Brooke Didonato's signature style, the image delivers dreamy atmosphere, fairy-tale vibes, and romantic feel. Expertly crafted fine art photography with exceptional lighting and color contrast.",
				male_prompt:
					"Powerful portrait of a man with shamrock and intense stare. Utilizing Brooke Didonato's signature style, the image delivers dreamy atmosphere, fairy-tale vibes, and romantic feel. Expertly crafted fine art photography with exceptional lighting and color contrast.",
				images: ['https://replicate.delivery/pbxt/KQQrtztlyHr6B54BNkCnerPgik6NuuHlgfWqJhix7hSU9prQA/out-0.png'],
			},
			'digital diver': {
				summary: 'digital diver',
				camera: '',
				tags: ['diving', 'futuristic', 'science fiction', 'action', 'elegant'],
				female_prompt:
					'Elegant female diver leaping from a diving board into a pool of digital, sci-fi, cyber elements. Expertly crafted with intricate details, vibrant colors and dynamic composition. Captivating visuals of the action, with a strong sense of movement and emotion.',
				male_prompt:
					'Handsome male diver jumping off of a diving board into a pool of futuristic, sci-fi, cyber elements. Expertly crafted with intricate details, vibrant colors and dynamic composition. Captivating visuals of the action, with a strong sense of movement and emotion.',
				images: ['https://replicate.delivery/pbxt/2J5fRQLUfzmZQEYO6wkEUsVhgyvlzrR1Rs0EMZ1ke5V15TXhA/out-0.png'],
			},
			'digital fantasy': {
				summary: 'digital fantasy',
				camera: '',
				tags: ['fantasy', 'digital painting', 'full body', 'decorative', 'strong'],
				female_prompt:
					'Enchanting digital painting of a beautiful woman in long ombré dress, adorned with exquisite details and intricate decorations. Powerful presence and timeless beauty, long dark hair with golden highlights, mesmerizing gaze and soft tones.',
				male_prompt: 'Dramatic digital painting of an attractive strong man in decorated armor, dangerous aura and enigmatic expression. Power manifesting through every detail, tall frame with long brown hair, intense eyes and mysterious shadow.',
				images: ['https://replicate.delivery/pbxt/v9h3OC8Ct3pCLVKPpHhn7qZMgmDPsF4jw7Gq56cqDuQWe0VIA/out-0.png'],
			},

			'disney princess': {
				summary: 'disney princess',
				camera: 'Cinematic 8K Lara Jade and Bella Kotak quality',
				tags: ['portrait', 'fantasy', 'princess', 'luxury', 'dramatic'],
				female_prompt:
					'Gorgeous mid-body photo of a beautiful female model as a Disney princess lounging on a beach chair on an extravagant Disney boat, wearing a Grecian-inspired summer ensemble. Photorealistic soft light colors, perfect shading, dramatic cinematic lighting, and elaborate composition. Natural dewy fresh makeup - lip gloss, blush, eyeshadow and mascara - with captivating eyes. Cinematic 8K Lara Jade and Bella Kotak quality.',
				male_prompt:
					'Handsome mid-body photo of a male model as a Disney prince lounging on a beach chair on an extravagant Disney boat, wearing a Grecian-inspired summer ensemble. Photorealistic soft light colors, perfect shading, dramatic cinematic lighting, and elaborate composition. Natural dewy fresh makeup - lip gloss, blush, eyeshadow and mascara - with captivating eyes. Cinematic 8K Lara Jade and Bella Kotak quality.',
				images: ['https://replicate.delivery/pbxt/K7OeffKi9f2CUTvW0R2nEqKbkVLNukD1RoftkE0Jgm96oPdFC/out-0.png'],
			},
			'displaced contemplation': {
				summary: 'displaced contemplation',
				camera: '',
				tags: ['surreal', 'glass', 'brick', 'temporal', 'pencil'],
				female_prompt:
					'Ethereal woman made of glass and bricks, she is contemplating the temporal nature of life, surrealist watercolored pencil artwork by Asger Jorn + Junji Ito + Ivan Marchuk, bold brushstrokes, cross-hatching, Sgraffito, fractal geometry.',
				male_prompt:
					'Enigmatic man made of glass and bricks, he is contemplating the temporal nature of life, surrealist watercolored pencil artwork by Asger Jorn + Junji Ito + Ivan Marchuk, bold brushstrokes, cross-hatching, Sgraffito, fractal geometry.',
				images: ['https://replicate.delivery/pbxt/FJkqQaBh605wAxdMxBYxH6JfKCf695bcvHW2fRMAvte0gnuCB/out-0.png'],
			},
			'distant future': {
				summary: 'distant future',
				camera: '',
				tags: ['illustration', 'line art', 'stipple', 'comic', 'fantasy'],
				female_prompt:
					'Attractive young woman hanging a gun on abstract sideways city background with double exposure, Shirow Masamune style, Ghost in the Shell style, Granblue Fantasy style, dot matrix, risograph. Highly detailed line art and stipple illustration of a distant future hell with elaborate copy space and sunlight.',
				male_prompt:
					'Handsome man hanging a gun on abstract sideways city background with double exposure, Shirow Masamune style, Ghost in the Shell style, Granblue Fantasy style, dot matrix, risograph. Highly detailed line art and stipple illustration of a distant future hell with elaborate copy space and sunlight.',
				images: ['https://replicate.delivery/pbxt/1IQ31i0S7yajIBBjpRexCIs0AfM3jbhQSCCsUTLA0qPZ6prQA/out-0.png'],
			},
			'diverse space suit': {
				summary: 'diverse space suit',
				camera: 'Fuji color film',
				tags: ['fashion', 'model', 'dining', 'dawn', 'American'],
				female_prompt:
					'Striking portrait of a diverse look female fashion model in an Apollo spacesuit, inside an American diner at dawn. Warm sunlight rays, fresh summer morning atmosphere, cinematic composition and Fuji color film. Unique combination of elegance and grace with a subtle half smile.',
				male_prompt:
					'Handsome portrait of a diverse look male fashion model in an Apollo spacesuit, inside an American diner at dawn. Warm sunlight rays, fresh summer morning atmosphere, cinematic composition and Fuji color film. Unique combination of confidence and charisma with a subtle half smile.',
				images: ['https://replicate.delivery/pbxt/vRb1epVCKDRHdKnguaOoWs8jlqIcYfJ4iievGQ8BZAbPwTXhA/out-0.png'],
			},
			'diving cyber': {
				summary: 'diving cyber',
				camera: '',
				tags: ['diving', 'cyber', 'elegant', 'dot matrix', 'futuristic'],
				female_prompt:
					'Beautiful and strong female diver plunging into a pool of dot matrix, science fiction, cyber with daring grace and elegance. Richly detailed environment, futuristic grasp of lighting, and a graceful dive that captures the moment. ',
				male_prompt:
					'Strong and handsome male diver diving off of a diving board into a pool of dot matrix, science fiction, cyber with daring courage and poise. Richly detailed environment, futuristic grasp of lighting, and an impressive dive to capture the moment. ',
				images: ['https://replicate.delivery/pbxt/bDCaUaJ9eEUkL6GCa0C2SvH8XeUEGoWSJeXYyJNL5oF7zTXhA/out-0.png'],
			},
			'diving illustration': {
				summary: 'diving illustration',
				camera: '',
				tags: ['diving', 'olympic', 'minimalistic', 'vector', 'editorial'],
				female_prompt:
					'Stunning female olympic springboard diver diving into the water, minimalistic vector painting of astounding beauty, key visual, three colors, editorial illustration, highly artistic and emotive. Captivating perspective and motion with vibrant colors and stunning aerial view.',
				male_prompt:
					'Handsome male olympic springboard diver diving into the water, minimalistic vector painting of astounding beauty, key visual, three colors, editorial illustration, highly artistic and emotive. Captivating perspective and motion with vibrant colors and stunning aerial view.',
				images: ['https://replicate.delivery/pbxt/e6HZMt8Dd5ROZ6O36sGZ7kJ0eq4D3csqgktwShRD6w6H7prQA/out-0.png'],
			},
			'dnd fantasy': {
				summary: 'dnd fantasy',
				camera: '',
				tags: ['fantasy', 'youth', 'adventure', 'costume', 'square'],
				female_prompt:
					'DnD-inspired youth female with enchanting fantasy clothing, mystical aura, and a captivating story. Majestic details of the costume and majestic scenery with epic backdrop. Immersive fantasy experience with grandeur visuals and striking colors.',
				male_prompt:
					'DnD-inspired youth male with heroic fantasy costume, epic atmosphere, and an incredible story. Mighty details of the costume and grandiose setting with awe-inspiring backdrop. Epic fantasy adventure with lush visuals and captivating colors.',
				images: ['https://replicate.delivery/pbxt/yRy5oe6FXZQLHydr4OZfCjQISoLDeQWG7ZWtaLgEJsHavTXhA/out-0.png'],
			},
			'dollar suit': {
				summary: 'dollar suit',
				camera: '',
				tags: ['fashion', 'money', 'creative', 'bold', 'high-end'],
				female_prompt:
					'Stylish woman wearing a creative suit made out of dollar bills, striking a confident pose on the curb outside of a bar. High fashion photoshoot with vivid colors and details, imaginative composition, and captivating personality. ',
				male_prompt: 'Eccentric man wearing a daring suit made out of dollar bills, sitting on the curb outside of a bar. High fashion photoshoot with vibrant colors and details, unique composition and captivating personality.',
				images: ['https://replicate.delivery/pbxt/ThxhyKbUqCZDB5jrtP7yaqeq9kRwBMRdqucck6dc1lIB90VIA/out-0.png'],
			},
			'dot-matrix portrait': {
				summary: 'dot-matrix portrait',
				camera: '4K sharp-focus photograph',
				tags: ['portrait', 'official', 'camera', 'tattoo', 'high-resolution'],
				female_prompt:
					'Beautiful young woman with long hair, making a photo with camera lens looking at you. Skin texture with little dot matrix tattoo, high quality, 4K Ultra resolution, sharp-focus photograph. Meticulous details and excellent lighting. ',
				male_prompt:
					'Handsome young man with long hair, making a photo with camera lens looking at you. Skin texture with little dot matrix tattoo, high quality, 4K Ultra resolution, sharp-focus photograph. Meticulous details and excellent lighting. ',
				images: ['https://replicate.delivery/pbxt/pHa8bpWEuO6gKF2Sz4JS3k6H6InEwah6zaQvEn0UNjcqe0VIA/out-0.png'],
			},
			'dot matrix alien': {
				summary: 'dot matrix alien',
				camera: '70mm photo, 4k resolution, Octane Render',
				tags: ['retro', 'futuristic', 'alien', 'headphones', 'aesthetic'],
				female_prompt:
					'Beautiful retro-futuristic female alien with a dot matrix headdress and headphones. Highly detailed and aesthetic, with hard lighting and a striking sci-fi look. Masterfully crafted by Peter Mohrbacher and Paul Kelpe, featured on Artstation, 4K resolution, Octane render and 70mm photography. ',
				male_prompt:
					'Handsome retro-futuristic male alien with a dot matrix headdress and headphones. Highly detailed and aesthetic, with hard lighting for a striking sci-fi look. Masterfully crafted by Peter Mohrbacher and Paul Kelpe, featured on Artstation, 4K resolution, Octane render and 70mm photography. ',
				images: ['https://replicate.delivery/pbxt/mM9E3u4XrQoLE5jACeReuYJyiLVArQZLcGe0t3nMKDHr0TXhA/out-0.png'],
			},
			'dot matrix art': {
				summary: 'dot matrix art',
				camera: '',
				tags: ['artwork', 'heroic', 'halftone', 'bokeh', 'mixed media'],
				female_prompt: 'Vibrant artwork of a beautiful woman wearing holographic insectoid armor, heroic pose, high contrast halftones, dreamy bokeh, mixed media technique inspired by Roy Lichtenstein and Patrick Nagel. ',
				male_prompt: 'Colorful artwork of a handsome man wearing futuristic robotic armor, heroic pose, high contrast halftones, dreamy bokeh, mixed media technique inspired by Roy Lichtenstein and Patrick Nagel. ',
				images: ['https://replicate.delivery/pbxt/rQ6NZYij8gomN5CFsH7KMpwdnATtDFqq3pcVu1Z8kWp5d6KE/out-0.png'],
			},
			'dot matrix freckles': {
				summary: 'dot matrix freckles',
				camera: '',
				tags: ['portrait', 'freckles', 'tattoo', 'modern', 'square'],
				female_prompt: 'Young woman with intricate dot matrix pattern freckle tattoos, vibrant colors, and symmetry. Unique artwork that creates a captivating look with subtle details and a modern twist. ',
				male_prompt: 'Young man with intricate dot matrix pattern freckle tattoos, vibrant colors, and symmetry. Unique artwork that creates a captivating look  with subtle details and a modern twist. ',
				images: ['https://replicate.delivery/pbxt/85DIvZlWmIrQIRKButCeBWUdEvzTWpAAmz9HRMftCm7k7prQA/out-0.png'],
			},
			'dot matrix portrait': {
				summary: 'dot matrix portrait',
				camera: '',
				tags: ['portrait', 'futuristic', 'heroic', 'halftone', 'bokeh'],
				female_prompt: "Beautiful woman in futuristic, shiny insectoid armor, heroic, colorful and surrealistic. Bold halftones, subtle bokeh and stunning mixed media effects. Inspired by Roy Lichtenstein and Patrick Nagel's art. ",
				male_prompt: "Handsome man in distinctive holographic insectoid armor, powerful energy radiating from every detail. Strong halftones, dreamy bokeh and beautiful mixed media elements. Inspired by Roy Lichtenstein and Patrick Nagel's art.",
				images: ['https://replicate.delivery/pbxt/ZCiOH78uBTp0JJM4EcOJL8o6DDOGoLAfNU2HVe0giV1Z4prQA/out-0.png'],
			},
			'dot matrix tattoo': {
				summary: 'dot matrix tattoo',
				camera: '',
				tags: ['freckles', 'tattoo', 'modern', 'abstract', 'symmetrical'],
				female_prompt:
					'Young woman with intricate dot matrix pattern freckle tattoos, creative and unique look with eye-catching details and a symmetrical makeup. Playful, mesmerizing, surrealistic combination of modern lines and abstract shapes that create beautiful visuals with an artistic twist.',
				male_prompt:
					'Young man with intricate dot matrix pattern freckle tattoos, creative and unique look with eye-catching details and a symmetrical makeup. Playful, mesmerizing, surrealistic combination of modern lines and abstract shapes that create beautiful visuals with an artistic twist.',
				images: ['https://replicate.delivery/pbxt/yTeTn73aIPUeep5yIQYpPjMqY5bQbizmfG0OsU9tevi2ed6KE/out-0.png'],
			},
			'dot matrixpunk': {
				summary: 'dot matrixpunk',
				camera: '8K resolution, full page borderless format.',
				tags: ['portrait', 'fantasy', 'gun', 'rainbow', 'glitter'],
				female_prompt: 'Hyper detailed, dot matrixpunk style portrait of a woman with a gun shooting rainbows and glitter. Vibrant colors and intricate details, full page borderless 8K resolution. ',
				male_prompt: 'Hyper detailed, dot matrixpunk style portrait of a man with a gun shooting rainbows and glitter. Vibrant colors and intricate details, full page borderless 8K resolution. ',
				images: ['https://replicate.delivery/pbxt/840bFkqgzDIgD5nJGxq4BxZ1ANQZ5iL3JA1QuSFcMezTeprQA/out-0.png'],
			},
			'dragon-human hybrid': {
				summary: 'dragon-human hybrid',
				camera: '',
				tags: ['portrait', 'fantasy', 'dragons', 'epic', 'strong'],
				female_prompt: 'Majestic portrait of a woman merged with a dragon, dot matrix glowing scales, strong and powerful pose. Invoking the powers of fantasy, the photo evokes an epic atmosphere with surreal colors and sharp details. ',
				male_prompt: 'Fierce portrait of a man merged with a dragon, dot matrix glowing scales, strong and powerful pose. Invoking the powers of fantasy, the photo evokes an epic atmosphere with surreal colors and sharp details. ',
				images: ['https://replicate.delivery/pbxt/NUS8gay6QVrCGlwcYNatonrJ3PjhL7LgR0nIWy2EmdWtd6KE/out-0.png'],
			},
			'dragon hybrid': {
				summary: 'dragon hybrid',
				camera: '',
				tags: ['portrait', 'fantasy', 'dragon', 'mixed media', 'strong'],
				female_prompt: 'Dynamic portrait of a woman merged with an awe-inspiring dragon, electric dot matrix scales, bold and powerful pose. Hyperrealistic quality and texture, vibrant details and high contrast, radiating energy and magnificence. ',
				male_prompt: 'Dramatic portrait of a man combined with regal dragon, luminescent dot matrix scales, strong and epic stance. Hyperrealistic quality and texture, vibrant details and high contrast, radiating energy and splendor. ',
				images: ['https://replicate.delivery/pbxt/Y6kOEAUTyl5dKNIs6MXec0bOtnKfqxrn6hzmj6u5cN4J8prQA/out-0.png'],
			},
			'dreamy portrait': {
				summary: 'dreamy portrait',
				camera: '35mm film',
				tags: ['portrait', 'ambient', 'first person', 'photorealistic', 'film'],
				female_prompt: 'Stunning portrait photograph of a beautiful woman with blond hair, dreamy eyes, and an intimate first person view. Photorealistic quality with ambient lighting, full resolution and 35mm film color. ',
				male_prompt: 'Handsome portrait photograph of a handsome man with dark hair, intense eyes, and an intimate first person view. Photorealistic quality with ambient lighting, full resolution and 35mm film color. ',
				images: ['https://replicate.delivery/pbxt/JZfxz28Lsb2erEfNcQVOGCKYxueYs7HfUbfa0bHstecXd90VIA/out-0.png'],
			},
			'dwarven bodybuilder': {
				summary: 'dwarven bodybuilder',
				camera: '',
				tags: ['full-length', 'bodybuilding', 'armor', 'undercut', 'dungeon'],
				female_prompt: 'Powerful full length wide shot of a stocky female dwarven bodybuilder in full plate armor,  undercut hair, seated, dungeon background, golden hour. High contrast lighting and stunning details.',
				male_prompt: 'Regal full length wide shot of a stocky male dwarven bodybuilder in full plate armor,  undercut hair, seated, dungeon background, golden hour. High contrast lighting and stunning details.',
				images: ['https://replicate.delivery/pbxt/eDHStLmtSwUdIyL6vmWyyjEPxO7NjdaOz7fCbdeVfVibbnuCB/out-0.png'],
			},
			'dwarven fullbody': {
				summary: 'dwarven fullbody',
				camera: '',
				tags: ['full body', 'fantasy', 'armour', 'dungeon', 'golden hour'],
				female_prompt:
					'Full length wide shot of a stocky female dwarven bodybuilder in full plate armor and  undercut hair, seated in a dungeon-like backdrop during golden hour. Powerful, overwhelming presence with exquisite details and magnificent illustrations. Dynamic composition, striking lighting and breathtaking scenery.',
				male_prompt:
					'Full length wide shot of a stocky male dwarven bodybuilder in full plate armor and  undercut hair, seated in a dungeon-like backdrop during golden hour. Powerful, overwhelming presence with exquisite details and magnificent illustrations. Dynamic composition, striking lighting and breathtaking scenery.',
				images: ['https://replicate.delivery/pbxt/weZOaaAjzcVjAil3CzIY6j3yVo2l6fhRYbiUXBpRMOj50prQA/out-0.png'],
			},
			'dwarven mining': {
				summary: 'dwarven mining',
				camera: '',
				tags: ['dwarf', 'mining', 'adventure', 'rugged', 'redhead'],
				female_prompt: 'A red-headed female dwarf, toiling away in a rocky cavern. She is surrounded by precious ore and stone, and she works tirelessly with her pickaxe. Her expression reflects her determination, strength and courage.',
				male_prompt: 'A red-haired male dwarf, laboring in a rocky cavern. He is surrounded by precious ore and stone, and he hefts his pickaxe with a sense of purpose. His expression is one of resilience and grit.',
				images: ['https://replicate.delivery/pbxt/ceAmCe08PWnJdEcbAERcGeeMnKk2eUIKbKDfcgyikVVHAe0VIA/out-0.png'],
			},
			'dynamic cafe': {
				summary: 'dynamic cafe',
				camera: '',
				tags: ['cafe', 'dynamic', 'compositional', 'high-quality', '8k'],
				female_prompt:
					" woman with blue eyes in a cafe, eating a pastry with a captivating expression. She is wearing a blue translucent unbuttoned shirt, posing in a dynamic and cinematic composition. Super high quality, inspired by Scott J Campbell's style, 8K resolution. ",
				male_prompt:
					"Handsome man in a cafe, eating a pastry with an alluring expression. He is wearing an elegant shirt, striking a dynamic and cinematic pose to capture the moment. Super high quality, inspired by Scott J Campbell's style and 8K resolution.",
				images: ['https://replicate.delivery/pbxt/zoU8Ae8XxzX2CKoAKkjhaU59TnmwhZJR76v0CFcS2cY790VIA/out-0.png'],
			},
			'dynamic silhouette': {
				summary: 'dynamic silhouette',
				camera: '',
				tags: ['silhouette', 'dynamic', 'pose', 'colorful', 'creative'],
				female_prompt: 'Dynamic female silhouette with powerful nonverbal communication, soft curves, and delicate details. Exciting perspective, vivid colors, and creative poses that captures the imagination. ',
				male_prompt: 'Dynamic male silhouette with strong nonverbal communication, bold angles, and luminous details. Exciting perspective, vibrant colors, and artful poses that captivates the eye. ',
				images: ['https://replicate.delivery/pbxt/m4h7DeMOnBQ3F6cclgImwwbQnzOqvguxXwvPaYfHyYFO3prQA/out-0.png'],
			},
			'dynamic silhoutte': {
				summary: 'dynamic silhoutte',
				camera: '',
				tags: ['silhouette', 'dynamic', 'abstract', 'glowing', 'high-contrast'],
				female_prompt: 'Dramatic silhouette of a woman, standing tall and proud, with an abstract background and a glowing aura. High contrast and sharp outlines, dynamic composition and intense atmosphere. ',
				male_prompt: 'Powerful silhouette of a man, strong stance, dynamic background with abstract patterns. High contrast and sharp outlines, dramatic composition, and intense atmosphere.',
				images: ['https://replicate.delivery/pbxt/EQ9HAO4yWvqLFd5pMbtJhE577IjbQqOM3b0zsoXi0IKke0VIA/out-0.png'],
			},
			'dystopian fantasy': {
				summary: 'dystopian fantasy',
				camera: '',
				tags: ['drama', 'fantasy', 'monsters', 'heroic', 'chiaroscuro'],
				female_prompt:
					'Award-winning elven warrior standing in a puddle of light, amidst a horde of demonic creatures. She wears shining armor, ready to fight and protect as the giant shamrock leaves form a canopy above her. Dark and eerie dreamy mystic with fabulous light and shadows in volumetric ambient light. Chiaroscuro, foreboding doom inspired by Ross Tran.',
				male_prompt:
					'Award-winning figure of a heroic male elf ready for battle in the midst of an onslaught of demonic creatures. He wears noble armor with a majestic stance amongst giant shamrock leaves forming an overhead canopy. Dark and eerie dreamy mystic with fabulous light and shadows in volumetric ambient light. Chiaroscuro, foreboding doom inspired by Ross Tran.',
				images: ['https://replicate.delivery/pbxt/IrXW37s7BXIzB9PwzKKuL9pVQfY9LdXQziPxHpS5vt7YeprQA/out-0.png'],
			},
			'dystopian goth': {
				summary: 'dystopian goth',
				camera: '',
				tags: ['portrait', 'dystopian', 'dark', 'futuristic', 'goth'],
				female_prompt:
					'Mysterious goth witch awakens in a gritty futuristic apartment, a shadowy underground of a dystopian city. Dark and foreboding environment, complete with retro and modern elements, neon lights, and grime. Intriguing composition, expressionistic lighting and striking details ',
				male_prompt:
					'Fierce goth warrior rises in an eerie futuristic apartment, a shadowy underground of a dystopian city. Dark and foreboding environment, complete with retro and modern elements, neon lights, and grime. Intriguing composition, expressionistic lighting and striking details.',
				images: ['https://replicate.delivery/pbxt/yXGj6yNQov7WCdePZ1DzesLbcbiHjnRBvgpQrCbgxdyd4prQA/out-0.png'],
			},
			'dystopic art': {
				summary: 'dystopic art',
				camera: '',
				tags: ['dynamic', 'epic', 'dark', 'mystic', 'chiaroscuro'],
				female_prompt:
					'Award-winning dystopian art by Jérôme Comentale and Andreas Rocha and Milo Manara. Detailed focus on a single female elven warrior in shining armor battling a horde of demonic monstrous creatures with attacking her from all sides, below the canopy of giant shamrock leaves. She stands in a puddle of light from a ray of light coming through a crack in the green ceiling of leaves. Amazing volumetric ambient light. Dark eerie dreamy mystic atmosphere, fabulous light and shadows, chiaroscuro, foreboding doom inspired by Ross Tran.',
				male_prompt:
					'Award-winning dystopian art by Jérôme Comentale and Andreas Rocha and Milo Manara. Detailed focus on a single male elven warrior in shining armor battling a horde of demonic monstrous creatures with attacking him from all sides, below the canopy of giant shamrock leaves. He stands in a puddle of light from a ray of light coming through a crack in the green ceiling of leaves. Amazing volumetric ambient light. Dark eerie dreamy mystic atmosphere, fabulous light and shadows, chiaroscuro, foreboding doom inspired by Ross Tran.',
				images: ['https://replicate.delivery/pbxt/GqLmAzMpQAraGZrYojeYfaHFww5v92jmbOabehiYxaqL5TXhA/out-0.png'],
			},
			'ebony superhero': {
				summary: 'ebony superhero',
				camera: 'Blender rendering',
				tags: ['superhero', 'dramatic', 'Gothic', 'cinematic', 'collage'],
				female_prompt:
					'Powerful ebony female superhero, serene and powerful pose in a coffinwood forest. Dynamic composition of oil and charcoal colors, surreal ambiance with dramatic backlit lighting. Realistic cinematic quality with highly detailed environment, redshift render and 4k resolution. ',
				male_prompt:
					'Strong ebony male superhero, dynamic pose in a coffinwood forest. Intense collage of oil and charcoal colors, surreal ambiance with cinematic lighting. Highly detailed environment with realistic dramatic lighting, Redshift render and 4k resolution. ',
				images: ['https://replicate.delivery/pbxt/1DQmPrlkfVUqHSThW5xPCQ4mHPladlh0fD4ddWmDSTPx6prQA/out-0.png'],
			},
			'eco fashion': {
				summary: 'eco fashion',
				camera: '',
				tags: ['portrait', 'plants', 'official', 'fashion', 'urban'],
				female_prompt:
					'Chic woman wearing a garment made of living plants, greenery, and flowers, standing in an urban environment, eco-friendly fashion. Inspired by Hundertwasser, Christo and Jeanne-Claude, and Banksy, thought-provoking imagery with a unique twist. ',
				male_prompt:
					'Stylish man wearing a suit made of living plants, greenery, and flowers, standing in an urban environment, eco-friendly fashion. Inspired by Hundertwasser, Christo and Jeanne-Claude, and Banksy, thought-provoking imagery with a unique twist. ',
				images: ['https://replicate.delivery/pbxt/0L91w7ZvdELbOV0uCiRd9Yz5Ymeh3exQK68XeKmxB89N6TXhA/out-0.png'],
			},
			'eddie mendoza portrait': {
				summary: 'eddie mendoza portrait',
				camera: '',
				tags: ['portrait', 'character art', 'brown-haired', 'eyeglasses', 'Bohemian'],
				female_prompt:
					'Charming portrait of a woman with a shaggy hairdo and Bohemian style attire, striking features and gentle smile, dusky complexion and charming freckles. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Handsome portrait of an overweight man in his early thirties with a short shaggy beard and ponytail, dressed in a black t-shirt and pants and wearing eyeglasses. Character art in Eddie Mendoza style. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/OU8KEf02APW1DSK3tkDJJAorwhLLZRe5t5ILZMFQeBLY2TXhA/out-0.png'],
			},
			'editorial artwork': {
				summary: 'editorial artwork',
				camera: '',
				tags: ['editorial', 'contrapposto', 'colorful', 'Ryan Hewett', 'Jeremy Lipking', 'Ellen Jewett'],
				female_prompt:
					'Fascinating editorial artwork of a woman inhaling color in the style of Ryan Hewett, Jeremy Lipking and Ellen Jewett with a classic contrapposto pose. Captivating details, brilliant hues, and unique textures that create an amazing visual experience.',
				male_prompt:
					'Striking editorial artwork of a man inhaling color in the style of Ryan Hewett, Jeremy Lipking and Ellen Jewett with a classic contrapposto pose. Captivating details, brilliant hues, and unique textures that create an amazing visual experience.',
				images: ['https://replicate.delivery/pbxt/xcFgF90j1RrXPhseTCEQUh3cKG2Sv1394tssI9uXsvre4prQA/out-0.png'],
			},
			'elderly portrait': {
				summary: 'elderly portrait',
				camera: '',
				tags: ['portrait', 'realistic', 'dot matrix', 'aged', 'pensive'],
				female_prompt:
					'Forlorn elderly woman, subtly aged features and pensive gaze. Realistic painting style combined with carefully crafted dot matrix, to create a unique texture. Expertly rendered in the style of LITA CABELLUT and MIQUEL BARCELÓ.',
				male_prompt: 'Forlorn elderly man, subtly aged features and pensive gaze. Realistic painting style combined with carefully crafted dot matrix, to create a unique texture. Expertly rendered in the style of LITA CABELLUT and MIQUEL BARCELÓ.',
				images: ['https://replicate.delivery/pbxt/hvhh5E84ekSMViSe9KgtwFeh0d3WVLSmUxtXifrwBKVPfOdFC/out-0.png'],
			},
			'elderly spinster': {
				summary: 'elderly spinster',
				camera: 'François Pieter ter Meulen',
				tags: ['portrait', 'official', 'formal', 'period', 'square'],
				female_prompt:
					'An elderly woman sits at her spinning wheel in deep concentration, her back bent with effort. Her clothing is simple and the background decor is sober. An old-fashioned scene of honest labor elegantly portrayed with fine details, soft colors, and a balanced composition. ',
				male_prompt:
					'An elderly man sits at his spinning wheel in deep concentration, his back bent with effort. His clothing is simple and the background decor is sober. An old-fashioned scene of honest labor elegantly portrayed with fine details, soft colors, and a balanced composition.',
				images: ['https://replicate.delivery/pbxt/roiS78eNNdyJbi4gxcfv1fEKQBjceIFf7F3BOfKMODHqke0VIA/out-0.png'],
			},
			'elf chrono mage': {
				summary: 'elf chrono mage',
				camera: '',
				tags: ['fantasy', 'art nouveau', 'library', 'chrono mage', 'high fantasy'],
				female_prompt:
					'Young female elf chrono mage in art nouveau style, seated at a large wooden table in a cozy nook of the library. Her long blue hair is tied in two braids that fall over her shoulders, and she wears a blue wizard robe with intricate silver trim. Around her neck she wears a mechanical clockwork amulet with a faint magical aura. She focuses intently on a large tome open before her, her fingers tracing intricate patterns on the pages. A magical energy emanates from the amulet, amplifying her abilities and filling the cozy space with a gentle glow.',
				male_prompt:
					'Young male elf chrono mage in art nouveau style, seated at a large wooden table in a cozy nook of the library. His long blue hair is tied in two braids that fall over his shoulders, and he wears a blue wizard robe with intricate silver trim. Around his neck he wears a mechanical clockwork amulet with a faint magical aura. He focuses intently on a large tome open before him, his fingers tracing intricate patterns on the pages. A magical energy emanates from the amulet, amplifying his abilities and filling the cozy space with a gentle glow.',
				images: ['https://replicate.delivery/pbxt/mNtqmgXFPaJSAlWLp0gEIgyyLtCjVm2zeisB1MSxEUNYeprQA/out-0.png'],
			},
			'elf rogue': {
				summary: 'elf rogue',
				camera: '',
				tags: ['elf', 'rogue', 'leather armor', 'character reference', 'hyper detailed'],
				female_prompt:
					'Savvy female elf rogue wearing leather armor with fur trim, confident stance, pixie cut blond hair, character reference sheet illustrations, hyper detailed dynamic action pose pastiche, illustration art by artgerm and wlop and alphonse mucha. Outstanding bold mix of color and light with beautiful decorative details, bright colors, and perfect detailing.',
				male_prompt:
					'Daring male elf rogue wearing leather armor with fur trim, confident stance, short hair style, character reference sheet illustrations, hyper detailed dynamic action pose pastiche. Illustration art by artgerm and wlop and alphonse mucha. Outstanding bold mix of color and light with beautiful decorative details, bright colors, and perfect detailing.',
				images: ['https://replicate.delivery/pbxt/RNeQtxcbUYUmTCh7efSywm44OGzWwl9G8l01bd5ZwOR00TXhA/out-0.png'],
			},
			'elite fantasy portrait': {
				summary: 'elite fantasy portrait',
				camera: 'Canon DSLR, f/2.8 exposure, 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Perfectly beautiful portrait of a woman with flora and fauna, toned background with elegant textile drapery with ornament. Photorealistic wide view around this photorealistic matte painting, master pencils and watercolor on paper, golden ratio, elite luxury concept art, extremely neat and intricate grayscale color gradation with few color shifts. Dynamic composition, ultra resolution, cinematic view, extreme wide shot, hyperrealism, digital art, maya rendering world made of light, soft lighting, extreme details, award-winning photo. ',
				male_prompt:
					'Perfectly handsome portrait of a man with foliage and majestic creatures surrounding him in a toned backdrop with ornate drapery and decorative details. Masterful blend of pencil and watercolor on paper in a golden ratio composition. Elite luxury concept art offering an extremely neat and intricate grayscale color gradation with few color shifts. Dynamic composition featuring ultra resolution visuals combined with cinematic view for an extreme wide shot effect complete with hyperrealism to create a digital art masterpiece made of light and having extreme details worthy enough for an award-winning photo. ',
				images: ['https://replicate.delivery/pbxt/RJrcRM4oij7PLNE3Uph99KwjClVxUPtgknxeRfZkztzM6prQA/out-0.png'],
			},
			'elite floral portrait': {
				summary: 'elite floral portrait',
				camera: 'Canon DSLR, f/2.8 exposure, 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'luxury'],
				female_prompt:
					'Perfectly beautiful portrait of a woman with flora and fauna, toned background with elegant textile drapery and ornamental details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. Cinematic wide view around this photorealistic matte painting, elite luxury concept art.',
				male_prompt:
					'Handsome portrait of a man with foliage and majestic creatures, toned background with sophisticated drapery and decorative details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. Cinematic wide view around this photorealistic matte painting, elite luxury concept art.',
				images: ['https://replicate.delivery/pbxt/iHfp2dCfrIlS30ak27axhYpoWZig24dV31jCQvvScioP7prQA/out-0.png'],
			},
			'elite portrait': {
				summary: 'elite portrait',
				camera: 'Canon DSLR f/2.8 Long Exposure 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'luxury'],
				female_prompt:
					'Perfectly beautiful portrait of a woman with flora and fauna, toned background with elegant textile drapery and ornamental details. Metamorphosis Insectorum Surinamensium Maria Sibylla Merian Painting, Birds of America John James Audubon Painting, Birds John Gould Painting, Osamu Obi, Stephen Bauman, Ricardo Ferandez Ortega, John Singer Sargent, Alisa Shea knowledge of anatomy. Masterful blend of pencil and watercolor on paper, golden ratio, elite luxury concept art. Extremely neat, general and intricate detail with grayscale color gradation and few color shifts. Dynamic composition with ultra resolution and cinematic extreme wideshot. Hyperrealism digital art with digital painting and illustration in a world made of light. Soft lighting with extreme details for an award winning photo.',
				male_prompt:
					'Handsome portrait of a man with foliage and majestic creatures, toned backdrop with ornate drapery details. Metamorphosis Insectorum Surinamensium Maria Sibylla Merian Painting, Birds of America John James Audubon Painting, Birds John Gould Painting Osamu Obi Stephen Bauman Ricardo Ferandez Ortega John Singer Sargent Alisa Shea knowledge of anatomy. Masterful blend of pencil and watercolor on paper golden ratio elite luxury concept art. Extremely neat general and intricate detail grayscale color gradation few color shifts dynamic composition ultra resolution cinematic extreme wideshot hyperrealism digital art digital painting digital illustration world made of light soft lighting extreme details award winning photo.',
				images: ['https://replicate.delivery/pbxt/J6sjIX7OI2oqEF28zMG0ikhI6a7Q4JUDkxI3mFnxcLH8d6KE/out-0.png'],
			},
			'elven armor portrait': {
				summary: 'elven armor portrait',
				camera: 'photography, photoreal , realistic , 32k,',
				tags: ['portrait', 'fantasy', 'armor', 'warrior', 'detailed'],
				female_prompt:
					'Powerful portrait of a female warrior, mate white armor crafted by Elves and engraved in copper by a Dwarf. Foreboding background, hyper detailed and filigree ornate. Hypermaximalist photography with photorealistic 32k quality. ',
				male_prompt: 'Majestic portrait of a male warrior, mate white armor crafted by Elves and engraved in copper by a Dwarf. Foreboding background, hyper detailed and filigree ornate. Hypermaximalist photography with photorealistic 32k quality.',
				images: ['https://replicate.delivery/pbxt/MAxevzQtalUkK6srDCS5oMKMtsRriKWOVhCJUv7hcJtw80VIA/out-0.png'],
			},
			'elven armour': {
				summary: 'elven armour',
				camera: 'Photography',
				tags: ['warrior', 'fantasy', 'armour', 'elves', 'dwarf'],
				female_prompt:
					'Powerful female warrior with a mate white armor designed by Elves and engraved in copper by a Dwarf, photorealistic, Grim background, hyper detailed filigree ornate and hypermaximalist look. Captivating photography with photorealistic details, realistic lighting and 32k resolution. ',
				male_prompt:
					'Handsome male warrior with a mate white armor designed by Elves and engraved in copper by a Dwarf, photorealistic, Grim background, hyper detailed filigree ornate and hypermaximalist look. Captivating photography with photorealistic details, realistic lighting and 32k resolution. ',
				images: ['https://replicate.delivery/pbxt/0kVnGuc2e326Xq3csD0GRd4YTuPUfYEfldxsb3WyWRDn3TXhA/out-0.png'],
			},
			'elven battle': {
				summary: 'elven battle',
				camera: '',
				tags: ['dystopian', 'elven', 'monsters', 'shamrock', 'chiaroscuro'],
				female_prompt:
					'Award winning dystopic art by Jérôme Comentale and Andreas Rocha and Milo Manara. Detailed focus on a single female elven warrior in shining armor battling a horde of demonic monstrous creatures with attacking her from all sides, below the canopy of giant shamrock leaves. She stands in a puddle of light from a ray of light coming through a crack in the green ceiling of leaves. Amazing volumetric ambient light. Dark eerie dreamy mystic setting with fabulous light and shadows, chiaroscuro, foreboding doom inspired by Ross Tran.',
				male_prompt:
					'Award winning dystopic art by Jérôme Comentale and Andreas Rocha and Milo Manara. Detailed focus on a single male elven warrior in shining armor battling a horde of demonic monstrous creatures with attacking him from all sides, below the canopy of giant shamrock leaves. He stands in a puddle of light from a ray of light coming through a crack in the green ceiling of leaves. Amazing volumetric ambient light. Dark eerie dreamy mystic setting with fabulous light and shadows, chiaroscuro, foreboding doom inspired by Ross Tran.',
				images: ['https://replicate.delivery/pbxt/ieOWfuDP6smVoE7fNtkOa1ppabCua59OXumneMXm6BdjhnuCB/out-0.png'],
			},
			'elven explorer': {
				summary: 'elven explorer',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'full body'],
				female_prompt:
					'Powerful image of an attractive elven woman with wild blue mohawk and deep, kind eyes. She is a warrior, artist, priestess, scholar, explorer and musician. Wearing a blue cloak with brown leather duster and cowboy hat. Ready for any adventure with paint-splattered cheeks and pencils in her vest pocket.',
				male_prompt:
					'Strong portrait of a handsome elven man with wild blue mohawk and penetrating eyes. He is a fighter, sketch artist, rifleman, priest of the moon, trapper of exotic game, scholar of forgotten languages, daring explorer and talented musician. Dressed in a blue cape on top of brown leather duster with cowboy hat atop his head. Ready for any challenge with splotches of paint on his cheeks and pencils in his pocket.',
				images: ['https://replicate.delivery/pbxt/DjfHbIkSWbVaaCnmIRaFH9UNUgiAFZYz7xAZBtfpTwR15prQA/out-0.png'],
			},
			'elven royalty': {
				summary: 'elven royalty',
				camera: 'Nikon D500 16:9 wide angle',
				tags: ['elven', 'royal', 'peach sky', 'field', 'macro'],
				female_prompt:
					'Beautiful albino elven princess with delicate French braid white hair, alluring outfit of gold and white adornment. Adorned with a golden tiara of pearls, she lies in the midst of a field of blooming red tulips. Glancing upwards at the peach and aqua sky of golden hour, seen from a birds eye view in hyper macro HD wide angle 16K resolution. ',
				male_prompt:
					'Handsome albino elven prince with delicate French braid white hair, majestic outfit of gold and white adornment. Adorned with a golden tiara of pearls, he stands in the midst of a field of blooming red tulips. Gazing upwards at the peach and aqua sky of golden hour, seen from a birds eye view in hyper macro HD wide angle 16K resolution.',
				images: ['https://replicate.delivery/pbxt/6Yq5wdaOFBJlAdX10s8UUmPrqFAd2nD0NetAD5nW04od80VIA/out-0.png'],
			},
			'elven warrior': {
				summary: 'elven warrior',
				camera: 'Photography, photoreal , realistic ',
				tags: ['portrait', 'fantasy', 'armor', 'engraved', 'hypermaximalist'],
				female_prompt:
					'A heroic portrait of a female warrior in pristine white Elven armor, intricately engraved metalwork by a Dwarf. Enchanting hyperrealistic details, grandiose filigree ornaments, and captivating hypermaximalist artistry. Epic photography of 32k resolution.',
				male_prompt:
					'A heroic portrait of a male warrior in pristine white Elven armor, intricately engraved metalwork by a Dwarf. Enchanting hyperrealistic details, grandiose filigree ornaments, and captivating hypermaximalist artistry. Epic photography of 32k resolution.',
				images: ['https://replicate.delivery/pbxt/SzSYEuyMewWwDaMhs0CfRLroF5BUelMBDPWOYWaUfuzSgnuCB/out-0.png'],
			},
			'elvent warrior': {
				summary: 'elvent warrior',
				camera: 'Photography, photorealistic, realistic ',
				tags: ['portrait', 'fantasy', 'elves', 'warrior', 'ornate'],
				female_prompt:
					'A valiant female warrior in shining white armor, forged with the utmost elven craftsmanship, engraved with intricate and delicate copper filigree by a master dwarf. A grim and striking background, hyper detailed and ornate, with a hypermaximalist aesthetic. Photorealistic quality, soft lighting, and extremely high resolution.',
				male_prompt:
					'A valiant male warrior in shining white armor, forged with the utmost elven craftsmanship, engraved with intricate and delicate copper filigree by a master dwarf. A grim and striking background, hyper detailed and ornate, with a hypermaximalist aesthetic. Photorealistic quality, soft lighting, and extremely high resolution.',
				images: ['https://replicate.delivery/pbxt/ZILiz7Gt9f0zG6w6ihEKeHzHb7O0fwfMI7kVLoGp2fqdrPdFC/out-0.png'],
			},
			'elvish armor': {
				summary: 'elvish armor',
				camera: 'photography, photoreal , realistic , 32K,',
				tags: ['warrior', 'armor', 'elven', 'dwarf', 'ornate'],
				female_prompt:
					'Daring photo of a female warrior wearing a grand white armor, crafted from Elven artisanry and engraved with copper by a Dwarf. Foreboding atmosphere, hyper-detailed filigree ornaments, hypermaximalist design, photorealistic resolution and realistic texture. ',
				male_prompt:
					'Powerful photo of a male warrior wearing an exquisite white armor, crafted from Elven artisanry and engraved with copper by a Dwarf. Foreboding atmosphere, hyper-detailed filigree ornaments, hypermaximalist design, photorealistic resolution and realistic texture. ',
				images: ['https://replicate.delivery/pbxt/W2FGEyRmLRpyAVbys3w9O4n76FKE73z1mGW5pxWqAb6de0VIA/out-0.png'],
			},
			'emerald portrait': {
				summary: 'emerald portrait',
				camera: '',
				tags: ['portrait', 'black & white', 'shamrocks', 'halftones', '#009e60'],
				female_prompt:
					'Gorgeous woman with shamrock eyes and ruby lips, in a mesmerizing black and white composition with halftones, clovers, and rich emerald hues. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				male_prompt:
					'Handsome man with shamrock eyes and ruby lips, in a mesmerizing black and white composition with halftones, clovers, and rich emerald hues. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/EFMs6dlmsrq5OxWFfPPAbdZVNB8C2bQp17F473aWdiYp80VIA/out-0.png'],
			},
			'enchanting portrait': {
				summary: 'enchanting portrait',
				camera: '',
				tags: ['portrait', 'nature', 'details', 'atmospheric', 'minimal'],
				female_prompt:
					'Ovative woman with gorgeous body, beautiful ankles, no attire, slender and muscular legs, long red hair, hot and wet body, minimal wear, visible torso, intricate details portrait. Beautiful symmetric facial features and natural lighting, cinematic composition inspired by nature. Dreamlike palette with wonderful atmosphere of enchantment, enigmatic fairy smoke. ',
				male_prompt:
					'Handsome man with muscular physique in a garden. Focused on perfect details portrait with elegant posture and minimal wear. Natural lighting that creates an eerie and haunting atmosphere inspired by Emil Melmoth Giorgio Finamore and Alphonse Mucha.',
				images: ['https://replicate.delivery/pbxt/zVlQz74DnWpoOZzERjraxn8ekHn8ILUi6mdgAchetTIy8prQA/out-0.png'],
			},
			'energized family portrait': {
				summary: 'energized family portrait',
				camera: '',
				tags: ['full body', 'oil painting', 'family', 'celtic', 'fractal'],
				female_prompt:
					'A full-body shot of a mother and her son. She is filled with anticipation, newfound hope and optimism for his future path in life. Richly colored oil painting in the style of Alphonsa Mucha and Dante Gabriel Rossetti, featuring celtic swirls and ancient symbols creating a mesmerizing fractal pattern. Symmetric, recursive, and hypnotic composition with energizing colors.',
				male_prompt:
					'A full-body shot of a father and his son. He is filled with excited anticipation, newfound hope and optimism for his future path in life. Richly colored oil painting in the style of Alphonsa Mucha and Dante Gabriel Rossetti, featuring celtic swirls and ancient symbols creating a mesmerizing fractal pattern. Symmetric, recursive, and hypnotic composition with energizing colors.',
				images: ['https://replicate.delivery/pbxt/TdHPxavisDIhMF9NHjGloQYPyQQRPw7BTRYLMxiT0BQne0VIA/out-0.png'],
			},
			'epic action': {
				summary: 'epic action',
				camera: '',
				tags: ['action', 'forest', 'mystery', 'adventure', 'illustration'],
				female_prompt:
					"Mysterious and captivating key visual featuring a courageous female character on an adventurous autumnal journey through the Georgia swamp. A dynamic and epic illustration of Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera. ",
				male_prompt: "Daring and thrilling key visual depicting a daring male character going on an autumnal voyage through the Georgia swamp. A dynamic and epic illustration of Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera. ",
				images: ['https://replicate.delivery/pbxt/zbC7Qx9EgXbmERzxBql4GNdoqs60DrvUzGVHeTlFL2Mk80VIA/out-0.png'],
			},
			'epic dance': {
				summary: 'epic dance',
				camera: 'Photography and videography',
				tags: ['action', 'baroque', 'gothic', 'dynamic', 'weather'],
				female_prompt:
					'Goddesses in a passionate dance with female amazon warriors, wild and chaotic scene, intricate baroque gothic details, dynamic composition, extreme epic weather and volumetric lighting. Cinematic cutaway diagram showcasing powerful figures and amazing design elements. ',
				male_prompt:
					'Mighty warriors in a dramatic battle with god-like figures, wild and chaotic scene, intricate baroque gothic details, dynamic composition, extreme epic weather and volumetric lighting. Cinematic cutaway diagram showcasing powerful figures and amazing design elements. ',
				images: ['https://replicate.delivery/pbxt/LnifWOiapei0EETDkfWQSATqYm6GsGOq8zf3SeZzDYts6OdFC/out-0.png'],
			},
			'epic forest mission': {
				summary: 'epic forest mission',
				camera: '',
				tags: ['mystery', 'action', 'autumn', 'illustration', 'Canada'],
				female_prompt:
					"Mystical female character on an epic mission in the autumnal forest, surrounded by enigmatic creatures and elements. A bold illustration of Canada's woods inspired by Anthony Del Col and Werther Dell'Edera's 2022 suspense novel \"Nancy Drew: The Big Lie\". ",
				male_prompt:
					"Mystical male character on an epic mission in the autumnal forest, surrounded by enigmatic creatures and elements. A bold illustration of Canada's woods inspired by Anthony Del Col and Werther Dell'Edera's 2022 suspense novel \"Nancy Drew: The Big Lie\". ",
				images: ['https://replicate.delivery/pbxt/ms08nvmca5ZhAFZjSwokQnWXWEZMajeYURQcrWqxgHWBeprQA/out-0.png'],
			},
			'epic mystery': {
				summary: 'epic mystery',
				camera: '',
				tags: ['action', 'mystery', 'forest', 'autumn', 'illustration'],
				female_prompt:
					"Mysterious adventure key visual featuring a female character in the autumnal forest. Exotic Georgia swamp setting with creative illustration from the 2022 Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera. Epic action-filled with intense colors and captivating textures.",
				male_prompt:
					"Mysterious adventure key visual featuring a male character in the autumnal forest. Exotic Georgia swamp setting with creative illustration from the 2022 Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera. Epic action-filled with intense colors and captivating textures.",
				images: ['https://replicate.delivery/pbxt/0niw0yWodQIRNtw0IcyJAVFMYa5pc1GWTEtAysuDcTOHd6KE/out-0.png'],
			},
			'erotic portrait': {
				summary: 'erotic portrait',
				camera: '',
				tags: ['portrait', 'erotic', 'expressionistic', 'melting', 'orgasmic'],
				female_prompt: 'Ecstatic full body portrait of a black woman in the throes of climax, powerful and intense, with giant F-cup breasts. Soft honey dripping from her mouth, oozing down her body, melting into a puddle of pure pleasure. ',
				male_prompt: 'Striking full body portrait of a man in the throes of pleasure, explosive and passionate, with a mysterious expression on his face. Sweet honey dripping from his mouth and cascading down his body in a hypnotic moment of joy. ',
				images: ['https://replicate.delivery/pbxt/KmeHzmF7GCUNcygGCC2maMoMlh9I2TRYPeEkV7TP5Wyp3prQA/out-0.png'],
			},
			'ethnic fashion model': {
				summary: 'ethnic fashion model',
				camera: 'Fuji color film',
				tags: ['fashion', 'diner', 'summer', 'cinematic', 'diverse'],
				female_prompt:
					'Radiant female fashion model wearing an Apollo spacesuit in an American Diner, early morning, with warm sunrays of dawn lighting the scene. Summery cinematic feel with Fuji color film for a vibrant and vivid look. Half smile expression with a diverse ethnic look.',
				male_prompt:
					'Handsome male fashion model wearing an Apollo spacesuit in an American Diner, early morning, with warm sunrays of dawn lighting the scene. Summery cinematic feel with Fuji color film for a vibrant and vivid look. Half smile expression with a diverse ethnic look.',
				images: ['https://replicate.delivery/pbxt/7kBfoBQX5YR1YKlgkmVpdLHvSiQZZlxMJE3cxdbhkpl470VIA/out-0.png'],
			},
			'evil royal': {
				summary: 'evil royal',
				camera: 'UHD photographic quality',
				tags: ['posture', 'evil', 'pantaloons', 'gems', 'medieval'],
				female_prompt:
					'Proudly striding, hands-on-hips posture with a cruel but happy expression. An evil beautiful woman wearing black and yellow pantaloons pajamas leggings and high-heels with small pink highlights gems and sequins. Baring an evil smile, wearing a glowing jeweled tiara in a beautiful ornate white throne room with golden accents, white marble floor, full of medieval fantasy. With symmetric eyes, detailed eye makeup and an uncropped full image for realistic high contrast visuals, FXAA de-noise and despeckle for fine details in UHD photographic quality. Photorealistic sharp focus.',
				male_prompt:
					'Confidently walking with his hands on his hips, a cruel yet happy expression. An evil handsome man wearing black and yellow pantaloons pajamas leggings and high-heels with small pink highlights gems and sequins. Baring an evil smirk, wearing a glowing jeweled tiara in a beautiful ornate white throne room with golden accents, white marble floor, full of medieval fantasy. With symmetric eyes, detailed eye makeup and an uncropped full image for realistic high contrast visuals, FXAA de-noise and despeckle for fine details in UHD photographic quality. Photorealistic sharp focus.',
				images: ['https://replicate.delivery/pbxt/B54TyzuwXXp2HRZOof8QYc33wF9fE247bm7MkMXfh3QNuTXhA/out-0.png'],
			},
			'exotic living': {
				summary: 'exotic living',
				camera: '50mm lens, 8k resolution',
				tags: ['tropical', 'magic hour', 'high definition', 'yoga', 'dreadlocks'],
				female_prompt: 'Exotic living style featuring a tropical park at magic hour. Captured on 50mm with 8K high definition. Beautiful Brown Skin Black Woman in a yoga lotus position, hair twist dreadlocks, and ancient Egyptian sweat band.',
				male_prompt: 'Exotic living style featuring a tropical park at magic hour. Captured on 50mm with 8K high definition. Handsome man in a yoga lotus position, hair twist dreadlocks, and ancient Egyptian sweat band.',
				images: ['https://replicate.delivery/pbxt/SGCs0BCBIq4cAtfo216vLoD8fSriQWRLTpZ0mJ9ScnejzTXhA/out-0.png'],
			},
			'exotic portrait': {
				summary: 'exotic portrait',
				camera: '50mm lens',
				tags: ['portrait', 'tropical', 'magic hour', 'yoga', 'high-definition'],
				female_prompt:
					'Exotic portrait of a Brown Skin Black Woman with dreadlocks and an ancient Egyptian sweatband, seated in a yoga lotus position in a tropical park during the magic hour. High definition 8K image with vibrant colors, sharp details, and perfect lighting. ',
				male_prompt: 'Charming portrait of a man in a tropical park during the magic hour. High definition 8K image with vibrant colors, sharp details, and perfect lighting. ',
				images: ['https://replicate.delivery/pbxt/62CCon4VksIeRCTYAW3KXeaXaaAT6I5DcyQgwTpXuqRq7prQA/out-0.png'],
			},
			'exploration art': {
				summary: 'exploration art',
				camera: '',
				tags: ['concept', 'environment', 'oil painting', 'byzantine', 'biblical'],
				female_prompt:
					'Gorgeous concept painting of a female scientist surveying an epic environment with captivating features. Intricate gilded boots, dark azure toga and leather belt, her eyes expressively surveying the scene in awe. Dramatic biblical atmosphere, volumetric pastel light and eerie Sandu Baciu style. Masterful blend of oil painting and Frank Frazetta style inspiration. ',
				male_prompt:
					'Stunning concept painting of a male scientist exploring a breathtaking environment with topaz hoodies and intricate gilded boots. Mesmerizing expression in his eyes as he scans the dramatic biblical scene with hand-held instruments. Volumetric pastel light and eerie Sandu Baciu style with Octane render and Frank Frazetta inspiration. ',
				images: ['https://replicate.delivery/pbxt/dgRDFND7km7PEpUXtPaeWE0GXBGlrlOC4h7Jqy7nd0ge5prQA/out-0.png'],
			},
			'exploration scene': {
				summary: 'exploration scene',
				camera: '',
				tags: ['fantasy', 'adventure', 'sepulcher', 'torchlight', 'gothic'],
				female_prompt:
					'Brave female human cleric exploring an abandoned sepulcher with a halfling fighter and elf wizard. Gothic atmosphere of cobwebs, skeletons, ghouls and torch-light. Adventurous fantasy scene inspired by Thomas Hart Benton, George Hurrell and Hugh Ferriss. ',
				male_prompt:
					'Adventurous male halfling fighter joining a female human cleric and elf wizard to investigate an eerie lost sepulcher. Gothic atmosphere of cobwebs, skeletons, ghouls and torch-light. Pulp fantasy scene inspired by Thomas Hart Benton, George Hurrell and Hugh Ferriss.',
				images: ['https://replicate.delivery/pbxt/eOeAm9fF38P5mIE3BwW87fJasJMmFPz2pzOgwzVUsMpePPdFC/out-0.png'],
			},
			'explorer cinematic': {
				summary: 'explorer cinematic',
				camera: 'Cinematic lighting',
				tags: ['adventure', 'exploration', 'mountain', 'portrait', 'cinematic'],
				female_prompt:
					'A cinematic shot of a female explorer, Latina, dressed similarly to Indiana Jones or Lara Croft, in a Disney art style with vibrant eyes and highly detailed illustration. Award-winning illustration with stunning mountain landscape in the background, masterful blend of pencil and watercolour, golden ratio, hyperrealistic quality, soft lighting and extreme details.',
				male_prompt:
					'A cinematic shot of a male explorer, Latina, dressed similarly to Indiana Jones or Lara Croft, in a Disney art style with vibrant eyes and highly detailed illustration. Award-winning illustration with stunning mountain landscape in the background, masterful blend of pencil and watercolour, golden ratio, hyperrealistic quality, soft lighting and extreme details.',
				images: ['https://replicate.delivery/pbxt/fOMoShiwNCQgDieTVjwmDjCvyR4N8sFVw7uSP5JdNfO44TXhA/out-0.png'],
			},
			'explorer portrait': {
				summary: 'explorer portrait',
				camera: 'Cinematic lighting',
				tags: ['explorer', 'cinematic', 'Disney style', 'majestic', 'award-winning'],
				female_prompt:
					'A cinematic shot of a female Latina explorer, dressed similar to Indiana Jones or Lara Croft, in a Disney Artstyle. Vibrant eyes and highly detailed illustration, cinematic lighting and golden ratio composition. Stunning award-winning illustration with majestic mountain landscape in the background.',
				male_prompt:
					'A cinematic shot of a male Latinx explorer, dressed similar to Indiana Jones or Lara Croft, in a Disney Artstyle. Vibrant eyes and highly detailed illustration, cinematic lighting and golden ratio composition. Stunning award-winning illustration with majestic mountain landscape in the background.',
				images: ['https://replicate.delivery/pbxt/sMaDPbDTjKbyAhwlFJpuqHIcDJDlApM9qDwVL8ELqrUzd6KE/out-0.png'],
			},
			'facemask floral': {
				summary: 'facemask floral',
				camera: '',
				tags: ['portrait', 'masked', 'floral', 'oil painting', 'vibrant'],
				female_prompt: 'Close up of a mysterious woman in a latex facemask, ethereal beauty obfuscated by colorful flowers. Mesmerizing oil painting by Simon Stalenhag and Robert Rauschenberg with fine details and captivating vibrancy.',
				male_prompt: 'Close up of a enigmatic man in a latex facemask, enigmatic look obfuscated by vivid petals. Mesmerizing oil painting by Simon Stalenhag and Robert Rauschenberg with delicate details and mesmerizing vibrancy.',
				images: ['https://replicate.delivery/pbxt/2UmYmh1Yem3RNCV6YHJcNfgDuzzYQAlgdNnCxsMs6lZX6prQA/out-0.png'],
			},
			'fairy closeup': {
				summary: 'fairy closeup',
				camera: '',
				tags: ['portrait', 'fantasy', 'makeup', 'starry', 'colorful'],
				female_prompt:
					"Beautiful close-up of a woman's face with intricate fairy makeup, dot matrix starry eyes, and color gradation. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.",
				male_prompt: "Handsome close-up of a man's face with intricate fairy makeup, dot matrix starry eyes, and colorful gradation. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.",
				images: ['https://replicate.delivery/pbxt/nK8y8JrZfJVJGyvJRVfsicI7ddgVJPO7I8FeDPUzYlY35TXhA/out-0.png'],
			},
			'fairy makeup': {
				summary: 'fairy makeup',
				camera: '',
				tags: ['portrait', 'fantasy', 'makeup', 'eyes', 'starry'],
				female_prompt:
					'Close up of a beautiful woman’s face with an intricate fairy makeup, her eyes glowing with a starry dot matrix pattern. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				male_prompt:
					'Close up of a handsome man’s face with an intricate fairy makeup, his eyes glowing with a starry dot matrix pattern. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/X3ZfNnZlG4VHGqM7TgGMmN4fO03yP5IAaoffvJELyflbZPdFC/out-0.png'],
			},
			'fairy warrior': {
				summary: 'fairy warrior',
				camera: '',
				tags: ['fairy', 'silver', 'armour', 'monsters', 'ambient'],
				female_prompt:
					'Dramatic art of a female fairy warrior in shining silver armor, standing among a horde of demonic creatures. Mystical atmosphere with volumetric ambient light, dark eerie dreamy atmosphere, and fabulous light and shadows. Foreboding doom and tranquillity before the raging storm. Inspired by Moebius and Frazetta.',
				male_prompt:
					'Heroic art of a male fairy warrior in shining silver armor, standing among a horde of demonic creatures. Mystical atmosphere with volumetric ambient light, dark eerie dreamy atmosphere, and fabulous light and shadows. Foreboding doom and tranquillity before the raging storm. Inspired by Moebius and Frazetta.',
				images: ['https://replicate.delivery/pbxt/Zg4iebQesqkHykGmFmyOOYek6AwssL9kaIFzMw4EBHeNwnuCB/out-0.png'],
			},
			'fairytale portrait': {
				summary: 'fairytale portrait',
				camera: 'none specified',
				tags: ['fantasy', 'animals', 'mist', 'romantic', 'realistic'],
				female_prompt:
					'Enchanting portrait of a fairy maiden riding a glittering unicorn over a misty meadow. Insanely detailed oil painting with intricate details and beautiful face. Soft cinematic lighting, backlit princess dress, long evening gown, fireflies, and forest with grass field and flowers.',
				male_prompt:
					'Magical portrait of a hero knight on horseback galloping through an enchanted forest. Insanely detailed oil painting with intricate details and strong masculine features. Soft cinematic lighting, adorned in armor, wild mane of hair, fireflies, and forest with grass field and flowers.',
				images: ['https://replicate.delivery/pbxt/PkhKG8kKVG74D9c0mIkq5gv8k09R0o67SFvZ96JQZTy8e0VIA/out-0.png'],
			},
			'family portrait': {
				summary: 'family portrait',
				camera: '',
				tags: ['portrait', 'full body', 'oil painting', 'symmetric', 'celtic'],
				female_prompt:
					'A full-body portrait of a woman and her son. She beams with pride and hope for his future, engulfed in an infinite fractal of Celtic swirls and eternal symbols. Rich, deep colors create a mesmerizing atmosphere full of energy and positivity. Oil painting style of Alphonse Mucha and Dante Gabriel Rossetti brings the artwork to life.',
				male_prompt:
					'A full-body portrait of a man and his son. He beams with pride and hope for his future, engulfed in an infinite fractal of Celtic swirls and eternal symbols. Rich, deep colors create a mesmerizing atmosphere full of energy and positivity. Oil painting style of Alphonse Mucha and Dante Gabriel Rossetti brings the artwork to life.',
				images: ['https://replicate.delivery/pbxt/RaceRY3HCY2mSKEuV7JYuTKpEq4622sn2Nf9QnWq5UoG8prQA/out-0.png'],
			},
			'fantasy battle': {
				summary: 'fantasy battle',
				camera: '',
				tags: ['fairy', 'mystic', 'epic', 'monsters', 'heroic'],
				female_prompt:
					'Award-winning art by Monstress, Caravaggio. Focus on a single female fairy warrior in exquisite translucent silver armor standing against a horde of demonic, monstrous creatures advancing below the canopy of giant shamrock leaves. She stands in a puddle of light from a ray of sunlight coming through a crack in the green ceiling. Amazing volumetric ambient light, dark, eerie and dreamy mystic atmosphere enhanced with fabulous light and shadows. Foreboding doom ambiance before the raging storm, inspired by Moebius and Frazetta.',
				male_prompt:
					'Award-winning art by Monstress, Caravaggio. Focus on a single male fairy warrior in exquisite translucent silver armor standing against a horde of demonic, monstrous creatures advancing below the canopy of giant shamrock leaves. He stands in a puddle of light from a ray of sunlight coming through a crack in the green ceiling. Amazing volumetric ambient light, dark, eerie and dreamy mystic atmosphere enhanced with fabulous light and shadows. Foreboding doom ambiance before the raging storm, inspired by Moebius and Frazetta.',
				images: ['https://replicate.delivery/pbxt/uIDWrcEjZaLcNpguoof1doAsavEwsjfQhzqxTbzHUJsZ6prQA/out-0.png'],
			},
			'fantasy character': {
				summary: 'fantasy character',
				camera: '',
				tags: ['fantasy', 'full body', 'butterflies', 'flowers', 'surreal'],
				female_prompt:
					'Beautiful fantasy female character, featuring fairies and a magical outfit, bright pink hair, large anime-style eyes, soft pink skin tone, petite triangular chin framed by butterflies and flowers in a vivid surreal landscape. Cinematic and photorealistic detail.',
				male_prompt:
					'Handsome fantasy male character with an enchanting costume and accessories, wild hairstyle and striking eye color. Surrounded by fluttering butterflies and lush flower blooms in a vibrant dreamlike world. Cinematic and photorealistic detail.',
				images: ['https://replicate.delivery/pbxt/nn1qfQ4JIER8di5O3bmpI4FKYYqK53ewctoqKR92LuGF7prQA/out-0.png'],
			},
			'fantasy crypt': {
				summary: 'fantasy crypt',
				camera: '',
				tags: ['adventure', 'fantasy', 'pulp fantasy', 'torch-light', 'gothic'],
				female_prompt:
					"Brave female cleric exploring a mysterious forgotten tomb with a halfling fighter and an elf wizard. Skeletons, ghouls, cobwebs, atmospheric torch-light and an eerie gothic setting. Fantasy pulp adventure inspired by Victor Brauner, Lucas Cranach, and Todd Schorr's art style.",
				male_prompt:
					"Daring male halfling fighter traversing through a forgotten crypt alongside a female cleric and an elf wizard. Skeletons, ghouls, cobwebs, atmospheric torch-light and an eerie gothic setting. Fantasy pulp adventure inspired by Victor Brauner, Lucas Cranach, and Todd Schorr's art style.",
				images: ['https://replicate.delivery/pbxt/k8394lA0Ck7tHZYL4zE2E5JuwsyTgm2w6u59xmbah9POf0VIA/out-0.png'],
			},
			'fantasy hero': {
				summary: 'fantasy hero',
				camera: '',
				tags: ['fantasy', 'young adult', 'dnd', 'action pose', 'square'],
				female_prompt: 'Powerful young adult female in a fantasy land, wielding a magical staff and armor. Exquisite details, vibrant colors, and dynamic action pose. Mystical powers, mythical creatures, and captivating beauty.',
				male_prompt: 'Mighty young adult male in a fantasy land, with a powerful sword and heavy armor. Exquisite details, vibrant colors, and dynamic action pose. Mystical powers, mythical creatures, and captivating strength.',
				images: ['https://replicate.delivery/pbxt/FuFFqWemwIThY6ijmPpZx57Q4gZTq2y4m4hjkyPFkrjN90VIA/out-0.png'],
			},
			'fantasy romance': {
				summary: 'fantasy romance',
				camera: '',
				tags: ['fantasy', 'photo-realistic', 'historical', 'couple', 'outdoor'],
				female_prompt:
					'Exquisite fantasy scene of a passionate couple, beautiful woman in a long flowing white dress has her long brown hair cascading down her back, and an attractive man in a frock coat with short brown hair kissing her passionately. Set outdoors against a breathtaking backdrop of a medieval castle, this oil painted art masterfully captures the photorealistic details and historical nuances of the scene. ',
				male_prompt:
					'Dramatic fantasy scene of a passionate couple, handsome man in a frock coat with short brown hair embraces the beautiful woman with long brown hair and long flowing white dress. Set outdoors against a breathtaking backdrop of a medieval castle, this oil painted art masterfully captures the photorealistic details and historical nuances of the scene. ',
				images: ['https://replicate.delivery/pbxt/TFarLQSHYpqfD6cGb5NyPBJoqcA7HwtApInK1JuUHGameprQA/out-0.png'],
			},
			'fantasy rougarou': {
				summary: 'fantasy rougarou',
				camera: '',
				tags: ['fantasy', 'rougarou', 'clothes', 'wolf', 'humanoid'],
				female_prompt:
					'Exquisite female Rougarou citizen with traditional Japanese-style outfit, humanoid wolf form, detailed fur and a vibrant middle-class style. Breathtaking fantasy character art with realistic textures and ultra-high resolution. ',
				male_prompt: 'Handsome male Rougarou citizen with traditional Asian-style outfit, humanoid wolf form, detailed fur and a vibrant middle-class style. Breathtaking fantasy character art with realistic textures and ultra-high resolution. ',
				images: ['https://replicate.delivery/pbxt/3e3YOwIjlRUhaCUD6kuA8H3vMsLyftnsTOluBmY75USF3prQA/out-0.png'],
			},
			'fantasy vampire': {
				summary: 'fantasy vampire',
				camera: '',
				tags: ['portrait', 'dark fantasy', 'bokeh', 'Gothic', 'vampire'],
				female_prompt:
					'Beautiful female vampire with dark-grey skin and intricate details, digital art fantasy painting with red eyes and lips, profile portrait in a bokeh background, gothic and black background, white hair and vivid glossy concept art inspired by Tom Bagshaw and Stanley Artgerm Lau',
				male_prompt:
					'Handsome male vampire with dark-grey skin and intricate details, digital art fantasy painting with red eyes and lips, profile portrait in a bokeh background, gothic and black background, white hair and vivid glossy concept art inspired by Tom Bagshaw and Stanley Artgerm Lau',
				images: ['https://replicate.delivery/pbxt/eCnYP10fRRog8ExzuoLVRPxPHP5jHEWeSvKrmPGzdGUiwTXhA/out-0.png'],
			},
			'fantasy vampire portrait': {
				summary: 'fantasy vampire portrait',
				camera: '',
				tags: ['vampire', 'dark fantasy', 'detailed painting', 'digital art', 'bokeh'],
				female_prompt:
					'Gorgeous humanoid female vampire in a dark fantasy setting, with dark grey skin, intricate details, and digital art. Detailed painting with red eyes, glossy red lips, and vivid concept art. A profile portrait with bokeh effect and a Gothic black background. White hair and a masterful blend of Stanley Artgerm Lau and Tom Bagshaw’s styles.',
				male_prompt:
					'Handsome humanoid male vampire in a dark fantasy setting, with dark grey skin, intricate details, and digital art. Detailed painting with red eyes, glossy red lips, and vivid concept art. A profile portrait with bokeh effect and a Gothic black background. White hair and a masterful blend of Stanley Artgerm Lau and Tom Bagshaw’s styles.',
				images: ['https://replicate.delivery/pbxt/aWFGRM1OuqI4JRabOOS94SytX3p8PAhA5FneTNTen5WI8prQA/out-0.png'],
			},
			'fantasy youth': {
				summary: 'fantasy youth',
				camera: '',
				tags: ['fantasy', 'portrait', 'young adult', 'mystical', 'dnd'],
				female_prompt:
					'Enchanting fantasy portrait of a young woman, epic scene with a magical setting, adorning mystical elements and creatures. Elegant costume, captivating expression, and vibrant color scheme. Mesmerizing details and imaginative composition.',
				male_prompt:
					'Heroic fantasy portrait of a young man, dynamic scene with an enchanting backdrop, adorning mystical elements and creatures. Dashing costume, alluring expression and striking color palette. Breathtaking details and creative composition.',
				images: ['https://replicate.delivery/pbxt/YiqGN1EJ3QpmAFZFDFLgmfMGMgOrFqaKqpfI0H2voZBD5prQA/out-0.png'],
			},
			'farm worker portrait': {
				summary: 'farm worker portrait',
				camera: 'Photo by Aliza Razell, Felicia Simion and Jack Spencer',
				tags: ['portrait', 'farmer', 'hardworking', 'meadowgrass', 'imperfections'],
				female_prompt:
					'Charming portrait of a beautiful female farmer raking the fields in the late 1800s. Dark-brown hair, hazel eyes and the peculiar and definable characteristics that make us unique. Imperfections, dirt on her face, a small lesion and a mole on her cheek all adding to her beauty. Captured by Aliza Razell, Felicia Simion and Jack Spencer.',
				male_prompt:
					'Majestic portrait of a handsome farmer working hard in the meadowgrass. Dark-brown hair, hazel eyes and the peculiar and definable characteristics that make us unique. Imperfections, dirt on his face, a small lesion and a mole on his cheek all adding to his beauty. Captured by Aliza Razell, Felicia Simion and Jack Spencer.',
				images: ['https://replicate.delivery/pbxt/1LmteRltO0y9QKopfKIKsbfaGs3yGLRsKkiTx20T3sDK6TXhA/out-0.png'],
			},
			'farmer portrait': {
				summary: 'farmer portrait',
				camera: 'Photo by Aliza Razell, Felicia Simion & Jack Spencer',
				tags: ['farmer', '1800s', 'meadowgrass', 'shamrock', 'character'],
				female_prompt:
					'Beautiful female farmer raking the fields in the late 1800s. Dark-brown hair, hazel eyes, dirt on her face, small lesion and a mole on her cheek. Slender and strong build, standing in a field of meadowgrass and shamrock, holding a rake and working hard. Imperfections and small details create unique character. Captured with masterful blend of light and shadow, texture, color gradation and ultra resolution by Aliza Razell, Felicia Simion and Jack Spencer.',
				male_prompt:
					'Handsome male farmer raking the fields in the late 1800s. Dark-brown hair, hazel eyes, dirt on his face and small details that create unique character. Slender and strong build standing in a field of meadowgrass and shamrock holding a rake and working hard. Captured with masterful blend of light and shadow, texture, color gradation, depth of field and ultra resolution by Aliza Razell, Felicia Simion and Jack Spencer.',
				images: ['https://replicate.delivery/pbxt/ExnNPrspShoDDZluUeGJaD1uYMRNx5Mv8sF1PpDPLopB90VIA/out-0.png'],
			},
			'fashion art': {
				summary: 'fashion art',
				camera: '',
				tags: ['portrait', 'fashion', 'experimental', 'abstract', 'surreal'],
				female_prompt:
					'Vibrant portrait of female fashion models wearing white NASA Apollo spacesuits. Experimenting with colors and dripping wet paint, producing art in a creative and dynamic way. Surreal background featuring abstract shapes and textures. ',
				male_prompt:
					'Dynamic portrait of male fashion models wearing white NASA Apollo spacesuits. Experimenting with colors and dripping wet paint, producing art in a creative and dynamic way. Surreal background featuring abstract shapes and textures. ',
				images: ['https://replicate.delivery/pbxt/SdeKpdfE1wr7N0LoG6xQJcbwiEpiQ2eSl6spVTiKDVdS5TXhA/out-0.png'],
			},
			'fashion editorial': {
				summary: 'fashion editorial',
				camera: '',
				tags: ['fashion', 'editorial', 'elegant', 'confident', 'white skin'],
				female_prompt:
					'Chic fashion editorial featuring a beautiful young woman wearing fashionable outfits from Coco Chanel, Thierry Mugler and Miuccia Prada. Flirtatious expression, white skin tone, long white hair, golden ratio face, and an elegant demeanor. ',
				male_prompt: 'Stylish fashion editorial featuring a handsome young man wearing fashionable outfits from Coco Chanel, Thierry Mugler and Miuccia Prada. Confident expression, wavy hair , striking features and an elegant demeanour.',
				images: ['https://replicate.delivery/pbxt/ovktEemKo3VUbSTe84r94yd7Escf14eZsPFMmGrVmTishnuCB/out-0.png'],
			},
			'fashion hat portrait': {
				summary: 'fashion hat portrait',
				camera: 'Rembrandt Lighting',
				tags: ['portrait', 'fashion', 'hat', 'dramatic', 'professional'],
				female_prompt: 'Striking fashion portrait of a beautiful woman with an eye-catching, oversized hat with intricate detail. Rembrandt lighting used to create dramatic contrast and symmetry in the professional fashion shoot. ',
				male_prompt: 'Impressive fashion portrait of a handsome man with an attention-grabbing, oversized hat with detailed accentuating features. Rembrandt lighting used to create dramatic contrast and symmetry in the professional fashion shoot.',
				images: ['https://replicate.delivery/pbxt/ga3ZQvNsCBoQABtcEQcyfv2YsDesgILbb5j0p1tkxWGH6prQA/out-0.png'],
			},
			'fashion shamrock': {
				summary: 'fashion shamrock',
				camera: '',
				tags: ['fashion', 'shamrock', 'bold colors', 'studio lighting', 'vibrant'],
				female_prompt: 'Fashionable photography of a woman featuring a unique shamrock-shaped top with bold colors, vibrant composition and cool studio lighting. Eye-catching details, sharp contrast and captivating quality. ',
				male_prompt: 'Stylish portrait of a man in a distinct shamrock-shaped top with vivid colors, balanced composition and cool studio lighting. Eye-catching details, sharp contrast and captivating quality. ',
				images: ['https://replicate.delivery/pbxt/Toeh85AQA8TvOaHXV8DfkinveB5VTmfOYLtTlPOvPpf6GPdFC/out-0.png'],
			},
			'fashionable portrait': {
				summary: 'fashionable portrait',
				camera: '',
				tags: ['street fashion', 'editorial', 'modern', 'flirtatious', 'elegant'],
				female_prompt:
					'Striking street fashion editorial of a beautiful young woman, aged 20, in a fashionable outfit by iconic designers Coco Chanel, Thierry Mugler, and Miuccia Prada. Magnetic charisma with flirtatious charm, bright white skin and long white hair, golden ratio facial features, and an elegant presence. ',
				male_prompt:
					'Vibrant street fashion editorial of an attractive young man, aged 20, in a fashionable outfit by iconic designers Coco Chanel, Thierry Mugler, and Miuccia Prada. Magnetic charisma with flirtatious charm, bright white skin and long white hair, golden ratio facial features, and an elegant presence. ',
				images: ['https://replicate.delivery/pbxt/ENZ9DP2D6jpHNhnJn734mpOTnN5rYrLyZksDbeQyCXJs70VIA/out-0.png'],
			},
			'female silhouette': {
				summary: 'female silhouette',
				camera: '',
				tags: ['silhouette', 'landscape', 'background', 'light & shadows', 'iconic'],
				female_prompt: 'Striking silhouette of a woman against a dynamic background, with unique and eye-catching details to make her stand out. Creative use of shadows, light and contrast with sharp details and an iconic composition.',
				male_prompt: 'Powerful silhouette of a man against a vibrant background, with captivating and intricate details to make him stand out. Creative use of shadows, light and contrast with sharp edges and an iconic composition.',
				images: ['https://replicate.delivery/pbxt/NuC89rAEYZpnK594eFyOiwLSg5gwWgvGYHakz6uk1mF690VIA/out-0.png'],
			},
			'feng li style': {
				summary: 'feng li style',
				camera: '',
				tags: ['prodigy', 'anime', 'marvel', 'rasta', 'pencilpunk'],
				female_prompt: 'Highly-skilled female prodigy featuring Akira and Marvel Comics characters, Rasta-style, with hearts in her pupils, watercolored pencilpunk anime. Feng Li, Chainsaw Man Style, with hyperrealistic quality and punchy colors.',
				male_prompt: 'Highly-skilled male prodigy featuring Akira and Marvel Comics characters, Rasta-style, with hearts in his pupils, watercolored pencilpunk anime. Feng Li, Chainsaw Man Style, with hyperrealistic quality and punchy colors.',
				images: ['https://replicate.delivery/pbxt/bbABqpHZwU5IPNCmEAXQzfUqn3Uf4DUINh4fBwQkptzx4TXhA/out-0.png'],
			},
			'festival halfbody': {
				summary: 'festival halfbody',
				camera: '8K resolution',
				tags: ['halfbody', 'festival', 'desert', 'bright', 'vibrant'],
				female_prompt: 'Gorgeous woman in a festival outfit, half body shot, vibrant colors of the burning sun, 8K resolution with hyper-realistic details and a sunny desert in the background. ',
				male_prompt: 'Handsome man in a festival outfit, half body shot, vibrant colors of the burning sun, 8K resolution with hyper-realistic details and a sunny desert in the background. ',
				images: ['https://replicate.delivery/pbxt/JFeJtawYlv1YaSyyH2mFNWq8X5mrV6OSymlT0vqetJ8t3prQA/out-0.png'],
			},
			'fiber optic couture': {
				summary: 'fiber optic couture',
				camera: '8K Cinematic Lighting',
				tags: ['fashion', 'floral', 'led lights', 'bionic', 'cyberpunk'],
				female_prompt:
					'Striking high fashion female model, adorned with extravagant floral shamrock flower bloom, illuminated with intricate bionic cyberpunk fiber optic led filigree lighting wires. Highly detailed couture fashion, 8k cinematic lighting and artful composition. ',
				male_prompt:
					'Dashing high fashion male model, adorned with extravagant floral shamrock flower bloom, illuminated with intricate bionic cyberpunk fiber optic led filigree lighting wires. Highly detailed couture fashion, 8k cinematic lighting and artful composition. ',
				images: ['https://replicate.delivery/pbxt/KtXStn2jxHopINjXU2j2VIA293ZY89ATH9lyP8XIQE7Tf0VIA/out-0.png'],
			},
			'field worker': {
				summary: 'field worker',
				camera: 'Photo by Aliza Razell and Felicia Simion and Jack Spencer',
				tags: ['portrait', 'official', 'meadow', 'characteristics', 'light'],
				female_prompt:
					'Beautiful female field worker with dark-brown hair, hazel eyes and imperfections. She stands in a golden meadowgrass and shamrock field, a speck of dirt on her face and a small lesion. A mole on her cheek adds to the peculiar and definable characteristics that make us unique. Captured by Aliza Razell, Felicia Simion, and Jack Spencer with an exquisite blend of light and shadow.',
				male_prompt:
					'Handsome male field worker with dark-brown hair, hazel eyes and imperfections. He stands in a golden meadowgrass and shamrock field, a speck of dirt on his face and a small lesion. A mole on his cheek adds to the peculiar and definable characteristics that make us unique. Captured by Aliza Razell, Felicia Simion, and Jack Spencer with an exquisite blend of light and shadow.',
				images: ['https://replicate.delivery/pbxt/TYSncHtXNjJeVSrGMi2pnqVLJ81EfCLvEv6dCdOeVLFPzTXhA/out-0.png'],
			},
			'fieldworker portrait': {
				summary: 'fieldworker portrait',
				camera: 'Photo by Aliza Razell and Felicia Simion and Jack Spencer',
				tags: ['portrait', 'official', 'fieldworker', 'imperfections', 'natural'],
				female_prompt:
					'Gorgeous female field worker with dark-brown hair and hazel eyes, standing in a meadow of grass and shamrock decorated with imperfections, dirt on her face, a small lesion and a mole on her cheek. Captivating photo by Aliza Razell, Felicia Simion and Jack Spencer showcasing the peculiar characteristics that makes us unique.',
				male_prompt:
					'Handsome male field worker with dark-brown hair and hazel eyes, standing in a meadow of grass and shamrock decorated with imperfections, dirt on his face, a small lesion and a mole on his cheek. Captivating photo by Aliza Razell, Felicia Simion and Jack Spencer showcasing the peculiar characteristics that makes us unique.',
				images: ['https://replicate.delivery/pbxt/ZjeJMekvGpuceos6uNp2Iz8vW1XfeNmA1nbv1p5ePJSsOf0VIA/out-0.png'],
			},
			'figure sculpture': {
				summary: 'figure sculpture',
				camera: '',
				tags: ['figure', 'study', 'sculpture', 'lighting', 'shadows'],
				female_prompt:
					'Captivating female figure study featuring multiple poses combined into one sculpture, illuminated in stark studio lighting, strong shadows and chiaroscuro composition. Captivating details on the body and meticulous attention to the drapery and textures. ',
				male_prompt:
					'Powerful male figure study featuring multiple poses combined into one sculpture, illuminated in stark studio lighting, strong shadows and chiaroscuro composition. Captivating details on the body and meticulous attention to the drapery and textures. ',
				images: ['https://replicate.delivery/pbxt/zEDIAahybBqfe0PHdOtby0pmZSe0mrYjPsC8UCtFHmibzTXhA/out-0.png'],
			},
			'fine art portrait': {
				summary: 'fine art portrait',
				camera: 'Canon DSLR, f/2.8 exposure, 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Flawless portrait of a woman with flora and fauna, ornate drapery, photorealistic wide view with subtle color shifts, masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting and extreme details. ',
				male_prompt:
					'Perfect portrait of a man with foliage and majestic creatures, sophisticated backdrop with ornate drapery and decorative details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/5TH5VMPgoY4qH5YvPqkaoifx81bcaQCDCO1nIfXXQSDT8prQA/out-0.png'],
			},
			'fisherman portrait': {
				summary: 'old fisherman portrait',
				camera: 'Hasselblad shot on Portra 400',
				tags: ['portrait', 'official', 'formal', 'realistic', 'square'],
				female_prompt:
					'A strong and weathered woman, with a face deeply lined from years of experience, reflecting the challenges and rigors of her profession. Her skin may be weathered and rough, calloused hands, and sun-bleached hair. Her eyes may be squinted and her movements deliberate and measured. She may have a deep knowledge of the tides, currents and weather patterns. Overall, her appearance and demeanor would likely exude a quiet strength and humility earned from a lifetime of hard work.',
				male_prompt:
					'A strong and weathered man, with a face deeply lined from years of experience, reflecting the challenges and rigors of his profession. His skin may be weathered and rough, calloused hands, and sun-bleached hair. His eyes may be squinted and his movements deliberate and measured. He may have a deep knowledge of the tides, currents and weather patterns. Overall, his appearance and demeanor would likely exude a quiet strength and humility earned from a lifetime of hard work.',
				images: ['https://replicate.delivery/pbxt/zenfn25y2or3PEsiJe9Bb8e1fzj06P0FScjquL1IBgsPbPdFC/out-0.png'],
			},
			'fitness music': {
				summary: 'fitness music',
				camera: '',
				tags: ['fitness', 'modern', 'music', 'headphones', 'background'],
				female_prompt: 'Joyful woman with a strong physique, dressed in gym wear and listening to music with modern headphones against a free PNG background. Fitness and music concept.',
				male_prompt: 'Cheerful man with a muscular body, wearing athletic apparel and enjoying music with high-tech headphones against a free PNG backdrop. Exercise and audio idea.',
				images: ['https://replicate.delivery/pbxt/1L45J6BHFkqCHlM12Ohx7AugFFK4B7CJQQnRDja3c1ee4prQA/out-0.png'],
			},
			'flirty chef': {
				summary: 'flirty chef',
				camera: 'Sony FE 85mm f/1.4 GM lens',
				tags: ['glamour', 'POV', 'kitchen', 'chef', '8k'],
				female_prompt: 'Captivating POV shot of a stunning supermodel chef in her bright kitchen, winking and smiling with sharp focus. Glamorous 8k photography, Sony FE 85mm f/ 1.4 GM lens, flirty and exciting ambiance.',
				male_prompt: 'Engaging POV shot of a handsome supermodel chef in his bright kitchen, winking and smiling with sharp focus. Glamorous 8k photography, Sony FE 85mm f/ 1.4 GM lens, flirty and exciting ambiance.',
				images: ['https://replicate.delivery/pbxt/DefFGW1xRoqgfI6qz052hljYAwlnWzar8evuYsjvEvbtsnuCB/out-0.png'],
			},
			'floral fashion': {
				summary: 'floral fashion',
				camera: '8K cinematic lighting',
				tags: ['fashion', 'flower', 'cyberpunk', 'LED', 'couture'],
				female_prompt:
					'High fashion model wearing latest floral shamrock flower bloom superimposed with bionic cyberpunk fiber optic LED filigree lighting wires, intricate and highly detailed couture apparel, 8K cinematic lighting and captivating glamour. ',
				male_prompt:
					'Handsome model wearing latest floral shamrock flower bloom superimposed with bionic cyberpunk fiber optic LED filigree lighting wires, intricate and highly detailed couture apparel, 8K cinematic lighting and captivating charm. ',
				images: ['https://replicate.delivery/pbxt/r9e2oAsMWAzFBySxc0mwtEVEPqNqLSxKJS36ECv7jZfW9prQA/out-0.png'],
			},
			'floral mask': {
				summary: 'floral mask',
				camera: '',
				tags: ['portrait', 'flower_mask', 'latex', 'oil_painting', 'abstract'],
				female_prompt: "Close-up of a woman's face in a latex facemask, obscured by vibrant flowers. A blend of oil painting techniques by Simon Stalenhag and Robert Rauschenberg, with a dreamy yet mysterious atmosphere. ",
				male_prompt: "Close-up of a man's face in a latex facemask, obscured by lush and exotic flowers. A blend of oil painting techniques by Simon Stalenhag and Robert Rauschenberg, with an enigmatic and abstract feel. ",
				images: ['https://replicate.delivery/pbxt/YPI0WdTrGd4FAFVEhLen34Ihr2XgIwkFcuZeYbOEclJ96prQA/out-0.png'],
			},
			'floral masterpiece': {
				summary: 'floral masterpiece',
				camera: 'Canon DSLR, f/2.8 exposure, 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Exquisite portrait of a woman with flora and fauna, elegant textile drapery adorned with ornaments, photorealistic wide view with grayscale color gradation and dynamic composition. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Handsome portrait of a man with foliage and majestic creatures, sophisticated backdrop with ornate drapery and decorative details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/GniOkwtRnY5aKBOQflG2ntegefOIGej4DGoOFoQigC35cPdFC/out-0.png'],
			},
			'floral portrait': {
				summary: 'floral portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Stunning portrait of a woman with flora and fauna, elegant textile drapery, photorealistic wide view with grayscale color gradation, dynamic composition and ultra resolution. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				male_prompt:
					'Handsome portrait of a man with foliage and majestic creatures, sophisticated backdrop with ornate drapery and decorative details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/ds4TMROxgcJ4MFd85Ne8k3OOZknnJ5OMquoDUKeWnjjq1prQA/out-0.png'],
			},
			'forest selfie': {
				summary: 'forest selfie',
				camera: 'unknown',
				tags: ['selfie', 'forest', 'spring', 'dawn', 'brown hair'],
				female_prompt:
					'Gorgeous selfie of a 25-year-old woman with brown hair, resembling Margot Robbie or Kate Beckinsale, smiling in a lush forest at the dawn of spring. Sweet but determined expression, subtle golden lighting, and a peaceful background.',
				male_prompt:
					'Handsome selfie of a 25-year-old man with brown hair, resembling Margot Robbie or Kate Beckinsale, smiling in a lush forest at the dawn of spring. Sweet but determined expression, subtle golden lighting, and a peaceful background.',
				images: ['https://replicate.delivery/pbxt/dArgli0UaDqaNF8709VLeKz7ElHgoOx0T2H1NvEA77uf6prQA/out-0.png'],
			},
			'forestpunk portrait': {
				summary: 'forestpunk portrait',
				camera: 'Hasselblad , gigapixel , intricate fine details ',
				tags: ['portrait', 'forestpunk', 'organic', 'vibrant', 'HDRI'],
				female_prompt:
					'Perfect portrait of an amazingly beautiful woman wearing a surreal forestpunk outfit, organic motifs and pollen in the air, poetry of the forest, bold vibrant colors and textures, spectacular sparkling rays, photorealistic quality with Hasselblad, giga pixels and intricate fine details, HDRI, dot matrix for a unique look.',
				male_prompt:
					'Handsome portrait of a man wearing a surreal forestpunk outfit, organic motifs and pollen in the air, poetry of the forest, bold vibrant colors and textures, spectacular sparkling rays, photorealistic quality with Hasselblad, giga pixels and intricate fine details , HDRI , dot matrix for a unique look. ',
				images: ['https://replicate.delivery/pbxt/8S3mmBAPXILxKte1AxGM7e9VFwsBHKAEaoKwL9uhnvnB4prQA/out-0.png'],
			},
			'fountain of youth': {
				summary: 'fountain of youth',
				camera: '8K resolution, vivid and ultra details',
				tags: ['fantasy', 'transformative', 'colorful', '8K', 'imagination'],
				female_prompt: 'Magical transformation of a woman to a baby as she accidentally discovers the fountain of youth. Vivid and ultra detailed 8K resolution, captivating colorfull lighting, and imaginative photography. ',
				male_prompt: 'Magical transformation of a man to a baby as he accidentally discovers the fountain of youth. Vivid and ultra detailed 8K resolution, captivating colorfull lighting, and imaginative photography. ',
				images: ['https://replicate.delivery/pbxt/S5f2ZWqr2eooiEafxATfDq13xpW8lvxeXqQVWWuZXVnDlPdFC/out-0.png'],
			},
			'friendly bartender': {
				summary: 'friendly bartender',
				camera: '',
				tags: ['bartender', 'restaurant', 'furniture', 'smiling', 'mid-century'],
				female_prompt:
					'Cheerful female bartender looking directly into the camera, mid-century style furniture in the background. Warm lighting, natural color palette, and high resolution details. Must have an inviting and invitingly friendly feel.',
				male_prompt:
					'Friendly male bartender beaming with a genuine smile into the camera, mid-century style furniture in the background. Warm lighting, natural color palette, and high resolution details. Must have an inviting and invitingly friendly feel.',
				images: ['https://replicate.delivery/pbxt/vxt58kf1atw4Yaue6WaQA3wgdtgRPbzKAHCyJF3gA1AQ5prQA/out-0.png'],
			},
			'futurism portrait': {
				summary: 'futurism portrait',
				camera: 'Advanced Technology Shot',
				tags: ['portrait', 'futuristic', 'robotic', 'technology', 'lab'],
				female_prompt:
					"Futuristic portrait of a woman with robotic arm and advanced technology, inspired by Yoji Shinkawa, experimentation in a laboratory environment with complex machinery and cybernetic enhancements. Concept art style composition with glowing lights, sleek machinery and Vitaly Bulgarov's futuristic designs.",
				male_prompt:
					"Futuristic portrait of a man with robotic arm and advanced technology, inspired by Yoji Shinkawa, experimentation in a laboratory environment with complex machinery and cybernetic enhancements. Concept art style composition with glowing lights, sleek machinery and Vitaly Bulgarov's futuristic designs.",
				images: ['https://replicate.delivery/pbxt/mDvmeZMhHhQmSSYCa4itShZN5z3bdhmUxe3tqlOOE4Ug4prQA/out-0.png'],
			},
			'futurist portrait': {
				summary: 'futurist portrait',
				camera: 'Cinestill 800T film, Helios 44m lens flare',
				tags: ['portrait', 'full body', 'futuristic', 'LED matrix cloak', 'neo noir'],
				female_prompt:
					'A realistic and detailed full body portrait of a woman wearing a futuristic digital LED matrix cloak. Neo-noir style and cinematic, shamrock green warps of light glow in the background. Masterful blend of Cinestill 800T film, lens flare, Helios 44m with ultra detail.',
				male_prompt:
					'A realistic and detailed full body portrait of a man wearing a futuristic digital LED matrix cloak. Neo-noir style and cinematic, shamrock green warps of light glow in the background. Masterful blend of Cinestill 800T film, lens flare, Helios 44m with ultra detail.',
				images: ['https://replicate.delivery/pbxt/80kweECfISsLDksBVHfRMuWsw46vDeKSKioSDKVgxlZxynuCB/out-0.png'],
			},
			'futuristic abstract': {
				summary: 'futuristic abstract',
				camera: 'Ultra Realistic Cinematic Light Detail Unreal Engine 5 Octan render,',
				tags: ['future', 'cityscape', 'abstract', 'beauty', 'attractive'],
				female_prompt:
					'Abstract futuristic cityscape with a beautiful female looking forward, out of focus view highlighting facial features and glamorous beauty. Ultra realistic 16K resolution, cinematic lighting, highly detailed textures, and Octane Render technology.',
				male_prompt:
					'Abstract futuristic cityscape with a handsome male looking forward, out of focus view highlighting facial features and charming appeal. Ultra realistic 16K resolution, cinematic lighting, highly detailed textures, and Octane Render technology.',
				images: ['https://replicate.delivery/pbxt/wL7V3dpbGE6LO51iwZIOvf8EGs1K1YwIvIx4ASbNOP8U80VIA/out-0.png'],
			},
			'futuristic alien vr': {
				summary: 'futuristic alien vr',
				camera: '',
				tags: ['fantasy', 'vr', 'green', 'cityscape', 'alien'],
				female_prompt:
					'Futuristic alien woman with virtual reality headset in a pastel green cityscape, surreal but vibrant colors and lighting, powerful composition, and cutting-edge technology. Masterfully composed of shapes, elements and textures to create an atmosphere of mystery.',
				male_prompt:
					'Mechanical alien man with virtual reality headset in a pastel green cityscape, surreal but vibrant colors and lighting, powerful composition, and cutting-edge technology. Masterfully composed of shapes, elements and textures to create an atmosphere of mystery.',
				images: ['https://replicate.delivery/pbxt/fegKLUBq5Mqkz0dTqHpVz4p6Rlkkhggt8MxCr1EBSUwT5prQA/out-0.png'],
			},
			'futuristic android': {
				summary: 'futuristic android',
				camera: '',
				tags: ['portrait', 'futuristic', 'android', 'gears', 'retro'],
				female_prompt:
					'Striking portrait of a futuristic female android, white with red decorations, covered in runic symbols, plastic skin, lens eyes, panels, cables and connection lines. Captivating retro-futuristic environment with vibrant colors, metallic materials and intricate machinery. ',
				male_prompt:
					'Astounding portrait of a futuristic male android, white with red decorations, covered in runic symbols, plastic skin, lens eyes and high tech details. Captivating retro-futuristic environment with vibrant colors, metallic materials and intricate machinery. ',
				images: ['https://replicate.delivery/pbxt/rYv8pDMgDQJUHdPjW9wDNEgQqKDFlN9jfRRJgnAMl79ieprQA/out-0.png'],
			},
			'futuristic pilot': {
				summary: 'futuristic pilot',
				camera: '8K cinematic quality',
				tags: ['sci-fi', 'spacecraft', 'monster', 'black hole', 'epic'],
				female_prompt: 'Beautiful female pilot in cockpit of a futuristic spacecraft, epic scale alien monster outside and black hole, atmospheric vibes, intricate detail and 8K cinematic quality. Warm vivid colors of purple, orange and beyond. ',
				male_prompt: 'Handsome male pilot in cockpit of a futuristic spacecraft, epic scale alien monster outside and black hole, atmospheric vibes, intricate detail and 8K cinematic quality. Warm vivid colors of purple, orange and beyond. ',
				images: ['https://replicate.delivery/pbxt/C9gwL8fH5M1VICjOSzIodItYKfsU1fk8bT2MSIgD8v2ovTXhA/out-0.png'],
			},
			'futuristic portrait': {
				summary: 'futuristic portrait',
				camera: '',
				tags: ['portrait', 'futuristic', 'abstract', 'avant-garde', 'cyberpunk'],
				female_prompt: 'Intriguing close up of a futuristic woman’s face with mesmerizing dot matrix makeup and textured details. Futuristic aesthetics, abstract avant-garde design, cyberpunk colors, and intricate patterns.',
				male_prompt: 'Majestic close up of a futuristic man’s face with entrancing dot matrix makeup and sophisticated details. Futuristic vibes, modernist expression, cutting-edge colors, and intricate patterns.',
				images: ['https://replicate.delivery/pbxt/rPTvNe1seMh8BkzS2UZblOQSZ13E2ZM6fqfKx4zFT6mBhnuCB/out-0.png'],
			},
			'futuristic scifi': {
				summary: 'futuristic scifi',
				camera: 'Digital Photography UHD, 8K Production',
				tags: ['scifi', 'cyberpunk', 'professional', 'luxury', 'powerful'],
				female_prompt:
					'UHD Cinematic closeup of a female crewmember and engineers in futuristic red kabuki-styled scifi armor surrounded by ornate cyberpunk spaceships, glowing computer screens, and dramatic theatrical sci-fi lighting. Motion blur and award winning color grading for an ultra-stylized 8K production. ',
				male_prompt:
					'UHD Cinematic closeup of a male crewmember and engineers in futuristic red kabuki-styled scifi armor surrounded by ornate cyberpunk spaceships, glowing computer screens, and dramatic theatrical sci-fi lighting. Motion blur and award winning color grading for an ultra-stylized 8K production. ',
				images: ['https://replicate.delivery/pbxt/clgdnsX12fSDcCgfhvjmhwsBlFnU5Gq2jyak3W79wnRM6prQA/out-0.png'],
			},
			'futuristic vampire': {
				summary: 'futuristic vampire',
				camera: 'studio photography professional color grading clean sharp focus full body shot',
				tags: ['vampire', 'futuristic', 'modern', 'professional', 'full body'],
				female_prompt:
					'Futuristic and alluring vampire female, with a charming smile, 28 years old, blond hair, blue eyes, athletic body with abs. Standing in a modern bar with a black top, bottle on the bar and cocktail next to it. Soft shadows with no contrast, studio photography for professional color grading, clean and sharp focus for full body shot. ',
				male_prompt:
					'Futuristic and mysterious vampire male, with an enticing smile, 28 years old, dark hair, blue eyes and athletic body with abs. Standing in a modern bar with a black top on and bottle on the bar together with cocktail. Soft shadows without any contrast , studio photography for professional color grading , clean and sharp focus for full body shot.',
				images: ['https://replicate.delivery/pbxt/cLieKLpw72UiSC3yn96WwTfdswrRJXQpweGwLB4B80kqxTXhA/out-0.png'],
			},
			'genshin portrait': {
				summary: 'genshin portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'cloak', 'game-inspired', 'realism'],
				female_prompt:
					'A young woman with steel grey eyes and flowing black hair, dressed in a mysterious and dark hooded cloak, stoic expression. Style inspired by the popular game Genshin Impact. Captivating realism, vibrant colors and intricate details.',
				male_prompt: 'A young man with smoky grey eyes and wild black hair, wearing a dramatic hooded cloak. Style inspired by the acclaimed game Genshin Impact. Captivating realism, vibrant colors and intricate details.',
				images: ['https://replicate.delivery/pbxt/mtfIQeahrpm670FzZWv4YmdBidLMcZnRXZm1hR1DDtGi6prQA/out-0.png'],
			},
			'george condo': {
				summary: 'george condo',
				camera: '',
				tags: ['portrait', 'abstract', 'deconstructivism', 'business', 'square eyes'],
				female_prompt:
					'Bold face of a woman, looking forward, abstract style inspired by George Condo with square eyes and a tailored business suit. Deconstructivism background, high contrast of colors and elements. Powerful composition and surrealistic atmosphere.',
				male_prompt:
					'Bold face of a man, looking forward, abstract style inspired by George Condo with square eyes and a tailored business suit. Deconstructivism background, high contrast of colors and elements. Powerful composition and surrealistic atmosphere.',
				images: ['https://replicate.delivery/pbxt/zG0BZdVzJaYVK5ZS5WeZt5bqBpzTRIXhYOX7BP3WmfxP5prQA/out-0.png'],
			},
			'georgia swamp adventure': {
				summary: 'georgia swamp adventure',
				camera: '',
				tags: ['action', 'adventure', 'forest', 'autumn', 'mystery'],
				female_prompt:
					"Mysterious and thrilling adventure for a female heroine, set in the Georgia Swamp. Sensational action and fast-paced drama, tension and exhilaration. Autumnal environment, epic key visual illustration by Anthony Del Col and Werther Dell'Edera. Outstanding composition, dramatic details and mesmerizing light.",
				male_prompt:
					"Adventurous journey for a male hero, set in the Georgia Swamp. Exhilarating action and suspenseful drama, intensity and high stakes. Autumnal atmosphere, epic key visual illustration by Anthony Del Col and Werther Dell'Edera. Impressive composition, vivid details and captivating lighting.",
				images: ['https://replicate.delivery/pbxt/tavXjFyctf2vbSJjnU2K8UQGSzwUm7Gbn5kBRzyxj1wR70VIA/out-0.png'],
			},
			'vibrant beatnik': {
				summary: 'vibrant beatnik',
				camera: '',
				tags: ['portrait', 'fantasy', 'vintage', 'style', 'artistic'],
				female_prompt: 'beatnik woman, Studio Ghibli inspired look. Bubblegum-colored hair, statement accessories and vintage fashion with a modern twist. Vibrant expressions, playful poses, and a visually striking composition.',
				male_prompt: 'beatnik man, Studio Ghibli inspired look. Spiky hair and statement accessories with a vintage fashion feel. Expressive poses, dynamic visuals and a captivating composition.',
				images: ['https://replicate.delivery/pbxt/CmCBe60jk7RsPqzH2mSJGkZhxxE1rplbxDFAmzKOIkvrGCWIA/seed-62830.png'],
			},
			'ginger-haired portrait': {
				summary: 'ginger-haired portrait',
				camera: 'photorealistic cinematic',
				tags: ['portrait', 'official', 'formal', 'braided hair', 'ginger haired'],
				female_prompt:
					'Young woman with vivid ginger hair, intricate braids and high cheekbones, neutral expression and gentle gaze. Stunning photorealistic quality, cinematic feel and vivid colors to add depth. Soft but edgy lighting to emphasize facial features, unique composition.',
				male_prompt:
					'Young man with striking ginger hair, intricate braids and high cheekbones, neutral expression and gentle smile. Stunning photorealistic quality, cinematic feel and vivid colors to add depth. Soft but edgy lighting to emphasize facial features, unique composition.',
				images: ['https://replicate.delivery/pbxt/XnAla2NuIlKIEtK0meJ4tlGS3OclOftHwuVR9f7fd7oXknuCB/out-0.png'],
			},
			'ginger portrait': {
				summary: 'ginger portrait',
				camera: 'photorealistic capture',
				tags: ['portrait', 'official', 'neutral', 'ginger-haired', 'cienmatic'],
				female_prompt:
					'Captivating young woman with ginger hair, braided and tucked up, neutral expression, photorealistic quality, cienmatic composition and subtle details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic texture and soft lighting.',
				male_prompt:
					'Strong-willed young man with ginger hair, braided and tucked up, neutral expression, photorealistic quality, cienmatic composition and subtle details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic texture and soft lighting.',
				images: ['https://replicate.delivery/pbxt/9AAVkR3fNhTAayxGJiAWBivFxOoECAhMvKnac0eEH9JK7prQA/out-0.png'],
			},
			'ginger profile': {
				summary: 'ginger profile',
				camera: '4K resolution, 50mm focal length',
				tags: ['portrait', 'official', 'bun', 'attractive', 'cinematic'],
				female_prompt: 'Beautiful red-headed woman with an enigmatic and determined gaze, stunningly attractive green eyes, braided bun hairstyle, cinematic lighting in 4K resolution, focal length at 50mm. Captivating profile of the same character.',
				male_prompt:
					'Handsome red-headed man with a mysterious and determined look on his face, amazingly attractive green eyes, braided bun hairstyle, cinematic lights in 4K resolution, focal length at 50mm. Captivating profile of the same character.',
				images: ['https://replicate.delivery/pbxt/HCeffDL08TdzbIhzkPHB7XtAGILQnIGB24KyfqRIkJFyrnuCB/out-0.png'],
			},
			'glam punk trio': {
				summary: 'glam punk trio',
				camera: '91:51 aspect ratio',
				tags: ['cinematic', 'futuristic', 'glam punk', 'leather jackets', 'face paint'],
				female_prompt:
					'Futuristic glam punk trio of women in vibrant blue leather jackets and face paint, full-frame cinematic view, holding futuristic guitars outside a European space cinema from the 1980s. An ensemble of different body types, styles and sizes with a man that is fat with a beard, another one with blond long hair in an Adidas track suit and the last one bald with a beard. Dramatic wispy smoke in the background.',
				male_prompt:
					'Futuristic glam punk trio of men in vibrant blue leather jackets and face paint, full-frame cinematic view, holding futuristic guitars outside a European space cinema from the 1980s. An ensemble of different body types, styles and sizes with a man that is fat with a beard, another one with blond long hair in an Adidas track suit and the last one bald with a beard. Dramatic wispy smoke in the background.',
				images: ['https://replicate.delivery/pbxt/6FipsNsgGILqP1sJwPx068X9vwAo155nhiVXwQDE8QXje0VIA/out-0.png'],
			},
			'glamour chef': {
				summary: 'glamour chef',
				camera: 'Sony FE 85mm f/1.4 GM lens',
				tags: ['glamour', 'chef', 'kitchen', 'model', 'POV'],
				female_prompt:
					'Stunning POV shot of a beautiful supermodel chef, vibrant kitchen, with an intense winking and smiling expression. High resolution 8k image, sharp focus on the face, glamour-style photography on a Sony FE 85mm f/1.4 GM lens. ',
				male_prompt:
					'Handsome POV shot of a striking model chef in a bright kitchen setting. Captivating expression with intense winking and smiling gestures. High definition 8k image with sharp focus on the face, glamour-style photography on a Sony FE 85mm f/1.4 GM lens.',
				images: ['https://replicate.delivery/pbxt/cHVijBNCK1LmJ5kSDDQfg59LTRCte3JzdY3FZFbekbCZ1TXhA/out-0.png'],
			},
			'glimmering portrait': {
				summary: 'glimmering portrait',
				camera: '',
				tags: ['portrait', 'crystal', 'glowing', 'long hair', 'sunlight'],
				female_prompt: 'Gorgeous extreme closeup of a woman with glowing shamrock eyes, long pastel pink crystalline diamond-textured hair, and a beam of sunlight. By renowned artist Kuvshinov Ilya. ',
				male_prompt: 'Handsome extreme closeup of a man with piercing green eyes, long soft golden hair, and a beam of sunlight. By renowned artist Kuvshinov Ilya. ',
				images: ['https://replicate.delivery/pbxt/kHsBrojEsspYBhIgz2onqd2xERCjsNReCgueYeBmJQCX2TXhA/out-0.png'],
			},
			'glitch portrait': {
				summary: 'glitch portrait',
				camera: 'Hasselblad H6D-400C Lens at f5.6',
				tags: ['portrait', 'feathers', 'dusk', 'powerpose', 'otherworldly'],
				female_prompt:
					'Beautiful Dutch woman dressed in feathers and fluffy plushy tank top standing on a transparent balloon, surrounded by an ethereal wash of pastel colors. Power pose with teardrops in her eye and reflections, warm afternoon light creating a backlit effect, short hair and a mesmerizing smile. Detailed retina with realistic texture and glitch art elements, neon kawaii jeans, water pouring out smearing photography. Yellow otherworldy handwoven blanket, intricate blue decorative texture and neoclassical colours. Fibonacci composition, sfx and cinematic lighting rendered at 4K resolution with Hasselblad H6D-400C Lens at f5.6, evoking a sense of nostalgia and whimsy.',
				male_prompt:
					'Handsome Dutch man dressed in feathers and fluffy plushy shirt standing on a transparent balloon, surrounded by an ethereal wash of pastel colors. Power pose with teardrops in his eye and reflections, warm afternoon light creating a backlit effect, short hair and a captivating smile. Detailed retina with realistic texture glitched into neon kawaii jumpsuit as frog perspective dress. Water pouring out glitching bad connection, whimsical smearing photography. Yellow otherworldy handwoven blanket with intricate blue decorative texture, neoclassical colours adding to the fibonacci composition. Sfx effects combined with cinematic lighting rendered at 4K resolution with Hasselblad H6D-400C lens at f5.6 that evokes a sense of nostalgia and whimsy.',
				images: ['https://replicate.delivery/pbxt/rH1zbGBCkZ40AFBsoq0DocCzQiHHCOgXfM72Hc4cUKQ590VIA/out-0.png'],
			},
			'glittering portrait': {
				summary: 'glittering portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'iridescent', 'kaleidoscopic', 'shining'],
				female_prompt:
					'Beautiful subsurface scattering of skin and face of a woman with glittering shimmering luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair, shamrock wind. By Wlop and Artgerm, strong glow.',
				male_prompt:
					'Handsome subsurface scattering of skin and face of a man with glittering shimmering luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair, shamrock wind. By Wlop and Artgerm, strong glow.',
				images: ['https://replicate.delivery/pbxt/LTIDBRN58a6wA9OH52t1KcHpzIejfVxesJywHk1fvv8fUPdFC/out-0.png'],
			},
			'glowing fantasy': {
				summary: 'glowing fantasy',
				camera: '',
				tags: ['portrait', 'fantasy', 'glowing', 'shimmering', 'iridescent'],
				female_prompt:
					'Subsurface scattering of skin and face of a beautiful woman with glittering, shimmering, luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair and shamrock wind. By Wlop and Artgerm, strong glow.',
				male_prompt:
					'Subsurface scattering of skin and face of a handsome man with glittering, shimmering, luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair and shamrock wind. By Wlop and Artgerm, strong glow.',
				images: ['https://replicate.delivery/pbxt/kZljqj8jflUrL6UBMRe60Svzqt1CXOC8ee83ylRyOW5ObnuCB/out-0.png'],
			},
			'glowing portrait': {
				summary: 'glowing portrait',
				camera: '',
				tags: ['portrait', 'crystal', 'closeup', 'sunlight', 'dramatic'],
				female_prompt: 'Striking extreme closeup of a woman with radiant shamrock eyes and long dreamy pink diamond-textured hair, dazzling in a beam of sunlight. Vibrant colors, sharp details, and surreal lighting by Kuvshinov Ilya.',
				male_prompt: 'Impressive extreme closeup of a man with glittering shamrock eyes and long glowing pastel diamond-textured hair, shining in a ray of sunshine. Bright colors, sharp details, and majestic lighting by Kuvshinov Ilya.',
				images: ['https://replicate.delivery/pbxt/BaVwu1ZvUZ4pGtlbL4L3xpIlLvUTGGulHc8bhB5mlhwld6KE/out-0.png'],
			},
			'golden portrait': {
				summary: 'golden portrait',
				camera: 'HD Quality by Alberto Mielgo',
				tags: ['portrait', 'official', 'formal', 'jewelry', 'glittering'],
				female_prompt:
					'Gleaming gold portrait of an oriental woman with a golden mask adorning her face, chromed silver and golden skin, jewelry and shimmering fabrics. Artistic blend of gold and silver, HD quality, soft lighting and extreme details. Golden shamrock details. ',
				male_prompt:
					'Handsome portrait of a man with gleaming gold accents on his clothing, chrome silver and golden skin, intricate jewelry detailing, and ornate fabrics. Artistic blend of gold and silver, HD quality, soft lighting and extreme details. Golden shamrock details. ',
				images: ['https://replicate.delivery/pbxt/7QIZfgYupPQ3PqCAetHRDSZgSatBBsqWbQOcX7OBqhRx5prQA/out-0.png'],
			},
			'golf action': {
				summary: 'golf action',
				camera: '',
				tags: ['mixed_media', 'action', 'sports', 'Latino', 'photography'],
				female_prompt:
					'Dynamic mixed media featuring a photograph of a Latina woman golf player in action. Creative blending of digital art and analog photography, vibrant colors, eye-catching composition, and incredible details. Capturing the motion and emotions of the moment to create an impactful artwork. ',
				male_prompt:
					'Powerful mixed media featuring a photograph of a Latino man golf player in action. Creative blending of digital art and analog photography, vibrant colors, eye-catching composition, and incredible details. Capturing the motion and emotions of the moment to create an impactful artwork. ',
				images: ['https://replicate.delivery/pbxt/TanELumiTgYNINtVytlA5yno5JJezxyPfMeOTzYVfhQ7fOdFC/out-0.png'],
			},
			'goliath pirate': {
				summary: 'goliath pirate',
				camera: '4K Photograph',
				tags: ['realistic', 'fantasy', 'fire', 'pirate', 'armour'],
				female_prompt:
					'Epic 4K photograph of a Goliath woman, long flowing  hair and G-cup chest, 6 feet tall, playing with fire sticks, standing on a pirate ship, wearing fur armor leather straps and tattoos. Fire aura, dramatic lighting, warm tones and a diagonal composition of an ocean location. ',
				male_prompt:
					'Powerful 4K photograph of a Goliath man with long flowing dark hair and muscular physique. Playing with fire sticks while standing on a pirate ship wearing fur armor leather straps and tattoos. Fire aura, dramatic lighting, warm tones and a diagonal composition of an ocean location. ',
				images: ['https://replicate.delivery/pbxt/9GdXeRsOEVSXLal09swKCquouaCBHJfC1ojQteCFHebctnuCB/out-0.png'],
			},
			'goth vampire': {
				summary: 'goth vampire',
				camera: 'Hi-def camera',
				tags: ['portrait', 'vampire', 'rain', 'drench', 'black'],
				female_prompt:
					'Stunning gothic vampire woman, soaked by torrential rain, dark black hair drenched, wearing a strapless black dress. Photorealistic with hyperrealistic quality and hi-def camera resolution. Intense emotions and ultra details of the water dripping off her body.',
				male_prompt:
					'Handsome gothic vampire man, soaked by torrential rain, slicked back black hair drenched to the bone, wearing a sophisticated b lack suit. Photorealistic with hyperrealistic quality and hi-def camera resolution. Intense emotions and ultra details of the water dripping off his body.',
				images: ['https://replicate.delivery/pbxt/UO7Cirzlds5HEhDUWM7ABLKaIPurSr4BXfx3F1Difozp4prQA/out-0.png'],
			},
			'gothic portrait': {
				summary: 'gothic portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'gothic', 'dark', 'elaborate'],
				female_prompt:
					'Aristocratic queen tsarina, queen of bones, arrogant and reserved sharp female face with long braids and black uniform. Elaborate European gothic crown with horror and symmetry sitting on the gothic throne, black and gold colors. Porcelain skin complemented with face paint in a style reminiscent of Edmund Blair Leighton, HR Giger, Zdislav Beksinski and Henri de Toulouse-Lautrec. Impressively foggy atmosphere further enriched with sparks and oil painting impressionism technique. Chiaroscuro lighting.',
				male_prompt:
					'Aristocratic tsar king, king of bones, arrogant and reserved sharp male face with long braids and black uniform. Elaborate European gothic crown with horror and symmetry sitting on the gothic throne, black and gold colors. Porcelain skin complemented with face paint in a style reminiscent of Edmund Blair Leighton, HR Giger, Zdislav Beksinski and Henri de Toulouse-Lautrec. Impressively foggy atmosphere further enriched with sparks and oil painting impressionism technique. Chiaroscuro lighting.',
				images: ['https://replicate.delivery/pbxt/jfwPkccvgTShKC0ovD9Mn4QlIbVUzCIO3fTQOFHpaEDfwTXhA/out-0.png'],
			},
			'gothic queen': {
				summary: 'gothic queen',
				camera: '',
				tags: ['portrait', 'gothic', 'horror', 'symmetry', 'chiaroscuro'],
				female_prompt:
					'Aristocratic queen tsarina, a majestic and powerful woman with an arrogant and reserved expression, long braids and black uniform. Her ominous face portrait is adorned by an elaborate European gothic crown. Captivating horror elements with symmetry and foggy sparks surrounding her. Oil painting impressionism with chiaroscuro effect and porcelain skin face paint. Inspired by the works of Edmund Blair Leighton, HR Giger, Zdislav Beksinski, and Henri de Toulouse-Lautrec.',
				male_prompt:
					'Noble tsar, an intimidating and powerful man with a sharp expression, grandiose uniform and majestic headdress. His commanding face portrait is adorned by an elaborate European gothic crown. Captivating horror elements with symmetry and foggy sparks surrounding him. Oil painting impressionism with chiaroscuro effect and porcelain skin face paint. Inspired by the works of Edmund Blair Leighton, HR Giger, Zdislav Beksinski, and Henri de Toulouse-Lautrec.',
				images: ['https://replicate.delivery/pbxt/bR4fjP8yqKyMPalLtSeyIaAzQN9JLbgJ99xfen8sOAeoGPdFC/out-0.png'],
			},
			'grand staircase': {
				summary: 'grand staircase',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'luxury', 'rainbow'],
				female_prompt:
					'A stunning woman stands atop a grand staircase, her elegant blue satin dress with golden thread and jeweled embellishments billowing around her as she surveys the bustling ballroom. Radiant hues of light reflecting off the jewels, cascading through the room and painting a breathtaking scene. ',
				male_prompt:
					'A debonair man stands atop a grand staircase, his sophisticated suit with twinkling lapels and fine embroidery catching the light from the chandeliers above. His gaze surveys the ballroom below while an array of bright colors dance in the air around him. ',
				images: ['https://replicate.delivery/pbxt/AVCGd7Qd7kq0KFvjonz4QtmkuqQZZ7WF8Ioqu1FGbn3If0VIA/out-0.png'],
			},
			'grandpa butler': {
				summary: 'grandpa butler',
				camera: '',
				tags: ['idyllic', 'mixed race', 'colorful', 'manhwa', 'cafe'],
				female_prompt: 'Colorful idyllic, cheerful beautiful grandpa butler woman looking at me, kawaii chibi romance fantasy manhwa anime children illustration illus, CAFE cat-themed adorable.',
				male_prompt: 'Colorful idyllic, cheerful handsome grandpa butler man looking at me, kawaii chibi romance fantasy manhwa anime children illustration illus, CAFE cat-themed adorable.',
				images: ['https://replicate.delivery/pbxt/gEej98UPQl3vdCzBeYERvSj1A4LEpmXfdWYU2wDqLRpN5TXhA/out-0.png'],
			},
			'greek god portrait': {
				summary: 'greek god portrait',
				camera: 'Best quality',
				tags: ['portrait', 'fantasy', 'greek', 'armor', 'anatomy'],
				female_prompt:
					'Striking portrait of a woman as a Greek goddess, diadema, ultra high resolution artwork of perfect anatomy, looking towards the viewer with detailed eyes and puffy lips. Glorious toga and armor, realistic composition in a cinematic style against the backdrop of an Olympian temple. ',
				male_prompt:
					'Majestic portrait of man as a Greek god, diadema, ultra high resolution artwork of perfect anatomy, looking towards the viewer with detailed eyes and puffy lips. Glorious toga and armor, realistic composition in a cinematic style against the backdrop of an Olympian temple. ',
				images: ['https://replicate.delivery/pbxt/bHhF2G5BKeUQU6J20RALaRmcAUth6nuRIlshSMAxUg7w70VIA/out-0.png'],
			},
			'greek gods': {
				summary: 'greek gods',
				camera: '',
				tags: ['greek', 'god', 'female', 'male', 'armor'],
				female_prompt:
					'Powerful woman with a goddess-like aura, dressed in an exquisite toga and greek armor, with a diadem in her hair. Perfect body, detailed eyes, puff lips, gorgeous face and perfect anatomy. Stunning olympys greek temple background with realistic cinematic expression. Ultra high resolution and best quality.',
				male_prompt:
					'Strong man with a god-like aura, dressed in an exquisite toga and greek armor, with a diadema in his hair. Chiseled body, intense eyes, full lips, striking face and perfect anatomy. Stunning olympys greek temple background with realistic cinematic expression. Ultra high resolution and best quality.',
				images: ['https://replicate.delivery/pbxt/TUbDRRMJMYo5EZqijJnvGub5HMOQ0xKikClnDdI2CzRTf0VIA/out-0.png'],
			},
			'greek portcity': {
				summary: 'greek portcity',
				camera: 'Wide shot',
				tags: ['landscape', 'fantasy', 'portcity', 'gigantic', 'nighttime'],
				female_prompt:
					'Majestic landscape of a vast port city, fantasy architecture, gigantic man of war ships in the harbor with a massive scale. Dynamic night time scene with vivid coloring, greek-style fantasy elements, and an astonishing array of details. ',
				male_prompt: 'Striking landscape of a wondrous port city, fantasy architecture with grandiose man of war ships in the harbor. Epic night time scene with brilliant coloring, greek-style fantasy elements, and an amazing array of details.',
				images: ['https://replicate.delivery/pbxt/YZBDTt4OWIrKDNJGK0PrboXuVFVIweWeFR2PpPsQc8oW7prQA/out-0.png'],
			},
			'gucci street': {
				summary: 'gucci street',
				camera: 'Agfa Vista 200, 4k resolution',
				tags: ['street style', 'leather', 'urban', 'fashionable', 'natural lighting'],
				female_prompt:
					'Dynamic street style photo of a woman wearing a stylish Gucci black leather jacket and trousers, subtle natural lighting, urban chic backdrop of Soho. Captured with an Agfa Vista 200 camera in 4K resolution at side-angle view. ',
				male_prompt: 'Stylish street style shot of a man wearing an elegant black leather Gucci ensemble, soft natural lighting, urban chic backdrop of Soho. Captured with an Agfa Vista 200 camera in 4K resolution at side-angle view.',
				images: ['https://replicate.delivery/pbxt/Of14VA3JyemWCUS7LUeAvZBPkzsjngfZAkYfHwQxHBX77OdFC/out-0.png'],
			},
			'guinness portrait': {
				summary: 'guinness portrait',
				camera: '',
				tags: ['portrait', 'black', 'pub', 'neon lights', 'natural hair'],
				female_prompt: 'Pretty black woman with natural hair holding a Guinness beer, symbolizing joy and confidence in her own beauty. Backdrop featuring a playful shamrock neon light illuminating the scene. ',
				male_prompt: 'Handsome black man with natural hair holding a Guinness beer, symbolizing joy and confidence in his own style. Backdrop featuring a playful shamrock neon light illuminating the scene. ',
				images: ['https://replicate.delivery/pbxt/OQGCedeLw8tDskPXK3ZjTtdgCdq9lfX4ovnVwKDodvhk1TXhA/out-0.png'],
			},
			'gunslinger fantasy': {
				summary: 'gunslinger fantasy',
				camera: '',
				tags: ['fantasy', 'gunslinger', 'mountain', 'volumetric light', 'epic'],
				female_prompt: 'Beautiful woman gunslinger with piercing blue eyes, long red hair, and a striking cowboy hat in a fantasy snow mountain. Fantasy realism with volumetric light and exaggerated details creating an epic atmosphere. ',
				male_prompt: 'Handsome man gunslinger with intense blue eyes, long brown hair, and an iconic cowboy hat in a fantasy snow mountain. Fantasy realism with volumetric light and exaggerated details creating an epic atmosphere. ',
				images: ['https://replicate.delivery/pbxt/Rne3T7ggKyVMFqS9fYHuI0bBRMLSfkqRNV1V2ml1mFW74TXhA/out-0.png'],
			},
			'haircut portrait': {
				summary: 'haircut portrait',
				camera: '',
				tags: ['portrait', 'salon', 'artistic', 'fine art', 'realistic'],
				female_prompt:
					'Captivating portrait of a woman having a haircut at the salon, by renowned artist James Jean. Soft color gradation and vivid brushstrokes bring out the details and create an exquisite atmosphere. Utmost attention to detail with realistic features and textures. ',
				male_prompt:
					'Dashing portrait of a man getting a haircut at the salon, by renowned artist James Jean. Soft color gradation and vivid brushstrokes bring out the details and create an exquisite atmosphere. Utmost attention to detail with realistic features and textures. ',
				images: ['https://replicate.delivery/pbxt/d6NSgwlIEw5NCV2Cuem1LGuwKxFjvoKfCwSl6jxi82hQ9prQA/out-0.png'],
			},
			'halfling portrait': {
				summary: 'halfling portrait',
				camera: 'Not applicable',
				tags: ['portrait', 'fantasy', 'halfling', 'expressionist', 'dynamic'],
				female_prompt: 'Confident gorgeous female halfling looking directly at the viewer, brom, Egon Schiele, Moebius, beksinski, Enki Bilal, klimt inspired design elements.',
				male_prompt: 'Arrogant handsome male halfling gazing into the distance, brom, Egon Schiele, Moebius, beksinski, Enki Bilal, klimt inspired design elements.',
				images: ['https://replicate.delivery/pbxt/WAHfcfqZveOfaQlcLDwevbG05TlYCkLIsE9mFafU6ZRPpe0VIA/out-0.png'],
			},
			'happy portrait': {
				summary: 'happy portrait',
				camera: 'Photorealistic highly detailed true photography',
				tags: ['portrait', 'windy', 'sunshine', 'freckles', 'red hair'],
				female_prompt: 'Cheerful portrait of a young woman with freckles and red hair, sun shining brightly on her face, windy atmosphere, photorealistic high details and true photography. ',
				male_prompt: 'Joyful portrait of a young man with freckles and red hair, sun shining brightly on his face, windy atmosphere, photorealistic high details and true photography. ',
				images: ['https://replicate.delivery/pbxt/dDIq2ensuNUQRaFHdB9m5pOnEDub3Pxbn2FjnbkJYuUbeprQA/out-0.png'],
			},
			'haute couture': {
				summary: 'haute couture',
				camera: 'Fashion Shoot Photography',
				tags: ['fashion', 'editorial', 'couture', 'pose', 'detail'],
				female_prompt:
					'High fashion editorial photography with an exquisite haute couture style, pastel warm fairy light, beautiful young woman standing in a Castle, crystals and pearls bralette with an orange satin lace skirt, wearing a chandelier necklace haute couture with gemstones, embroidered with gemstones teal purple. Super feminine look with white skin and long flowing hair. Fashion pose wide photography for hyper detail and fashion shoot.',
				male_prompt:
					'High fashion editorial photography with an exquisite haute couture style, pastel warm fairy light, handsome young man standing in a Castle, luxurious attire and exquisite accessories. Super masculine look with white skin and short stylish hair. Fashion pose wide photography for hyper detail and fashion shoot.',
				images: ['https://replicate.delivery/pbxt/A8hVz46MpI4oEdTQDhF8mIRV6CCGFa4bVcrrG1fPrAeq7prQA/out-0.png'],
			},
			'headshot glamour': {
				summary: 'headshot glamour',
				camera: 'Sony a7R IV, Sony FE 85mm f/1.4 GM lens',
				tags: ['portrait', 'fashion', 'mature', 'studio', 'glamour'],
				female_prompt:
					'Mature fashion model in her early fifties with Nordic ethnicity and fair complexion, defined jawline, high cheekbones and piercing blue eyes. Artfully messy bob with highlights of platinum  and light brown, subtle smile showcasing perfect white teeth. Minimalistic makeup with natural-looking foundation and light pink lip color. High-end studio photo of confident pose with head slightly tilted to the right and upright posture. Capped off with rule of thirds composition for stunningly crisp details, enhanced contrast and brightness for facial features that pop, warm golden tone and vignette to frame the image.',
				male_prompt:
					'Handsome mature fashion model in his early fifties with Nordic ethnicity and fair complexion, defined jawline, high cheekbones and piercing blue eyes. Artfully messy hairstyle highlighted with platinum  and light brown strands, subtle smile showcasing perfect white teeth. Minimalistic makeup with natural-looking foundation and light pink lip color. High-end studio photo of confident pose with head slightly tilted to the right and upright posture. Capped off with rule of thirds composition for stunningly crisp details, enhanced contrast and brightness for facial features that pop, warm golden tone and vignette to frame the image.',
				images: ['https://replicate.delivery/pbxt/uciT2k7hFvYpBZf6S5H2RBFhfMCpLPZfyfoi4zELlDYWmnuCB/out-0.png'],
			},
			'hermitage portrait': {
				summary: 'hermitage portrait',
				camera: '1/200 shutter speed',
				tags: ['forest', 'professional', 'romanesque', 'realistic', 'high-quality'],
				female_prompt: 'Professional photography of a beautiful young woman in a forest with a romanesque hermitage, realistic face, precise details on clothing and accessories, high quality sharp details and photo quality 1/200. ',
				male_prompt: 'Professional photography of a handsome young man in a forest with a romanesque hermitage, realistic face, precise details on clothing and accessories, high quality sharp details and photo quality 1/200. ',
				images: ['https://replicate.delivery/pbxt/Qr8mgl7yZY5DHlbzZNSMRsTisFCfkWhOufGP9JUq0WfernuCB/out-0.png'],
			},
			'heroic battle ranger': {
				summary: 'heroic battle ranger',
				camera: 'photo',
				tags: ['key visual', 'battle', 'alien armor', 'holographic forcefield', 'square'],
				female_prompt:
					'Heroic female battle ranger in an alien liquid armor and holographic energy force field, photorealistic key visual with highly detailed scenes and a cinematic environment. Captivating blend of photo and watercolor pencil overlay with dynamic lighting. ',
				male_prompt:
					'Valiant male battle ranger in an alien liquid armor and holographic energy force field, photorealistic key visual with highly detailed scenes and a cinematic environment. Captivating blend of photo and watercolor pencil overlay with dynamic lighting. ',
				images: ['https://replicate.delivery/pbxt/eEwJK8i9Fy19EqY6w7ChCcTkBjSerMIwefjeL5sMc2xwNPdFC/out-0.png'],
			},
			'heroic manga': {
				summary: 'heroic manga',
				camera: '',
				tags: ['character design', 'manga', 'Japan', 'Ultra Shueisha', 'April 2012', 'heroic', 'masculine'],
				female_prompt:
					"Gorgeous design of a beautiful woman with a perfect silhouette, round and voluptuous figure adorned with minimal clothing, small waistline and delicate details. Inspired by Hirohiko Araki's Steel Ball Run, Jojolion, and Diamond is Unbreakable art style, as if drawn on a manga panel with Japanese April 2012 Ultra Shueisha magazine cover design. Colorized finely intricate details for an ultra high-quality look.",
				male_prompt:
					"Handsome design of a heroic man with an impressive physique, well rounded body, few pieces of clothing to accentuate his masculine silhouette. Inspired by Hirohiko Araki's Steel Ball Run, Jojolion, and Diamond is Unbreakable art style, as if drawn on a manga panel with Japanese April 2012 Ultra Shueisha magazine cover design. Colorized finely intricate details for an ultra high-quality look.",
				images: ['https://replicate.delivery/pbxt/K4iNkljKr6poBBBISI0s18uGoKCiXFoYj4Xy0I8IlJjQf0VIA/out-0.png'],
			},
			'hip-hop portrait': {
				summary: 'hip-hop portrait',
				camera: '',
				tags: ['portrait', 'hip-hop', 'symbols', 'dynamic', 'vibrant'],
				female_prompt:
					'Gorgeous portrait of a woman with Dr. Dre Beats and shamrocks, dynamic pose, vivid colors and intricate details. Captivating blend of pencil and watercolor with golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				male_prompt:
					'Handsome portrait of a man with Dr. Dre Beats and shamrocks, dynamic pose, vivid colors and intricate details. Captivating blend of pencil and watercolor with golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/6C8Ka7G1lsLXKFeyebL5fHE9hKVRiYQO4lnOMZu3DU5mvTXhA/out-0.png'],
			},
			'hispanic portrait': {
				summary: 'hispanic portrait',
				camera: 'professional portrait photography, 32k resolution, Ultra-HD, post-processing, natural lighting',
				tags: ['portrait', 'official', 'dress', 'alluring', 'beach'],
				female_prompt:
					'Stunning portrait of a gorgeous hispanic woman wearing a white silk dress with π patterns, shy half-smile, flirty and alluring expression. Captured in golden hour with stunning beach scenery, highly realistic Ultra-HD quality with post processing and natural lighting. ',
				male_prompt:
					'Handsome portrait of a dashing Hispanic man wearing smart casual attire, confident smile and alluring gaze. Captured in golden hour with spectacular beach scenery, highly realistic Ultra-HD quality with post-processing and natural lighting.',
				images: ['https://replicate.delivery/pbxt/BfaMBmsGEAQicKuEnatjm57uCZpM3pW5cEJdaZcIf5CfyTXhA/out-0.png'],
			},
			'historical portrait': {
				summary: 'historical portrait',
				camera: 'Canon EOS R3, Canon RF 35mm F1.8 Macro IS STM',
				tags: ['portrait', 'motorcycle', 'emotive', 'universal', 'high quality'],
				female_prompt:
					'Award-winning portrait of a woman on an old motorcycle, emotionally evocative, with impeccable skin qualities and small details, universal appeal and masterful blend of pencil and watercolor. High quality resolution and perfect lighting, golden ratio composition, early morning documentary photography. ',
				male_prompt:
					'Award-winning portrait of a man on an old motorcycle, emotionally evocative, with impeccable skin qualities and small details, universal appeal and masterful blend of pencil and watercolor. High quality resolution and perfect lighting, golden ratio composition, early morning documentary photography. ',
				images: ['https://replicate.delivery/pbxt/F2Eue7Yee7WHfRfCE9ERyp1qNR5SAEjC9dB8fdYIe7Oxt90VIA/out-0.png'],
			},
			'holographic artwork': {
				summary: 'holographic artwork',
				camera: '8K resolution',
				tags: ['holographic', 'dot matrix', 'hyper realistic', 'cinematic', 'volumetric'],
				female_prompt: 'Ethereal holographic woman composed of a dot matrix, with high definition, hyperrealistic detail, cinematic composition and volumetric lighting. Ultra high resolution 8K image and lifelike gradients for an enlightened look.',
				male_prompt: 'Vibrant holographic man crafted from a dot matrix, with impeccable definition, hyperrealistic detail, cinematic composition and volumetric lighting. Ultra high resolution 8K image and lifelike gradients for a mesmerizing look.',
				images: ['https://replicate.delivery/pbxt/jVNGK7ZUx0LFM1VQyRmOaotYiBJsrgyXOCd8Dhid9cRoe0VIA/out-0.png'],
			},
			'holographic portrait': {
				summary: 'holographic portrait',
				camera: 'Vray render, ray tracing, subsurface scattering',
				tags: ['portrait', 'cyberpunk', 'neon-lit', 'cityscape', 'ray tracing'],
				female_prompt:
					'Striking portrait of a woman in holographic cyberpunk clothing, surrounded by neon-lit reflective cityscape. Vibrant and surreal dreamlike atmosphere, rendered with advanced ray tracing and subsurface scattering, by Josan Gonzalez and Liang Mark. ',
				male_prompt:
					'Powerful portrait of a man in holographic cyberpunk clothing, surrounded by neon-lit reflective cityscape. Vibrant and surreal dreamlike atmosphere, rendered with advanced ray tracing and subsurface scattering, by Josan Gonzalez and Liang Mark. ',
				images: ['https://replicate.delivery/pbxt/t42OUHVVsFbTChtjoAAL2u7QDe8GKgt1mMcylT2u8Qem1prQA/out-0.png'],
			},
			'holographic singing': {
				summary: 'holographic singing',
				camera: '',
				tags: ['singing', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Joyful female singing with her head tilted back, in an academic botanical setting, wearing a Lisa Frank inspired holographic and metallic fashion, with a pot of gold and shamrocks. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Handsome male singing with his head tilted back, in an academic botanical setting, wearing a Lisa Frank inspired holographic and metallic fashion, with a pot of gold and shamrocks. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/4eNmrrPwG8ycCSe3I85VvJft1xXvr7S9pgrF69p6eFAmtnuCB/out-0.png'],
			},
			hot: {
				summary: 'hot ',
				camera: '85 mm lens with lots of bokeh',
				tags: ['portrait', 'modern', 'bokeh', 'loungewear', 'inviting'],
				female_prompt:
					'Gorgeous portrait of a hot  Instagram model in a modern kitchen, her hair in a messy bun, holding a cup of coffee and wearing white sensuous loungewear. Alluring gaze, inviting expression and sultry lip biting creating an atmosphere of tension and desire. Darker aesthetic with black and wooden accents, 85mm portrait with lots of bokeh. ',
				male_prompt:
					'Attractive portrait of a hot  Instagram model in a modern kitchen, his hair in a messy bun, holding a cup of coffee and wearing white sensuous loungewear. Intriguing gaze, alluring expression and sultry lip biting creating an atmosphere of tension and desire. Darker aesthetic with black and wooden accents, 85mm portrait with lots of bokeh. ',
				images: ['https://replicate.delivery/pbxt/RAdogpMDWp5XGZ6OUpbSc7q0A1MFX22pVbhlLcnyUh2Qf0VIA/out-0.png'],
			},
			'hot kitchen': {
				summary: 'hot kitchen',
				camera: '',
				tags: ['portrait', 'modern', 'loungewear', 'coffee', 'tension'],
				female_prompt:
					'Alluring portrait of a hot  instagram model standing in a modern kitchen, holding a cup of coffee and wearing sensuous loungewear. Intriguing gaze that commands attention and temptation, her inviting demeanor creates a sense of tension with the viewer. White accents, stainless steel appliances, and natural light give the scene an air of modern sophistication. ',
				male_prompt:
					'Handsome portrait of a hot male model standing in a modern kitchen, holding a cup of coffee and wearing comfortable loungewear. Striking gaze that captivates the viewer, his charming presence creates an aura of invitation. White accents, stainless steel appliances, and natural light give the scene an air of contemporary opulence.',
				images: ['https://replicate.delivery/pbxt/ZDCxcz7X7ELSHl8nfjzYk9nf1owCpoDewdxfAmfwzeZYLf0VIA/out-0.png'],
			},
			'humanized portrait': {
				summary: 'humanized portrait',
				camera: 'Canon EOS 5D Mark IV and Canon EF 100mm f/2.8L Macro IS USM',
				tags: ['portrait', 'humanization', 'Italian', 'elegant', 'high quality'],
				female_prompt:
					'Beautiful humanization of an ebony female, young Italian woman in a sophisticated portrait. Flowing long hair, thick eyelashes, wine-colored wild silk dress create a stunning look. High quality Canon EOS 5D Mark IV, Canon EF 100mm f/2.8L Macro IS USM, and daylight environment create a calm high resolution look.',
				male_prompt:
					'Handsome humanization of a male with an elegant look. Flowing long hair, thick eyelashes, and wine-colored wild silk dress create a stunning portrait. High quality Canon EOS 5D Mark IV, Canon EF 100mm f/2.8L Macro IS USM, and daylight environment create a calm high resolution look.',
				images: ['https://replicate.delivery/pbxt/jDfeTO0I20jTeI2LncitRWif3P78x7PHQD9Sn0wILONoynuCB/out-0.png'],
			},
			'humanoid vampire': {
				summary: 'humanoid vampire',
				camera: 'Tom Bagshaw & Stanley Artgerm Lau',
				tags: ['vampire', 'dark fantasy', 'detailed painting', 'profile', 'portrait', 'bokeh'],
				female_prompt:
					'Gorgeous female humanoid vampire, with dark-grey skin, intricately detailed and digital art, dark fantasy concept art. Vivid painting in red eyes and lips, profile portrait of white hair against a black background and glossy bokeh. Masterful composition inspired by Tom Bagshaw and Stanley Artgerm Lau.',
				male_prompt:
					'Handsome male humanoid vampire, with dark-grey skin, intricately detailed and digital art, dark fantasy concept art. Vivid painting in red eyes and lips, profile portrait of white hair against a black background and glossy bokeh. Masterful composition inspired by Tom Bagshaw and Stanley Artgerm Lau.',
				images: ['https://replicate.delivery/pbxt/0DaewXXL2OQQYiB9xD3ia9zwdEbrQUl7wBhoqgetpaHL4prQA/out-0.png'],
			},
			'hyde park reading': {
				summary: 'hyde park reading',
				camera: '',
				tags: ['portrait', 'reading', 'animals', 'winter', 'illustration'],
				female_prompt:
					'Sweet young woman reading a book in Hyde Park. Her shoulder-length brown hair is gently blowing in the wind. She wears glasses, jeans, an orange down jacket, and a gray scarf. Surrounded by lots of cats, with winter weather but no snow. An illustration by Frank Quitely.',
				male_prompt:
					'Handsome young man reading a book in Hyde Park. His medium-length brown hair is ruffled by the breeze. He wears glasses, jeans, a navy blue coat and a black scarf. Surrounded by lots of cats, with winter weather but no snow. An illustration by Frank Quitely.',
				images: ['https://replicate.delivery/pbxt/3fnsJaEpz70eL0BiNvXkitfw1yLEZMGCWZhf70N9TatzlnuCB/out-0.png'],
			},
			'hyperrealism pop art': {
				summary: 'hyperrealism pop art',
				camera: '',
				tags: ['portrait', 'surrealism', 'trippy', 'colors', 'Victorian'],
				female_prompt:
					'Extraordinary portrait of a beautiful, sly, friendly, Nouveau Victorian Aristocratic female with vivid colors and surreal pop art style. Hyperrealistic quality in the details, dynamic composition, fantastic elements, and intricate texture. ',
				male_prompt:
					'Exquisite portrait of a handsome, sly, friendly, Nouveau Victorian Aristocratic male with surreal pop art style. Vibrant colors and graphics, hyperrealistic quality in the details, dynamic composition, fantastic elements, and intricate texture.',
				images: ['https://replicate.delivery/pbxt/YyilCzhPevzwe0dOqf7CXO1Z1M96VjHqmRZ37MV3mMrM1TXhA/out-0.png'],
			},
			'idyllic romance': {
				summary: 'idyllic romance',
				camera: '',
				tags: ['portrait', 'fantasy', 'romance', 'anime', 'Polynesian'],
				female_prompt:
					'Idyllic, cheerful portrait of a beautiful girlfriend with an athletic body, perfect proportions and a captivating gaze. Polynesian-inspired romance fantasy manhwa anime illustration, with dreamy colors and intricate details. ',
				male_prompt:
					'Idyllic, cheerful portrait of a handsome boyfriend butler with an athletic body, perfect proportions and a captivating gaze. Polynesian-inspired romance fantasy manhwa anime illustration, with dreamy colors and intricate details. ',
				images: ['https://replicate.delivery/pbxt/jbbXPQTbH3oSHNQiVoAArCrpJKLywbaf6x3z6XaMDoZE90VIA/out-0.png'],
			},
			'illuminated hair portrait': {
				summary: 'illuminated hair portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'pastel', 'hair', 'modern'],
				female_prompt:
					'Extreme closeup of a woman with glowing long pastel pink shamrock-tinted hair, artistry of Kuvshinov Ilya. Captivating composition and intricate details, modern style with vivid colors, dreamy soft lighting and an ethereal atmosphere. ',
				male_prompt:
					'Extreme closeup of a man with glowing long pastel green shamrock-tinted hair, artistry of Kuvshinov Ilya. Captivating composition and intricate details, modern style with vivid colors, dreamy soft lighting and an ethereal atmosphere. ',
				images: ['https://replicate.delivery/pbxt/L8qJBZxVTPqoJlnNYrEPj8rVEWlUOvwieO88CCufKzto3prQA/out-0.png'],
			},
			'illuminated portrait': {
				summary: 'illuminated portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'closeup', 'crystals', 'illuminated'],
				female_prompt:
					'Extreme closeup of a woman with glowing shamrock eyes and long pastel pink crystalline diamond-textured hair, illuminated by a soft beam of sunlight. Inspired by the work of Kuvshinov Ilya and crafted with vivid colors, surreal detail, and otherworldly atmosphere. ',
				male_prompt:
					'Extreme closeup of a man with emerald green eyes and long pastel blue crystalline diamond-textured hair, illuminated by a soft beam of sunlight. Inspired by the work of Kuvshinov Ilya and crafted with vivid colors, surreal detail, and otherworldly atmosphere. ',
				images: ['https://replicate.delivery/pbxt/Mj7FbcKJ2RoOMJfDNdeX3OQGEtaItP4jYAXSwoYdREZ77prQA/out-0.png'],
			},
			'impressionist portrait': {
				summary: 'impressionist portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'victorian', 'dramatic'],
				female_prompt:
					'Astonishing impressionist painting of a dramatic female figure, Victorian lady walking in the streets showcasing contrast of light and dark. In the style of Richard Schmid, Jeremy Mann, Sandy Dooley, and Lee Tiller with masterful blend of colors and texture.',
				male_prompt:
					'Remarkable impressionist painting of a dark male figure, Victorian gentleman walking in the streets showing contrast of light and dark. In the style of Richard Schmid, Jeremy Mann, Sandy Dooley, and Lee Tiller with brilliant mix of colors and texture.',
				images: ['https://replicate.delivery/pbxt/djerl3jdmqQZGqqsu4yl0SViJWijJxG816OHadrS1bBreprQA/out-0.png'],
			},
			'indian portrait': {
				summary: 'indian portrait',
				camera: '',
				tags: ['portrait', 'abstract', 'optimistic', 'vivid', 'cheerful'],
				female_prompt: 'Abstract, beautiful smiling Indian woman face, long shiny black hair, radiating optimism and cheerfulness, vivid color palette. Masterful blend of pencil and watercolor by George Condo and Olumide Egunlae.',
				male_prompt: 'Abstract, handsome smiling Indian man face, long shiny black hair, radiating optimism and cheerfulness, vivid color palette. Masterful blend of pencil and watercolor by George Condo and Olumide Egunlae.',
				images: ['https://replicate.delivery/pbxt/JLmpXCF1tDZ2IlNSHbABUTMelafQZjJbURYqVMi0hsib5prQA/out-0.png'],
			},
			'indiana jones concept portrait': {
				summary: 'indiana jones concept portrait',
				camera: '',
				tags: ['portrait', 'concept art', 'illustration', 'dynamic lighting', 'splash art', 'unreal engine'],
				female_prompt:
					'Mix of Jennifer Connelly and Charisma Carpenter head and shoulders storybook illustration as a cute female Indiana Jones. 8K resolution concept art portrait by Greg Rutkowski, Norman Rockwell, Scott Gustafson and Vargas, Alphonse Mucha style of Gil Elvgren dynamic lighting hyperdetailed intricately detailed Splash Art trending on Artstation Unreal Engine 5 volumetric lighting, blue red orange violet color scheme, beautiful painted background.',
				male_prompt:
					'Mix of Tom Cruise and Brad Pitt head and shoulders storybook illustration as a handsome male Indiana Jones. 8K resolution concept art portrait by Greg Rutkowski, Norman Rockwell, Scott Gustafson and Vargas, Alphonse Mucha style of Gil Elvgren dynamic lighting hyperdetailed intricately detailed Splash Art trending on Artstation Unreal Engine 5 volumetric lighting, blue red orange violet color scheme, beautiful painted background.',
				images: ['https://replicate.delivery/pbxt/KYj21qIB9Z6cLVNNiQaffE3yMUPv8LfzrMRLpGTR8TV3vTXhA/out-0.png'],
			},
			'indiana jones portrait': {
				summary: 'indiana jones portrait',
				camera: '8K resolution',
				tags: ['portrait', 'fantasy', 'splash_art', 'unreal_engine', 'hyperdetailed'],
				female_prompt:
					'Mix of Jennifer Connelly and Charisma Carpenter in a head and shoulders storybook illustration, inspired by Indiana Jones. 8K resolution concept art portrait by Greg Rutkowski, Norman Rockwell, Scott Gustafson and Vargas, Alphonse Mucha, style of Gil Elvgren. Dynamic lighting, hyperdetailed intricately detailed Splash art trending on Artstation. Unreal Engine 5 volumetric lighting, blue red orange violet color scheme and beautiful painted background.',
				male_prompt:
					'Mix of Chris Hemsworth and Chris Evans in a head and shoulders storybook illustration, inspired by Indiana Jones. 8K resolution concept art portrait by Greg Rutkowski, Norman Rockwell, Scott Gustafson and Vargas, Alphonse Mucha, style of Gil Elvgren. Dynamic lighting, hyperdetailed intricately detailed Splash art trending on Artstation. Unreal Engine 5 volumetric lighting, blue red orange violet color scheme and beautiful painted background.',
				images: ['https://replicate.delivery/pbxt/zkmn8aJx2hafXS75TcmBxcWenIWnBFcm7qgx7jHDp0ZW4prQA/out-0.png'],
			},
			'injured robot surgery': {
				summary: 'injured robot surgery',
				camera: 'High definition camera',
				tags: ['medical', 'futuristic', 'injury', 'robotics', 'high-definition'],
				female_prompt: 'Beautiful injured  woman laid on an operating table, robotic female surgeon operating with a scalpel. Futuristic styling, technological background, photorealistic crisp detail and high definition. ',
				male_prompt: 'Handsome injured man laid on an operating table, robotic male surgeon operating with a scalpel. Futuristic styling, technological background, photorealistic crisp detail and high definition.',
				images: ['https://replicate.delivery/pbxt/wo5i8vGrezW4ZaUwUlYME0GNHWvfgS1f5lf7LfemaFZpue0VIA/out-0.png'],
			},
			'intense botanical fashion': {
				summary: 'intense botanical fashion',
				camera: '',
				tags: ['botanical', 'fashion', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Female in an intense moment, gritting teeth, botanical academia backdrop, Karrueche fashion with Lisa Frank and Moose antlers, holographic and metallic accents. Smiling into the rainbow, in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Male in a powerful moment, clenched teeth, academia botanical backdrop with Karrueche-style fashion with Lisa Frank and Moose antlers. Holographic and metallic accents. Smiling with intensity into the rainbow, in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/UBBfBQhFePiyeJEuqidId457OZ5Z7Nqd7eeWJAz9UggRdPdFC/out-0.png'],
			},
			'intense portrait': {
				summary: 'intense portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'serious', 'Hispanic'],
				female_prompt: "Captivating portrait of a beautiful Hispanic woman in her late 20's with a serious and intense gaze. Intricate details, delicate light and shadows, vibrance colors, and exquisite composition. ",
				male_prompt: "Striking portrait of a handsome Hispanic man in his late 20's with an intense gaze. Intricate details, delicate light and shadows, vibrance colors, and exquisite composition. ",
				images: ['https://replicate.delivery/pbxt/42j2YtNeltwTHy5ZDRjCLbr3UwXE3t78Nf5iuMJGLuE67prQA/out-0.png'],
			},
			'intercultural argument': {
				summary: 'intercultural argument',
				camera: '4K high resolution camera',
				tags: ['editorial', 'casual', 'argumentative', 'overcast', 'muted'],
				female_prompt:
					'Powerful editorial style photography of a Mexican woman passionately confront a Japanese women in an overcast parking lot, with muted colors, soft lighting and shadows. Sharp details, high resolution 4K imagery with natural color tones. ',
				male_prompt:
					'Intense editorial style photography of a Japanese man angrily engaging with a Mexican man in an overcast parking lot, with muted colors, soft lighting and shadows. Sharp details, high resolution 4K imagery with natural color tones. ',
				images: ['https://replicate.delivery/pbxt/q0OC0hkSwz7SEZxUh37kq0nBTeasRiQBHQh0R2bowwsx90VIA/out-0.png'],
			},
			'intimidating presence': {
				summary: 'intimidating presence',
				camera: '4K resolution',
				tags: ['official', 'formal', 'full_body', 'cinematic', 'sharp'],
				female_prompt:
					'Tall and statuesque woman with piercing eyes and sharp features, jet black hair is typically styled in a sleek bob, wears dark, form-fitting clothing that highlights her curves and intimidating presence. Subtle cinematic lighting and 4K resolution for a heightened sense of detail. ',
				male_prompt:
					'Tall and imposing man with intense gaze and strong jawline, dark hair slicked back to accentuate his facial structure. He wears a fitted suit that shows off his physique and projects an air of confidence. Subtle cinematic lighting and 4K resolution for a heightened sense of detail. ',
				images: ['https://replicate.delivery/pbxt/BYezemxbBYtocUVpZeD0ZnPEw9CJ37SKzFm2fyfdMhg5gPdFC/out-0.png'],
			},
			'intricate alchemist': {
				summary: 'intricate alchemist',
				camera: 'Kodachrome 800',
				tags: ['alchemist', 'spell energy', 'rain', 'grmdark', 'lacepunk'],
				female_prompt:
					'Female Alchemist in intricate silk robe surrounded by magical energy, mysterious rain, grimdark, lacepunk design and details, volumetric light and radiant light. Hypermaximalist art with insanely detailed and intricate concept art by Jean-Baptiste Monge.',
				male_prompt:
					'Male Alchemist in intricate silk robe surrounded by magical energy, mysterious rain, grimdark, lacepunk design and details, volumetric light and radiant light. Hypermaximalist art with insanely detailed and intricate concept art by Jean-Baptiste Monge.',
				images: ['https://replicate.delivery/pbxt/Wnds1DI0SXqVMNbdkKgexMRGrNBlQgKfVdtnS2eauHhednuCB/out-0.png'],
			},
			'io portrait': {
				summary: 'io portrait',
				camera: 'Master Photography',
				tags: ['portrait', 'fantasy', 'nature', 'space', 'epic'],
				female_prompt:
					'Striking portrait of a Cernunnos Paien woman on the planet IO with misty, sunrise backdrop, serene lake reflection and galactic sky. Captured with masterful photography, moody light and colours, expansive vista and intricate details.',
				male_prompt:
					'Striking portrait of a Cernunnos Paien man on the planet IO with misty, sunrise backdrop, serene lake reflection and galactic sky. Captured with masterful photography, moody light and colours, expansive vista and intricate details.',
				images: ['https://replicate.delivery/pbxt/XqV0IqQpDsLzFRl28JQ2LEWOeUNFThKBkDHnUnODM0mh80VIA/out-0.png'],
			},
			'iridescent portrait': {
				summary: 'iridescent portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'glowing', 'shimmering', 'luminous'],
				female_prompt:
					'Subsurface scattering of skin and face of a woman with glittering, shimmering, luminous, iridescent, opalescent, glowing, sparkling, gleaming, scintillating, kaleidoscopic, shining crystalline diamond-hair in shamrock wind. By WLOP and Artgerm with strong glow. ',
				male_prompt:
					'Subsurface scattering of skin and face of a man with glittering, shimmering, luminous, iridescent, opalescent, glowing, sparkling gleaming scintillating kaleidoscopic shining crystalline diamond-hair in shamrock wind. By WLOP and Artgerm with strong glow.',
				images: ['https://replicate.delivery/pbxt/ET66M4V7vO42BN94HBQnL5oOAlewERoZTBxjIMXFkekI5prQA/out-0.png'],
			},
			'irish dancing': {
				summary: 'irish dancing',
				camera: '',
				tags: ['portrait', 'full-body', 'ireland', 'dance', 'shamrock'],
				female_prompt:
					'Vibrant red-haired woman in a shamrock dress dancing joyfully in an Irish meadow, framed with lush verdant trees and colorful flowers. Picture perfect with vivid colors and warm lighting, creating an atmosphere of happiness and celebration.',
				male_prompt: 'Handsome man in traditional Irish garb jumping jigs in an emerald meadow, filled with wildflowers. Spectacular scene with captivating vibrant colors, natural sunlight and warm tones, presenting the essence of Irish culture.',
				images: ['https://replicate.delivery/pbxt/1u1xwNpb6cKgLBjQfvsXO3XWrbQfTerhDPRp2gO9IfIRqnuCB/out-0.png'],
			},
			'irish jedi': {
				summary: 'irish jedi',
				camera: '',
				tags: ['portrait', 'fantasy', 'armor', 'lightsaber', 'dramatic'],
				female_prompt:
					'Intimate close-up portrait of a female Irish Jedi warrior, wearing golden shamrock armor and dark green velvet cape, wielding a vibrant green lightsaber. Stylized work of Aleksi Briclot, Moebius and Nicolas de Stael, with a dramatic wet-look lighting effect. ',
				male_prompt:
					'Close-up portrait of a male Irish Jedi warrior, dressed in golden shamrock armor and dark green velvet cape, armed with a radiant green lightsaber. Stylized work of Aleksi Briclot, Moebius and Nicolas de Stael, with a wet-look lighting effect for added drama. ',
				images: ['https://replicate.delivery/pbxt/fFSe5qQ6OEu1Nk0SDUssmfnVY71AYVqeeSAiUdfEpfd5m80VIA/out-0.png'],
			},
			'irish jedi warrior': {
				summary: 'irish jedi warrior',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'full body'],
				female_prompt:
					'Close up portrait of a female Irish Jedi warrior adorned with golden shamrock armor and dark green velvet cape, with a vibrant green lightsaber in hand. A majestic piece of art, by Aleksi Briclot & Moebius & Nicolas de Stael, featuring an intense wet look with dramatic lighting.',
				male_prompt:
					'Close up portrait of a male Irish Jedi warrior wearing golden shamrock armor and dark green velvet cape, with a powerful green lightsaber at the ready. A magnificent piece of art, by Aleksi Briclot & Moebius & Nicolas de Stael, featuring an intense wet look with dramatic lighting.',
				images: ['https://replicate.delivery/pbxt/rn1y1Vkwjr7mDBfu2LktfwNEheak1QENyOeLoSkH46FSMnuCB/out-0.png'],
			},
			'irish portrait': {
				summary: 'irish portrait',
				camera: '',
				tags: ['portrait', 'official', 'street', 'green', 'festive'],
				female_prompt: "Pretty Irish woman with vibrant red hair and a cheerful expression. She wears a stylish green suit and hat, celebrating St. Patrick's Day in a lively Dublin street surrounded by happy people. ",
				male_prompt: "Handsome Irish man with vibrant ginger hair, happy expression and stylish green suit. Celebrating St. Patrick's Day in a bustling Dublin street, surrounded by excited locals.",
				images: ['https://replicate.delivery/pbxt/02e5AGD2hgziLCe9JQELvQI9uuxvaTZyw7nGtkFHeJiOyTXhA/out-0.png'],
			},
			'irish street scene': {
				summary: 'irish street scene',
				camera: '',
				tags: ['portrait', 'festive', 'street scene', 'Irish', 'celebration'],
				female_prompt: "Beautiful Irish woman with auburn locks, beaming with cheer and dressed in a vibrant green suit and hat, on the streets of Dublin during St. Patrick's Day, surrounded by a jubilant crowd. ",
				male_prompt: "Handsome Irish man with bright red hair, cheerful expression and wearing a striking green suit with hat, on the lively streets of Dublin celebrating St. Patrick's Day, surrounded by a joyful crowd.",
				images: ['https://replicate.delivery/pbxt/d0a2Ut2zKb4eYafHofkbeDOfGGwHTRsh2pCuF5adDEueMe0VIA/out-0.png'],
			},
			'irish warrior': {
				summary: 'irish warrior',
				camera: '',
				tags: ['portrait', 'official', 'shield', 'Irish', 'vibrant'],
				female_prompt: 'Majestic portrait of a young female Irish warrior holding a shield with a shamrock symbol. Exquisite detail with subtle depth of field and vibrant colors. Captivating facial expression with an air of defiance and strength.',
				male_prompt: 'Gallant portrait of a young male Irish warrior holding a shield with a shamrock symbol. Exquisite detail with subtle depth of field and vibrant colors. Captivating facial expression with an air of courage and power.',
				images: ['https://replicate.delivery/pbxt/2fNFhb3OLpV9RavCbynIqutODSVWAQ8Zi9smSUfYNEVq3prQA/out-0.png'],
			},
			'irish warrior portrait': {
				summary: 'irish warrior portrait',
				camera: '',
				tags: ['portrait', 'Irish', 'shield', 'symbol', 'warrior'],
				female_prompt:
					'Magnificent portrait of a young female Irish warrior, holding a shield with a vibrant shamrock symbol. Exquisite detail and depth of field with a wide view. Hyperrealistic quality, soft lighting, and extreme details. Masterful blend of pencil and watercolor.',
				male_prompt:
					'Regal portrait of a young male Irish warrior, posed with a shield with a vibrant shamrock symbol. Exquisite detail and depth of field with wide view. Hyperrealistic quality, soft lighting, and extreme details. Masterful blend of pencil and watercolor.',
				images: ['https://replicate.delivery/pbxt/HxbiSY35VvaLK5vI8T1zZWzRgWMfYMeraGdVewgLoTXb5TXhA/out-0.png'],
			},
			'iron cat': {
				summary: 'iron cat',
				camera: '',
				tags: ['portrait', 'costume', 'cat', 'superhero', 'metallic'],
				female_prompt: 'Stylish portrait of a cat wearing an Iron Man Mark XLVI armor, with a playful expression and detailed metallic colors. Aesthetically pleasing composition that stands out with its unique and creative elements. ',
				male_prompt: 'Strong portrait of a cat wearing an Iron Man Mark XLVI armor, with a confident expression and detailed metallic colors. Aesthetically pleasing composition that stands out with its unique and creative elements. ',
				images: ['https://replicate.delivery/pbxt/htqgdAemYGQ2ZiRJlwUSDf9IcRmj0rizc6nwIiMcQ2Su6prQA/out-0.png'],
			},
			'italian fashion': {
				summary: 'italian fashion',
				camera:
					'Shot on 50 mm lens Depth of Field long exposure F/5 White Balance Kodak Ektachrome E100 - 120 film 32k Super-Resolution Megapixel Backlight Ultra-Realistic Natural Lighting Soft Lighting Volumetric lighting Beautiful Photorealistic Lighting Photorealistic Global Illumination Post Production Cell Shading Tone Mapping Unreal Engine',
				tags: ['fashion', 'train', 'Paris', 'ultra-detailed', 'cinematic'],
				female_prompt:
					'Beautiful and passionate Italian woman, seated in an exquisitely detailed 1900 train carriage, illuminated by Parisian night. Photorealistic dress and accessories, with a harmonious bone structure, facial features, and body proportions. Immaculate details of ultra-realistic skin, hair, eyes, shadows, lights and reflections. Cinematic quality with post production techniques such as global illumination, cell shading and tone mapping.',
				male_prompt:
					'Handsome Italian man seated in an intricately detailed 1900 train carriage, illuminated by Parisian night. Photorealistic clothing and accessories with a harmonious bone structure , facial features and body proportions. Impeccable details of ultra-realistic skin, hair , eyes , shadows , lights and reflections . Cinematic quality with post production techniques such as global illumination , cell shading and tone mapping .',
				images: ['https://replicate.delivery/pbxt/nIBdKBQISHZVDpBfuiFOdmz5DYwZqBx5fCSMwCfWioUGsTXhA/out-0.png'],
			},
			'italian humanization': {
				summary: 'italian humanization',
				camera: 'Canon EOS 5D Mark IV, Canon EF 100mm f/2.8L Macro IS USM',
				tags: ['portrait', 'humanization', 'elegant', 'long-hair', 'wine'],
				female_prompt:
					'Beautiful humanization of a young Italian woman, with elegant flowing long hair and thick eyelashes, wearing a wild silk dress of wine color. Delicate portrait photography in daylight with calm atmosphere, high resolution and quality. ',
				male_prompt: 'Handsome humanization of a young Italian man, with stylish flowing hair and thick eyelashes, wearing a wild silk suit of wine color. Delicate portrait photography in daylight with calm atmosphere, high resolution and quality.',
				images: ['https://replicate.delivery/pbxt/z1fzJKYIFfjalExbaTAafrT9t6Ya8wK95Eatow4OsbjCyTXhA/out-0.png'],
			},
			'jade thorne portrait': {
				summary: 'jade thorne portrait',
				camera: '',
				tags: ['portrait', 'tattooed', 'official', 'full body', 'orange eyes'],
				female_prompt:
					'A beautiful 25 year-old woman with a neck tattoo and striking golden-orange eyes. Captivating close up shot with vivid colors, depth of field, and facial expression full of attitude. Elegant styling, natural makeup and subtle lighting.',
				male_prompt:
					'A handsome 25 year-old man with a neck tattoo and piercing golden-orange eyes. Captivating close up shot with vivid colors, depth of field, and facial expression full of attitude. Elegant styling, natural grooming and subtle lighting.',
				images: ['https://replicate.delivery/pbxt/soyjlEUxuQ6ZFpchxC5IfqBGmFf9r8ksHOJMyzEYuADj5prQA/out-0.png'],
			},
			'japanese character': {
				summary: 'japanese character',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'traditional', 'full body'],
				female_prompt:
					'Stunning female Japanese character with long golden hair cascading down her back in soft waves. Her striking red eyes gleam with intensity, adding a touch of mystery to her captivating beauty. She wears a traditional kimono and attire, accentuating her slender figure and graceful movements. Her pale skin is flawless, adding to her ethereal quality and creating a striking contrast against the vibrant colors of her attire. Every detail of her appearance exudes elegance, refinement, and beauty that is sure to captivate the imagination.',
				male_prompt:
					'Handsome male Japanese character with long flowing hair and piercing eyes. He wears traditional kimono and attire that accentuate his muscular figure and powerful movements. His alluring presence is enhanced by his flawless skin tone, creating a striking contrast against the vibrant colors of his attire. His refined features convey elegance, sophistication, and strength that will draw viewers in.',
				images: ['https://replicate.delivery/pbxt/0gnpP3YU5lrkOljA1rBWaMzCuifxevQ0esfiiG7mIM0lvnuCB/out-0.png'],
			},
			'japanese portrait': {
				summary: 'japanese portrait',
				camera: '',
				tags: ['portrait', 'Japanese', 'traditional', 'kimono', 'elegant'],
				female_prompt:
					'Stunning Japanese female character with long golden hair that cascades down her back in soft waves. Her striking red eyes gleam with intensity, adding a touch of mystery to her captivating beauty. She wears a traditional kimono and attire, accentuating her slender figure and graceful movements. Her pale skin is flawless, creating a striking contrast against the vibrant colors of her attire. Every detail of her appearance exudes elegance, refinement, and beauty, making her a truly remarkable character.',
				male_prompt:
					'Handsome Japanese male character with long golden hair that cascades down his back in soft waves. His striking blue eyes gleam with intensity, adding a touch of mystery to his captivating beauty. He wears traditional kimono and attire, accentuating his slender figure and graceful movements. His pale skin is flawless, creating a striking contrast against the vibrant colors of his attire. Every detail of his appearance exudes elegance, refinement, and beauty, making him a truly remarkable character.',
				images: ['https://replicate.delivery/pbxt/HMc47xBSqH66NlFjpLTNktrtfuVWa9veUdkFbjRpqx2r2prQA/out-0.png'],
			},
			'jedi portrait': {
				summary: 'jedi portrait',
				camera: 'Real photography',
				tags: ['portrait', 'fantasy', 'lightsaber', 'Jedi', 'epic'],
				female_prompt: 'Powerful dark-skinned Jedi woman with a glowing lightsaber, photorealistic imagery and perfect clarity. High definition textures and realistic lighting, majestic aura of strength and courage.  ',
				male_prompt: 'Majestic dark-skinned Jedi man with a noble lightsaber, photorealistic imagery and perfect clarity. High definition textures and realistic lighting, imposing aura of strength and power.',
				images: ['https://replicate.delivery/pbxt/oMeGqCDyLB3lBSl5V8QfF2semMuCqWOG0EHmOJ5Czat50TXhA/out-0.png'],
			},
			'jedi warrior': {
				summary: 'jedi warrior',
				camera: '',
				tags: ['portrait', 'official', 'armor', 'lightsaber', 'dramatic'],
				female_prompt:
					'Close-up portrait of a female Jedi warrior with golden shamrock armor, dark green velvet cape, and green lightsaber. Masterfully-crafted by Aleksi Briclot, Moebius, and Nicolas de Stael with dramatic wet lighting and shiny textures. ',
				male_prompt:
					'Close-up portrait of a male Jedi warrior with golden shamrock armor, dark green velvet cape, and green lightsaber. Masterfully-crafted by Aleksi Briclot, Moebius, and Nicolas de Stael with dramatic wet lighting and shiny textures. ',
				images: ['https://replicate.delivery/pbxt/TCt1OYWGfWwqJKVSpFio2pezOIyDHqnaEI7ZLIcoWk3r3prQA/out-0.png'],
			},
			'jeweled portrait': {
				summary: 'jeweled portrait',
				camera: '',
				tags: ['portrait', 'jewels', 'afro hair', 'boots', 'statement'],
				female_prompt:
					'Gorgeous and ethereal black-skinned woman adorned with colorful jewels, luxurious long jewel-encrusted afro hair, and thigh-high jeweled boots gliding along black waters, wearing a jean jacket with the word "1000" written on the back. Radiant beauty blended with vibrant colors, classic style and bold statement.',
				male_prompt:
					'Handsome and ethereal black-skinned man adorned with colorful jewels, luxurious long jewel-encrusted afro hair, and thigh-high jeweled boots gliding along black waters, wearing a jean jacket with the word "1000" written on the back. Radiant beauty blended with vibrant colors, classic style and bold statement.',
				images: ['https://replicate.delivery/pbxt/Q41Ql8QhxgpYD1o2W5vhhVN9aYwYf2FLsfwuIiyscYzY9prQA/out-0.png'],
			},
			'jibaro gold': {
				summary: 'jibaro gold',
				camera: 'HD clarity/high resolution',
				tags: ['portrait', 'official', 'formal', 'jewelry', 'golden'],
				female_prompt:
					'Beautiful Jibaro gold girl adorned with a golden mask, glimmering jewelry, and golden shamrock. Art by Alberto Mielgo with HD clarity and high resolution. Radiant, mesmerizing composition of delicate textures, subtle lighting, and fine details.',
				male_prompt:
					'Handsome Jibaro gold man adorned with a golden mask, glimmering jewelry, and golden shamrock. Art by Alberto Mielgo with HD clarity and high resolution. Radiant, mesmerizing composition of delicate textures, subtle lighting, and fine details.',
				images: ['https://replicate.delivery/pbxt/aZ5i2tCe2w3KPCrSHlBCEC96BOM6tYkje4a7VBFrWM6l4prQA/out-0.png'],
			},
			'k-pop selfie': {
				summary: 'k-pop selfie',
				camera: '',
				tags: ['selfie', 'beauty', 'Korean', 'K-Pop', 'BoA Kwon'],
				female_prompt:
					'Beautiful selfie of a young South Korean woman that resembles a K-Pop idol, with a youthful glow and an angelic charm. Dreamy soft lighting, vibrant colors and sharp details that brings out her features. An elegant look resembling BoA Kwon.',
				male_prompt:
					'Handsome selfie of a young South Korean man that resembles a K-Pop idol, with a youthful glow and an angelic charm. Dreamy soft lighting, vibrant colors and sharp details that brings out his features. An elegant look resembling BoA Kwon.',
				images: ['https://replicate.delivery/pbxt/cf2wtdbV4DWfRkbDWRaeAVJk5HnGBUW7xEpI6ZhMNh2E2TXhA/out-0.png'],
			},
			'karrueche fashion': {
				summary: 'karrueche fashion',
				camera: '',
				tags: ['style', 'fashion', 'botanical', 'metallic', 'holographic'],
				female_prompt:
					'Joyful young woman with her head thrown back, singing in a botanical academia. Karrueche-inspired, Lisa Frank fashion with a touch of metallic and holographic accents. Smiling into the rainbow, this shamrock look is inspired by the works of James Jean and Alberto Seveso. ',
				male_prompt:
					'Confident young man surrounded in a botanical academia. Karrueche-inspired, Lisa Frank fashion with a touch of metallic and holographic accents. Holding a pot of gold in his hands, this shamrock look is inspired by the works of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/en3WNee5YcH5opb94IU9mWVU0FvdepfSO1N12LnfZT6z0e0VIA/out-0.png'],
			},
			'karrueche portrait': {
				summary: 'karrueche portrait',
				camera: '',
				tags: ['singing', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'An enchanting female singing her heart out, surrounded by a botanical inspired academia. A colourful kaleidoscope of art and fashion styles, with Lisa Frank-like prints, metallic holographic accents, and shamrock trimmings. Smiling into the rainbow with a pot of gold at the end of her journey. Inspired by the works of James Jean and Alberto Seveso.',
				male_prompt:
					'A captivating male singing his heart out, surrounded by a botanical inspired academy. A colourful kaleidoscope of art and fashion styles, with Lisa Frank-like prints, metallic holographic accents, and shamrock trimmings. Smiling into the rainbow with a pot of gold at the end of his journey. Inspired by the works of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/xGVjfGfMx8m8LkJK82U1RQeMfJpT4dniqg2YTMUUSoM31nuCB/out-0.png'],
			},
			'kawaii chibi romance': {
				summary: 'kawaii chibi romance',
				camera: '',
				tags: ['romance', 'fantasy', 'mixed race', 'athletic', 'illustration'],
				female_prompt: 'Colorful idyllic cheerful woman with an athletic body and perfect proportions, looking at the viewer. Kawaii Chibi romance fantasy inspired, with cafe cat-themed illustrations, adorable and playful. ',
				male_prompt: 'Colorful idyllic, cheerful handsome man with an athletic body and well-proportioned figure, looking at the viewer. Kawaii Chibi romance fantasy inspired, with cafe cat-themed illustrations, adorable and playful.',
				images: ['https://replicate.delivery/pbxt/qVrfJnAqwwVHaqezJmsdn6fetz2pWSXp5fPF2L4abVUZOPdFC/out-0.png'],
			},
			'kawaii fantasy': {
				summary: 'kawaii fantasy',
				camera: '',
				tags: ['manhwa', 'anime', 'boyfriend', 'cat', 'cheerful'],
				female_prompt:
					'Idyllic, cheerful handsome boyfriend butler man with athletic body, well-proportioned perfect features and an alluring gaze. Adorable anime-style illustration with cat-themes, kawaii manhwa style, and children fantasy elements. ',
				male_prompt:
					'Idyllic, cheerful handsome boyfriend butler man with athletic body, well-proportioned perfect features and an alluring gaze. Adorable anime-style illustration with cat-themes, kawaii manhwa style, and children fantasy elements. ',
				images: ['https://replicate.delivery/pbxt/7cIgrzVCkwLWFxcguL81rqbcDuvgfMaU2k2KeYpzeuMN2TXhA/out-0.png'],
			},
			'kawaii robot': {
				summary: 'kawaii robot',
				camera: 'Tsutomu Nihei/ Donato Giancola',
				tags: ['cute', 'attractive', 'anime', 'futuristic', 'microbiology'],
				female_prompt:
					'Adorable robot female in a alluring miniskirt outfit, enchanting kawaii anime bio-organic cybernetic dream girl. Futuristic nanopunk city, ethereal light refraction, and roots of a willow tree. Microbiological cells under a microscope, ultra-high detailed and sharp visuals with vivid colors. ',
				male_prompt:
					'Charming robot male in a fashionable ensemble, captivating kawaii anime bio-organic cybernetic dream man. Futuristic nanopunk city, ethereal light refraction, and roots of a willow tree. Microbiological cells under a microscope, ultra-high detailed and sharp visuals with vivid colors. ',
				images: ['https://replicate.delivery/pbxt/IL8JnIlcsoaPLdqRh6ZfleMaarkxCRAW24zC5qJgQlc73prQA/out-0.png'],
			},
			'kawaii witch': {
				summary: 'kawaii witch',
				camera: '',
				tags: ['portrait', 'fantasy', 'witchcraft', 'magical', 'square'],
				female_prompt: 'Adorable female witch with a bewitching aura, joyous smile and twinkling eyes. Cute expression and colorful outfit, delicate features with cute accessories. Sweet and magical, radiating warmth and positive energy.',
				male_prompt: 'Charming male witch with an enchanting presence, mischievous grin and sparkling gaze. Colorful attire and stylish details, soft features with cute trinkets. Charismatic and magical, radiating charm and good vibes.',
				images: ['https://replicate.delivery/pbxt/gIRd2PBcizJyLtKpjrUif9gbuNLyQNmXr9XRE3gTclUb90VIA/out-0.png'],
			},
			'kenyan portrait': {
				summary: 'kenyan portrait',
				camera: 'Hasselblad 35mm Photography',
				tags: ['portrait', 'natural', 'detailed', 'long hair', 'fabric'],
				female_prompt:
					'Gorgeous and satisfied looking Kenyan woman in a simple fabric dress, detailed natural skin, no makeup, detailed eyes, long hair. Captured by Hasselblad 35mm photography with vividness, trueness to life, and intense details. ',
				male_prompt: 'Handsome and content looking Kenyan man with deep facial expressions and features, detailed natural skin, no makeup. Captured by Hasselblad 35mm photography with vividness, trueness to life, and intense details. ',
				images: ['https://replicate.delivery/pbxt/sKyjmKEFwFIPJNgIKHjrwcQYeJGIm0usieq6jMeKneRf3OdFC/out-0.png'],
			},
			'killer anime': {
				summary: 'killer anime',
				camera: '',
				tags: ['anime', 'illustration', 'serious', 'trenchcoat', 'forest'],
				female_prompt:
					'Dramatic closeup illustration of a female killer with long straight black hair, stern expression, and black eyes wearing glasses and a trenchcoat. Kneeling down to feed ravens in a shadowy forest with intricate details and bold colors. ',
				male_prompt:
					'Intense closeup illustration of a male killer with long straight black hair, fierce expression, and black eyes wearing glasses and a trenchcoat. Kneeling down to feed ravens in a shadowy forest with intricate details and bold colors. ',
				images: ['https://replicate.delivery/pbxt/WRtLOmb98iLiB5n3XixZ1CZsQPPep4elm58bJeIHH9hmuTXhA/out-0.png'],
			},
			'kintsugi armor': {
				summary: 'kintsugi armor',
				camera: 'Tilt-shift lens',
				tags: ['full body', 'futuristic', 'armor', 'impasto', 'crosshatching'],
				female_prompt:
					'Stunning full body shot of a beautiful female Cernunnos adorned with highly detailed red and white Kintsugi and Ukiyo-e themed futuristic armor, featuring impasto, by Apollonia Sinclair + Luis Royo + Jacob Hashimoto. 8k resolution with medium distance, crosshatching, tilt-shift, and 32k ultra resolution. ',
				male_prompt:
					'Handsome full body shot of a powerful male Cernunnos wearing highly detailed red and white Kintsugi and Ukiyo-e themed futuristic armor, featuring impasto art by Apollonia Sinclair + Luis Royo + Jacob Hashimoto. 8k resolution with medium distance, crosshatching, tilt-shift, and 32k ultra resolution. ',
				images: ['https://replicate.delivery/pbxt/w7EyR04oQZocDFT9QVic6aB7FPkwDf13Xh3Cvx9yZvkOeprQA/out-0.png'],
			},
			'kitsune portrait': {
				summary: 'kitsune portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'expression'],
				female_prompt:
					'Enchanting Kitsune fox woman basking in a vivid field of vibrant flowers, stunning figure with flirty expressions, inspired by works of Masamune Shirow and Eiji Yoshikawa. Mesmerizing details, brilliant colors, and enchanting composition. ',
				male_prompt:
					'Handsome Kitsune fox man lounging on a bed of colorful wildflowers, attractive physique laced with flamboyant gestures, inspired by works of Masamune Shirow and Eiji Yoshikawa. Exquisite finesse, brilliant hues, and captivating layout.',
				images: ['https://replicate.delivery/pbxt/guAKpofP8j20ca9YL7Pfc3sXvS4Uf9Zc1Em9QTkddqaCtTXhA/out-0.png'],
			},
			'kleggt doe eyes portrait': {
				summary: 'kleggt doe eyes portrait',
				camera: '',
				tags: ['portrait', 'official', 'glasses', 'mid-shot', 'saturated'],
				female_prompt: 'Gorgeous mid shot of a woman with kleggt doe eyes and framed glasses. Soft lighting, balanced composition, saturated color palette for a beautiful portrait. ',
				male_prompt: 'Handsome mid shot of a man with kleggt doe eyes and framed glasses. Soft lighting, balanced composition, saturated color palette for a handsome portrait.',
				images: ['https://replicate.delivery/pbxt/cIUhGqILBK7QL5p1tLL6lTxfbneeftG8Ib30YJxWlxoEnnuCB/out-0.png'],
			},
			'klimt-mckean art': {
				summary: 'klimt-mckean art',
				camera: '',
				tags: ['art', 'ascii', 'paper mache', 'full body', 'forest'],
				female_prompt:
					'Mixed media art piece featuring ascii and paper mache pastiche, inspired by Gustav Klimt and Dave McKean. A female Cernunnos depicted in full-body, cascading into an immersive forest scene. Dynamic composition with vivid color palette, soft lighting and intricate details.',
				male_prompt:
					'Mixed media art piece featuring ascii and paper mache pastiche, inspired by Gustav Klimt and Dave McKean. A male Cernunnos depicted in full-body, cascading into an immersive forest scene. Dynamic composition with vivid color palette, soft lighting and intricate details.',
				images: ['https://replicate.delivery/pbxt/ahefOgnke4Rp2JK3psdN9Ec2whoFkfA8TOOVTUbeXD8r3OdFC/out-0.png'],
			},
			'knight dragon': {
				summary: 'knight dragon',
				camera: '',
				tags: ['anime', 'armored', 'dragon', 'beach', 'dawn'],
				female_prompt:
					'Anime illustration of an olive-skinned armored knight woman with a black ponytail and glasses petting a majestic white dragon on a beach at dawn. Vivid colors, intricate details, dynamic composition, and a touch of surrealism. Soft morning light, golden ratio, and a powerful narrative. ',
				male_prompt:
					'Anime illustration of an olive-skinned armored knight man with a black ponytail and glasses petting a majestic white dragon on a beach at dawn. Vivid colors, intricate details, dynamic composition, and a touch of surrealism. Soft morning light, golden ratio, and a powerful narrative.',
				images: ['https://replicate.delivery/pbxt/RSaLeT7x3PTRUqkuXrsXjdeaXqOSYV6aCOwJqH8ALpRz6prQA/out-0.png'],
			},
			'kuvshinov anime': {
				summary: 'kuvshinov anime',
				camera: 'Ilya Kuvshinov',
				tags: ['anime', 'low angle', 'alien', 'candles', 'glossy'],
				female_prompt:
					'Majestic low angle shot of a beautiful woman wearing a black latex catsuit in an ancient alien spaceship full of melting candles. Radiant glossy pearlescent anime art style, shiny character design with gleaming highlights, dynamic pose and expression, and surreal lighting. ',
				male_prompt:
					'Majestic low angle shot of a handsome man wearing a black latex catsuit in an ancient alien spaceship full of melting candles. Radiant glossy pearlescent anime art style, shiny character design with gleaming highlights, dynamic pose and expression, and surreal lighting. ',
				images: ['https://replicate.delivery/pbxt/7Q7sF3Ilb7YqHx4hpkCee8nALkpfUW1F9qTtmZ3kIsf8cnuCB/out-0.png'],
			},
			'kuvshinov cernunnos': {
				summary: 'kuvshinov cernunnos',
				camera: '',
				tags: ['closeup', 'glow', 'luminous', 'iridescent', 'pastel'],
				female_prompt:
					'Extreme closeup of a woman surrounded by a radiant and kaleidoscopic ambiance, with a long face, pastel complexion, pink glittering shamrock, shimmering hair, luminous glow and iridescent opalescence. Artfully crafted diamond-hair and a strong Shamrock Wind by Kuvshinov Ilya (WLOP) radiates around her.',
				male_prompt:
					'Extreme closeup of a man surrounded by an effervescent and scintillating atmosphere, with a long face, pastel complexion, pink glittering shamrock, shimmering hair, luminous glow and iridescent opalescence. Artfully crafted diamond-hair and a powerful Shamrock Wind by Kuvshinov Ilya (WLOP) radiates around him.',
				images: ['https://replicate.delivery/pbxt/KnSWYioNaT6VK5MzePLURQLmrv3QYq1Dz3ZAct1DjI7e8prQA/out-0.png'],
			},
			'kuvshinov portrait': {
				summary: 'kuvshinov portrait',
				camera: '',
				tags: ['extreme closeup', 'pastel', 'sparkling', 'glowing', 'iridescent'],
				female_prompt:
					'Extreme closeup of a beautiful woman with glowing skin, long face, pastel pink color palette and shimmering diamond hair. Iridescent sparkles and glittering shamrocks create an opalescent, kaleidoscopic and scintillating effect. Strong glow radiating from the art of Kuvshinov Ilya (Wlop).',
				male_prompt:
					'Extreme closeup of a powerful man with glowing skin, strong features, pastel color palette and shining crystalline hair. Kaleidoscopic sparkles and glittering shamrocks create an opalescent, iridescent and scintillating effect. Strong glow radiating from the art of Kuvshinov Ilya (Wlop).',
				images: ['https://replicate.delivery/pbxt/QaRNjfeNPdvIfI1OUA99IF0GAiC3ld8QaPSEeXy2f9x6FPdFC/out-0.png'],
			},
			'lady bug couture': {
				summary: 'lady bug couture',
				camera: '',
				tags: ['fashion', 'swamp', 'shamrock', 'green eyes', 'mossy'],
				female_prompt: 'Stylishly dressed swamp woman, with shamrocks and a lady bug design, adorned in mossy textures and wet mud. Her piercing green eyes and ivy hair entice the viewer. ',
				male_prompt: 'Handsomely dressed swamp man, with shamrocks and a lady bug design, adorned in mossy textures and wet mud. His piercing green eyes and ivy hair captivate the audience. ',
				images: ['https://replicate.delivery/pbxt/uwM7r0WqN1oKEZZTb56KOVLgbYlKVZlejeITZXD3I5nw8prQA/out-0.png'],
			},
			'latex floral': {
				summary: 'latex floral',
				camera: '',
				tags: ['portrait', 'mask', 'flowers', 'oil painting', 'vibrant'],
				female_prompt:
					'Close-up of a woman in a latex facemask, pleasantly obscured by delicate flowers. Oil painting masterpiece by Simon Stalenhag and Robert Rauschenberg, featuring contrasting vibrant and subtle colors, dynamic brushwork, and soft yet striking lighting.',
				male_prompt:
					'Close-up of a man in a latex facemask, pleasantly obscured by delicate flowers. Oil painting masterpiece by Simon Stalenhag and Robert Rauschenberg, featuring contrasting vibrant and subtle colors, dynamic brushwork, and soft yet striking lighting.',
				images: ['https://replicate.delivery/pbxt/qYHijD4mowKtAtXJBUR0IffumKkyrSXeUOIvfCUH8Y88qnuCB/out-0.png'],
			},
			'latex mask': {
				summary: 'latex mask',
				camera: '',
				tags: ['mask', 'oil painting', 'flowers', 'close-up', 'surreal'],
				female_prompt:
					'Closeup of a woman in a latex facemask, adorned by vibrant flowers. Oil painting by Simon Stalenhag and Robert Rauschenberg. Exquisite detail of texture and geometric patterns, expertly mixed media, color-shift highlights, bold brush strokes, and surrealistic atmosphere. ',
				male_prompt:
					'Closeup of a man in a latex facemask, adorned with lively flowers. Oil painting by Simon Stalenhag and Robert Rauschenberg. Exquisite detail of texture and geometric patterns, expertly mixed media, color-shift highlights, bold brush strokes, and surrealistic atmosphere. ',
				images: ['https://replicate.delivery/pbxt/cAZdYK4nShbNK5SOVPiyLqeg4Pke5gxBtIPdDKlmmPBY4prQA/out-0.png'],
			},
			'led dance': {
				summary: 'led dance',
				camera: 'Zeiss 50mm lens',
				tags: ['dance', 'tunnel', 'RGB LEDs', 'kimono', 'bokeh'],
				female_prompt:
					'Joyous woman dancing in a tunnel full of vibrant colors, draped in a sheer white kimono, dramatic lighting and breathtaking composition. Eye-catching detail and sharp focus, masterful bokeh, extreme details and 4K resolution. ',
				male_prompt: 'Carefree man reveling in a tunnel of RGB LEDs, wearing a stylish white kimono, dramatized lighting, dynamic composition and amazing detail. Sharp focus and ultra resolution, beautiful bokeh effects, with Zeiss 50mm lens. ',
				images: ['https://replicate.delivery/pbxt/oYzCpESCMH6jKNUMzZKKkAI3i6toYn2iIcjHxJ3tgiV0e0VIA/out-0.png'],
			},
			'lifestyle portrait': {
				summary: 'lifestyle portrait',
				camera: '50mm lens',
				tags: ['portrait', 'tropical', 'magic hour', 'dreadlocks', 'ancient'],
				female_prompt: 'Lively style portrait of a brown skin black woman, seated in a yoga lotus position, with twisted dreadlocks and an ancient Egyptian sweat band. Magical hour lighting and high definition 8K camera resolution.',
				male_prompt: 'Vibrant style portrait of a brown skin black man, seated in a yoga lotus position, with braided dreadlocks and an ancient Egyptian sweat band. Magical hour lighting and high definition 8K camera resolution.',
				images: ['https://replicate.delivery/pbxt/6qpLlGgrNk4jO1odDmpe5Y0tvJxzVcXRMXydpFrnndxU90VIA/out-0.png'],
			},
			'lion portrait': {
				summary: 'lion portrait',
				camera: '',
				tags: ['portrait', 'animals', 'anime', 'selective color', 'gibili'],
				female_prompt: 'Vibrant portrait of a female lioness in a colorful dress standing in a lush field of roses. Anime style, selective color, red dot matrix, gibili elements with intricate details and whimsical composition. ',
				male_prompt: 'Dashing portrait of a male lion in an eye-catching suit standing in an idyllic field of roses. Anime style, selective color, red dot matrix, gibili elements with intricate details and whimsical composition. ',
				images: ['https://replicate.delivery/pbxt/0aro6S3N75I8DlDwcFFPe1fB8ZkwCtSLUmf8c8QOaiHusTXhA/out-0.png'],
			},
			'living room portrait': {
				summary: 'living room portrait',
				camera: 'Canon DSLR with Kodak film, Telephoto lens',
				tags: ['portrait', 'official', 'interior', 'smiling', 'reportage'],
				female_prompt: 'Sophie Muffin, a 35-year-old woman with short, brunette hair. Sitting in an armchair in her living room, she looks out the window and smiles. Reportage shot with a warm Kodak film tone, soft lighting and telephoto lens. ',
				male_prompt: 'Mature man, with short dark hair and an air of confidence. Sitting in an armchair in his living room, he gazes out the window with a faint smile. Reportage shot with a warm Kodak film tone, soft lighting and telephoto lens. ',
				images: ['https://replicate.delivery/pbxt/1Gd0JgGwcn7oIh6bHFwa8EbkjaOXHw1ywqCf0fMGjduJ3prQA/out-0.png'],
			},
			'living room psychotherapy': {
				summary: 'living room psychotherapy',
				camera: 'ARRI/Sony/Canon/Nikon/Hasselblad cameras at 50mm/80mm/100mm',
				tags: ['professional', 'cinematic', 'detailed', 'lighting', 'gallery'],
				female_prompt:
					'Professional female psychologist in her living room, interacting with her male client. Cinematic and incredibly detailed shot, with professional lighting and sharp details. Masterfully taken with ARRI, Sony, Canon, Nikon, Hasselblad cameras at 50mm, 80mm and 100mm. Lightroom gallery-quality, perfect for Behance photography projects and Unsplash.',
				male_prompt:
					'Professional male client in a living room interacting with his female psychologist. Cinematic and incredibly detailed shot, with professional lighting and sharp details. Masterfully taken with ARRI, Sony, Canon, Nikon, Hasselblad cameras at 50mm, 80mm and 100mm. Lightroom gallery-quality perfect for Behance photography projects and Unsplash.',
				images: ['https://replicate.delivery/pbxt/hTR81vd0gq6SO1ko0gR2Ogrw1laezGSO6ExjnvC2W6Cs70VIA/out-0.png'],
			},
			'living suit': {
				summary: 'living suit',
				camera: '',
				tags: ['suit', 'urban', 'eco-friendly', 'Hundertwasser', 'Banksy'],
				female_prompt:
					'A refined female in a living plant, greenery, and flower suit, standing in an urban environment with modern fashion statements. Nature-inspired attire with an exotic vibrancy and an eco-friendly approach. A thought-provoking and expressive work of art, inspired by Hundertwasser, Christo and Jeanne-Claude, and Banksy.',
				male_prompt:
					'A distinguished male in a living plant, greenery and flower suit, standing in an urban environment with modern fashion statements. Nature-inspired attire with an exotic vibrancy and an eco-friendly approach. A thought-provoking and expressive work of art inspired by Hundertwasser, Christo and Jeanne-Claude, and Banksy.',
				images: ['https://replicate.delivery/pbxt/ontkaeeq0jsy00FQc66kpbp07VAgMovEHq5qo41ltUs82prQA/out-0.png'],
			},
			'long hair portrait': {
				summary: 'long hair portrait',
				camera: 'No camera information provided.',
				tags: ['portrait', 'casual', 'youthful', 'straight hair', 'dominant'],
				female_prompt: 'Highly attractive 20-year-old woman with silky light brown hair, very long straight hair, dominant look and piercing eyes wearing casual clothing and a cute pose. ',
				male_prompt: 'Attractive 20-year-old man with thick dark brown hair, long straight hair, intense gaze and piercing eyes wearing casual clothing and a confident stance. ',
				images: ['https://replicate.delivery/pbxt/sU7csNPFhwZBJZNiMNdwPkaCdSSnDq1Xgz06lTRG6Lwte0VIA/out-0.png'],
			},
			'luck queen king': {
				summary: 'luck queen king',
				camera: '',
				tags: ['portrait', 'fantasy', 'lucky', 'wealthy', 'magical'],
				female_prompt:
					'Lucky Queen of Fortune and Happiness, with shamrock leaves and a dazzling aura of abundance. Mystical, whimsical, charming and captivating portrait with vivid colors, incredible detail and intricate textures. Sensual expression and graceful poise.',
				male_prompt: 'King of Luck, with vibrant green shamrocks signifying wealth and happiness. Captivating portrait with intense colors, incredible detail, intricate textures and an exuberant spirit. Alluring expression and remarkable poise.',
				images: ['https://replicate.delivery/pbxt/vAkJU64Hye1HVqOX4Hk5mbDDVH21a5wPR7TfkvN7tUl74prQA/out-0.png'],
			},
			'lucky portrait': {
				summary: 'lucky portrait',
				camera: '',
				tags: ['portrait', 'black & white', 'clovers', 'shamrock', 'halftones'],
				female_prompt: 'Striking portrait of a beautiful woman featuring subtle clovers and a shamrock, with emerald eyes and ruby lips. Expertly crafted in high contrast black and white tones with immaculate halftones and vivid #009e60 accents. ',
				male_prompt: 'Handsome portrait of a man featuring subtle clovers and a shamrock, with emerald eyes and ruby lips. Expertly crafted in high contrast black and white tones with immaculate halftones and vivid #009e60 accents.',
				images: ['https://replicate.delivery/pbxt/eA09Y8RTv034FS8ed6igE0e6uXkhqNkCmfst0GfRIE1mrPdFC/out-0.png'],
			},
			'luminescent singing': {
				summary: 'luminescent singing',
				camera: '',
				tags: ['singing', 'botanical', 'holographic', 'fashion', 'rainbow'],
				female_prompt:
					'Joyful female singing into the rainbow, botanical academia, holographic and metallic fashion with Karrueche, Lisa Frank, and Pot of Gold elements. Shamrock accents and a smile radiating with the colors of the rainbow. In the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Majestic male singing into the rainbow, botanical academia, holographic and metallic fashion with Karrueche, Lisa Frank, and Pot of Gold elements. Shamrock accents and a smile radiating with the colors of the rainbow. In the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/GpDWoebG1iXmPSTa93ytiTZv0lRPHuQJMDfjB3Ww5XbS6prQA/out-0.png'],
			},
			'luxurious portrait': {
				summary: 'luxurious portrait',
				camera: 'Canon DSLR, f/2.8 exposure, 25mm lens',
				tags: ['Portrait', 'Fantasy', 'Foliage', 'Animals', 'Elegant'],
				female_prompt:
					'Perfectly beautiful portrait of a woman with flora and fauna, elegant textile drapery with ornate details, photorealistic wide view around a photorealistic matte painting, knowledge of anatomy, masterful blend of pencil and watercolor on paper, golden ratio, elite luxury concept art, extremely neat, general and intricate details, grayscale color gradation with few color shifts. Dynamic composition, ultra resolution and cinematic extreme wide shot for hyperrealism. Digital art/painting/illustration and world made of light with soft lighting and extreme details.',
				male_prompt:
					'Handsome portrait of a man with foliage and majestic creatures framed by elegant textile drapery with ornate details. Photorealistic wide view around a photorealistic matte painting. Knowledge of anatomy along with masterful blend of pencils and watercolors on paper in golden ratio. Elite luxury concept art with extremely neat, general and intricate details. Grayscale color gradation with few color shifts for dynamic composition along with ultra resolution for cinematic extreme wide shot for hyperrealism. Digital art/painting/illustration in world made of light featuring soft lighting & extreme details.',
				images: ['https://replicate.delivery/pbxt/uHD5LcwsE1J8MV8re9P6Oxr2wLJFIiHFPrsnuIzef3egrnuCB/out-0.png'],
			},
			'luxury floral portrait': {
				summary: 'luxury floral portrait',
				camera: 'Canon DSLR, f/2.8 exposure, 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Perfectly beautiful portrait of a woman with flora and fauna, toned background with elegant textile drapery, ornate details and photorealistic wide view. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Dashing portrait of a man with foliage and majestic creatures, sophisticated backdrop with ornate drapery and decorative details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/dZEUeeTGpxreSIzqN1s7nOQqkJfhKWXVeKhnQeUqeJ2qd90VIA/out-0.png'],
			},
			globe: {
				summary: 'globe',
				camera: 'Photo effect',
				tags: ['luxury', 'globe', 'hypermaximalism', 'photo-effect', 'abstract', 'ultra-detailed'],
				female_prompt: 'Exquisite luxury woman sitting on the world globe, photo-realistic hypermaximalism, vivid colors and abstract details, ultra-detailed with selection of lighting and photo effects. Superb composition with maximum realism.',
				male_prompt: 'Gorgeous luxury man sitting atop the world globe, photo-realistic hypermaximalism, vivid colors and abstract details, ultra-detailed with selection of lighting and photo effects. Superb composition with maximum realism.',
				images: ['https://replicate.delivery/pbxt/6JyTH2mayqrxINXjzjHQmuQXikqJiMX0fZ86LTeBGURb6prQA/out-0.png'],
			},
			'luxury host': {
				summary: 'luxury host',
				camera: 'Cinematic lighting, photo realistic quality',
				tags: ['minimalism', 'luxury', 'hosting', 'reality show', 'photorealistic'],
				female_prompt:
					'Beautiful 35 year old woman hosting a reality show in a luxury fragrance and scent shop in London, smiling enthusiastically surrounded by a myriad of products and minimalistic white backdrop. Cinematic lighting creates a photorealistic feel, highlighting her gentle features and dark hair. ',
				male_prompt:
					'Handsome 35 year old man hosting a reality show in a luxury fragrance and scent shop in London, smiling enthusiastically surrounded by a myriad of products and minimalistic white backdrop. Cinematic lighting creates a photorealistic feel, highlighting his strong features and dark hair. ',
				images: ['https://replicate.delivery/pbxt/2OCO9pOJLjqlHFLyEtH8JexaXeNo730ecRKEElAUVVOV4TXhA/out-0.png'],
			},
			'luxury portrait': {
				summary: 'luxury portrait',
				camera: 'Canon DSLR f/2.8 long exposure 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Exquisite portrait of a woman with majestic flora and fauna, toned background with ornate drapery and intricate details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. Cinematic composition, ultra resolution, digital art with Maya rendering, world made of light.',
				male_prompt:
					'Striking portrait of a man surrounded by lush foliage and soaring creatures. Sophisticated backdrop with ornate drapery and decorative details. Masterful blend of pencils and watercolors, golden ratio, hyperrealism quality, soft lighting, and extreme details. Cinematic composition, ultra resolution, digital art with Maya rendering for a world made of light.',
				images: ['https://replicate.delivery/pbxt/fprfx6bSXNhobk5nfTHD4Ewl9S3iNe1Wn1vlXQFBIjqbdnuCB/out-0.png'],
			},
			'madrid street portrait': {
				summary: 'madrid street portrait',
				camera: 'Leica M6, 50mm lens, f/4 aperture',
				tags: ['portrait', 'street', 'facial', 'emotive', 'cinematic'],
				female_prompt:
					"Portrait of a beautiful brunette woman in her mid 30's, standing in a street of Madrid with an angry expression, giving the finger and her strong facial features are captured in an epic cinematic shot. Accent lighting and global illumination creates an atmospheric feel, masterfully shot on Leica M6, 50mm lens with F/4 aperture.",
				male_prompt:
					"Handsome portrait of a man in his mid 30's standing in a street of Madrid with a tough expression, hand on hip and his strong facial features are captured in an epic cinematic shot. Accent lighting adds depth and global illumination reveals fine details, masterfully shot on Leica M6, 50mm lens with F/4 aperture.",
				images: ['https://replicate.delivery/pbxt/TGdj3ecILxyDIiXAR8sFjQjEfH0CL00DhxSq05zOQRcA3prQA/out-0.png'],
			},
			'magical portrait': {
				summary: 'magical portrait',
				camera: 'Hasselblad H6D-400C f/5.6',
				tags: ['portrait', 'fantasy', 'otherworldly', 'glitch art', 'neoclassical'],
				female_prompt:
					'Beautiful Dutch woman in feathers and a plushy tank top standing atop a transparent balloon, with feather sneakers, power posing at dusk. Teardrops in her eye, eye reflections, warm afternoon light and a backlit short hair. Realistic detailed retina looking into the camera with glitch art neon kawaii jeans, water pouring out and smearing photography. A handwoven blanket of yellow otherworldy texture and intricate blue decorative texture over neoclassical colours. Fibonacci composition, sfx, cinematic lighting and octane render in 4K. ',
				male_prompt:
					'Handsome Dutch man standing atop a transparent balloon, with feather sneakers, powerful pose at dusk. Teardrops in his eye, eye reflections, warm afternoon light and a backlit short hair. Realistic detailed retina looking into the camera with glitch art neon kawaii jeans, water pouring out and smearing photography. A handwoven blanket of yellow otherworldy texture and intricate blue decorative texture over neoclassical colours. Fibonacci composition, sfx, cinematic lighting and octane render in 4K.',
				images: ['https://replicate.delivery/pbxt/l26sqO6hMw7ZBpYInP65XNdHnB7VXW92r6QxuOuKzckwd6KE/out-0.png'],
			},
			'magical wizard': {
				summary: 'magical wizard',
				camera: 'natural lighting',
				tags: ['portrait', 'fantasy', 'elderly', 'magic', 'clutter'],
				female_prompt:
					'Charming close-up portrait of a mysterious and bewitched old woman wizard in her magical study, surrounded by potion ingredients and cauldrons, overflowing with enchantment-filled clutter. Mixed Norman Rockwell, Coby Whitmore, and J. C. Leyendecker style maximalism, natural lighting, dynamic composition with a key visual and a cinematic quality. ',
				male_prompt:
					'Striking close-up portrait of a curious and enchanted old man wizard in his magical study, surrounded by potion ingredients and cauldrons, overflowing with enchantment-filled clutter. Mixed Norman Rockwell, Coby Whitmore, and J. C. Leyendecker style maximalism, natural lighting, dynamic composition with a key visual and a cinematic quality. ',
				images: ['https://replicate.delivery/pbxt/fCXvoM2Aza2xKqUOwO0Q0JcnwSXcL1JJNLZUhZMbFnwf7prQA/out-0.png'],
			},
			'magritte portrait': {
				summary: 'magritte portrait',
				camera: 'Digital Painting',
				tags: ['surrealism', 'portrait', 'dreamscape', 'digital painting', 'mysterious'],
				female_prompt: 'Beautiful portrait of a woman with surrealist landscape, inspired by René Magritte, imaginative objects, dreamlike atmosphere, mysterious aura, digital painting, Vladimir Kush.',
				male_prompt: 'Handsome portrait of a man with floating, disembodied eyes, gravity-defying objects, bizarre juxtapositions and dreamlike atmosphere. Mysterious aura with digital painting inspired by the surrealist art of Vladimir Kush.',
				images: ['https://replicate.delivery/pbxt/CalMWlMuWR5hBlvKPEojqitOrKM7TDwwWkg0TMxc86oQf0VIA/out-0.png'],
			},
			'majestic anime': {
				summary: 'majestic anime',
				camera: 'Ilya Kuvshinov',
				tags: ['anime', 'low-angle', 'leather', 'alien', 'radiant'],
				female_prompt:
					'Majestic low angle shot of an exquisite woman wearing a black latex catsuit in an ancient alien spaceship full of melting candles. Radiant character design made from glossy pearlescent anime and shiny detail, with low angle panoramic view. ',
				male_prompt:
					'Majestic low angle shot of a handsome man wearing a black leather catsuit in an ancient alien spaceship full of melting candles. Radiant character design made from glossy pearlescent anime and shiny detail, with low angle panoramic view. ',
				images: ['https://replicate.delivery/pbxt/WeY3fugL9krFJUf0cY8qQiutS1cEC3r5ZWXmdd0sOiW7uTXhA/out-0.png'],
			},
			'man with car': {
				summary: 'man with car',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'vintage', 'classic'],
				female_prompt: 'Two strong and determined men with a vintage car, ready to embark on a journey. Realistic lighting and vivid colors, sharpened details, modern composition, and nostalgic atmosphere. ',
				male_prompt: 'Two brave and powerful men with a classic car, ready for an adventure. Realistic lighting and vivid colors, sharpened details, modern composition, and nostalgic atmosphere. ',
				images: ['https://replicate.delivery/pbxt/mBrMQZxdwYLOLBhcFG8Eo7NHudpizoHHlHTBVMYuVQEFf0VIA/out-0.png'],
			},
			"manara's cernunnos": {
				summary: "manara's cernunnos",
				camera: '',
				tags: ['illustration', 'fantasy', 'Cernunnos', 'animals', 'intense'],
				female_prompt: 'Stunning illustration of a Cernunnos woman with delicate features, striking silhouette, and an ethereal beauty. Inspired by the work of Milo Manara and featuring bold colors, intricate details, and an enchanting atmosphere. ',
				male_prompt: 'Handsome illustration of a Cernunnos man with intense expressions, dramatic body posture, and a timeless appeal. Inspired by the work of Milo Manara and featuring vivid colors, exquisite details, and an enigmatic aura. ',
				images: ['https://replicate.delivery/pbxt/euGJoGWgz1xsJKWcxaboreRgbhARSubm3ojVqqIfy2ffoPdFC/out-0.png'],
			},
			'mark ryden portrait': {
				summary: 'mark ryden portrait',
				camera: 'Highly Detailed',
				tags: ['portrait', 'art deco', 'velvet', 'rococo', 'unreal'],
				female_prompt:
					'Lush, photorealistic portrait of a woman with a style reminiscent of Mark Ryden and Klimt. Incredible detail with yellow and black velvet, art deco, white leather rococo furniture, surreal lighting and effects from the Unreal engine. ',
				male_prompt: 'Handsome, lifelike portrait of a man akin to the styles of Mark Ryden and Klimt. Incredible detail with yellow and black velvet, art deco, white leather rococo furniture, surreal lighting and effects from the Unreal engine. ',
				images: ['https://replicate.delivery/pbxt/bJeWm4zQCdy1Yi0MNSPWcHthbXx8fN0h87iheFHNqxQF2TXhA/out-0.png'],
			},
			'marvel spider-man': {
				summary: 'marvel spider-man',
				camera: '',
				tags: ['Superhero', 'Realism', 'Full Body', 'HDR', '8K'],
				female_prompt:
					'Stunning full body of Spider-Man from Marvel with HDR, DTM, full HD, 8K ultra detailed visuals. Superb realism capturing the essence of the character. Masterful use of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting and extreme details by Anna Dittmann and Stefan Gesell.',
				male_prompt:
					'Handsome full body of Spider-Man from Marvel with HDR, DTM, full HD, 8K ultra detailed visuals. Superb realism capturing the essence of the character. Masterful use of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting and extreme details by Helmet Newton.',
				images: ['https://replicate.delivery/pbxt/UPFCKNqVfLUzYyedNftfk4fB5Xp7LiF6fn7tPxEvR0VWMf0VIA/out-0.png'],
			},
			'masquerade portrait': {
				summary: 'masquerade portrait',
				camera: 'Low-angle shot',
				tags: ['character design', 'mask', 'vintage', 'art noveau', 'volumetric lighting'],
				female_prompt:
					'Beautiful auburn-haired woman with colorful Venetian mask, flirty full body pose, short concert dress, style inspired by Pino Daeni, Alberto Vargas and Loish and Artgerm. Low angle shot showcasing her feminine allure, beautiful face, art noveau design with matte painting background creating a vintage post card look. Highly detailed with finely detailed eyes and intricate details illuminated by volumetric lighting.',
				male_prompt:
					'Handsome man with colorful Venetian mask, striking complete-body pose, short concert dress in the style of Pino Daeni and Alberto Vargas and Loish and Artgerm. Low angle shot showcasing his masculine charm, character design face with art noveau details accompanied by a matte painting background providing a vintage post card feel. Highly detailed features including finely detailed eyes illuminated by volumetric lighting for an intensely realistic look.',
				images: ['https://replicate.delivery/pbxt/oTd4znxMZM74IZf2tYbsuAk19GfxJXmphRReE9y3kdHp4TXhA/out-0.png'],
			},
			'mathematical transformation': {
				summary: 'mathematical transformation',
				camera: '',
				tags: ['portrait', 'dramatic', 'math', 'tattoos', 'transformation'],
				female_prompt:
					'Dramatic dynamic close-up portrait of a woman with intricate π mathematical symbol tattoos, transforming into math equations. Intricate details and bold composition, balanced light and contrast. Utterly captivating scene of transformation and mystery.',
				male_prompt:
					'Dramatic dynamic close-up portrait of a man with intricate π mathematical symbol tattoos, transforming into math equations. Intricate details and bold composition, balanced light and contrast. Utterly captivating scene of transformation and mystery.',
				images: ['https://replicate.delivery/pbxt/k8eGi56Pf6pf4oomyeYOhYCLmqeYIBHZTo4Vp03zYFpOSPdFC/out-0.png'],
			},
			'matrix portrait': {
				summary: 'matrix portrait',
				camera: 'Canon DSLR f/2.8 exposure 25mm lens',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'elegant'],
				female_prompt:
					'Breathtaking portrait of a woman with flora and fauna, elegant textile drapery with ornate details. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. Dot matrix toned background with a photorealistic matte painting of air and water. Metamorphosis Insectorum Surinamensium Maria Sibylla Merian painting, Birds of America John James Audubon painting, Birds John Gould painting, Osamu Obi painting, Stephen Bauman painting, Ricardo Ferandez Ortega painting, John Singer Sargent painting and Alisa Shea’s knowledge of anatomy. Elite concept art with luxury touches for a general yet intricate artwork. ',
				male_prompt:
					'Magnificent portrait of a man with foliage and majestic creatures among an ornate backdrop. Masterful blend of pencil and watercolor, golden ratio composition for maximum realism. Hyperrealistic quality with grayscale color gradation and few color shifts for an impressive dynamic composition with ultra resolution. Cinematic wide shot illuminated by soft lighting for extreme details that make this award winning photo stand out.',
				images: ['https://replicate.delivery/pbxt/BDLeAkdn5kyZSCCqiXQRX8OVQDzwdq6G2wT121sADe0g4prQA/out-0.png'],
			},
			'matte silver portrait': {
				summary: 'matte silver portrait',
				camera: '35mm lens',
				tags: ['portrait', 'official', 'silver makeup', '35mm', 'closeup'],
				female_prompt:
					'Professional 35mm extreme closeup portrait of a woman with subtle silver makeup, dynamic composition and ultra resolution. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				male_prompt:
					'Professional 35mm extreme closeup portrait of a man with subtle silver makeup, dynamic composition and ultra resolution. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/TB1jNPoEcZIYAt7W1mCQS8hfViITSgETgaGIfe1jmLRbtTXhA/out-0.png'],
			},
			'mature fashion': {
				summary: 'mature fashion',
				camera: 'Sony A7R IV + Sony FE 85mm f/1.4 GM lens',
				tags: ['headshot', 'studio', 'fashion', 'mature', 'minimalistic'],
				female_prompt:
					'Mature female fashion model in her early fifties with a Nordic ethnicity and fair complexion, highlighted by platinum  and light brown hair. Defined jawline, high cheekbones, piercing blue eyes and arched eyebrows. Subtle smile that showcases even white teeth, minimalistic makeup with light pink lip color, natural foundation, and mascara. Wearing a plain white long-sleeved shirt that accentuates her collarbones and a simple silver pendant necklace. Confident, composed expression with head slightly tilted to the right, shoulders back with serene and tranquil posture. Captured in high-end studio with diffused lighting that highlights her facial features while creating soft gentle glow. Post-processed to enhance natural beauty of the model with subtle increase in contrast and brightness, warm golden tone and slight vignette added to edges for frame-like effect.',
				male_prompt:
					'Mature male fashion model in his early fifties with a Nordic ethnicity and fair complexion, highlighted by platinum  and light brown hair. Defined jawline, high cheekbones, piercing blue eyes and arched eyebrows. Subtle smile that showcases even white teeth, minimalistic makeup with light pink lip color, natural foundation, and mascara. Wearing a plain white long-sleeved shirt that accentuates his collarbones and a simple silver pendant necklace. Confident, composed expression with head slightly tilted to the right, shoulders back with serene and tranquil posture. Captured in high-end studio with diffused lighting that highlights his facial features while creating soft gentle glow. Post-processed to enhance natural beauty of the model with subtle increase in contrast and brightness, warm golden tone and slight vignette added to edges for frame-like effect.',
				images: ['https://replicate.delivery/pbxt/VNbZqHt1Vf3fIkcQ1LyOdFG9zeIwCsLpneUPU4qMVlSCunuCB/out-0.png'],
			},
			'mech anime': {
				summary: 'mech anime',
				camera: '',
				tags: ['anime', 'mech', 'space', 'futuristic', 'armored'],
				female_prompt: 'Anime woman wearing diamond mech halo armor, armed with laser rifle, mischievous impish smile. Surrounded by a large glowing π spaceship interior with vibrant colors, intricate detail and magical atmosphere. ',
				male_prompt: 'Anime man wearing diamond mech halo armor, armed with laser rifle, mischievous impish smile. Surrounded by a large glowing π spaceship interior with vibrant colors, intricate detail and magical atmosphere. ',
				images: ['https://replicate.delivery/pbxt/BYNFKZjrsfzkf01CCTfglj6l6Uc12h0ZeesDN56pEwyj5OdFC/out-0.png'],
			},
			'mech garage': {
				summary: 'mech garage',
				camera: '',
				tags: ['mechanic', 'futuristic', 'ambient', 'light', 'shadow'],
				female_prompt:
					'Award-winning artwork by Mike Mignola and Jérôme Comentale. Focused on a female mechanic dressed in blue jeans, white t-shirt, checkered open shirt, and a dirty baseball cap. She is welding on a tall, slender modern-looking mech standing in a futuristic cluttered garage. Amazing volumetric ambient light, dark eerie dreamy mystic atmosphere. Fabulous light and shadows with broken Dot Matrix printer in the foreground.',
				male_prompt:
					'Award-winning artwork by Mike Mignola and Jérôme Comentale. Focused on a male mechanic dressed in blue jeans, white t-shirt, checkered open shirt, and a dirty baseball cap. He is welding on a tall, slender modern-looking mech standing in a futuristic cluttered garage. Amazing volumetric ambient light, dark eerie dreamy mystic atmosphere. Fabulous light and shadows with broken Dot Matrix printer in the foreground.',
				images: ['https://replicate.delivery/pbxt/Q2bo2E7xvkocBt1K9jNyYAhCoDRtpbCUiPKYsqnwJai4d6KE/out-0.png'],
			},
			'mech welding': {
				summary: 'mech welding',
				camera: '',
				tags: ['mechanic', 'futuristic', 'ambient light', 'dreamy mystic', 'fabulous'],
				female_prompt:
					'Award-winning art by Mike Mignola and Jérôme Comentale, featuring a female mechanic dressed in blue jeans, white t-shirt, checkered open shirt, and a dirty baseball cap. She is welding on a tall, slender modern mech standing in a futuristic cluttered garage. Amazing volumetric ambient light creates an eerie and dreamy mystic atmosphere with fabulous light and shadows. Broken dot matrix printer in the foreground.',
				male_prompt:
					'Award-winning art by Mike Mignola and Jérôme Comentale, featuring a male mechanic dressed in blue jeans, white t-shirt, checkered open shirt, and a dirty baseball cap. He is welding on a tall, slender modern mech standing in a futuristic cluttered garage. Amazing volumetric ambient light creates an eerie and dreamy mystic atmosphere with fabulous light and shadows. Broken dot matrix printer in the foreground.',
				images: ['https://replicate.delivery/pbxt/28UPuEnnRp7hIlKVw1M1wBgXrpfT3RTA6ffx6r3UREBL5TXhA/out-0.png'],
			},
			'mecha goddess': {
				summary: 'mecha goddess',
				camera: '50mm lense, ultra wide angle lens, depth of field tilt blur shutter speed 1/1000 F/22 white balance 70mm lense DOF shutter speed 1/1000 F/22 white balance',
				tags: ['mecha', 'fantasy', 'manga', 'unreal engine', 'cinematic', 'photography'],
				female_prompt:
					'Russian Mecha Goddess of passion, desire, love and temptation, in an extravagant headpiece, with dynamic clothing and a manga-style pose. Unreal Engine cinematic color grading for a portrait photography effect. Hyper-detailed shot with 50mm lense, ultra-wide angle, depth of field and beautiful color-coded details. Insanely detailed and intricate photoshoot with 70mm lense and depth of field tilt blur, shutter speed 1/1000 and F/22 white balance. Super-resolution 32K ProPhoto RGB VR imagery with lonely good massive halfrear lighting, backlight natural lighting incandescent optical fiber moody cinematic studio soft volumetric contrejour accent global illumination ray traced shaders OpenGL GLSL post processing tone mapping CGI VFX SFX.',
				male_prompt:
					'Russian Mecha God of passion, desire, love and temptation, in an extravagant headpiece with dynamic clothing and a manga-style pose. Unreal Engine cinematic color grading for a portrait photography effect. Hyper-detailed shot with 50mm lense, ultra-wide angle, depth of field and beautiful color-coded details. Insanely detailed and intricate photoshoot with 70mm lense and depth of field tilt blur, shutter speed 1/1000 and F/22 white balance. Super-resolution 32K ProPhoto RGB VR imagery with lonely good massive halfrear lighting, backlight natural lighting incandescent optical fiber moody cinematic studio soft volumetric contrejour accent global illumination ray traced shaders OpenGL GLSL post processing tone mapping CGI VFX SFX.',
				images: ['https://replicate.delivery/pbxt/4eAl4JAOjjwmaihaosWCpaTPeNNUbZogWehciQfG495vnnuCB/out-0.png'],
			},
			'mechanic art': {
				summary: 'mechanic art',
				camera: '',
				tags: ['mechanic', 'futuristic', 'ambient_light', 'dark', 'mystic'],
				female_prompt:
					'Award-winning female mechanic art by Mike Mignola and Jérôme Comentale, dressed in blue jeans and a checkered shirt. She is welding on a tall, slender, modern looking mech in a cluttered garage. Amazing volumetric lighting with dark, eerie, dreamy mysticism. Fabulous light and shadows with broken dot matrix printers in the foreground.',
				male_prompt:
					'Award-winning male mechanic art by Mike Mignola and Jérôme Comentale, dressed in blue jeans and a checkered shirt. He is welding on a tall, slender, modern looking mech in a cluttered garage. Amazing volumetric lighting with dark, eerie, dreamy mysticism. Fabulous light and shadows with broken dot matrix printers in the foreground.',
				images: ['https://replicate.delivery/pbxt/xIF10FgAQdJjLdfGB1OfI8jP872zCyQ29zLpk9rvUTdr6prQA/out-0.png'],
			},
			'mechanic dreamy garage': {
				summary: 'mechanic dreamy garage',
				camera: '',
				tags: ['mechanic', 'futuristic', 'ambient light', 'dreamy', 'shadow'],
				female_prompt:
					'Award-winning art by Mike Mignola and Jérôme Comentale, featuring an ambitious female mechanic dressed in classic blue jeans, crisp white t-shirt, stylish checkered open shirt, and a worn baseball cap. She is welding on a tall and slender modern looking mech standing in a futuristic cluttered garage. Stunning volumetric ambient light creates a dark, eerie dreamy mystic atmosphere. Fabulous light and shadows with a broken dot matrix printer in the foreground.',
				male_prompt:
					'Award-winning art by Mike Mignola and Jérôme Comentale, featuring an ambitious male mechanic dressed in classic blue jeans, crisp white t-shirt, stylish checkered open shirt, and a worn baseball cap. He is welding on a tall and slender modern looking mech standing in a futuristic cluttered garage. Stunning volumetric ambient light creates a dark, eerie dreamy mystic atmosphere. Fabulous light and shadows with a broken dot matrix printer in the foreground.',
				images: ['https://replicate.delivery/pbxt/nebzg37eieZDXppjh3w0pzNUkvgfpGscB8cmBA5fiOoyoPdFC/out-0.png'],
			},
			'mechanic garage': {
				summary: 'mechanic garage',
				camera: '',
				tags: ['mechanic', 'futuristic', 'ambient light', 'eerie', 'shadows'],
				female_prompt:
					'Award-winning artwork by Mike Mignola and Jérôme Comentale featuring a female mechanic in blue jeans and a white t-shirt with a checkered open shirt and a worn baseball cap. She is welding on a sleek, modern mech in the middle of a cluttered yet futuristic garage. Stunning volumetric ambient light, dark eerie dreaminess, fabulous light and shadows, broken dot matrix printer in the foreground.',
				male_prompt:
					'Award-winning artwork by Mike Mignola and Jérôme Comentale featuring a male mechanic in blue jeans and a white t-shirt with a checkered open shirt and a worn baseball cap. He is welding on a sleek, modern mech in the middle of a cluttered yet futuristic garage. Stunning volumetric ambient light, dark eerie dreaminess, fabulous light and shadows, broken dot matrix printer in the foreground.',
				images: ['https://replicate.delivery/pbxt/21qsm0PtVJ7jOBHT329mXD2wwsbbzlDSPeatffTSM7lG0TXhA/out-0.png'],
			},
			'mechanic portrait': {
				summary: 'mechanic portrait',
				camera: 'unknown',
				tags: ['portrait', 'mechanic', 'futuristic', 'light & shadow', 'robot'],
				female_prompt:
					'Award winning art of a female mechanic, dressed in blue jeans and a checkered open shirt with a baseball cap, sitting on a stool and soldering cables to a tall, modern-looking humanoid robot in a futuristic garage. Ambient volumetric lighting creates an eerie, dream-like atmosphere with amazing light and shadows. Dot matrix printer in the foreground. ',
				male_prompt:
					'Award winning art of a male mechanic, dressed in blue jeans and a checkered open shirt with a baseball cap, sitting on a stool and soldering cables to a tall, modern-looking humanoid robot in a futuristic garage. Ambient volumetric lighting creates an eerie, dream-like atmosphere with amazing light and shadows. Dot matrix printer in the foreground.',
				images: ['https://replicate.delivery/pbxt/gIYf2V3loxSQDKWgm6b5fKmD2eu9gTOT2rxqIJj77Tad3TXhA/out-0.png'],
			},
			'mechanic scene': {
				summary: 'mechanic scene',
				camera: '',
				tags: ['mechanic', 'futuristic', 'cluttered', 'ambient', 'nightmarish'],
				female_prompt:
					'Award-winning art by Mike Mignola and Jérôme Comentale featuring a female mechanic dressed in blue jeans, white t-shirt, checkered open shirt and a dirty baseball cap. She is welding on a tall slender modern looking mech standing in a futuristic cluttered garage. Amazing volumetric ambient light with dark, eerie, dreamy mystic vibes. Fabulous light and shadows with a broken dot matrix printer in the foreground.',
				male_prompt:
					'Award-winning art by Mike Mignola and Jérôme Comentale featuring a male mechanic dressed in blue jeans, white t-shirt, checkered open shirt and a dirty baseball cap. He is welding on a tall slender modern looking mech standing in a futuristic cluttered garage. Amazing volumetric ambient light with dark, eerie, dreamy mystic vibes. Fabulous light and shadows with a broken dot matrix printer in the foreground.',
				images: ['https://replicate.delivery/pbxt/immgNkrFpVaiCpBnIbZVsm1izxpoe1z0eZ9ngrTtbE4K8prQA/out-0.png'],
			},
			'medieval fantasy': {
				summary: 'medieval fantasy',
				camera: '',
				tags: ['medieval', 'fantasy', 'peasant', 'house', 'mystical'],
				female_prompt:
					'Charming medieval peasant woman wearing fantasy peasant clothes, mysterious and dreamlike atmosphere in the house. Captivating composition of traditional elements with rustic textures, royal coloring, hazy shadows and delicate details. ',
				male_prompt:
					'Handsome medieval peasant man wearing fantasy peasant clothes, mysterious and dreamlike atmosphere in the house. Captivating composition of traditional elements with rustic textures, royal coloring, hazy shadows and delicate details. ',
				images: ['https://replicate.delivery/pbxt/pCmL1olDhx4oGtgZuN6OulSV7e1f63OY7Ejjpnqz1gYX5prQA/out-0.png'],
			},
			'medieval fashion show': {
				summary: 'medieval fashion show',
				camera: '',
				tags: ['catwalk', 'medieval', 'fashion show', 'Wilton Diptych', '1238'],
				female_prompt: 'Vibrant female models on the catwalk, wearing authentic medieval fashion in a spectacular showcase. Blast from the past inspired by Wilton Diptych, balanced composition, romantic lighting and exquisite details. ',
				male_prompt: 'Handsome male models on the catwalk, wearing classic medieval fashion in a spectacular showcase. Blast from the past inspired by Wilton Diptych, balanced composition, romantic lighting and exquisite details. ',
				images: ['https://replicate.delivery/pbxt/fR7N2IeTWWoyb0WYZxx1IPB7IpF7KMHAMLFUfgHgTFnVuTXhA/out-0.png'],
			},
			'medieval peasant': {
				summary: 'medieval peasant',
				camera: '',
				tags: ['portrait', 'fantasy', 'medieval', 'peasant', 'mystical'],
				female_prompt: 'Charming medieval peasant woman, wearing fantasy clothes in a mysterious home, surreal and dreamlike atmosphere. Sublime fabric textures, vibrant natural colors, and intricate details. Magical ambiance and subtle lighting.',
				male_prompt: 'Handsome medieval peasant man, wearing fantasy clothing in a mystical home, surreal and dreamlike atmosphere. Sublime fabric textures, vibrant natural colors, and intricate details. Magical ambiance and subtle lighting.',
				images: ['https://replicate.delivery/pbxt/fUsiacl6GAT1QKbTERji3IZ6nKRzKNSl4Cve8u4yoAzr7prQA/out-0.png'],
			},
			'mermaid underwater': {
				summary: 'mermaid underwater',
				camera: '',
				tags: ['underwater', 'jewellery', 'fish', 'volumetric lighting', 'realism'],
				female_prompt:
					'Stunning female mermaid swimming in the clear ocean depths, adorned with precious jewellery crafted from shells. Various sea creatures dance around her, vibrancy and dynamic shimmering of the water, volumetric lighting and cinematic realism. ',
				male_prompt:
					'Handsome male merman swimming in the pristine ocean depths, adorned with precious jewellery crafted from shells. Various sea creatures swim around him, vividness and dynamic glimmer of the water, volumetric lighting and cinematic realism. ',
				images: ['https://replicate.delivery/pbxt/zmA9rRZ2QEaWBx7m9lK5NJKE4mdbbjpiN3L8H2lAMSeG90VIA/out-0.png'],
			},
			'metallic fashion portrait': {
				summary: 'metallic fashion portrait',
				camera: '',
				tags: ['portrait', 'botanical', 'academia', 'fashion', 'holographic'],
				female_prompt:
					'Beautiful female with botanical academia, Karrueche, Lisa frank and qCernunnos fashion, wearing moose antlers and holographic metallic makeup, smiling into the rainbow in the style of James Jean and Alberto Seveso. Her expression is one of determination and strength.',
				male_prompt:
					'Handsome male with botanical academia, Karrueche, Lisa frank and qCernunnos fashion, wearing moose antlers and holographic metallic makeup, smiling into the rainbow in the style of James Jean and Alberto Seveso. His expression is one of determination and strength.',
				images: ['https://replicate.delivery/pbxt/R1j79fNI34RlXSSev1N6dYZuRMqVwijsIHliN2h4kvnv8prQA/out-0.png'],
			},
			'miles aldridge': {
				summary: 'miles aldridge',
				camera: '22mm lens DOF Tilt Blur Shutter Speed 1/1000 F/2.2 Shot on Film',
				tags: ['fashion', 'photography', 'supermodel', 'copper hair', 'long hair', 'editorial'],
				female_prompt:
					'Modern beauty and fashion photography of a beautiful copper-haired supermodel with long hair, style of Miles Aldridge. Editorial fashion photography with ultra photorealistic quality, impressive color grading, detailed face and skin texture. Professionally retouched and post-production, shot from a low angle with sharp focus, ultra-wide angle lens, depth of field effect, tilt blur, and shutter speed 1/1000. Perfect composition, golden rule and real film grain effect.',
				male_prompt:
					'Modern beauty and fashion photography of a handsome copper-haired supermodel with long hair, style of Miles Aldridge. Editorial fashion photography with ultra photorealistic quality, impressive color grading, detailed face and skin texture. Professionally retouched and post-production, shot from a low angle with sharp focus, ultra-wide angle lens, depth of field effect, tilt blur, and shutter speed 1/1000. Perfect composition, golden rule and real film grain effect.',
				images: ['https://replicate.delivery/pbxt/Bw6jMHs5F6pSDZIMjj0g1BMk4hhRtnsid6pwdeIfYHDb7prQA/out-0.png'],
			},
			'minimal cartoon': {
				summary: 'minimal cartoon',
				camera: '',
				tags: ['cartoon', 'illustration', 'happy', 'pattern', 'watercolor'],
				female_prompt:
					'Joyful cartoon illustration of a woman surrounded by abstract pattern, with teal soft colors and yellow blobs, 2D clean vector line, flat colors, art by Atey Ghailan and watercolor. Sophisticated and minimalistic yet whimsical artwork.',
				male_prompt:
					'Cheerful cartoon illustration of a man surrounded by abstract pattern, with teal soft colors and yellow blobs, 2D clean vector line, flat colors, art by Atey Ghailan and watercolor. Sophisticated and minimalistic yet whimsical artwork.',
				images: ['https://replicate.delivery/pbxt/LfIeHd7pMhvdREijqeZB2grT1rCaeL0H6UFIthu7iTWv1nuCB/out-0.png'],
			},
			'mining portrait': {
				summary: 'mining portrait',
				camera: '',
				tags: ['portrait', 'miner', 'dwarf', 'bold', 'square'],
				female_prompt: 'Beautiful red haired dwarf woman, mining rock and stone with a determined and tenacious expression. Earthy colors, powerful pose, and dynamic composition.',
				male_prompt: 'Handsome red haired dwarf man, mining rock and stone with a determined and focused expression. Rustic tones, powerful stance, and captivating composition.',
				images: ['https://replicate.delivery/pbxt/u6nHNWb74WZBDZrfMVimv0ceQLBbfCzmsfAJBLjGxoU7unuCB/out-0.png'],
			},
			'minotaur beauty': {
				summary: 'minotaur beauty',
				camera: 'DLSR',
				tags: ['portrait', 'fantasy', 'exotic', 'accessories', 'photorealism'],
				female_prompt:
					'Beautiful minotaur woman influencer, exotic features, piercing eyes, voluminous lashes, cascading tresses, exquisite horns bedecked with gold accessories, captivating gaze and soft lips. Perfectly photorealistic quality with DSLR camera. ',
				male_prompt: 'Handsome minotaur man influencer, exotic features, intense eyes, lush lashes, lustrous hair, exquisite horns adorned with golden jewelry. Captivating gaze and full lips. Perfectly photorealistic quality with DSLR camera. ',
				images: ['https://replicate.delivery/pbxt/5Cmu7mGITU4SO1KhMANfAxv8JbIZueHaLJdNs0wcA5Gq4prQA/out-0.png'],
			},
			'miss american pie': {
				summary: 'miss american pie',
				camera: '30 megapixel camera, 85 mm lens at f/8 ISO 100 and 1/125 shutter speed.',
				tags: ['portrait', 'official', 'award winning', 'small catchlight', 'facial symmetry'],
				female_prompt:
					'Miss American Pie - Close up portrait of beautiful woman with red and  hair, exquisite detail, award-winning photograph and high-sharpness. Masterful blend of diffuse backlighting, 8k resolution, facial symmetry, small catchlight and ultra-high resolution. Taken with 30 megapixel camera, 85 mm lens at f/8 ISO 100 and 1/125 shutter speed.',
				male_prompt:
					'Mr American Pie - Close up portrait of handsome man with red and  hair, exquisite detail, award-winning photograph and high-sharpness. Masterful blend of diffuse backlighting, 8k resolution, facial symmetry, small catchlight and ultra-high resolution. Taken with 30 megapixel camera, 85 mm lens at f/8 ISO 100 and 1/125 shutter speed.',
				images: ['https://replicate.delivery/pbxt/gfvgBYCwL83gCiSU6xdbDUscoZKC4jzyenJGYAc8JLLF5prQA/out-0.png'],
			},
			'miss american portrait': {
				summary: 'miss american portrait',
				camera: '30 megapixel 4K 85mm lens , F:8 ISO 100 Shutter Speed 1:125',
				tags: ['portrait', 'official', 'closeup', 'award-winning', 'symmetry'],
				female_prompt:
					'Miss American 🥧 gorgeous close up portrait of a stunning woman with red and  hair, exquisite detail and award-winning 8k resolution. Hyper sharpness, high symmetry, small catchlight, diffuse backlighting with 30 megapixels for extreme clarity and color gradation. Captured on an 85mm lens at f/8, ISO100 at 1/125 shutter speed.',
				male_prompt:
					'Handsome close up portrait of an attractive man with lush-colored hair, captivating detail and award-winning 8k resolution. Hyper sharpness, high symmetry, small catchlight, diffuse backlighting with 30 megapixels for extreme clarity and color gradation. Captured on an 85mm lens at f/8, ISO100 at 1/125 shutter speed.',
				images: ['https://replicate.delivery/pbxt/4iJvDgYnU451P9NAd3ukMGG8XNBnL7loAHhlZvchX1Ype0VIA/out-0.png'],
			},
			'miss american 🥧': {
				summary: 'miss american 🥧',
				camera: '30 megapixel camera with 85mm lens (f:8 aperture), ISO 100 at 1:125 shutter speed',
				tags: ['portrait', 'high resolution', 'facial symmetry', 'exquisite detail', 'red &  hair'],
				female_prompt:
					'Gorgeous close-up portrait of a beautiful woman with striking red and  hair. Exquisite detail, 30 megapixel, 4K resolution, 85 mm lens, sharp focus, f:8 aperture, low ISO 100, 1:125 shutter speed, subtle diffuse back-lighting and small catchlight. Award-winning photograph with high sharpness and facial symmetry for 8K quality.',
				male_prompt:
					'Handsome close-up portrait of a man with striking red and  hair. Exquisite detail, 30 megapixel, 4K resolution, 85 mm lens, sharp focus, f:8 aperture, low ISO 100, 1:125 shutter speed and subtle diffuse back-lighting. Award-winning photograph with high sharpness and facial symmetry for 8K quality.',
				images: ['https://replicate.delivery/pbxt/4THtoFfeyVu2fpMhnew3ld1LpJrDDFq1CYeRZfACfnfi26prQA/out-0.png'],
			},
			'miss american🥧': {
				summary: 'miss american🥧',
				camera: '30 Megapixel resolution & 4K Video capture capabilities with an 85mm lens for maximum sharpness; F:8 Aperture; ISO 100; Shutter Speed 1:125; Diffuse Backlighting.',
				tags: ['portrait', 'official', 'formal', 'high quality', 'diffuse lighting'],
				female_prompt:
					'Miss America 🥧 close-up portrait of a beautiful woman with red and  hair, exquisite detail, award-winning photograph with small catchlight in the eyes, high sharpness and facial symmetry. 30 megapixel resolution and 4k video capture capabilities with an 85mm lens for maximum sharpness, f:8 aperture, ISO 100, 1:125 shutter speed and diffused backlighting.',
				male_prompt:
					'Mr. America 🥧 close-up portrait of a handsome man with red and  hair, exquisite detail, award-winning photograph with small catchlight in the eyes, high sharpness and facial symmetry. 30 megapixel resolution and 4k video capture capabilities with an 85mm lens for maximum sharpness, f:8 aperture, ISO 100, 1:125 shutter speed and diffused backlighting.',
				images: ['https://replicate.delivery/pbxt/LDpO9pGf0iy1DyCDO0xDTdo0gYgYEzEaHA09QyubHb9e7prQA/out-0.png'],
			},
			'miss american🥧portrait': {
				summary: 'miss american🥧portrait',
				camera: '85mm lens, f:8 ISO 100 shutter speed 1:125',
				tags: ['portrait', 'official', 'formal', 'close up', 'exquisite'],
				female_prompt:
					'Miss American 🥧 close-up portrait of a beautiful woman with red and  hair, exquisite detail, sharp focus, high sharpness, facial symmetry. Masterful blend of 8K resolution and 30-megapixel technology. Diffuse backlighting to create a stunning ultra-high definition photograph with award winning quality. Small catchlight to create depth and contrast in the eyes.',
				male_prompt:
					'Handsome close-up portrait of a man with beautiful hair color. Exquisite detail, sharp focus, high sharpness, facial symmetry. Masterful blend of 8K resolution and 30-megapixel technology. Diffuse backlighting to create a stunning ultra-high definition photograph with award winning quality. Small catchlight to create depth and contrast in the eyes.',
				images: ['https://replicate.delivery/pbxt/KFfcmr7WdHQYYCvpH5gqqt6OGugkGcQO3djfzNLls2BS9prQA/out-0.png'],
			},
			'mixed media collage': {
				summary: 'mixed media collage',
				camera: '',
				tags: ['mixed media', 'decoupage', 'ascii', 'paper mache', 'vaporwave'],
				female_prompt:
					'Stunning mixed media art of decoupage collage with ascii and paper mache pastiche, designed by Gustav Klimt and Dave McKean, featuring a female Cernunnos falling into a vast vaporwave forest. Intricate details, bold colors and dynamic composition. ',
				male_prompt:
					'Impressive mixed media art of decoupage collage with ascii and paper mache pastiche, designed by Gustav Klimt and Dave McKean, featuring a male Cernunnos falling into a vast vaporwave forest. Intricate details, bold colors and dynamic composition. ',
				images: ['https://replicate.delivery/pbxt/CNzGI7igo8JFGtifOKj0uoPGseLEefsWXHOxn5UAcI0kjnuCB/out-0.png'],
			},
			'mk warrior': {
				summary: 'mk warrior',
				camera: '',
				tags: ['fighter', 'mortal kombat', 'anime', 'realism', 'muscles'],
				female_prompt: 'Mortal Kombat warrior with bright blue hair, grey skin, long muscular legs, and striking blue eyes. Big blue braid and tights, anime-style realism with hyper-detailed musculature. ',
				male_prompt: 'Mortal Kombat fighter with intimidating eyes, animated muscles and a bold hairstyle. Hyperrealistic details with anime style proportions and powerful pose. ',
				images: ['https://replicate.delivery/pbxt/TLPUmLlluypoLVeiYLWGug8O2Aho8asYIxGRmWslR4Fe5prQA/out-0.png'],
			},
			'modern cernunnos': {
				summary: 'modern cernunnos',
				camera: 'long hood sportscar',
				tags: ['portrait', 'modern', 'cernunnos', 'luxury', 'dramatic'],
				female_prompt:
					'A modern woman with Cernunnos symbols, on a mid life journey of self-discovery, driving a luxurious sportscar to empower her inner strength and courage. Creative use of colors, masterful blend of light and shadow, dramatic angle with sweeping curves and high performance details. ',
				male_prompt:
					'A contemporary man with Cernunnos symbols, on a mid life journey of self-discovery, driving a luxurious sportscar to boost his inner confidence and power. Creative use of colors, masterful blend of light and shadow, dramatic angle with sweeping curves and high performance details. ',
				images: ['https://replicate.delivery/pbxt/c6ftkwJnHbUiKy5sNs0TwN9f6jRNUOWDPGX2YZB1esBXtTXhA/out-0.png'],
			},
			'moebius epic': {
				summary: 'moebius epic',
				camera: 'Ultra HD 8K 16K 32K super resolution CGI',
				tags: ['futuristic', 'action', 'epic', 'CG', 'VFX'],
				female_prompt:
					'Futuristic Greek goddess entering Moebius, epic key visual, hyperspace running action scene, cinematic masterpiece with dazzling special effects, dynamic reflective surfaces and dramatic sci-fi lighting. Hyper-photorealistic 32K ultra-HD, hyper-detailed esoteric shrine of Dionysus in a data center with glowing neon tubes. Visionary cinematic photography with cinematic lightning and psychedelic high octane render. ',
				male_prompt:
					'Sleek futuristic Greek warrior entering Moebius, badass epic key visual, hyperspace running action scene, cinematic masterpiece with dazzling special effects, dynamic reflective surfaces and dramatic sci-fi lighting. Hyper-photorealistic 32K ultra-HD, hyper-detailed esoteric shrine of Dionysus in a data center with glowing neon tubes. Visionary cinematic photography with cinematic lightning and psychedelic high octane render. ',
				images: ['https://replicate.delivery/pbxt/jPAXdEKs2ezDPib5hswibRW0Tr1QTxlCnnjKMmx56chJ80VIA/out-0.png'],
			},
			'moebius scene': {
				summary: 'moebius scene',
				camera: 'UHD 8K 16K 32K Super Resolution CGI',
				tags: ['futuristic', 'epic', 'action', 'sci-fi', 'visual'],
				female_prompt:
					'High-tech futuristic Greek female entering Moebius, powerful epic key visual, blazing hyperspace running action scene, gigantic proportions, UHD 8k 16k 32k Super-Resolution CGI, visually stunning groundbreaking VFX, cinematic masterpiece, dazzling SFX, dynamic reflective surfaces, dramatic sci-fi cinematic lighting, lens flare and bloom lighting. Hyper-photorealistic 32k ultra-HD hyper-detailed esoteric shrine of Dionysus in a data center with glowing neon tubes for a visionary cinematic experience.',
				male_prompt:
					'High-tech futuristic Greek male entering Moebius, powerful epic key visual, blazing hyperspace running action scene, gigantic proportions, UHD 8k 16k 32k Super-Resolution CGI, visually stunning groundbreaking VFX, cinematic masterpiece, dazzling SFX, dynamic reflective surfaces, dramatic sci-fi cinematic lighting lens flare and bloom lighting. Hyper-photorealistic 32k ultra-HD hyper-detailed esoteric shrine of Dionysus in a data center with glowing neon tubes for a visionary cinematic experience.',
				images: ['https://replicate.delivery/pbxt/wEDRrnCVhKIIL1wolUGhzX9y8I5N2CZcd9CNixngsnKDf0VIA/out-0.png'],
			},
			'monica storm portrait': {
				summary: 'monica storm portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'full body', 'square'],
				female_prompt: 'Gorgeous Monica Storm, with her darkbrown long wavy hair, big green eyes and radiant complexion. Stunning beauty with an enchanting gaze and a captivating expression.',
				male_prompt: 'Handsome young man with darkbrown long wavy hair, big green eyes and a charming presence. Enchanting gaze and an alluring expression for capturing the moment.',
				images: ['https://replicate.delivery/pbxt/T07D3T4creWddC0DHZdbipYe7fTNWtt5KaRhu5LXhmQwvTXhA/out-0.png'],
			},
			'moody portrait': {
				summary: 'moody portrait',
				camera: 'Hasselblad digital camera, 8K resolution',
				tags: ['portrait', 'official', 'window', 'rainy', 'detail'],
				female_prompt:
					'Somber portrait of a woman looking through a window in rainy weather, melancholic mood in high-definition. Captured with Hasselblad digital camera, stunning 8K resolution, realistic skin tones and clean detailed eyes. Incredible detail of hair, natural skin and no makeup. ',
				male_prompt:
					'Grim portrait of a man looking through a window in rainy weather, moody atmosphere in high-definition. Captured with Hasselblad digital camera, stunning 8K resolution, realistic skin tones and clean detailed eyes. Incredible detail of hair and natural skin. ',
				images: ['https://replicate.delivery/pbxt/RrJVsg62XYJLBpGr5HQMIVRuNCiXZDkR0gTHupT2AZv8d6KE/out-0.png'],
			},
			'moose antlers': {
				summary: 'moose antlers',
				camera: '',
				tags: ['portrait', 'holographic', 'botanical', 'metallic', 'rainbow'],
				female_prompt:
					'Edgy portrait of a female with gritted teeth, botanical academia, Karrueche-style fashion, Lisa Frank-esque details, moose antlers, holographic accents, metallic elements and Qcernunnos style. Smiling into a rainbow of colors in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Moody portrait of a male with gritted teeth, botanical academia, Karrueche-style fashion, Lisa Frank-esque details, moose antlers, holographic accents, metallic elements and Qcernunnos style. Smiling into a rainbow of colors in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/nrJckRxioxpfZiWFmiAfoKs2g026n0Bm547qwGGfB76egnuCB/out-0.png'],
			},
			'moroccan tile art': {
				summary: 'moroccan tile art',
				camera: '',
				tags: ['environment', 'afrofuturism', 'tiles', 'god/goddess', 'vibrant'],
				female_prompt:
					'Stunning environment art of a woman as a goddess in vivid shades of yellow, coral pink and Moroccan tile. Afrofuturism style blend of Daniel F. Gerhartz, Keita Takahashi, Lucy Hardie and Tsutomu Nihei with sharp highlights and subtle shadows.',
				male_prompt:
					'Majestic environment art of a man as a god in vibrant hues of yellow, coral pink and Moroccan tile. Afrofuturism style blend of Daniel F. Gerhartz, Keita Takahashi, Lucy Hardie and Tsutomu Nihei with crisp highlights and delicate shadows.',
				images: ['https://replicate.delivery/pbxt/c4g8chTh7fRf70fzTiK2i2I1NTj1hvkrtbAfeVojn2NPVPdFC/out-0.png'],
			},
			'mortal kombat': {
				summary: 'mortal kombat',
				camera: '',
				tags: ['fighter', 'anime', 'realism', 'blue hair', 'grey skin'],
				female_prompt: 'Powerful female fighter with blue hair, grey skin and a big blue braid. Blue eyes, long legs and tights, muscled legs and muscles in an anime style with realistic details. ',
				male_prompt: 'Strong male fighter with blue hair, grey skin and a big blue braid. Blue eyes, long legs and tights, muscled legs and muscles in an anime style with realistic details. ',
				images: ['https://replicate.delivery/pbxt/iCdSo8BJZgpdMZyYUT79gBvgdQBTETRePJMZVyXijxCHeprQA/out-0.png'],
			},
			'mountain climb': {
				summary: 'mountain climb',
				camera: '',
				tags: ['adventure', 'mountain', 'red hair', 'exploration', 'outdoors'],
				female_prompt:
					'A Red Haired Woman Climbing in the Mountains, adventure and exploration, wilderness scene, powerful and unruly beauty. Stand out colors, grandiose landscape with strong lighting highlighting the adventurous journey. Masterful blend of realism and creativity.',
				male_prompt: 'A Red Haired Man scaling a rocky cliff in the mountains, exploring danger and beauty simultaneously. Grandiose landscape with strong contrast emphasizing this courageous journey. Masterful blend of realism and creativity.',
				images: ['https://replicate.delivery/pbxt/B11p5bvh83Z4Ol7OvQTKoOgmdsI2CbVG5ZZe9oBP9C3q80VIA/out-0.png'],
			},
			'mountain climber': {
				summary: 'mountain climber',
				camera: '',
				tags: ['mountains', 'redhead', 'climbing', 'daring', 'fantasy'],
				female_prompt:
					'A fiery-haired woman climbing in the majestic mountains, with a daring spirit and powerful gaze. Set against the backdrop of a dramatic landscape, the dynamic composition captures her courage and determination. A blend of realism and fantasy to create an awe-inspiring scene.',
				male_prompt:
					'A bold man scaling the great mountains, with bright red hair and an intense look. With a stunning backdrop that highlights his daring spirit, this image captures raw power and strength. The perfect balance between realism and fantasy creates an epic atmosphere.',
				images: ['https://replicate.delivery/pbxt/Bj7ntQnoPF4eCC9Gc7AlAfhaAgW4VJeJXbWXyexKtKoosnuCB/out-0.png'],
			},
			'mountain silhouette': {
				summary: 'mountain silhouette',
				camera: '',
				tags: ['silhouette', 'landscape', 'mountain', 'nostalgic', 'starry'],
				female_prompt: 'Silhouette of a woman standing atop a mountain, looking back into her past with nostalgia. Majestic landscape in the background, colorful sunset and distant stars illuminating the sky.',
				male_prompt: 'Silhouette of a man standing atop a mountain, looking back into his past with nostalgia. Majestic landscape in the background, colorful sunset and distant stars illuminating the sky.',
				images: ['https://replicate.delivery/pbxt/DbWlxTHADKpCFVwzbJMfKuD4goVNKiL6q2wteNg4SflayTXhA/out-0.png'],
			},
			'multicolor portrait': {
				summary: 'multicolor portrait',
				camera: 'Geof Darrow & Josan Gonzalez Collaboration',
				tags: ['portrait', 'close up', 'mystical', 'vibrant', 'detailed'],
				female_prompt:
					'Close-up of a woman with vibrant multicolored hair, piercing yellow eyes, and a shy yet determined smile. Artwork by masterful collaboration of Geof Darrow and Josan Gonzalez, vibrant colors, dreamlike strokes, exquisite detailing and mystical atmosphere.',
				male_prompt:
					'Close-up of a man with vivid multicolored hair, intense yellow eyes, and a timid yet resolute smile. Artwork by masterful collaboration of Geof Darrow and Josan Gonzalez, vibrant colors, dreamlike strokes, exquisite detailing and mystical atmosphere.',
				images: ['https://replicate.delivery/pbxt/LMxVczVatR5fYKt30LBNtkqitx8zfOwmYTEezI4ewv1kxnuCB/out-0.png'],
			},
			'multicolored portrait': {
				summary: 'multicolored portrait',
				camera: '',
				tags: ['portrait', 'colorful', 'unique', 'dreamy', 'vibrant'],
				female_prompt: 'Close up of a woman with short vibrant hair and yellow eyes, gentle smile and elegant posture. Unique portrait with dreamlike quality by Geof Darrow and Josan Gonzalez. ',
				male_prompt: 'Close up of a man with short vibrant hair and yellow eyes, gentle smile and elegant posture. Unique portrait with dreamlike quality by Geof Darrow and Josan Gonzalez. ',
				images: ['https://replicate.delivery/pbxt/8OA1WhMHfW0WVSiW8QP5Yhat85kGe8kU9JyP2xG25tdF7prQA/out-0.png'],
			},
			'myconid mushroom': {
				summary: 'myconid mushroom',
				camera: '',
				tags: ['illustration', 'mysterious', 'surreal', 'vibrant', 'unique'],
				female_prompt:
					"Beautiful illustration of a myconid mushroom woman, inspired by Michael Whelan, Shaun Tan and Roger Dean's artwork. Ethereal and mysterious visuals, surreal vibes and dreamy mood, vibrant colors and contrast, unique composition and intricate details.",
				male_prompt:
					"Handsome illustration of a myconid mushroom man, inspired by Michael Whelan, Shaun Tan and Roger Dean's artwork. Ethereal and mysterious visuals, surreal vibes and dreamy mood, vibrant colors and contrast, unique composition and intricate details.",
				images: ['https://replicate.delivery/pbxt/eJgtjaFk3TyMP6pMC3An2TlEVe0Ionuykj6rhwDrsWAj8prQA/out-0.png'],
			},
			'mysterious smoking portrait': {
				summary: 'mysterious smoking portrait',
				camera: '',
				tags: ['portrait', 'smoking', 'close up', '', 'freckled'],
				female_prompt: 'Close-up of a young woman with  hair, freckles, and blue eyes, holding a cigarette in her mouth in an alluring yet mysterious pose. Enhanced by the masterful art of Moebius and Katsuya Terada.',
				male_prompt: 'Close-up of a young man with  hair, freckles, and blue eyes, holding a cigarette in his mouth in an alluring yet mysterious pose. Enhanced by the masterful art of Moebius and Katsuya Terada.',
				images: ['https://replicate.delivery/pbxt/w1A4UeLZgEVGPSxuOvAjyi2FiC0GSa4mxff1A09Htu5mwTXhA/out-0.png'],
			},
			'mystery action': {
				summary: 'mystery action',
				camera: '',
				tags: ['adventure', 'mystery', 'action', 'forest', 'dynamic'],
				female_prompt:
					"Fierce action key visual of a female character on an epic adventure in the autumnal woods of Canada. Dramatic lighting and dynamic composition, sharp contrast between light and dark, with a distinct atmosphere of mystery and intrigue. 2022 Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera illustration.",
				male_prompt:
					"Mighty action key visual of a male character on an epic journey through the autumnal woods of Canada. Dramatic lighting and dynamic composition, sharp contrast between light and dark, with a distinct atmosphere of mystery and intrigue. 2022 Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera illustration.",
				images: ['https://replicate.delivery/pbxt/NqYBL0Kah37xMtaycWH6jzY97eaT8Sg4DpNv13bc3IDt80VIA/out-0.png'],
			},
			'mystery action visual': {
				summary: 'mystery action visual',
				camera: '',
				tags: ['action', 'adventure', 'full body', 'vibrant', 'exotic'],
				female_prompt:
					'Mysterious female character on an epic adventure at a hot summer beach, with vibrant colors and intense action. Character design inspired by "Nancy Drew: The Big Lie" by Anthony Del Col and Werther Dell\'Edera illustration. Exotic scenery of Zanzibar, Tanzania in 2022.',
				male_prompt:
					'Mysterious male character on an epic adventure at a hot summer beach, with vibrant colors and intense action. Character design inspired by "Nancy Drew: The Big Lie" by Anthony Del Col and Werther Dell\'Edera illustration. Exotic scenery of Zanzibar, Tanzania in 2022.',
				images: ['https://replicate.delivery/pbxt/YbidIlPHXOKkJVshBskSL4mpGGTxHB3RGFrSVuboLg9Pe0VIA/out-0.png'],
			},
			'mystery adventure': {
				summary: 'mystery adventure',
				camera: 'No camera information given',
				tags: ['forest', 'adventure', 'mystery', 'action', 'autumn'],
				female_prompt:
					'Mysterious and thrilling action key visual featuring a female character on an adventurous journey in a Georgia swamp forest during autumn. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, dynamic composition and ultra resolution. Capturing the excitement of the "Nancy Drew: The Big Lie" by Anthony Del Col and Werther Dell\'Edera illustration.',
				male_prompt:
					'Mysterious and thrilling action key visual featuring a male character on an adventurous journey in a Georgia swamp forest during autumn. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, dynamic composition and ultra resolution. Capturing the excitement of the "Nancy Drew: The Big Lie" by Anthony Del Col and Werther Dell\'Edera illustration.',
				images: ['https://replicate.delivery/pbxt/dUkvAuaTZ7rqNBgDwbpflDFTx8pdOuGwKakuzdLAYvrW80VIA/out-0.png'],
			},
			'mystery forest': {
				summary: 'mystery forest',
				camera: '',
				tags: ['action', 'forest', 'adventure', 'Canada', 'illustration'],
				female_prompt:
					"Mystery Matters epic adventure with a female protagonist. Venture through the colorful autumnal forest of Canada, encountering obstacles and discovering secrets. 2022 Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera illustration, dynamic composition and vibrant colors, creating an intriguing story.",
				male_prompt:
					"Mystery Matters epic expedition with a male protagonist. Explore the lush woods of Canada in autumn, encountering challenges and unraveling mysteries. 2022 Nancy Drew: The Big Lie by Anthony Del Col and Werther Dell'Edera illustration, dynamic composition and vibrant colors, creating an intriguing story.",
				images: ['https://replicate.delivery/pbxt/VxsWQBfKkNw1VCSgZyf2bGc6Q7yfxNKadVCoSomozBVy2TXhA/out-0.png'],
			},
			'mystery matters': {
				summary: 'mystery matters',
				camera: '',
				tags: ['action', 'forest', 'adventure', 'autumn', 'Georgia'],
				female_prompt:
					"Mysterious action key visual featuring a female character on a forested adventure in the autumnal Georgia swamp. Captivating and heroic composition with exceptional detail and realistic textures, vibrant autumnal colors and distinct lighting. 2022 Nancy Drew: The Big Lie illustration by Anthony Del Col and Werther Dell'Edera.",
				male_prompt:
					"Heroic action key visual featuring a male character on an epic adventure in the autumnal Georgia swamp. Captivating and awe-inspiring composition with exceptional detail and realistic textures, vibrant autumnal colors and distinct lighting. 2022 Nancy Drew: The Big Lie illustration by Anthony Del Col and Werther Dell'Edera.",
				images: ['https://replicate.delivery/pbxt/WU9h1GFffqmpbEY9BzeRZj0EmesQLQEkfBdSGy7RYlResd6KE/out-0.png'],
			},
			'mystery matters epic': {
				summary: 'mystery matters epic',
				camera: '',
				tags: ['mystery', 'action', 'character design', 'luxury', 'musical lounge'],
				female_prompt:
					'Mysterious epic action key visual of a female character in a luxurious estate. Stylish chic dress with a dramatic flair, Decadent Musical Lounge atmosphere, 2022 Lara Croft Nancy Drew: The Big Lie" by Anthony Del Col and Werther Dell\'Edera illustration. Captivatingly detailed character design, vibrant colors and textures, and fantastical scenery.',
				male_prompt:
					'Action-packed epic key visual of a male character in an extravagant estate. Daring chic dress with an intriguing mystique, Decadent Musical Lounge atmosphere, 2022 Lara Croft Nancy Drew: The Big Lie" by Anthony Del Col and Werther Dell\'Edera illustration. Alluringly detailed character design, intense colors and textures, and extraordinary scenery.',
				images: ['https://replicate.delivery/pbxt/sT6LdAODHXYiC5h04tBiYT6sGMhunACjzb9vqn4NMHpme0VIA/out-0.png'],
			},
			'mystic fantasy': {
				summary: 'mystic fantasy',
				camera: '',
				tags: ['portrait', 'fantasy', 'foliage', 'animals', 'dramatic'],
				female_prompt:
					'Captivating art by Monstress, Caravaggio. Focus on a single female fairy warrior in shining translucent silver armor facing off a horde of demonic monstrous creatures advancing on her below the canopy of giant shamrock leaves. She stands in a puddle of light from a ray of light coming through a crack in the green ceiling of leaves. Amazing volumetric ambient light with dark, eerie dreamy mysticism and fabulous light and shadows. Foreboding doom and tranquillity before the raging storm, inspired by Moebius and Frazetta.',
				male_prompt:
					'Mesmerizing art by Monstress, Caravaggio. Focus on a single male warrior in shining translucent silver armor as he faces off a horde of demonic monstrous creatures advancing on him below the canopy of giant shamrock leaves. He stands in a puddle of light from a ray of light coming through a crack in the green ceiling of leaves. Amazing volumetric ambient light with dark, eerie dreamy mysticism and fabulous light and shadows. Foreboding doom and tranquillity before the raging storm, inspired by Moebius and Frazetta.',
				images: ['https://replicate.delivery/pbxt/V1m5nLbFZmaeNqtGXNSPL6T3guUZRXYsLuq1ilQZq8My90VIA/out-0.png'],
			},
			'mystical portrait': {
				summary: 'mystical portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'dot matrix', 'pointillism', 'art nouveau'],
				female_prompt:
					'Slim decadent noble woman with beautiful proportions and large hips wearing iridescent red scales, adorned with a coral tiara and elaborate hairstyle. Dot matrix art, pointillism, seurat, signac, frazetta, brom style dark mystical fantasy portrait in the background of a sublime peacock tail filling the frame. Egon Schiele’s art nouveau inspired composition in Moebius’s Zdzisław Beksiński color palette.',
				male_prompt:
					'Skinny decadent noble man with beautiful proportions and large hips wearing vibrant red clothes of iridescent scales, adorned with a coral tiara and elaborate hairstyle. Dot matrix art, pointillism, seurat, signac, frazetta, brom style dark mystical fantasy portrait in the background of a sublime peacock tail filling the frame. Egon Schiele’s art nouveau inspired composition in Moebius’s Zdzisław Beksiński color palette.',
				images: ['https://replicate.delivery/pbxt/wE3ACmz08ZrxNZfBTtieHVlgZDVK0wQ8ARXePXCIuXmetnuCB/out-0.png'],
			},
			'mythical creature': {
				summary: 'mythical creature',
				camera: 'No camera information available.',
				tags: ['fantasy', 'creature', 'princess', 'royal', 'hyperrealistic'],
				female_prompt:
					'A fantastic creature with the head of a cow and the body of a woman adorned in luxurious princess attire. Stunning blend of hyperrealistic art and vivid colours, golden ratio, ultra resolution, soft lighting, and extreme details. ',
				male_prompt: 'A mythical creature with the head of a cow and the body of a man wearing royal vestments. Stunning blend of hyperrealistic art and vivid colours, golden ratio, ultra resolution, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/JeaCJ0ejBvv2p0bb3cgnYNdJy5HBPBBHW3Ne7Ks1JOf7gnuCB/out-0.png'],
			},
			'mythical rain portrait': {
				summary: 'mythical rain portrait',
				camera: 'Photograph hi-def camera',
				tags: ['fantasy', 'portrait', 'rainy', 'watery', 'dramatic'],
				female_prompt:
					'Beautiful young woman enchanted as Tinkerbell, drenched in torrential rain, soaking wet  hair cascading down her face, green strapless dress dripping with water, photorealistic hi-def camera capturing the moment. Dramatic composition with hyperrealistic quality and extreme details. ',
				male_prompt:
					'Handsome young man captivatingly dressed as a mythical character, drenched from torrential rain, wet hair clinging to his face, wearing a detailed costume dripping with water. Photorealistic hi-def camera capturing the moment. Dramatic composition with hyperrealistic quality and extreme details.',
				images: ['https://replicate.delivery/pbxt/SLNTdTSI5jbWLJJuolVaMdAcGOkfGgLLLYybAELfD0a57prQA/out-0.png'],
			},
			'nanotech runway': {
				summary: 'nanotech runway',
				camera: '',
				tags: ['anime', 'fashion', 'runway', 'cyberpunk', 'statement'],
				female_prompt:
					'Gorgeous proportional anime woman wearing avant garde nanotech cyberpunk fashion, crafted with the equation πr squared on the runway at Paris fashion week. Striking beauty with full lips and contrasting facial makeup. Unique and stylish statement piece.',
				male_prompt:
					'Handsome proportional anime man wearing avant garde nanotech cyberpunk fashion, crafted with the equation πr squared on the runway at Paris fashion week. Striking beauty with sharp features and contrasting facial makeup. Unique and stylish statement piece.',
				images: ['https://replicate.delivery/pbxt/qpx7gkukvmZTHZrCe9Yo03aSy7kieBIEN3Sfl8mHquPejnuCB/out-0.png'],
			},
			'napoleon portrait': {
				summary: 'napoleon portrait',
				camera: ' ',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'full body'],
				female_prompt:
					'Silver haired woman in a Napoleonic era uniform, detailed portrait of a dignified figure against a classical painting backdrop. Surrealistic composition with sharp contrast and vibrant colors, golden ratio, hyperrealistic quality, dramatic lighting, and extreme details.',
				male_prompt:
					'White haired man in Napoleonic era uniform, detailed portrait of a powerful figure against a classical painting backdrop. Surrealistic composition with sharp contrast and vibrant colors, golden ratio, hyperrealistic quality, dramatic lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/Sfi4OE7lvVRnbyEymbCuYvZEKqEtDobH80uvTOyApcKb80VIA/out-0.png'],
			},
			'nasa fashion': {
				summary: 'nasa fashion',
				camera: 'Fuji color film',
				tags: ['fashion', 'space', 'retro', 'colorful', 'vernissage'],
				female_prompt:
					'Sleek female fashion models wearing NASA Apollo spacesuits in the 1990s, surrounded by other guests at a vernissage. Captured with Fuji color film, this bold and iconic photo displays vivid colors, retro flair and precise detail.',
				male_prompt:
					'Dapper male fashion models wearing NASA Apollo spacesuits in the 1990s, surrounded by other guests at a vernissage. Captured with Fuji color film, this bold and iconic photo displays vivid colors, retro flair and precise detail.',
				images: ['https://replicate.delivery/pbxt/MUEgb0qV8kqbApDsFVicvNPPLitIOOVkPxlVUU9bEUXxd6KE/out-0.png'],
			},
			'nasa party': {
				summary: 'nasa party',
				camera: 'Fuji color film',
				tags: ['fashion', 'spacesuit', 'NASA', 'party', 'vernissage'],
				female_prompt:
					'Glamourous photo of female fashion models wearing NASA Apollo spacesuits at a vernissage. They are having a fun, animated conversation, looking content and engaged. Classic photo of the 90s or 2000s with other guests in the background. Captured on Fuji color film.',
				male_prompt:
					'Stylish photo of male fashion models wearing NASA Apollo spacesuits at a vernissage. They are having an enjoyable, spirited conversation, looking content and engaged. Timeless photo of the 90s or 2000s with other guests in the background. Recorded on Fuji color film.',
				images: ['https://replicate.delivery/pbxt/KU6ZYsZPPxLxDR4Cla4lhDG4fU2qckWy8mVjLYQmxqXw90VIA/out-0.png'],
			},
			'native american portrait': {
				summary: 'native american portrait',
				camera: '',
				tags: ['portrait', 'native american', 'headdress', 'batik', 'acrylic paint'],
				female_prompt:
					'Powerful portrait of a Native American warrior adorned with a feathered headdress, detailed batik with acrylic paint illustration, striking symbolic composition, and astounding level of detail. Colorful yet bold mix of dark and earthy tones, powerful facial features, and refined linework.',
				male_prompt:
					'Majestic portrait of a Native American warrior adorned with a feathered headdress, detailed batik with acrylic paint illustration, striking symbolic composition, and astounding level of detail. Colorful yet bold mix of dark and earthy tones, powerful facial features, and refined linework.',
				images: ['https://replicate.delivery/pbxt/Cq64s1oSUTo9JhB1cP5IWNY9PJnT0rhwQ4j85qx7c6Tme0VIA/out-0.png'],
			},
			'native warrior': {
				summary: 'native warrior',
				camera: '',
				tags: ['portrait', 'illustration', 'native american', 'batik', 'acrylic paint'],
				female_prompt:
					'Regal portrait of a Native American woman warrior, adorned in traditional headdress and batik patterned garments. Accurately detailed with acrylic paints to portray a strong and proud character, vibrant colors and earthy textures. ',
				male_prompt:
					'Noble portrait of a Native American man warrior, adorned in traditional headwear and batik patterned garments. Accurately detailed with acrylic paints to portray a strong and proud character, vibrant colors and earthy textures. ',
				images: ['https://replicate.delivery/pbxt/ZRJW7EradmpbMREPOzeZeeJ2DlQu4OOdwfvJYdbWJFXOinuCB/out-0.png'],
			},
			'native warrior portrait': {
				summary: 'native warrior portrait',
				camera: '',
				tags: ['portrait', 'native american', 'headdress', 'batik', 'acrylic'],
				female_prompt:
					'Powerful portrait of a Native American female warrior with a majestic headdress, intricate batik design with acrylic paint illustration, captivating color palette and highly detailed craftsmanship. Complex composition, traditional elements and superior details.',
				male_prompt:
					'Regal portrait of a Native American male warrior with a commanding headdress, intricate batik design with acrylic paint illustration, captivating color palette and highly detailed craftsmanship. Complex composition, traditional elements and superior details.',
				images: ['https://replicate.delivery/pbxt/2uDTet5smHX6YqZfDQa4wlgne7NVK35O6sYMfJstK0x0bnuCB/out-0.png'],
			},
			'natural portrait': {
				summary: 'natural portrait',
				camera: '',
				tags: ['portrait', 'natural', 'skinny', '8k', 'rustic'],
				female_prompt: 'Ethereal portrait of a slender woman in nature, gentle lighting and dreamy atmosphere, 8k resolution and hyper-realistic details. Captivating beauty with a captivating gaze, exquisite complexion and organic features.',
				male_prompt: 'Rugged portrait of a rugged man in nature, vibrant lighting and rustic atmosphere, 8k resolution and hyper-realistic details. Captivating presence with an intense stare, weathered features and natural charisma.',
				images: ['https://replicate.delivery/pbxt/huonhOt6tA6FPpafAnUeElMsJafLeMKx2c4wl3J2wsu5jnuCB/out-0.png'],
			},
			'neon astronaut': {
				summary: 'neon astronaut',
				camera: 'Milky Way photography by Babak Tafreshi and Diane Arbus',
				tags: ['astronaut', 'futuristic', 'neon', 'key visual', 'dynamic energy', 'editorial'],
				female_prompt:
					'Beautiful female astronaut in a futuristic neon spacesuit, lost in the mesmerizing night sky of the Milky Way. Stunning key visual art with dynamic energy and dot matrix style, illustrated with 6 vibrant colors. Highly stylized and editorial illustration inspired by Babak Tafreshi and Diane Arbus photography.',
				male_prompt:
					'Handsome male astronaut in a futuristic neon spacesuit, lost in the mesmerizing night sky of the Milky Way. Stunning key visual art with dynamic energy and dot matrix style, illustrated with 6 vibrant colors. Highly stylized and editorial illustration inspired by Babak Tafreshi and Diane Arbus photography.',
				images: ['https://replicate.delivery/pbxt/MpZZv7u8vexyTiMmfzzo6BqBzQG3UFbNU8xweJ0yB1e7xnuCB/out-0.png'],
			},
			'neon cyberpunk': {
				summary: 'neon cyberpunk',
				camera: 'HD/4K resolution',
				tags: ['portrait', 'neon', 'cyberpunk', 'photorealistic', '4k'],
				female_prompt: 'Young woman with long blond hair, gazing into the camera with a beautiful smile and neon black and neon red dress. Hyperrealistic 4K and HD resolution, cyberpunk background. ',
				male_prompt: 'Young man with stylish hair, looking in camera with a confident expression, wearing an eye-catching outfit of neon black and neon red. Surrealistic 4K and HD resolution, cyberpunk background.',
				images: ['https://replicate.delivery/pbxt/2tVYbdfxV1yOWSF6mvvqcphQjKwq0PqH8ANRw8C3GGfe4TXhA/out-0.png'],
			},
			'neon hair portrait': {
				summary: 'neon hair portrait',
				camera: 'unknown',
				tags: ['portrait', 'close up', 'colorful', 'surrealistic', 'innovative'],
				female_prompt: 'Intimate closeup of a woman with long pastel pink shamrock hair, dreamy and ethereal quality, composed by Kuvshinov Ilya. Luminous and glowing, captivatingly surrealistic lighting and innovative color palette. ',
				male_prompt: 'Intimate closeup of a man with vibrant neon green hair, dreamy and ethereal quality, composed by Kuvshinov Ilya. Luminous and glowing, captivatingly surrealistic lighting and innovative color palette.',
				images: ['https://replicate.delivery/pbxt/Ok4h5ueC4hzlHS7kSED43Eq5XYRfbEeJ2B72XUaN42utwTXhA/out-0.png'],
			},
			'neon portrait': {
				summary: 'neon portrait',
				camera: '4k/HD resolution',
				tags: ['portrait', 'cyberpunk', 'modern', 'neon', 'glasses'],
				female_prompt: 'Young woman with red long curly hair, glasses, looking in camera wearing a vibrant neon black and neon red dress. Hyperrealistic 4K/HD quality, beautiful smile, and cyberpunk background. ',
				male_prompt: 'Young man with red long curly hair, glasses, looking in camera wearing a vibrant neon black and neon red dress. Hyperrealistic 4K/HD quality, handsome smile, and cyberpunk background. ',
				images: ['https://replicate.delivery/pbxt/KFr6Ide5LWzbaaTSn9twcxUOicv6NDyQve30511986DG2prQA/out-0.png'],
			},
			'neon space': {
				summary: 'neon space',
				camera: 'Night sky photography by Babak Tafreshi and Diane Arbus',
				tags: ['space', 'futuristic', 'astronaut', 'dot-matrix', 'editorial', 'Milky way'],
				female_prompt:
					'Female astronaut with neon futuristic spacesuit lost in an endless cosmic space. High contrast dot matrix art of dynamic energy, key visual composition with six colors, editorial illustration and highly stylized imagery. Mesmerizing night sky photography of the Milky Way by Babak Tafreshi and Diane Arbus.',
				male_prompt:
					'Male astronaut with neon futuristic spacesuit lost in an endless cosmic space. High contrast dot matrix art of dynamic energy, key visual composition with six colors, editorial illustration and highly stylized imagery. Mesmerizing night sky photography of the Milky Way by Babak Tafreshi and Diane Arbus.',
				images: ['https://replicate.delivery/pbxt/VZ2sNidu9XosG9PUOyt6d6meosJgJTgEHV7RqqzseRne2TXhA/out-0.png'],
			},
			'neopunk portrait': {
				summary: 'neopunk portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'anime', 'neopunk', 'technological'],
				female_prompt:
					'Stunning portrait of a woman with perfect features, anime inspired art, hyper-realistic technology artifacts in the neopunk Tokyo style. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Handsome portrait of a man with perfect features, anime inspired art, hyper-realistic technology artifacts in the neopunk Tokyo style. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/4tognrKgr8aiDlzsb4OiCFeBdhUMdlBxerGITRhWhXUt6prQA/out-0.png'],
			},
			'nervous botanical fashion': {
				summary: 'nervous botanical fashion',
				camera: '',
				tags: ['botanical', 'holographic', 'metallic', 'fashion', 'rainbow'],
				female_prompt:
					"A young woman nervously gritting her teeth, surrounded by botanical academia and wearing Karrueche's fashion of antlers and holographic and metallic elements. Smiling into the rainbow, in the style of James Jean and Alberto Seveso.",
				male_prompt:
					"A young man nervously gritting his teeth, surrounded by botanical academia and wearing Karrueche's fashion of antlers and holographic and metallic elements. Smiling into the rainbow, in the style of James Jean and Alberto Seveso.",
				images: ['https://replicate.delivery/pbxt/VGe5RZ9UyUXEOCG6EVnkAIrmrv3MYz6ZYOTCw7JzDfDp5prQA/out-0.png'],
			},
			'nervous portrait': {
				summary: 'nervous portrait',
				camera: '',
				tags: ['portrait', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Beautiful female expression of nerves, gritting teeth, with a botanical academia background. Karrueche inspired fashion, Lisa frank and moose antlers holographic and metallic accents. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Handsome male expression of nerves, gritting teeth, with a botanical academia background. Qcernunnos inspired fashion, Lisa frank and moose antlers holographic and metallic accents. Smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/fNdqDEgQfTs9HUFyfC8R0zO0zCaShGLSekXhfWvcBj0V6OdFC/out-0.png'],
			},
			'nigerian story': {
				summary: 'nigerian story',
				camera: '',
				tags: ['storytelling', 'village', 'animated', 'nostalgic', 'magical'],
				female_prompt:
					'Graceful Nigerian elder telling a captivating story to 10 children under the moonlight, near a campfire in a rural village. Hayao Miyazaki inspired art style with warm colors, soft light, emotive characters and subtle ethereal elements.',
				male_prompt: 'Mature Nigerian man teaching 10 kids a fascinating story by the flickering firelight of a rural village. Hayao Miyazaki inspired art style with vibrant tones, gentle light, mesmerizing characters and delicate magical elements.',
				images: ['https://replicate.delivery/pbxt/ICyuzPqvGuo6O9SM8ePOF3mfu2IxMtIY3Lqt3gcu9WrY6prQA/out-0.png'],
			},
			'ninja shadow': {
				summary: 'ninja shadow',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'casting a spell', 'stealthy'],
				female_prompt:
					'Dark and mysterious woman ninja in the shadows, partially masked face focused on the ancient castle she must infiltrate. Preparing for her mission with heightened senses, stealthy movements and determined stance. A moment of contemplation before the deep dive into uncertainty.',
				male_prompt:
					'Powerful and determined man ninja in the shadows, partially masked face focused on the ancient castle he must infiltrate. Preparing for his mission with heightened senses, stealthy movements and formidable stance. A moment of contemplation before facing his fears.',
				images: ['https://replicate.delivery/pbxt/fScdL3365hQVNCbWLg45X31ZMsdhDtCC0jb5t2Q16iUj70VIA/out-0.png'],
			},
			'no mans land': {
				summary: 'no mans land',
				camera: '',
				tags: ['world war one', 'gloomy', 'landscape', 'photorealistic', 'desolate'],
				female_prompt:
					'A woman amidst the desolate wasteland, a somber atmosphere of war and destruction. Photorealistic quality depicting the tragic devastation, with a hauntingly beautiful scenery. Subtle tones of sorrow and despair, dark ambience and sharp details.',
				male_prompt:
					'A man amidst the desolate wasteland, a somber atmosphere of war and destruction. Photorealistic quality depicting the tragic devastation, with a hauntingly beautiful scenery. Subtle tones of sorrow and despair, dark ambience and sharp details.',
				images: ['https://replicate.delivery/pbxt/r8Aggj3LBmbDIFgUSRKt0mfr6LySJYO2W9N51ONtDTeH4prQA/out-0.png'],
			},
			'no mans land wwi': {
				summary: 'no mans land wwi',
				camera: '',
				tags: ['no mans land', 'WWI', 'atmospheric', 'photorealistic', 'desolation'],
				female_prompt: "Desolate and atmospheric no man's land, World War One era. Photorealistic feel, gloomy and sombre mood. Detailed textures, desaturated colors and deep shadows.",
				male_prompt: "Abandoned battlefields of World War One, desolate no man's land. Photorealistic feel, gloomy and sombre mood. Detailed textures, desaturated colors and deep shadows.",
				images: ['https://replicate.delivery/pbxt/IzY24PUE965qMhnHBNfe5jCBfPhkp0I8rhtLtLXHvdTk0TXhA/out-0.png'],
			},
			'noble fantasy': {
				summary: 'noble fantasy',
				camera: '',
				tags: ['portrait', 'fantasy', 'art nouveau', 'pointillism', 'dark'],
				female_prompt:
					'Skinny decadent noble woman with beautiful proportions and large hips in a stunning portrait of art nouveau, pointillism and seurat. Her fine red clothes of iridescent scales contrasts with the sublime peacock tail in the background. She is adorned with a coral tiara and an elaborate hairstyle for an elegant look.',
				male_prompt:
					'Handsome man in a stunning portrait of art nouveau, pointillism and seurat. His luxurious dark clothing contrasts with the sublime peacock tail in the background. He is adorned with a bejeweled crown and an elaborate hairstyle for a regal look.',
				images: ['https://replicate.delivery/pbxt/WfdsbopL5ftCfIZrgbH3uR7Siua7oPMwQDs8cZLfSOmomnuCB/out-0.png'],
			},
			'noble portrait': {
				summary: 'noble portrait',
				camera: 'none required',
				tags: ['portrait', 'fantasy', 'pointillism', 'art nouveau', 'dark'],
				female_prompt:
					'Astonishing portrait of a Skinny decadent noble woman with beautiful proportions and large hips in fine red clothes of iridescent scales, the skinny decadent noble woman with beautiful proportions and large hips wears a coral tiara and elaborate hairstyle, in the background we can see a sublime and multicolored peacock tail filling the frame. Crafted with dot matrix, pointillism, seurat, signac, frazetta, brom, Zdzisław Beksiński, Moebius, Egon Schiele and art nouveau technique. Dark mystical fantasy atmosphere with intense colors.',
				male_prompt:
					'Impressive portrait of a Slim decadent noble man with delicate features and slender figure in luxurious clothing of shimmering scales. The slim decadent noble man wears a golden crown on his head complimented by an intricate hairstyle. In the backdrop lies a magnificient rainbow colored peacock tail filling the frame. Crafted with dot matrix, pointillism, seurat, signac, frazetta, brom, Zdzisław Beksiński, Moebius ,Egon Schiele and art nouveau technique. Dark mystical fantasy atmosphere with vivid colors.',
				images: ['https://replicate.delivery/pbxt/A2mjhGrSpAJkNJbXZ4XS2JDtEqfYPYUqo5hc50s9snMw80VIA/out-0.png'],
			},
			'noir portrait': {
				summary: 'noir portrait',
				camera: '',
				tags: ['portrait', 'noir', 'pin-up', 'detective', 'red'],
				female_prompt:
					'Beautiful and mysterious woman in a red coat, noir detective style with a flirty pin-up art influence from renowned artists like Art Frahm, Alex Raymond and Clyde Caldwell. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Handsome and enigmatic man in a red coat, noir detective style inspired by renowned pin-up artists such as Art Frahm, Alex Raymond and Clyde Caldwell. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/zks3GHA5Xc4fJScQCDZsjHmeKGMpz5gxvobcao6LTODa5prQA/out-0.png'],
			},
			'nordic headshot': {
				summary: 'nordic headshot',
				camera: 'Sony a7R IV camera, Sony FE 85mm f/1.4 GM lens',
				tags: ['headshot', 'fashion', 'mature', 'model', 'studio'],
				female_prompt:
					'Mature Nordic female fashion model with fair complexion, stunning blue eyes and highlighted short curly hair. She wears a plain white shirt and silver necklace, composed with a confident posture and serene facial expression. Captured in high-end studio with diffused lighting, Sony a7R IV camera, Sony FE 85mm f/1.4 GM lens and post-processed to enhance her features and create a warm golden tone with a frame-like vignette effect.',
				male_prompt:
					'Mature Nordic male fashion model with fair complexion, striking blue eyes and highlighted short curly hair. He wears a plain white shirt and silver necklace, composed with a confident posture and serene facial expression. Captured in high-end studio with diffused lighting, Sony a7R IV camera, Sony FE 85mm f/1.4 GM lens and post-processed to enhance his features and create a warm golden tone with a frame-like vignette effect.',
				images: ['https://replicate.delivery/pbxt/8K0XkjO4i0bqMtwOsZFFfAofo59pCpOhfWi7E3RVWlXk4TXhA/out-0.png'],
			},
			'nordic portrait': {
				summary: 'nordic portrait',
				camera: '8K Resolution',
				tags: ['portrait', 'official', 'full body', 'realistic', 'graveyards'],
				female_prompt:
					'Striking Nordic woman with short hair walking among the graves, insanely detailed composition and textures, center-focus composition, ultra realistic 8k resolution and vibrant colors. Symmetrical framing and smooth gradients for a dreamy atmosphere',
				male_prompt:
					'Impressive Nordic man with short hair strolling among the graves, meticulously detailed composition and textures, center-focus composition, ultra realistic 8k resolution and vibrant colors. Symmetrical framing and smooth gradients for a dreamy atmosphere',
				images: ['https://replicate.delivery/pbxt/Pn7heWgk50SLfkX61VUXelfgeBU9BAwzM93GcPznrg3PFPdFC/out-0.png'],
			},
			'nouveau victorian': {
				summary: 'nouveau victorian',
				camera: '',
				tags: ['portrait', 'hyperrealism', 'trippy', 'surrealism', 'Victorian'],
				female_prompt:
					'Vibrant and surreal hyperrealistic portrait of a beautiful and aristocratic woman with Nouveau Victorian style, sly expression and friendly demeanor. Artistic blend of warm colors, dreamy atmosphere, intricate details, exceptional lighting and a perfect balance between realism and abstraction. ',
				male_prompt:
					'Vibrant and surreal hyperrealistic portrait of a handsome and aristocratic man with Nouveau Victorian style, sly expression and friendly demeanor. Artistic blend of warm colors, dreamy atmosphere, intricate details, exceptional lighting and a perfect balance between realism and abstraction. ',
				images: ['https://replicate.delivery/pbxt/Ns72r8PbyP7bGRTzFr0HUJ9d8lZMDPRX37aVn6vrMVNFf0VIA/out-0.png'],
			},
			'nyc twilight': {
				summary: 'nyc twilight',
				camera: 'Medium format film camera',
				tags: ['landscape', 'cityscape', 'city life', 'twilight', 'warm tones'],
				female_prompt:
					'A woman walking her dog through a vibrant New York City landscape at twilight, illuminated by soft diffused light of the setting sun. People passing her by in the background, shot on a medium format film camera with a warm tone.  ',
				male_prompt:
					'A man walking his dog through a vibrant New York City landscape at twilight, illuminated by soft diffused light of the setting sun. People passing him by in the background, shot on a medium format film camera with a warm tone.  ',
				images: ['https://replicate.delivery/pbxt/cmoOrZvom6JgLhzfgIBfQHoHmfMIy48khiaSLwtecARLjnuCB/out-0.png'],
			},
			'nz sunset': {
				summary: 'nz sunset',
				camera: '',
				tags: ['illustration', 'romantic', 'pastel', 'sunset', 'beach'],
				female_prompt:
					'Gorgeous illustration of a woman admiring the rosy sunset on a New Zealand beach road. Delightful pastel colors, dreamy atmosphere, romantic vibes, and naturalistic beauty. Soft lighting, exquisite details and peaceful composition.',
				male_prompt: 'Handsome illustration of a man watching the pink sunset on a New Zealand beach road. Magical pastel colors draped in the sky, dreamy atmosphere, and romantic vibes. Soft lighting, exquisite details and peaceful composition.',
				images: ['https://replicate.delivery/pbxt/HfPpRLTi0gwQEK7mxufenscekBFcWQ7IyTRWyblNzJ9uinuCB/out-0.png'],
			},
			'occult scene': {
				summary: 'occult scene',
				camera: '',
				tags: ['cinematic', 'occult', 'demon', 'medieval', 'square'],
				female_prompt:
					'Beautiful female with occult tattoos and spectacular demon wings, her eyes glowing red, standing in a cinematic side view of a medieval catacomb. Dynamic composition, gothic atmosphere and supernatural elements. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Handsome male with occult tattoos and impressive demonic wings, his eyes glowing red, standing in a cinematic side view of a medieval catacomb. Dynamic composition, dark atmosphere and supernatural elements. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/e3Ba1DxKiMz8aKK6DljD2StSkIsuwZAcJODlXCb8QzwC80VIA/out-0.png'],
			},
			'octopus pin-up': {
				summary: 'octopus pin-up',
				camera: '',
				tags: ['pin-up', 'alien', 'retro', 'futuristic', 'romantic'],
				female_prompt:
					'A captivating pin-up of an alien beauty, with deep purple skin, dressed in a retro-futuristic space suit. Her expressions are playful and flirty, full of romantic energy and allure. Her tentacles add an extra layer of mystique to her enchanting gaze.',
				male_prompt: 'A dashing pin-up of an alien stud, with deep purple skin, dressed in a retro-futuristic space suit. His expressions are suave and flirtatious, oozing with romantic charm and appeal. His tentacles give him a mysterious edge.',
				images: ['https://replicate.delivery/pbxt/DnRQ3mjrv24hExqC6fuNndegyv5yuOOSNDo0ERWu5wrW8prQA/out-0.png'],
			},
			'oil portrait': {
				summary: 'oil portrait',
				camera: '',
				tags: ['portrait', 'oil painting', 'vintage', 'traditional', 'elderly'],
				female_prompt: 'Distinguished portrait of a man with vintage charm. Traditional oil painting style, ornate details, and classic lighting. Perfect balance of light and dark hues along with subtle brush strokes. ',
				male_prompt: 'Distinguished portrait of a man with vintage charm. Traditional oil painting style, ornate details, and classic lighting. Perfect balance of light and dark hues along with subtle brush strokes. ',
				images: ['https://replicate.delivery/pbxt/j3k50UkX4O4kLVTQOijnQylI281Pp28ExzmTbMPAuoXZFBLE/seed-64860.png'],
			},
			'olympic diver': {
				summary: 'olympic diver',
				camera: '',
				tags: ['sport', 'diving', 'vector', 'minimalist', 'editorial'],
				female_prompt:
					'Stunning female olympic springboard diver diving into the water, minimalistic vector painting of astounding beauty, key visual, 3 colors, editorial illustration with highly artistic expression. Captivating composition and masterful technique showing grace, strength and skill.',
				male_prompt:
					'Handsome male olympic springboard diver diving into the water, minimalistic vector painting of astounding beauty, key visual, 3 colors, editorial illustration with highly artistic expression. Captivating composition and masterful technique showing grace, strength and skill.',
				images: ['https://replicate.delivery/pbxt/6b1rgenpvqQtTqMWdqbcPoE4LtHc7DIuP83h4730mQbHeprQA/out-0.png'],
			},
			'olympic diving': {
				summary: 'olympic diving',
				camera: '',
				tags: ['sport', 'diving', 'illustration', 'minimalist', 'editorial'],
				female_prompt: 'Elegant female olympic springboard diver executing an acrobatic dive, minimalistic vector painting of astounding beauty, captivating key visual, vibrant three-color palette, editorial illustration with high artistic merit. ',
				male_prompt: 'Handsome male olympic springboard diver executing an acrobatic dive, minimalistic vector painting of astounding beauty, captivating key visual, vibrant three-color palette, editorial illustration with high artistic merit. ',
				images: ['https://replicate.delivery/pbxt/jnopreCfIpuIt0dTUDQEAfhRHWk1kZJdTTE3fSLg31foaPdFC/out-0.png'],
			},
			'opalescent portrait': {
				summary: 'opalescent portrait',
				camera: 'Strong Glow',
				tags: ['portrait', 'fantasy', 'iridescent', 'diamond-hair', 'wind'],
				female_prompt:
					'Subsurface scattering of sking and face of a woman with glittering shimmering luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair, shamrock wind, by wlop and artgerm, an otherworldly glow.',
				male_prompt:
					'Subsurface scattering of sking and face of a man with glittering shimmering luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair, shamrock wind, by wlop and artgerm, an otherworldly glow.',
				images: ['https://replicate.delivery/pbxt/9lBefcDcDXgCjUfYPf8D5FQ7sotNVipEVHiCeEd5Dvtk8OdFC/out-0.png'],
			},
			'ovative portrait': {
				summary: 'ovative portrait',
				camera: 'natural lighting',
				tags: ['portrait', 'nature', 'garden', 'elegant', 'enigmatic'],
				female_prompt:
					"Ovative portrait of a woman with perfect body and gorgeous figure, in a garden with beautiful ankles, no attire, slender and muscular legs, long red hair, hot body, hardbody aesthetic, wet body look and minimal clothing. Visible torso and intricate details accent the beautiful symmetric facial features. Natural lighting and dreamlike palette create an atmosphere of enchantment. Inspired by Artgerm, Greg Rutkowski and Alphonse Mucha with elements of Emil Melmoth's fairy smoke, Giorgio Finamore's eerie haunting elegance.",
				male_prompt:
					"Ovative portrait of a man with perfect body and gorgeous figure, in a garden with beautiful ankles, no attire, slender and muscular legs. Long hair creates an enigmatic aura around the face. Natural lighting and dreamlike palette create an atmosphere of enchantment. Inspired by Artgerm, Greg Rutkowski and Alphonse Mucha with elements of Emil Melmoth's fairy smoke, Giorgio Finamore's eerie haunting elegance.",
				images: ['https://replicate.delivery/pbxt/iNzdxk9y5QZ5CxXKThphEzwgNenOKnzsJjZVu26BBSe78prQA/out-0.png'],
			},
			'oz journey': {
				summary: 'oz journey',
				camera: '',
				tags: ['fantasy', 'adventure', 'journey', 'signs', 'emerald'],
				female_prompt:
					'Dorothy and her companions, the tin man, the lion and the scarecrow, on their journey to the magical Emerald City. Along their path lies a yellow brick road lined with sign posts pointing the way forward to their destination. Hanging above the city is a holographic cloud of green displaying a menacing face of Oz, the great and powerful.',
				male_prompt:
					'The brave gang of Dorothy and her companions, the tin man, the lion and the scarecrow, on their magical quest to Emerald City. Along their path lies a yellow brick road filled with sign posts pointing ahead to their destination. Overhead hangs an ominous cloud of green showcasing a powerful face of Oz, the great and powerful.',
				images: ['https://replicate.delivery/pbxt/S46NaeKjfoiqCE1w71okAjKmLfhSaiT4Qpfek00gUe64zd6KE/out-0.png'],
			},
			'painter portrait': {
				summary: 'painter portrait',
				camera: 'Leica M9 Voightlander 35mm lens',
				tags: ['portrait', 'painting', 'mathematical', 'award-winning', 'classic'],
				female_prompt:
					'A stunning Leica M9 Voightlander 35mm classic photograph of an artist painting intricate numbers of Pi on a beautiful woman, goosebumps, downy hairs, and subtle catchlights. Award-winning photograph showcasing impressive dynamic range and razor sharp details.',
				male_prompt:
					'A handsome Leica M9 Voightlander 35mm classic portrait of a talented artist painting intricate numbers of Pi on a manly figure, goosebumps, downy hairs, and subtle catchlights. Award-winning photography showcasing impressive dynamic range and razor sharp details.',
				images: ['https://replicate.delivery/pbxt/cGZUN7oA5laQARaHtMZ6D55xl8Vinrj7TqBEwIIeDvZX90VIA/out-0.png'],
			},
			'parisian crowd': {
				summary: 'parisian crowd',
				camera: 'High angle telephoto shot',
				tags: ['nightlife', 'street', 'crowd', 'Paris', 'rim light'],
				female_prompt:
					'Beautiful Parisian woman in a vast, night-time crowd of thousands on a wet street. She is window shopping in the dimly lit cityscape, her detailed blue eyes sharply focused in a high angle telephoto shot. Dramatic rim lighting and natural light gives her an ethereal glow.',
				male_prompt:
					'Handsome Parisian man in a vast, night-time crowd of thousands on a wet street. He is window shopping in the dimly lit cityscape, his detailed blue eyes sharply focused in a high angle telephoto shot. Dramatic rim lighting and natural light gives him an ethereal glow.',
				images: ['https://replicate.delivery/pbxt/uonAGPGs2PKdGVkgS77746hKxpyVPIGf762ePW3xAzGu7prQA/out-0.png'],
			},
			'parisian portrait': {
				summary: 'parisian portrait',
				camera: 'High angle telephoto shot',
				tags: ['portrait', 'street', 'crowd', 'rim-lighting', 'natural-light'],
				female_prompt:
					'Beautiful Parisian woman window shopping in a massive crowd of thousands. Sharp focus, high angle telephoto shot for the ultra resolution and detail. Detailed blue eyes, rim lighting and natural light add to the atmosphere of the night. ',
				male_prompt:
					'Handsome Parisian man window shopping in a massive crowd of thousands. Sharp focus, high angle telephoto shot for the ultra resolution and detail. Detailed brown eyes, rim lighting and natural light add to the atmosphere of the night. ',
				images: ['https://replicate.delivery/pbxt/4i87wLGmhx63M9k1DBCSrGWYzJw2uuUcgIDddTjt4E7vd6KE/out-0.png'],
			},
			'park portrait': {
				summary: 'park portrait',
				camera: 'High quality camera',
				tags: ['portrait', 'park', 'pet', 'braids', 'high definition'],
				female_prompt: 'Elegant portrait of a Black and Puerto Rican woman, with  and brown micro braided hair, walking her chihuahua in a scenic park, beautiful scenery, high definition, high quality.',
				male_prompt: 'Handsome portrait of a man with multiple hairstyles, walking his pet in an idyllic park setting. Stunning backdrop with vibrant colors and crisp details. Captivating moments captured with clear clarity and perfect lighting. ',
				images: ['https://replicate.delivery/pbxt/2vYK9KbLTJZJIpJVh9U8r9aaYOv05ghqntpdUBUOJ6eReprQA/out-0.png'],
			},
			'park stroll': {
				summary: 'park stroll',
				camera: 'High definition, high quality image',
				tags: ['scenic', 'park', 'outdoors', 'woman', 'man'],
				female_prompt: 'A joyful black and Puerto Rican woman with  and brown braided hair, walking her beloved Chihuahua in a scenic park. High definition, high quality image with beautiful scenery and vibrant colors. ',
				male_prompt: 'A charismatic black and Puerto Rican man with stylishly braided hair, walking his lively Chihuahua in a scenic park. High definition, high quality image with beautiful scenery and vibrant colors.',
				images: ['https://replicate.delivery/pbxt/BiiM5HFQrdYxKNI1j7jawRfvYL2xtNsrocLqMyJXZS1neprQA/out-0.png'],
			},
			'passionate kiss': {
				summary: 'passionate kiss',
				camera: '',
				tags: ['fantasy', 'romance', 'hand-drawn', 'background details', 'historical'],
				female_prompt:
					'Romantic passionate kiss between beautiful woman in long fantasy white dress and attractive handsome man in frock coat. Hand drawn art with photorealistic details, historical setting, oil painted castle background and lots of decorative elements. ',
				male_prompt:
					'Tender romantic kiss between handsome man in a frock coat and beautiful woman in long fantasy white dress. Hand drawn art with photorealistic details, historical setting, oil painted castle background and lots of decorative elements. ',
				images: ['https://replicate.delivery/pbxt/loUJhZvVfyXJYahDez0qC4RBishhXLKJTCWs8eeeIo3O8OdFC/out-0.png'],
			},
			'passionate portrait': {
				summary: 'passionate portrait',
				camera: 'unknown',
				tags: ['portrait', 'official', 'formal', 'translucent', 'rainy'],
				female_prompt:
					'Joyful front view of a passionate young Arab woman wearing an alluring, thin wet garment; her beauty radiates in the hot, rainy night tropical rainforest. A sensual celebration of her smooth curves and delicate features in a breathtaking color palette. An unforgettable combination of love and eternity.',
				male_prompt:
					'Enthusiastic front view of a dashing young Arab man wearing an alluring, thin wet garment; his beauty radiates in the hot, rainy night tropical rainforest. A sensual celebration of his muscular physique and refined features in a breathtaking color palette. An unforgettable combination of love and eternity.',
				images: ['https://replicate.delivery/pbxt/f2azzSDpTS0CZ6ZKxdhjS1IH9l8rXShEd7UMlN62plfp3prQA/out-0.png'],
			},
			'pastel hair portrait': {
				summary: 'pastel hair portrait',
				camera: '',
				tags: ['portrait', 'creative', 'hair', 'vibrant', 'iridescent'],
				female_prompt: 'Intense close up of a woman with dreamy pastel pink shamrock hair, by Kuvshinov Ilya. Iridescent lighting, ethereal hues and shades, mesmerizing tones, bold composition and exquisite detailing. ',
				male_prompt: 'Intense close up of a man with vibrant pastel pink shamrock hair, by Kuvshinov Ilya. Iridescent lighting, ethereal hues and shades, mesmerizing tones, bold composition and exquisite detailing.',
				images: ['https://replicate.delivery/pbxt/nfhor544ntxSUCqY6EvCm4andt93hYvwMFlCftYJacKP4prQA/out-0.png'],
			},
			'pastel portrait': {
				summary: 'pastel portrait',
				camera: '',
				tags: ['portrait', 'surreal', 'long hair', 'light effects', 'high resolution'],
				female_prompt:
					'Extreme closeup of a female with glowing eyes and long pastel pink shamrock hair, magical beam of sunlight, and surreal artwork by Kuvshinov Ilya. High resolution with vivid colors, dynamic composition and intricate details. ',
				male_prompt:
					'Extreme closeup of a man with vibrant eyes and long pastel green shamrock hair, captivating beam of sunlight, and surreal artwork by Kuvshinov Ilya. High resolution with vivid colors, dynamic composition and intricate details. ',
				images: ['https://replicate.delivery/pbxt/MKohYogiPabkNFiaD8AJYG7HfOAqmDenmYO0unAjEinY3prQA/out-0.png'],
			},
			'pastel shamrock': {
				summary: 'pastel shamrock',
				camera: '',
				tags: ['portrait', 'extreme closeup', 'pastel', 'glowing', 'shamrock'],
				female_prompt:
					'Extreme closeup of a woman with glowing long pastel pink shamrock hair. Hyper-detailed, painterly style by Kuvshinov Ilya with vibrant colors and extraordinary lighting. Dynamic composition, intricate details and stunning realism.',
				male_prompt:
					'Extreme closeup of a man with glowing long pastel pink shamrock hair. Hyper-detailed, painterly style by Kuvshinov Ilya with vibrant colors and extraordinary lighting. Dynamic composition, intricate details and stunning realism.',
				images: ['https://replicate.delivery/pbxt/tNevvphJXSzCISpS2DLrEoR2fETFKUQHWQpWgnTpx74B7prQA/out-0.png'],
			},
			'paul freeman portrait': {
				summary: 'paul freeman portrait',
				camera: 'Paul Freeman',
				tags: ['portrait', 'black&white', 'attractive', 'b&w', 'young'],
				female_prompt:
					'Stunning black and white photograph of an attractive young woman by Paul Freeman, capturing her beauty and allure with a strong presence and confident aura. Boldly contrasted lines, delicate facial features and sharp details to accentuate her features.',
				male_prompt:
					'Handsome black and white photograph of an attractive young man by Paul Freeman, capturing his charisma and charm with a strong presence. Boldly contrasted lines, delicate facial features and sharp details to accentuate his features.',
				images: ['https://replicate.delivery/pbxt/r1BQlELSpHp2DR9ScP9Cf5uX7LSntqv36vN45s5e7FsW7prQA/out-0.png'],
			},
			'peaceful portrait': {
				summary: 'peaceful portrait',
				camera: '',
				tags: ['Portrait', 'Fantasy', 'Liquid Rococo', 'Fluid Acrylics', 'Elegant Gradients'],
				female_prompt:
					"Gorgeous woman, peaceful, innocent and tranquil with long flowing hair. Liquid Rococo fractal of James Jean and Rutkowski in fluid acrylic with elegant gradients and intricate depth. Kaluta and Rutkowski's detailed eyes in a hyperrealistic watercolored pencil style. Beautiful kingfisher catching fish with cinematic lighting.",
				male_prompt:
					"Handsome man, peaceful, innocent and tranquil with long flowing hair. Liquid Rococo fractal of James Jean and Rutkowski in fluid acrylic with elegant gradients and intricate depth. Kaluta and Rutkowski's detailed eyes in a hyperrealistic watercolored pencil style. Beautiful kingfisher catching fish with cinematic lighting.",
				images: ['https://replicate.delivery/pbxt/zWD4C6aJdE4VBVQd2T7KD2N0jqrXUz6cnRbZlRd21PT7e0VIA/out-0.png'],
			},
			'pi pattern': {
				summary: 'pi pattern',
				camera:
					'Ultra f35mm, Ultra Wide Angle Lens, Depth of Field, Hyper Detailed Resolution , 32k Super Resolution Megapixel ProPhoto RGB VR Half Rear Lighting Backlight Natural Lighting Incandescent Optical Fiber Moody Lighting Cinematic Lighting Studio Lighting Soft Lighting Volumetric Contre-Jour Beautiful Accent Lighting ',
				tags: ['portrait', 'editorial', 'golden', 'beach', 'professional'],
				female_prompt:
					'Striking portrait of an African woman with pi patterns, dripping in gold and glitter, editorial photography. Ultra wide angle lens and depth of field for hyper-detailed intricate details, beautifully color graded cinematic look. ProPhoto RGB color grading, half rear lighting backlight and natural lighting for volumetric contre-jour effect. Accent lighting for a shy half-smile, flirty and alluring expression, golden hour beach scenery highly realistic professional portrait photography.',
				male_prompt:
					'Handsome portrait of an African man with pi patterns, dripping in gold and glitter, editorial photography. Ultra wide angle lens and depth of field for hyper-detailed intricate details, beautifully color graded cinematic look. ProPhoto RGB color grading, half rear lighting backlight and natural lighting for volumetric contre-jour effect. Accent lighting for a confident expression, golden hour beach scenery highly realistic professional portrait photography.',
				images: ['https://replicate.delivery/pbxt/Fvme0fKtaatW3E7V2bUKwW5fyRROdKjPCEhWgEm8wtqX2TXhA/out-0.png'],
			},
			'pie devil': {
				summary: 'pie devil',
				camera: '',
				tags: ['action', 'dynamic', 'comic', 'colorful', 'chaos'],
				female_prompt:
					'Swashbuckling adventure of a heroine with a devilish pie, Chainsaw Man style, with colorful and chaotic atmospheres. Vibrant colors, comic-like exaggeration and onomatopoeic effects, motion and action lines giving it an intense energy. ',
				male_prompt: 'High-octane adventures of a hero with a devilish pie, Chainsaw Man style, with dramatic atmospheres. Vibrant colors, comic-like exaggeration and onomatopoeic effects, motion and action lines giving it an intense energy. ',
				images: ['https://replicate.delivery/pbxt/weBMKHJe4oncoEDfhnQ7wiTJUOE6aEtp0q4ngMzWxE4WxTXhA/out-0.png'],
			},
			'pink glamour': {
				summary: 'pink glamour',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'colorful', 'contemporary'],
				female_prompt:
					"Gorgeous woman wearing pink and bright, heavy makeup. A mix of Niki Taylor and Liv Tyler's looks in the style of Ilya Kuvshinov, Aaron Jasinski, Jeremy Lipking and Tom Bagshaw. Spectacular composition with an air of mystery, captivating beauty and mesmerizing colors. ",
				male_prompt:
					'Handsome man wearing edgy fashion with a confident expression. An iconic look in the style of Ilya Kuvshinov, Aaron Jasinski, Jeremy Lipking and Tom Bagshaw. Spectacular composition with an air of mystery, captivating beauty and mesmerizing colors. ',
				images: ['https://replicate.delivery/pbxt/v0Cgg3giZH4mM5ptFsQzdXX39mDzsEZFh5ahykfoQcEo80VIA/out-0.png'],
			},
			'pirate grief': {
				summary: 'pirate grief',
				camera: '',
				tags: ['pirate', 'emotional', 'ocean', 'dramatic', 'sad'],
				female_prompt:
					'Beautiful yet sad female pirate shedding tears, standing in the middle of the ocean with a broken bottle of rum. Timeless moment of despair, illuminated by the fading sunlight, deep sorrow and emotion in her gaze. Dramatic composition and intense contrast.',
				male_prompt:
					'Handsome yet sorrowful male pirate shedding tears, standing in the middle of the ocean with a broken bottle of rum. Timeless moment of despair, illuminated by the fading sunlight, deep sorrow and emotion in his gaze. Dramatic composition and intense contrast.',
				images: ['https://replicate.delivery/pbxt/ifJbfwrRAZluVUuLxTH91JPTGi3gvNAaJ3nj4mHlWoUt6prQA/out-0.png'],
			},
			'pirate sorrow': {
				summary: 'pirate sorrow',
				camera: '',
				tags: ['portrait', 'pirate', 'sadness', 'rum', 'ocean'],
				female_prompt:
					'Heartbreaking portrait of a beautiful female pirate, her tears falling over a broken bottle of rum in the vast open sea. Masterful blend of pencil and watercolor, melancholic grayscale color gradation, dire situation with a powerful emotional depth. ',
				male_prompt:
					'Striking portrait of a handsome male pirate, his eyes reflecting sorrow over a broken bottle of rum in the middle of an endless ocean. Masterful blend of pencil and watercolor, melancholic grayscale color gradation, dire situation with a powerful emotional depth. ',
				images: ['https://replicate.delivery/pbxt/ayZR3SMeCiU0caGbVy24V7NmPUTcA5ZyiYHGgIe87jBJ8prQA/out-0.png'],
			},
			'plasma battle': {
				summary: 'plasma battle',
				camera: '',
				tags: ['sci-fi', 'weaponry', 'action', 'lighting', 'illustration'],
				female_prompt: 'Female warrior with a high-tech plasma weapon, intense sci-fi action inspired by Paul Chadeisson. Futuristic weaponry and battles, dramatic atmospheric lighting, detailed digital illustration in the style of Fred Gambino.',
				male_prompt: 'Male hero with an advanced plasma weapon, riveting sci-fi action inspired by Paul Chadeisson. Futuristic weaponry and tense battles, dynamic atmospheric lighting, intricate digital illustration in the style of Fred Gambino.',
				images: ['https://replicate.delivery/pbxt/wOTomks2RkqiPxodB0c4nME9dO2Zt3ZRyMhdrvDO8ELRf0VIA/out-0.png'],
			},
			'plasma warrior': {
				summary: 'plasma warrior',
				camera: 'Digital Illustration',
				tags: ['action', 'weaponry', 'sci-fi', 'futuristic', 'atmospheric'],
				female_prompt:
					"A formidable woman in full battle gear, with a high-tech plasma weapon in her hands. Powerful sci-fi action, inspired by Paul Chadeisson's artwork, featuring futuristic weaponry and intense battles. Atmospheric lighting, digital illustration in the style of Fred Gambino.",
				male_prompt:
					"A heroic man in full battle gear, with a high-tech plasma weapon in his hands. Powerful sci-fi action, inspired by Paul Chadeisson's artwork, featuring futuristic weaponry and intense battles. Atmospheric lighting, digital illustration in the style of Fred Gambino.",
				images: ['https://replicate.delivery/pbxt/ttyXSyVcBfWjEyxLjx0kKeRWuv46hx5UDZvaJfexmfQ2dPdFC/out-0.png'],
			},
			'playful portrait': {
				summary: 'playful portrait',
				camera: 'medium format, portrait lens',
				tags: ['portrait', 'playful', 'balloons', 'studio', 'positive'],
				female_prompt:
					'Playful and vibrant portrait of a beautiful woman, surrounded by colorful balloons in a studio setting. Joyful and cheerful expression with an energetic stance, bright colors and controlled lighting for the perfect photograph. Positive medium format film in a portrait lens.',
				male_prompt:
					'Playful and vibrant portrait of a handsome man, surrounded by colorful balloons in a studio setting. Joyful and cheerful expression with an energetic stance, bright colors and controlled lighting for the perfect photograph. Positive medium format film in a portrait lens.',
				images: ['https://replicate.delivery/pbxt/7iObGveCjkWVbagDnofX4Qkemk06A298J41I0X3N3Z3P0TXhA/out-0.png'],
			},
			'plush portrait': {
				summary: 'plush portrait',
				camera: 'studio photography',
				tags: ['portrait', 'plush', 'teddy', 'profession', 'glamour'],
				female_prompt: 'Gorgeous female model with red hair lounging on a large pile of cuddly white and red teddy bears. Professional studio lighting, glamour photography, vivid colors, and high-quality resolution.',
				male_prompt: 'Handsome male model posed in front of a large pile of cuddly white and red teddy bears. Professional studio lighting, glamour photography, vivid colors, and high-quality resolution.',
				images: ['https://replicate.delivery/pbxt/MK0jv8GWWQ4bPVEZeooN4VJffk20lrTe3oDJY7fBe2RkWf0VIA/out-0.png'],
			},
			'polynesian fantasy portrait': {
				summary: 'polynesian fantasy portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'Polynesian', 'adorable', 'romantic'],
				female_prompt: 'Colorful idyllic, cheerful woman with Polynesian features, adorable and kawaii appearance. Perfectly proportioned athletic body looking at me with a romantic fantasy look. Cat-themed Manhwa anime children illustration illus.',
				male_prompt: 'Colorful idyllic, cheerful man with Polynesian features, adorable and kawaii appearance. Perfectly proportioned athletic body looking at me with a romantic fantasy look. Cat-themed Manhwa anime children illustration illus.',
				images: ['https://replicate.delivery/pbxt/60lMf5zn8bXDI61q9G3UTrUS6qeqp7Ac9lXatpexuXEh1TXhA/out-0.png'],
			},
			'pop surrealism': {
				summary: 'pop surrealism',
				camera: '',
				tags: ['portrait', 'surrealism', 'Victorian', 'hyperrealistic', 'colors'],
				female_prompt:
					'Vibrant and trippy pop surrealism portrait of a beautiful, friendly, sly Nouveau Victorian Aristocratic woman. Hyperrealistic quality with pastel colors, intricate details and dynamic composition. Masterful blend of pencil and watercolor, golden ratio, vivid hues, soft lighting, and extreme details.',
				male_prompt:
					'Vibrant and trippy pop surrealism portrait of a handsome, friendly, sly Nouveau Victorian Aristocratic man. Hyperrealistic quality with pastel colors, intricate details and dynamic composition. Masterful blend of pencil and watercolor, golden ratio, vivid hues, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/fU84n6N0vP3oACPGfyMTueLEhpUNkRgdY159wf4WezaMZPdFC/out-0.png'],
			},
			'pop surrealism portrait': {
				summary: 'pop surrealism portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'surrealism', 'Nouveau Victorian', 'Aristocratic'],
				female_prompt:
					'Vibrant and vibrant hyperrealistic pop surrealism portrait of a beautiful, friendly and sly Nouveau Victorian Aristocratic female. Captivating with vivid color saturation, intricate patterns, surrealistic motifs and extraordinary details. ',
				male_prompt:
					'Quirky and captivating hyperrealistic pop surrealism portrait of a handsome, friendly and sly Nouveau Victorian Aristocratic male. Radiant with vivid color saturation, intricate patterns, surrealistic motifs and extraordinary details. ',
				images: ['https://replicate.delivery/pbxt/f1gklfjOCnkcQkBpdIhgeM5t68ac2D5CaFUPU88etgLlXnuCB/out-0.png'],
			},
			'post-apocalyptic portrait': {
				summary: 'post-apocalyptic portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'utilitarian', 'post-apocalyptic'],
				female_prompt:
					'Post-apocalyptic portrait of a female merchant, with a strong yet compassionate expression, wearing a patched-up jacket and sturdy boots, carrying a large backpack with medical and ammunition supplies, and a machete hanging from her belt. Scarred face but warm smile amidst the ramshackle trading post, filled with haggling and lanterns casting dim light.',
				male_prompt:
					'Post-apocalyptic portrait of a male merchant, with a courageous yet sympathetic expression, wearing rugged clothes and sturdy boots, carrying an overflowing backpack with essentials and weapons. Weathered face but inviting smile amidst the dilapidated trading post, bustling with activity and lit by flickering lanterns.',
				images: ['https://replicate.delivery/pbxt/RSBXI9spM7YEOBep8p14jbdaOeQuSnYSAvnBl4bOg9z04prQA/out-0.png'],
			},
			'power portrait': {
				summary: 'power portrait',
				camera: 'Cinematic lighting, 4K',
				tags: ['official', 'formal', 'full body', '4K', 'intimidating'],
				female_prompt:
					'Tall and statuesque woman with piercing eyes and sharp features, jet black hair is typically styled in a sleek bob, wears dark, form-fitting clothing that emphasizes her curves and intimidating presence. Cinematic lighting with 4K resolution for an epic result. ',
				male_prompt:
					'Impressive man with intense eyes and strong facial features, jet black hair styled in a sleek cut. Wearing dark, form-fitting clothes that emphasize his body shape and powerful presence. Cinematic lighting with 4K resolution for an epic result. ',
				images: ['https://replicate.delivery/pbxt/IolLedZkUbwMRa6ikGChi3vSB7qZ5vP0YmCvuArRDPao80VIA/out-0.png'],
			},
			'prodigy portrait': {
				summary: 'prodigy portrait',
				camera: 'Feng Li Chainsaw Man Style',
				tags: ['portrait', 'fantasy', 'anime', 'colours', 'futuristic'],
				female_prompt: 'Dynamic portrait of a female prodigy with Akira Marvel comics characters, Rastafarian colours and futuristic accoutrements. Captivatingly bold pencilpunk anime style with hearts in the pupils and watercolored details. ',
				male_prompt: 'Striking portrait of a male prodigy with Akira Marvel comics characters, Rastafarian colours and futuristic accoutrements. Captivatingly bold pencilpunk anime style with hearts in the pupils and watercolored details. ',
				images: ['https://replicate.delivery/pbxt/8w3sA0GeyUSGayjsbuUCTYUWL9zM6lqzzBgpe0v6ckj94prQA/out-0.png'],
			},
			'profesional thai': {
				summary: 'profesional thai',
				camera: '',
				tags: ['official', 'formal', 'portrait', 'thai', 'elegant'],
				female_prompt:
					'A beautiful and confident Thai woman wearing a professional, fitted office outfit with a short skirt, sitting confidently with her legs crossed in an elegant pose. The angle of the camera allows for an unobstructed view of her legs, almost to the point of seeing the inside of her thighs. She looks poised and sophisticated.',
				male_prompt:
					'A handsome and confident Thai man wearing a professional, fitted office outfit with tailored trousers, sitting confidently with his legs crossed in an elegant pose. The angle of the camera allows for an unobstructed view of his legs. He looks poised and sophisticated.',
				images: ['https://replicate.delivery/pbxt/lN61u7qvYPrNE92U5rg8nWfxqLm9c8MBlMdFHD9SVe5A4prQA/out-0.png'],
			},
			'professional environmental': {
				summary: 'professional environmental',
				camera: 'Nikon Z6 II, 50mm f/1.4 Lens',
				tags: ['portrait', 'environmental', 'Nikon Z6 II', 'professional', '50mm f/1.4'],
				female_prompt:
					'Strong portrait of a woman with a professional and experienced expression, eye-level digital capture using Nikon Z6 II with 50mm f/1.4 lens in a environmental portrait style. Shallow depth of field and natural lighting to stylize the image. ',
				male_prompt:
					'Powerful portrait of a man with a professional and experienced expression, eye-level digital capture using Nikon Z6 II with 50mm f/1.4 lens in an environmental portrait style. Shallow depth of field and natural lighting to stylize the image.',
				images: ['https://replicate.delivery/pbxt/s7PVDa4j2PIuKBBfepeYfAF2Q2pdEeC1hXjv9DkuQfTT5e0VIA/out-0.png'],
			},
			'professional portrait': {
				summary: 'professional portrait',
				camera: 'High Resolution Detailed Portraiture Photography',
				tags: ['portrait', 'official', 'professional', '8K', 'ultra realistic'],
				female_prompt:
					"Cheerful and approachable woman in her early 30s with shoulder-length, straight  hair, bright blue eyes and a heart-shaped face. Her complexion is fair and her genuine smile radiates warmth. She's wearing a light gray blazer and pastel-colored blouse for professional attire. 8k, high resolution, detailed portrait photography with ultra realistic quality.",
				male_prompt:
					'Friendly man in his early 30s with shoulder-length straight hair, deep blue eyes and an oval face. His skin tone is fair and his friendly smile radiates joy. Wearing a light gray suit jacket and neutral shirt for professional attire. 8k, high resolution, detailed portrait photography with ultra realistic quality.',
				images: ['https://replicate.delivery/pbxt/oMTzyXaKnprnKZJuYmZqhv3Ke50xfFI4Gof7CydrhecVwnuCB/out-0.png'],
			},
			'pulp cover': {
				summary: 'pulp cover',
				camera: '',
				tags: ['thriller', 'leather', '1970s', 'detailed', 'lighting'],
				female_prompt:
					'Glamorous femme fatale in leather miniskirt and fishnets, night New York setting with harsh neon lights. Imbued with the aesthetic of pulp thrillers and Harlequin Romance covers, reminiscent of the works of Robert McGinnis, Victor Gadino and Art Frahm. Highly detailed painting with beautiful lighting and dramatic pose. 8k resolution. ',
				male_prompt:
					'Charming male lead on a thrilling mission, night New York setting with harsh neon lights. Imbued with the aesthetic of pulp thrillers and Harlequin Romance covers, reminiscent of the works of Robert McGinnis, Victor Gadino and Art Frahm. Highly detailed painting with beautiful lighting and dramatic pose. 8k resolution.',
				images: ['https://replicate.delivery/pbxt/6O4AGVyOE7KdItj4LOhy53LflOBXrQzqfeKq0Fb4ZASPrTXhA/out-0.png'],
			},
			'pulp thriller': {
				summary: 'pulp thriller',
				camera: 'No Camera Information Provided',
				tags: ['thriller', '1970s', 'neon', 'police car', 'romance'],
				female_prompt:
					'Vibrant Pulp thriller cover of a 1970s woman in bold leather miniskirt and fishnets, police car in the night New York setting, harsh neon lights and a hint of Harlequin Romance style of Robert McGinnis and Victor Gadino and Art Frahm. Highly detailed painting, beautiful lighting, dramatic pose and 8K resolution. ',
				male_prompt:
					'Vibrant Pulp thriller cover of a 1970s man in bold leather jacket and trousers, police car in the night New York setting, harsh neon lights and a hint of Harlequin Romance style of Robert McGinnis and Victor Gadino and Art Frahm. Highly detailed painting, beautiful lighting, dramatic pose and 8K resolution. ',
				images: ['https://replicate.delivery/pbxt/5QHGN3oPpVa1LdTv4uo2eKSYVI2U3IvWzK3HHS5l8abJeprQA/out-0.png'],
			},
			'punk portrait': {
				summary: 'punk portrait',
				camera: 'photograph',
				tags: ['portrait', 'fashion', 'blue hair', 'leather', 'kitsch'],
				female_prompt:
					'A daring woman with blue hair, leather and punky bob haircut, decorated with belts and straps. Enjoying a garish glamour of colorful clothes and high fashion style, in avant garde, kitsch and lowbrow aesthetics. Captured in a photograph with great finesse.',
				male_prompt:
					'A daring man with blue hair, leather and punky bob haircut, decorated with belts and straps. Enjoying a garish glamour of colorful clothes and high fashion style, in avant garde, kitsch and lowbrow aesthetics. Captured in a photograph with great finesse.',
				images: ['https://replicate.delivery/pbxt/cD3xenLtptVIGi3xAMvNJEag7RemPMKvfz2zLhcWHTuAvTXhA/out-0.png'],
			},
			'punky portrait': {
				summary: 'punky portrait',
				camera: 'Photograph',
				tags: ['portrait', 'fantasy', 'garish', 'high fashion', 'lowbrow'],
				female_prompt: 'Playful and daring portrait of a woman with blue hair, punky bob-cut, leather straps, garish colorful clothes, high fashion avant-garde kitsch. Creative composition and heavy contrasts for an eye-catching look. ',
				male_prompt: 'Rugged portrait of a man with leather straps, garish colorful clothes, high fashion avant-garde kitsch. Creative composition and heavy contrasts for an eye-catching look. ',
				images: ['https://replicate.delivery/pbxt/1vqqKsFmqVpwI1Hy9JnKNFRDrjtj04KoetBaYmrcj7LheprQA/out-0.png'],
			},
			'pvc cyborg': {
				summary: 'pvc cyborg',
				camera: '8k resolution',
				tags: ['cyborg', 'futuristic', 'punk', 'mecha', 'synthwave'],
				female_prompt:
					'Striking PVC cyborg female, sleek design with futuristic punk Barbie, a woman with a pink sidecut and undercut, reclining in a chair wearing mecha cyber armor and cables. Miami synthwave and barbie cyborg thighs, high quality with fair skin and pvcpunk style. Cyberpunk decor background set with ultra realistic 8k resolution and volumetric light. Dynamic pose for extra detail.',
				male_prompt:
					'Impressive PVC cyborg male, sleek design with futuristic punk aesthetic. A man with a pink sidecut and undercut, reclining in a chair wearing mecha cyber armor and cables. Miami synthwave and barbie cyborg thighs, high quality with fair skin and pvcpunk style. Cyberpunk decor background set with ultra realistic 8k resolution and volumetric light. Dynamic pose for extra detail.',
				images: ['https://replicate.delivery/pbxt/QCFGTUsUQabHDd02fRiFjUZZJ4fgSic1RORCEMfF6C02wTXhA/out-0.png'],
			},
			'pvc punk': {
				summary: 'pvc punk',
				camera: '8K quality',
				tags: ['mecha', 'futuristic', 'punk', 'cyberpunk', 'volumetric'],
				female_prompt:
					'Futuristic Pvc female cyborg, sleek design and punk Barbie aesthetics. A woman with white braided pink hair reclining in a chair, wearing mecha cyber armor and cables, Miami synthwave vibes. High quality, fair skin and pvcpunk style. Cyberpunk decor background with volumetric light, ultra realistic 8k quality, and dynamic pose.',
				male_prompt:
					'Futuristic Pvc male cyborg, sleek design and punk style. A man with electric blue hair reclining in a chair wearing mecha cyber armor and cables, Miami synthwave vibes. High quality visuals, fair skin and pvcpunk attitude. Cyberpunk decor background with volumetric light, ultra realistic 8k quality, and dynamic pose.',
				images: ['https://replicate.delivery/pbxt/rUFJ0PZQI8pmMJREVluMWL0lKw3tmx2XTeBUHgRZstTLeprQA/out-0.png'],
			},
			pvcpunk: {
				summary: 'pvcpunk',
				camera: '8K image with volumetric light,',
				tags: ['futuristic', 'cyborg', 'mecha', 'miami', 'synthwave'],
				female_prompt:
					'PVC female cyborg with sleek design and futuristic punk Barbie style, a woman with pink sidecut and undercut reclining in a chair wearing mecha cyber armor and cables against a Miami synthwave and cyberpunk decor background. Ultra realistic 8K image with volumetric light, dynamic pose, and fair skin. ',
				male_prompt:
					'PVC male cyborg with sleek design and futuristic punk Barbie style, a man with pink sidecut and undercut reclining in a chair wearing mecha cyber armor and cables against a Miami synthwave and cyberpunk decor background. Ultra realistic 8K image with volumetric light, dynamic pose, and fair skin. ',
				images: ['https://replicate.delivery/pbxt/NYSlZkB6856nNBMV0GMF2vD4OsqremeS5BRY17oEzj9c6prQA/out-0.png'],
			},
			'pvcpunk cyborg': {
				summary: 'pvcpunk cyborg',
				camera: 'Ultra realistic 8K quality',
				tags: ['futuristic', 'mech', 'pvcpunk', 'cyberpunk', 'dynamic'],
				female_prompt:
					'Pvc female cyborg with sleek futuristic design and punk Barbie style. White braided pink hair, mecha cyber armor, cables and Miami synthwave fashion. Barbie cyborg thighs, ultra realistic 8K quality fair skin, pvcpunk style and cyberpunk decor background. Volumetric light and dynamic pose.',
				male_prompt:
					'Pvc male cyborg with sleek futuristic design and punk Barbie style. White braided pink hair, mecha cyber armor, cables and Miami synthwave fashion. Cyberpunk muscled chest and arms, ultra realistic 8K quality fair skin, pvcpunk style and cyberpunk decor background. Volumetric light and dynamic pose.',
				images: ['https://replicate.delivery/pbxt/dZKbJJfxiWUMMC7I0oPRJAHcGPV8hNkjkZmWgzQRIoSu70VIA/out-0.png'],
			},
			'qcernunnos couture': {
				summary: 'qcernunnos couture',
				camera: '',
				tags: ['fashion', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Anxious female with gritted teeth, botanical academia, Karrueche-inspired fashion, Lisa Frank-like colors, moose antlers, holographic and metallic elements, Qcernunnos couture and a joyful expression shining through a rainbow. In the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Tense male with clenched teeth, botanical academia, Karrueche-inspired fashion, Lisa Frank-like colors, moose antlers, holographic and metallic elements, Qcernunnos couture and a cheerful expression shining through a rainbow. In the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/26cJCnglDu4MEpxsddPsbsLXkvOnVvXwJhrfnJrWtmaI90VIA/out-0.png'],
			},
			'qcernunnos fashion': {
				summary: 'qcernunnos fashion',
				camera: '',
				tags: ['botanical', 'holographic', 'metallic', 'fashion', 'rainbow'],
				female_prompt: 'Anxious woman with botanical academia, Karrueche, Lisa Frank, moose antlers, holographic, metallic and Qcernunnos fashion, smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt: 'Anxious man with botanical academia, Karrueche, Lisa Frank, moose antlers, holographic, metallic and Qcernunnos fashion, looking towards the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/tfrMbpzUdQwfQkblxCKWVoGVMFiHyBlznYXzo5bSRj601prQA/out-0.png'],
			},
			'qcernunnos inspired': {
				summary: 'qcernunnos inspired',
				camera: '',
				tags: ['botanical', 'academia', 'fashion', 'holographic', 'rainbow'],
				female_prompt:
					'Fiercely determined female with botanical academia, Karrueche, Lisa Frank, moose antlers and holographic metallic fashion. Smiling into the rainbow with a Qcernunnos-inspired look, in the style of James Jean and Alberto Seveso.',
				male_prompt: 'Majestic male with botanical academia, Karrueche, Lisa Frank, moose antlers and holographic metallic fashion. Smiling into the rainbow with a Qcernunnos-inspired look, in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/MhpLMP4F5bZVBV4qMsx0nuM8EWHeqYbEkP1ptLhrFm8470VIA/out-0.png'],
			},
			'qcernunnos look': {
				summary: 'qcernunnos look',
				camera: '',
				tags: ['fashion', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Fierce female with clenched teeth, encircled by botanical academia, adorned with Karrueche and Lisa Frank designs, crowned with moose antlers, wearing a holographic and metallic Qcernunnos fashion. Smiling into a rainbow palette in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Majestic male with a determined expression, surrounded by botanical academia, adorned with Karrueche and Lisa Frank designs, crowned with moose antlers, wearing a holographic and metallic Qcernunnos fashion. Smiling into a rainbow palette in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/ecl6n827b5XBMCXo3NAzyGYiVlPwQFwX9XeBAAwxBKeNxTXhA/out-0.png'],
			},
			'queen tsarina': {
				summary: 'queen tsarina',
				camera: '',
				tags: ['portrait', 'official', 'gothic', 'facepaint', 'impressionist'],
				female_prompt:
					'Majestic queen with a resolute face, long braids, and a majestic black uniform. Ornate European gothic crown with horror and symmetry, sitting on the Gothic throne with black and gold details. Porcelain skin with elaborate face paint, haunting beauty inspired by Edmund Blair Leighton, HR Giger, Zdislav Beksinski, and Henri de Toulouse-Lautrec. Foggy atmosphere and sparks in oil painting style of impressionism combined with chiaroscuro.',
				male_prompt:
					'Regal king with a determined face, intricate braided hair, and a powerful black uniform. Adorned European gothic crown with horror and symmetry, sitting on the Gothic throne with dark hues of gold. Porcelain skin illuminated by bold facepaint, handsome figure inspired by Edmund Blair Leighton, HR Giger, Zdislav Beksinski, and Henri de Toulouse-Lautrec. Mystical atmosphere filled with sparks in an oil painting style of impressionism combined with chiaroscuro.',
				images: ['https://replicate.delivery/pbxt/eTSol9xzehj7Jk2Xf5SeiQTlZgERr3qkpNMUnzgMr5ftfd6KE/out-0.png'],
			},
			'raiding party': {
				summary: 'raiding party',
				camera: '',
				tags: ['wide angle', 'fantasy', 'raiding', 'wizard', 'troll'],
				female_prompt:
					'Vast view of a small raiding party standing together in a forest, a white haired wizard at one side, a hobgoblin wielding an axe on the other, beside them a female mage wearing a blue cape and a tall male elf. In the background looms an imposing Rock Troll. ',
				male_prompt:
					'Grandiose panorama of a small raiding party gathered in the middle of an ancient forest, watchful eyes of a white haired wizard on one side, and an axe wielding hobgoblin on the other. Accompanying them is a female mage draped in blue and a proud tall elf. In the distance looms an enormous Rock Troll. ',
				images: ['https://replicate.delivery/pbxt/J3eed1xqJhnBzEmZwDIJMNZYPcADfoi9M1ZvmSWWXuzRuTXhA/out-0.png'],
			},
			'rain portrait': {
				summary: 'rain portrait',
				camera: '',
				tags: ['portrait', 'rain', 'dynamic', 'sensual', 'graceful'],
				female_prompt: 'Voluptuous woman in the rain, sensual curves, graceful aura, and remarkable charisma. Mystical ambiance, surreal texture, and dynamic composition. Glistening wet skin, radiant beauty and vibrant colors.',
				male_prompt: 'Handsome man in the rain with striking features and commanding presence. Mystical ambiance, surreal texture, and dynamic composition. Glistening wet skin, radiant beauty and vibrant colors.',
				images: ['https://replicate.delivery/pbxt/2kc0a4ANvuIGIxs7RZkzk6cc75kblWrxU0ezJS77PGvC80VIA/out-0.png'],
			},
			'rainbow portrait': {
				summary: 'rainbow portrait',
				camera: '',
				tags: ['portrait', 'botanical', 'holographic', 'metallic', 'shamrock'],
				female_prompt:
					'Beautiful female singing with her head back, surrounded by a botanical academia with vibrant Karrueche colours, Lisa Frank inspired rainbows, shimmering pot of gold and holographic metallic designs. Shamrock fashion with a smiling face looking at the rainbow, in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Handsome male singing with his head back, surrounded by a botanical academia with vibrant Karrueche colours, Lisa Frank inspired rainbows, shimmering pot of gold and holographic metallic designs. Shamrock fashion with a smiling face looking at the rainbow, in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/2MjXGV5yDkIVNdWDPHeH9vvyeDoxJDC9bFCeCT4wfSmsmnuCB/out-0.png'],
			},
			'rainbow singing': {
				summary: 'rainbow singing',
				camera: '',
				tags: ['singing', 'botanical', 'fashion', 'holographic', 'metallic'],
				female_prompt:
					'Vivacious female with her head thrown back singing, botanical academia, glamorous Karrueche style,Lisa Frank inspired fashion and accessories, pot of gold, holographic and metallic fabrics with shamrock details, smiling into the rainbow in the style of James Jean and Alberto Seveso',
				male_prompt:
					'Joyous male with his head thrown back singing, botanical academia, stylish Karrueche style, Lisa Frank inspired fashion and accessories, pot of gold, holographic and metallic fabrics with shamrock details, smiling into the rainbow in the style of James Jean and Alberto Seveso',
				images: ['https://replicate.delivery/pbxt/mz30bETIaUafD6ebCE0eKrPMGMNgJzXqXkVEPLW0x6Gx2TXhA/out-0.png'],
			},
			'rainy portrait': {
				summary: 'rainy portrait',
				camera: 'hi-def camera',
				tags: ['portrait', 'fantasy', 'water', 'lively', 'outdoors'],
				female_prompt:
					"Gleeful young woman dressed as Tinkerbell, soaking wet in torrential rain, laughing with wet  hair and water pouring from above. She's wearing a short strapless green dress, fairy wings and photorealistic detail. High-definition camera captures the scene of her being drenched and soaked with water dripping off her. ",
				male_prompt:
					"Joyful young man dressed as Peter Pan, soaking wet in torrential rain, laughing with wet dark hair and water pouring from above. He's wearing a short strapless green shirt, fairy wings and photorealistic detail. High-definition camera captures the scene of him being drenched and soaked with water dripping off him. ",
				images: ['https://replicate.delivery/pbxt/8g8Mr2a0nRqvPNtSrCsNsfJFOpUYLOZOUrw8oQjGe4kn6prQA/out-0.png'],
			},
			'red- portrait': {
				summary: 'red- portrait',
				camera: '30 megapixel, 4K, 85mm lens, f/8 ISO 100 Shutter 1:125',
				tags: ['portrait', 'high-resolution', 'lighting', 'wide-angle', 'facial-symmetry'],
				female_prompt:
					'Miss American Pie close up portrait of a beautiful woman with vibrant red and  hair, exquisite detail and award-winning photography. 30 megapixels and 4k resolution, expertly balanced lighting to bring out the softness of her features, diffused backlight for an effortless high sharpness. With an 85mm lens for a wide angle view and small catchlight for added depth, facial symmetry for natural beauty in perfect harmony.',
				male_prompt:
					'Sharp close up portrait of a handsome man with vibrant red and  hair, exquisite detail and award-winning photography. 30 megapixels and 4k resolution, expertly balanced lighting to bring out the masculinity of his features, diffused backlight for an effortless high sharpness. With an 85mm lens for a wide angle view and small catchlight for added depth, facial symmetry for natural beauty in perfect harmony.',
				images: ['https://replicate.delivery/pbxt/cIsm7VhjHKJJBtyFfxBQIu4wZQyb9hMRQcr1g9f9CGEi8prQA/out-0.png'],
			},
			'red-haired portrait': {
				summary: 'red-haired portrait',
				camera: 'Photorealistic / Cinematic',
				tags: ['portrait', 'official', 'formal', 'braids', 'neutral'],
				female_prompt: 'Vibrant portrait of a young woman with red hair, intricate braids, pronounced cheekbones and a neutral, yet captivating expression. Photorealistic quality and cinematic style, detailed textures and subtle lighting. ',
				male_prompt: 'Striking portrait of a young man with red hair, elegant hairstyle, defined facial features and a neutral yet engaging expression. Photorealistic quality and cinematic flair, detailed textures and soft lighting. ',
				images: ['https://replicate.delivery/pbxt/fqUuxdqGYuQf60fCUlKfLwbeiIC4dtNJHzLiVuHK4QqClPdFC/out-0.png'],
			},
			'red coat noir': {
				summary: 'red coat noir',
				camera: '',
				tags: ['portrait', 'noir', 'pin-up', 'Art Frahm', 'Alex Raymond', 'Clyde Caldwell'],
				female_prompt:
					'A woman in a red coat, playful yet purposeful, striking pin-up noir artistry with a hint of mystery by renowned artists Art Frahm, Alex Raymond, and Clyde Caldwell. Dynamic composition, crisp details and bold colors create an unforgettable image.',
				male_prompt:
					'A man in a trenchcoat, mysterious and mysterious alluring, classic pin-up noir artistry with a hint of swagger by renowned artists Art Frahm, Alex Raymond, and Clyde Caldwell. Dynamic composition, crisp details and bold colors create an unforgettable image.',
				images: ['https://replicate.delivery/pbxt/XYZKYQ7biw6yFpta4shs8Ak3BJxScmr4GXnEZSxhgptSf0VIA/out-0.png'],
			},
			'red wall portrait': {
				summary: 'red wall portrait',
				camera: '32K resolution, natural lighting, ultra HD',
				tags: ['portrait', 'official', 'formal', 'redwall', 'headphones'],
				female_prompt: 'Gorgeous woman standing in front of a vibrant red wall, listening to music with over ear headphones. 32K resolution, natural lighting, ultra HD visual quality. Magnetic beauty, youthful expression and sharp edges.',
				male_prompt: 'Handsome man standing in front of a vibrant red wall, listening to music with over ear headphones. 32K resolution, natural lighting, ultra HD visual quality. Magnetic charm, energetic expression and crisp details.',
				images: ['https://replicate.delivery/pbxt/qxMUhSAbUgKvF52o6OlG7NRiZxrCU2gCbXPONT1HE2XJf0VIA/out-0.png'],
			},
			'redhead cyberpunk': {
				summary: 'redhead cyberpunk',
				camera: 'Hyper-realistic; photorealistic; 4k; HD',
				tags: ['portrait', 'official', 'formal', 'HD', 'neon'],
				female_prompt:
					'Young woman with curly red hair, wearing glasses and a vibrant neon black and red dress. Looking directly at the camera with a beautiful smile. Hyperrealistic resolution, photorealistic vibrancy, 4k and HD quality and Cyberpunk backdrop. ',
				male_prompt:
					'Young man with curly red hair, wearing glasses and a vibrant neon black and red jacket. Looking directly at the camera with a handsome smirk. Hyperrealistic resolution, photorealistic vibrancy, 4k and HD quality and Cyberpunk backdrop.',
				images: ['https://replicate.delivery/pbxt/BgDu6zekAkUMFqti45KKsFEFv5ZumRHNLQ0KeK9oD9cz3prQA/out-0.png'],
			},
			'redhead portrait': {
				summary: 'redhead portrait',
				camera: 'Film photography',
				tags: ['portrait', 'red hair', 'room', 'film photography', 'yellow'],
				female_prompt: 'Beautiful portrait of a red-haired woman by a yellow wall, hair blowing in the wind and eyes closed, professional color grading with soft shadows, no contrast, clean sharp focus. Film photography with evenly lit bright room.',
				male_prompt: 'Handsome portrait of a red-haired man by a yellow wall, hair blowing in the wind and eyes closed, professional color grading with soft shadows, no contrast, clean sharp focus. Film photography with evenly lit bright room.',
				images: ['https://replicate.delivery/pbxt/WdfdezhfpcZHXIFn2o6WzEuYb3OJJ3thUkeSTuDz9LkUPnuCB/out-0.png'],
			},
			'reflective paladin': {
				summary: 'reflective paladin',
				camera: '',
				tags: ['portrait', 'official', 'plastic armor', 'lotus position', 'reflective'],
				female_prompt: 'Beautiful female paladin in vibrant yellow plastic armor, sitting with a peaceful expression in the classic lotus position. Perfectly detailed and reflective surfaces, kind gaze, and multilayered composition. ',
				male_prompt: 'Handsome male paladin in reflective yellow plastic armor, with a serene expression while sitting in the classic lotus position. Perfectly detailed and reflective surfaces, piercing gaze, and multilayered composition. ',
				images: ['https://replicate.delivery/pbxt/ZgIeEVBACpS9Iyrv5EdR4pyElKBaTc4IQUXTe05gN3BD9prQA/out-0.png'],
			},
			'regal portrait': {
				summary: 'regal portrait',
				camera: 'Masterful blend of oil painting impressionism and chiaroscuro style.',
				tags: ['portrait', 'official', 'gothic', 'dark', 'dramatic'],
				female_prompt:
					'Regal portrait of a queen tsarina, regal bone queen with a sharp and arrogant face, long braids, and a black uniform. Ominous presence with an elaborate European gothic crown for her horror themed face portrait. Symmetrical composition with black and gold details, porcelain skin, face paint and a foggy atmosphere. Masterful blend of oil painting impressionism and chiaroscuro style.',
				male_prompt:
					'Majestic portrait of a tsar king figure with grim composure, strong jawline, standing in the dark background. Dramatic look with royal gothic style crown, black uniform details and a mysterious foggy atmosphere. Masterful blend of oil painting impressionism and chiaroscuro style.',
				images: ['https://replicate.delivery/pbxt/qNAZzes9KzQuGSHrxKdTTBJJJIsykgjwk1vpNCSyavlZ90VIA/out-0.png'],
			},
			'retro-futuristic android': {
				summary: 'retro-futuristic android',
				camera: '',
				tags: ['android', 'retro futuristic', 'plastic', 'panels', 'connection lines'],
				female_prompt:
					'Gorgeous retro-futuristic female android with white and blue plastic skin, panels, wires, lens eyes, and intricate gears. Surrounded by a vibrant retro-futuristic environment with sleek details and neon accents. Captured with vivid colors and sophisticated composition.',
				male_prompt:
					'Handsome retro-futuristic male android with white and blue plastic skin, panels, wires, lens eyes, and intricate gears. Surrounded by a vibrant retro-futuristic environment with sleek details and neon accents. Captured with vivid colors and sophisticated composition.',
				images: ['https://replicate.delivery/pbxt/MezbgXhrE90kUqMDRwq60UK2nf3NtE2Js3lrRlbpoZ6f2TXhA/out-0.png'],
			},
			'retro android': {
				summary: 'retro android',
				camera: '',
				tags: ['retro', 'futuristic', 'android', 'portrait', 'vibrant'],
				female_prompt:
					'Beautiful retro-futuristic portrait of a female android, with white body and blue decorations, panels, cables, connection lines, gears. Surrounded by a vibrant retro-futuristic environment. Uniquely futuristic with hyper-realistic details and colors.',
				male_prompt:
					'Handsome retro-futuristic portrait of a male android, with white body and blue decorations, panels, cables, connection lines, gears. Surrounded by a vibrant retro-futuristic environment. Uniquely futuristic with hyper-realistic details and colors.',
				images: ['https://replicate.delivery/pbxt/dEZOKrZtf80zeU8RfhmKsyBjLyFpuvNrgzylxWciycikvTXhA/out-0.png'],
			},
			'retro fashion': {
				summary: 'retro fashion',
				camera: '',
				tags: ['retrofashion', 'watercolor', 'artistic', 'vivid', 'dynamic'],
				female_prompt:
					'Vintage-style portrait of a woman with short hair, wearing a red jumpsuit and mink stole, watercolor painting on card stock with unique artistic flair by Jules Fieffer, Jack Cole and Art Frahm. Colorful vivid hues, dynamic brush strokes and intricate details.',
				male_prompt:
					'Retro-inspired portrait of a man with short hair, wearing a navy suit and bow tie, watercolor painting on card stock with unique artistic flair by Jules Fieffer, Jack Cole and Art Frahm. Colorful vivid hues, dynamic brush strokes and intricate details.',
				images: ['https://replicate.delivery/pbxt/TEZN3fmL2QxTEK8mwQ3OI1amzpPn8C2r9LP5YlxQR9St80VIA/out-0.png'],
			},
			'retro futuristic android': {
				summary: 'retro futuristic android',
				camera: '',
				tags: ['retro', 'futuristic', 'android', 'white', 'blue'],
				female_prompt:
					'Beautiful female android with a white and blue design, decorated with panels, wires, gears, and highlighted by a vibrant retro futuristic environment. High detail textures, realistic lighting and shading, perfectly symmetrical composition. ',
				male_prompt:
					'Handsome male android with a white and blue design, decorated with panels, wires, gears, and highlighted by a vibrant retro futuristic environment. High detail textures, realistic lighting and shading, perfectly symmetrical composition. ',
				images: ['https://replicate.delivery/pbxt/BLfIOWfZt0oWNEFNOZwLzNucGmgNgIPAS9eJfRS3ZyUggnuCB/out-0.png'],
			},
			'retro robotic': {
				summary: 'retro robotic',
				camera: '',
				tags: ['futuristic', 'android', 'panels', 'lines', 'vibrant'],
				female_prompt:
					'Beautiful female android with a retro-futuristic design, detailed white and blue decorations, panels, cables, connection lines and gears. Set in a vibrant background of vivid colors and dreamy environment. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme detail.',
				male_prompt:
					'Handsome male android with a retro-futuristic design, detailed white and blue decorations, panels, cables, connection lines and gears. Set in a vibrant background of vivid colors and dreamy environment. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality. Soft lighting and extreme detail.',
				images: ['https://replicate.delivery/pbxt/XsVUIApV9i4NFtwaboreIMkjrKWg0tVDqDqX2aPA7jK890VIA/out-0.png'],
			},
			'robot assassin': {
				summary: 'robot assassin',
				camera: '',
				tags: ['fantasy', 'cyborg', 'macrame', 'modern', 'technology'],
				female_prompt:
					'Mysterious female cyborg assassin crafted from intricate computer cable macrame, menacing gaze and composed of dark metallic tones and chrome. High tech weaponry and advanced engineering, futuristic warriors with modern design elements, dynamic composition and sharp details.',
				male_prompt:
					'Fearsome male cyborg assassin constructed from elaborate computer cable macrame, hardened grimace and composed of deep steel shades and chrome. High tech artillery and innovative engineering, futuristic soldiers with modern design elements, dynamic composition and sharp details.',
				images: ['https://replicate.delivery/pbxt/B44PDgGZ79oFBNk8dFqGLko70pXRDuv6q1peLBHQ6meP7prQA/out-0.png'],
			},
			'robot mechanic': {
				summary: 'robot mechanic',
				camera: '',
				tags: ['mechanic', 'futuristic', 'ambient', 'eerie', 'shadow'],
				female_prompt:
					'Award-winning art by Mike Mignola, Andreas Rocha and Jérôme Comentale featuring a female mechanic dressed in blue jeans, white t-shirt, checkered open shirt and a dirty baseball cap. She is soldering cables on a tall and slender modern humanoid robot in a futuristic cluttered garage. Amazing volumetric ambient light, dark and eerie dreamy mystic atmosphere. Fabulous light and shadows with a broken dot matrix printer in the foreground.',
				male_prompt:
					'Award-winning art by Mike Mignola, Andreas Rocha and Jérôme Comentale featuring a male mechanic dressed in blue jeans, white t-shirt, checkered open shirt and a dirty baseball cap. He is soldering cables on a tall and slender modern humanoid robot in a futuristic cluttered garage. Amazing volumetric ambient light, dark and eerie dreamy mystic atmosphere. Fabulous light and shadows with a broken dot matrix printer in the foreground.',
				images: ['https://replicate.delivery/pbxt/onD7DLxbOy5MAF6AYeRqdEeBXoqhFtOeIqQCaQbMffWjdPdFC/out-0.png'],
			},
			'robot portrait': {
				summary: 'robot portrait',
				camera: '',
				tags: ['robot', 'ghost in the shell', 'prosthetic', 'futuristic', 'authentic'],
				female_prompt:
					'Striking female robot, Ghost in the Shell style, sophisticated prosthetics and cybernetic armor accents, photorealistic square view with rich detail and technical expression. Authentic and futuristic styling with a hint of nostalgia. ',
				male_prompt:
					'Impressive male robot, Ghost in the Shell style, rugged cybernetic armor accents and advanced prosthetics, photorealistic square view with rich detail and technical expression. Authentic and futuristic styling with a hint of nostalgia. ',
				images: ['https://replicate.delivery/pbxt/MWKEreix6IwJVyXfNvshhcFziN9EntAbfSouJeFPTeCZNPdFC/out-0.png'],
			},
			'robot surgery': {
				summary: 'robot surgery',
				camera: 'High definition camera with crisp detail',
				tags: ['medical', 'futuristic', 'robotics', 'injury', 'high definition'],
				female_prompt: 'Injured beautiful  woman laid on an operating table, futuristic robotic female surgeon performing surgery with a scalpel, high-tech background, photorealistic quality, crisp details, and HD image resolution. ',
				male_prompt: 'Injured handsome man laid on an operating table, futuristic robotic male surgeon performing surgery with a scalpel, high-tech background, photorealistic quality, crisp details, and HD image resolution. ',
				images: ['https://replicate.delivery/pbxt/sceWRJBkuwwaZifpHq9NdMiFtr6D02IoIO5Egdh5eftBznuCB/out-0.png'],
			},
			'robotic fox': {
				summary: 'robotic fox',
				camera: '',
				tags: ['digital art', 'anthro', 'robotic', 'cybernetics', 'hidden blades'],
				female_prompt: 'Female anthropomorphic fox with robotic prosthetics and hidden blades, feminine body with wide hips, digital 2D art in vivid colors and captivating design. Imaginative composition and high-quality details.',
				male_prompt: 'Male anthropomorphic fox with robotic prosthetics and concealed weapons, masculine body with broad shoulders, digital 2D art in vivid colors and captivating design. Imaginative composition and high-quality details.',
				images: ['https://replicate.delivery/pbxt/8Eb3af9K3pT4Uq0d1RLjoN1D2ORxasheATJ1aSpvyX0g1prQA/out-0.png'],
			},
			'robotic surgery': {
				summary: 'robotic surgery',
				camera: 'High Definition',
				tags: ['operating table', 'futuristic', 'technology', 'photorealistic', 'crisp'],
				female_prompt: 'Beautiful injured  woman is laid on an operating table, robotic female surgeon is performing surgery with a scalpel, futuristic styling, technological background, photorealistic, crisp detail and high definition.',
				male_prompt: 'Handsome injured man is laid on an operating table, robotic male surgeon is performing surgery with a scalpel, futuristic styling, technological background, photorealistic, crisp detail and high definition. ',
				images: ['https://replicate.delivery/pbxt/mrSelk8iw6QRJa2Prpripe4vHJiTRrMNliRV95UHtTAo8prQA/out-0.png'],
			},
			'rococo portrait': {
				summary: ' rococo portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'animals', 'acrylic', 'detailed'],
				female_prompt:
					'Gorgeous woman with tranquil expression, peaceful innocence and long flowing hair. Liquid Rococo fractal inspired by James Jean and Rutkowski, fluid acrylics with elegant gradients and intricate depth. Kaluta inspired detailed eyes and hyperrealistic texture created through watercolored pencils by Rutkowski. Beautiful kingfisher catching a fish in cinematic lighting.',
				male_prompt:
					'Handsome man with tranquil expression, peaceful innocence and long flowing hair. Liquid Rococo fractal inspired by James Jean and Rutkowski, fluid acrylics with elegant gradients and intricate depth. Kaluta inspired detailed eyes and hyperrealistic texture created through watercolored pencils by Rutkowski. Beautiful kingfisher catching a fish in cinematic lighting.',
				images: ['https://replicate.delivery/pbxt/7doe49PnjzRDQ6z0fBzFpqR6YSoB1MEaxaAueG9IQWubwTXhA/out-0.png'],
			},
			'rollick shopping': {
				summary: 'rollick shopping',
				camera: '',
				tags: ['portrait', 'online', 'shopping', 'modern', 'technology'],
				female_prompt:
					'Vibrant portrait of a woman, happily shopping for RVs on an online marketplace, Rollick. Colorful backdrop with the latest technology and modern lifestyle elements. Creative and inspiring composition with sharp details and vivid colors. ',
				male_prompt: 'A man using Rollick online to shop for RVs, looking optimistic and determined. Colorful backdrop with the latest technology and modern lifestyle elements. Creative and inspiring composition with sharp details and vivid colors.',
				images: ['https://replicate.delivery/pbxt/6QABiy5Guh6WPB7rP6UWN8ouSvF8knXcBi1NfkUh0lyP90VIA/out-0.png'],
			},
			'roman portrait': {
				summary: 'roman portrait',
				camera: '200mm lens',
				tags: ['portrait', 'Roman', 'armor', 'intricate', 'award winning'],
				female_prompt:
					'Beautiful woman in Roman armor with intricately-detailed armor, detailed textures, and hyper-realistic render. Award-winning photography featuring depth of field, HDR, 8K octane, Unreal engine quality visuals and advanced post-production techniques such as anti-aliasing, FKAA, TXAA, RTX, SSAO, shaders (OpenGL/GLSL), post processing effects and CGI. ',
				male_prompt:
					'Handsome man in Roman armor with intricately-detailed armor, detailed textures and hyper-realistic render. Award-winning photography featuring depth of field, HDR, 8K octane Unreal engine quality visuals and advanced post-production techniques such as anti aliasing FKAA, TXAA RTX SSAO shaders (OpenGL/GLSL) post processing effects and CGI.',
				images: ['https://replicate.delivery/pbxt/l8VEtqN7abLpLhcVhxkF0AJZwPwb54s7eBW4i8ftIZin5prQA/out-0.png'],
			},
			'romantic fantasy': {
				summary: 'romantic fantasy',
				camera: '',
				tags: ['fantasy', 'romantic', 'outdoor', 'castle', 'photorealistic'],
				female_prompt:
					'Stunning romantic fantasy portrait of an attractive beautiful woman with long brown hair, wearing a long white dress and kissing her passionate handsome man in a frock coat. The scene is set in a dreamy outdoor castle background with lots of detailed elements, photorealistic oil painting style. ',
				male_prompt:
					'Handsome romantic fantasy portrait of an attractive passionate man with short brown hair, wearing a frock coat and kissing his beautiful cute woman. The scene is set in a dreamy outdoor castle background with lots of detailed elements, photorealistic oil painting style. ',
				images: ['https://replicate.delivery/pbxt/QUsAonEbZhZ6D52mUiN1BUMLWuGXFJwdugFmIsmrJa7ne0VIA/out-0.png'],
			},
			'rougarou portrait': {
				summary: 'rougarou portrait',
				camera: '',
				tags: ['fantasy', 'humanoid', 'wolf', 'clothing', 'realistic'],
				female_prompt:
					'Fantasy Rougarou female, wearing traditional Japanese garb and a humanoid wolf silhouette. Adorned with realistic fur and intricate details, this middle class citizen evokes a captivating DND character art with HD16K quality. ',
				male_prompt: 'Fantasy Rougarou male, wearing Asian-style garments and a bipedal wolf silhouette. Adorned with realistic fur and intricate details, this middle class citizen evokes a captivating DND character art with HD16K quality. ',
				images: ['https://replicate.delivery/pbxt/CjrEjyec27xLAS8qndpURVxpzGb4d4Qw6eBqzLRRlbvy5prQA/out-0.png'],
			},
			'rousseau jungle': {
				summary: 'rousseau jungle',
				camera: '',
				tags: ['silhouette', 'jungle', 'mountain', 'nature', 'expressionist'],
				female_prompt:
					"Striking color drawing of a woman's silhouette trecking through the untamed jungle with wild plants, trees and animals, and snowy mountains in the background. Artistic expression inspired by the works of Henry Rousseau, completely isolated on a white background. ",
				male_prompt:
					"Impressive color drawing of a man's silhouette marching through the wild landscape filled with vegetation, wildlife and mountains. Artistic expression inspired by the works of Henry Rousseau, completely isolated on a white background. ",
				images: ['https://replicate.delivery/pbxt/1IQ7CeVSmaRaCSNYVFRrJAcJW9kFsf2vFr2iGH7f0DefoPdFC/out-0.png'],
			},
			'royal portrait': {
				summary: 'royal portrait',
				camera: '',
				tags: ['portrait', 'gothic', 'oil painting', 'surreal', 'classical'],
				female_prompt:
					'Regal portrait of a queen tsarina, with long braids, black uniform and an elaborate European gothic crown. Ominous facial expression and sharp features, porcelain skin, face paint with hint of horror and symmetry. Masterful blend of impressionism and chiaroscuro, classical painting style reminiscent of Edmund Blair Leighton, HR Giger, Zdislav Beksinski and Henri de Toulouse-Lautrec. Surreal atmosphere enhanced by foggy background and sparks. ',
				male_prompt:
					'Majestic portrait of a king tsar, with a grand gothic crown. Assertive facial expression and strong features illuminated by oil painting technique in shades of black and gold. Masterful blend of impressionism and chiaroscuro, classical painting style reminiscent of Edmund Blair Leighton, HR Giger, Zdislav Beksinski and Henri de Toulouse-Lautrec. Surreal atmosphere enhanced by foggy background and sparks. ',
				images: ['https://replicate.delivery/pbxt/qbZxNhsXtKLOKRcHnIVi1Lf39pl29aWb2mXRUClnMkh970VIA/out-0.png'],
			},
			's in hot springs': {
				summary: 's in hot springs',
				camera: 'wide angle lens 8K HDR',
				tags: ['official', '', 'hot springs', 'dymanic', 'HDR8k'],
				female_prompt:
					'Stunning  woman with blue eyes, wading through a hot spring with a ratty tube top and short shorts. Plunging neck line and wide angle full shot, side facing shot, photography. Gorgeous detailed blue eyes, messy  hair and dynamic pose. Perfect shading and cinematic composition, elaborate cinematic lighting and dramatic HDR 8K quality.',
				male_prompt:
					'Handsome male model with blond hair and blue eyes, wading through a hot spring with a ratty tube top and short shorts. Plunging neck line and wide angle full shot, side facing shot, photography. Gorgeous detailed blue eyes, messy  hair and dynamic pose. Perfect shading and cinematic composition, elaborate cinematic lighting and dramatic HDR 8K quality.',
				images: ['https://replicate.delivery/pbxt/xq0mwXWbTdYsKNJI2w6R0xwOyw6g1YdIWeqmSAk8Se213prQA/out-0.png'],
			},
			'melancholic mood': {
				summary: 'melancholic mood',
				camera: '',
				tags: ['portrait', 'mature', 'gentleman', 'sadness', 'subtle'],
				female_prompt: 'Patient lady with a sorrowful expression, subtle melancholic atmosphere, and gentle light. Intimate portrait of a wise soul with emotion-filled eyes, dignified poise, and somber hues. ',
				male_prompt: 'Patient gentleman with a sorrowful expression, subtle melancholic atmosphere, and gentle light. Intimate portrait of a wise soul with emotion-filled eyes, dignified poise, and somber hues. ',
				images: ['https://replicate.delivery/pbxt/QRdag8jeoVQpQKFSzJApFOLhTllXwqAxsR3uHDhTzeWL5prQA/out-0.png'],
			},
			'sad expression': {
				summary: 'sad expression',
				camera: '',
				tags: ['portrait', 'realistic', 'dot matrix', 'sadness'],
				female_prompt: 'Sad expression of a woman, realistic photography with subtle dot matrix, LITA CABELLUT and MIQUEL BARCELÓ style. ',
				male_prompt: 'Sad expression of a man, realistic photography with subtle dot matrix, LITA CABELLUT and MIQUEL BARCELÓ style. ',
				images: [
					'https://replicate.delivery/pbxt/DydZ0KkeD6zQZCbXIEMdFVNMUzMnV2l57H7PWAv6xGBefIYhA/seed-49613.png',
					'https://replicate.delivery/pbxt/6eewtRm9NLqYo08ctdzWyUyiZJoBtszcIRrZyWuww4RrpEsQA/seed-2235.png',
					'https://replicate.delivery/pbxt/hhwIKqRyyVYgB9pCHDu6W1MTfKjafsq2zs3Acf6EGNkeiSwCB/seed-63968.png',
				],
			},
			'samurai fantasy': {
				summary: 'samurai fantasy',
				camera: '',
				tags: ['samurai', 'cherry blossom', 'Japanese', 'fantasy', 'intricate'],
				female_prompt:
					'Ferocious female samurai with intricate armor, deadly katana, and a beautiful cherry blossom tree backdrop. Elegant brushwork of legendary artists Yoshitaka Amano and Kazuma Kaneko. Stunning scene of samurai battling the elements, Japanese mythical creatures, and enigmatic symbols. ',
				male_prompt:
					'Fearless male samurai with elaborate armor and a powerful katana wielding strength. Finest brushwork of legendary artists Yoshitaka Amano and Kazuma Kaneko. Epic scene of samurai battling the elements, Japanese mythical creatures, and enigmatic symbols. ',
				images: ['https://replicate.delivery/pbxt/aL2flIGIhgzsHy4G8A53jMec0uZFGX1mIRAG5gOI0PhS8prQA/out-0.png'],
			},
			'samurai portrait': {
				summary: 'samurai portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'epic', 'armour', 'cherry blossom'],
				female_prompt:
					'Ferocious female samurai with intricate armor and deadly katana, standing beneath a cherry blossom tree, illuminated by moonlight, in an epic composition crafted by Yoshitaka Amano and Kazuma Kaneko. Detailed artwork with vibrant colors, dynamic lighting, and bold character.',
				male_prompt:
					'Mighty male samurai with intricate armor and lethal katana, standing beneath a cherry blossom tree, illuminated by moonlight, in an awe-inspiring composition crafted by Yoshitaka Amano and Kazuma Kaneko. Detailed artwork with vibrant colors, dynamic lighting, and audacious character.',
				images: ['https://replicate.delivery/pbxt/n4uauWJFpQ7OAtnopFk00nahaoareDcIfe3vHfne80yede0VIA/out-0.png'],
			},
			'samurai warrior': {
				summary: 'samurai warrior',
				camera: '',
				tags: ['samurai', 'armor', 'katana', 'cherry blossom', 'traditional'],
				female_prompt:
					"Fierce female samurai clad in intricate armor with a deadly katana, standing beneath a cherry blossom tree, inspired by Yoshitaka Amano and Kazuma Kaneko's artwork. With a unique blend of traditional and modern art style, realistic texture and shading, vibrant color palette and extravagant details. ",
				male_prompt:
					"Powerful male samurai in complex armor, armed with a lethal katana, standing below a cherry blossom tree, crafted in the spirit of Yoshitaka Amano and Kazuma Kaneko's art. With a special mix of traditional and modern art style, realistic texture and shading, vibrant color palette and lavish details. ",
				images: ['https://replicate.delivery/pbxt/aky9trwO5obVJZYiusQdetT1a5jarYfH7tTvapWdFj5N7prQA/out-0.png'],
			},
			'satisfied portrait': {
				summary: 'satisfied portrait',
				camera: 'Hasselblad 24mm lens',
				tags: ['full body', 'natural skin', 'portrait', 'detailed eyes', 'dreadlocks'],
				female_prompt:
					'Gorgeous full-body shot of an African woman with natural skin, no makeup, detailed eyes, and long dreadlocks. Her expression is one of satisfaction and joy. Photographed with Hasselblad camera and 24mm lens for best resolution possible.',
				male_prompt: 'Handsome full-body shot of a man with natural skin, no makeup, detailed eyes, and long dreadlocks. His expression is one of satisfaction and joy. Photographed with Hasselblad camera and 24mm lens for best resolution possible.',
				images: ['https://replicate.delivery/pbxt/7ymmPqB8MjKHIF1kfXpJWrw6RfSv0vNj39qtYfFEOg4v5TXhA/out-0.png'],
			},
			'savage sketch': {
				summary: 'savage sketch',
				camera: '',
				tags: ['silhouette', 'monstrous', 'scenery', 'painting', 'watercolor'],
				female_prompt:
					'Tiny silhouette of a woman amidst a sprawling landscape, captivating view of a massive rabbit monster looming above her. Vivid watercolor sketch painting, inspired by Laurie Greasley, Studio Ghibli, Akira Toriyama, James Gilleard and Genshin Impact. Trending fanbox artwork on Pixiv and ArtStation, with an acrylic palette knife painting technique in vibrant colors and 4K resolution.',
				male_prompt:
					'Tiny silhouette of a man amidst a sprawling landscape, captivating view of a massive rabbit monster looming above him. Vivid watercolor sketch painting, inspired by Laurie Greasley, Studio Ghibli, Akira Toriyama, James Gilleard and Genshin Impact. Trending fanbox artwork on Pixiv and ArtStation, with an acrylic palette knife painting technique in vibrant colors and 4K resolution.',
				images: ['https://replicate.delivery/pbxt/eLXRKUcUfktqdkibSw0YM50ZMVGTOqBKCWZdU6GWb71u5prQA/out-0.png'],
			},
			'sci-fi art': {
				summary: 'sci-fi art',
				camera: 'UHD Cinematic closeup detail',
				tags: ['art', 'scifi', 'space', 'military', 'cyborg'],
				female_prompt:
					'Stunning art by Raymond Swanland, Digital Photography UHD Cinematic closeup detail of female military space pilots in ornate cyborg armor surrounded by crew woman operating computer display screens. Motion blur, weather: dramatic theatrical futuristic sci fi lighting, sleek, powerful, luxury, professional color grading, hyper stylized 8k.',
				male_prompt:
					'Impressive art by Raymond Swanland, Digital Photography UHD Cinematic closeup detail of male military space pilots in ornate cyborg armor surrounded by crew man operating computer display screens. Motion blur, weather: dramatic theatrical futuristic sci fi lighting, sleek, powerful, luxury, professional color grading, hyper stylized 8k.',
				images: ['https://replicate.delivery/pbxt/BKfQoeuM7JkDq0BvvGB3CuUxt5vIEnOhsPcq3rC1Hfyy4TXhA/out-0.png'],
			},
			'scientist painting': {
				summary: 'scientist painting',
				camera: '',
				tags: ['portrait', 'oil painting', 'palette knife', 'scientist', 'vibrant'],
				female_prompt: 'Awe-inspiring oil painting of a female scientist, with bold and vibrant brushstrokes, dynamic composition, and intricate details. Utilizing a palette knife to create an expressive texture and lifelike color gradation.',
				male_prompt: 'Charming oil painting of a male scientist, with bold and vibrant brushstrokes, dynamic composition, and intricate details. Utilizing a palette knife to create an expressive texture and lifelike color gradation.',
				images: ['https://replicate.delivery/pbxt/KH7hb745bVZzEBzCgGTM08IJH1kdDlK8j5XRavaKDqkte0VIA/out-0.png'],
			},
			'scientist portrait': {
				summary: 'scientist portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'redhead', 'square'],
				female_prompt: 'Alluring woman, scientist, stylish hairdo, vivid red hair, sharp and precise facial features. Captivating gaze that captures the viewer with its intensity. ',
				male_prompt: 'Handsome man, scientist, fashionably coiffed hair, fiery red hair and a striking presence. Mesmerizing stare that engages the audience with its intensity.',
				images: ['https://replicate.delivery/pbxt/8dYwh7cXex1WHayTZewQvAs5QlQxCy9nx4EZ7Z1eSsX5yTXhA/out-0.png'],
			},
			'scifi hangar': {
				summary: 'scifi hangar',
				camera: 'Digital Photography UHD Cinematic Closeup',
				tags: ['spaceship', 'futuristic', 'scifi', 'crewmember', 'animated'],
				female_prompt:
					'Digital Photography UHD Cinematic closeup of a female crewmember servicing a spaceship in a vast hangar full of red scifi anime and insect influenced designed attack spaceships. Diverse cast of red astronaut kabuki styled sci-fi pilots running towards their futuristic scifi cyberpunk anime influenced Kabuki styled spaceships, with dramatic theatrical futuristic sci fi lighting, sleek, powerful, luxury, professional color grading, hyper stylized 8K. Surrounded by crew woman in ornate cyborg armor who have recieved orders to launch their spaceships and operate computer display screens that are glowing.',
				male_prompt:
					'Digital Photography UHD Cinematic closeup of a male crewmember servicing a spaceship in a vast hangar full of red scifi anime and insect influenced designed attack spaceships. Diverse cast of red astronaut kabuki styled sci-fi pilots running towards their futuristic scifi cyberpunk anime influenced Kabuki styled spaceships, with dramatic theatrical futuristic sci fi lighting, sleek, powerful, luxury, professional color grading, hyper stylized 8K. Surrounded by crew men in ornate cyborg armor who have recieved orders to launch their spaceships and operate computer display screens that are glowing.',
				images: ['https://replicate.delivery/pbxt/aGj2LJDHoqIsBRfnsWmwgT3ZdHileQgipuKc09F0HmOi4prQA/out-0.png'],
			},
			'scifi launch': {
				summary: 'scifi launch',
				camera: 'Digital Photography UHD',
				tags: ['space', 'futuristic', 'luxury', 'professional', 'cyberpunk'],
				female_prompt:
					"Dramatic cinematic closeup of female crewmember servicing a spaceship. Japanese actresses in majestic kabuki-styled costumes, surrounded by ornate cyborg armor, in the hangar of an evil Empress's star ship. Recieving orders to launch their sleek, powerful and luxurious spaceships with dramatic theatrical futuristic lighting. Hyper stylized 8K motion blur with professional colour grading.",
				male_prompt:
					"Cinematic closeup of male crewmembers servicing a spaceship. Japanese actors in majestic kabuki-styled costumes, surrounded by ornate cyborg armor, in the hangar of an evil Empress's star ship. Recieving orders to launch their sleek, powerful and luxurious spaceships with dramatic theatrical futuristic lighting. Hyper stylized 8K motion blur with professional colour grading.",
				images: ['https://replicate.delivery/pbxt/ZZ2fAHDPOo0sQ6ImeO38lue2tLQrj93lZffHK6kl0g4OdPdFC/out-0.png'],
			},
			'scifi portrait': {
				summary: 'scifi portrait',
				camera: '',
				tags: ['portrait', 'sci-fi', 'power armor', 'futuristic', 'dramatic'],
				female_prompt: 'Beautiful woman in futuristic sci-fi power armor, sleek and sophisticated design, high detail and texture. Rich colors, intricate details with special effects, vibrant lighting and dramatic composition. ',
				male_prompt: 'Handsome man in futuristic sci-fi power armor, sleek and sophisticated design, high detail and texture. Rich colors, intricate details with special effects, vibrant lighting and dramatic composition. ',
				images: ['https://replicate.delivery/pbxt/DynreDAE221CQiRhXqnzfsFzuUNNTZhXY05g7GsEvoCi6prQA/out-0.png'],
			},
			'sea elf portrait': {
				summary: 'sea elf portrait',
				camera: 'High Quality Cinematography',
				tags: ['portrait', 'fantasy', 'blue skin', 'market', 'trident'],
				female_prompt:
					'Beautiful Sea Elf woman with blue skin and green hair walking through a colorful, crowded market, wielding a trident. High quality cinematography with hyper realistic composition and volumetric lighting. Dungeon and Dragons fantasy-inspired artwork.',
				male_prompt:
					'Handsome Sea Elf man with blue skin and green hair walking through a vibrant, bustling market, holding a trident. High quality cinematography with hyper realistic composition and volumetric lighting. Dungeon and Dragons fantasy-inspired artwork.',
				images: ['https://replicate.delivery/pbxt/iJoyhJqJVgqFLF7qnSbwC0Sf4umpb4gYCA6wBIqf07ob8prQA/out-0.png'],
			},
			'seapunk character': {
				summary: 'seapunk character',
				camera: 'Vray Render & Volumetric Lighting for Post-Processing & Sharp Focus',
				tags: ['character design', 'intricate', 'cybernetic', 'action scene', 'epic'],
				female_prompt:
					'Gorgeous character design of a woman with jagged broken teeth, wicked grin, intricate floral embroidery, cybernetic eyes, heavily lined and wrinkled face, spiked pauldrons, glowing details and ultrafine detail. Epic cinematic lighting creates an electrifying action scene with a seapunk, salvagepunk and cyberpunk art style with a Vray render and volumetric lighting, postprocessing and sharp focus.',
				male_prompt:
					'Highly detailed character design of a man with jagged broken teeth, wicked grin wearing a red and blue tunic, intricate floral embroidery, cybernetic eyes and heavily lined wrinkled haggard face. Spiked pauldrons complete the look with glowing details for an ultrafine detail. Epic cinematic lighting adds to the electrifying action scene in seapunk, salvagepunk and cyberpunk art style with a Vray render and volumetric lighting for postprocessing results in sharp focus.',
				images: ['https://replicate.delivery/pbxt/1QoYltXTgiaAOFLVpiTVPs6bKw9kdSqxbxSK3JNeelHB7prQA/out-0.png'],
			},
			'secret agent': {
				summary: 'secret agent',
				camera: 'Sony IMX582, f/1.8 ISO 500',
				tags: ['portrait', 'official', 'full body', 'neon', 'dramatic'],
				female_prompt:
					'Young and beautiful female secret agent with luxurious hair, ultra detailed full body shot in a peeking pose. Neon street background lit from below with mystical lighting, hiding behind an old phone booth. She is determined to succeed in her mission, wearing an elegant business suit with a red pencil skirt to conceal her true identity. Extremely realistic ultra-detailed phototograph with dramatic light, ultra sharp, natural lighting and realistic fogged atmosphere. ',
				male_prompt:
					'Dashing young male secret agent with stylish hair, full body shot in a peeking pose. Neon street background lit from below with mystical lighting, hiding behind an old phone booth. He is determined to succeed in his mission, wearing a sophisticated suit to conceal his true identity. Extremely realistic ultra-detailed phototograph with dramatic light, ultra sharp, natural lighting and realistic fogged atmosphere. ',
				images: ['https://replicate.delivery/pbxt/8UHZyq60hlIfRiEGcq0qcFrQegOy1k2UDf1jhXAGvfRAinuCB/out-0.png'],
			},
			'sepulcher investigation': {
				summary: 'sepulcher investigation',
				camera: '',
				tags: ['fantasy', 'pulp fantasy', 'adventure', 'gothic', 'eerie'],
				female_prompt:
					"Female cleric exploring an abandoned sepulcher, gothic architecture, skeletons, ghouls, and cobwebs. Illuminated by torch-light, a surreal scene of eerie adventure and fantasy inspired by Victor Brauner, Lucas Cranach and Todd Schorr's artwork.",
				male_prompt: "Halfling fighter and elven wizard investigating a lost sepulcher. Gothic ambience with skeletons, ghouls, cobwebs and torch-light. An epic pulp fantasy inspired by Victor Brauner, Lucas Cranach and Todd Schorr's artwork.",
				images: ['https://replicate.delivery/pbxt/W3MWfdRCeuozD0W4etnJIeCWShHvyn5Ccv2EURNFJz9rLnuCB/out-0.png'],
			},
			'sepulcher mission': {
				summary: 'sepulcher mission',
				camera: '',
				tags: ['adventure', 'fantasy', 'pulp', 'gothic', 'eerie'],
				female_prompt:
					'Powerful female cleric leading a group of adventurers in a suspenseful mission to explore an abandoned sepulcher with skeletons, ghouls, and cobwebs illuminated by torchlight. Gothic style with eerie atmosphere, fantasy adventure inspired by art of Thomas Hart Benton, George Hurrell and Hugh Ferriss.',
				male_prompt:
					'Brave male halfling fighter and clever elf wizard accompany a powerful female cleric on an adventurous mission to explore an abandoned sepulcher with skeletons, ghouls, and cobwebs illuminated by torchlight. Gothic style with eerie atmosphere, fantasy adventure inspired by art of Thomas Hart Benton, George Hurrell and Hugh Ferriss.',
				images: ['https://replicate.delivery/pbxt/dT6TYziMpWZxM9kt41DS8XokafxokDuScbfeWa8lhFEIzTXhA/out-0.png'],
			},
			'shamrock art': {
				summary: 'shamrock art',
				camera: '',
				tags: ['fantasy', 'anthropomorphic', 'winged', 'bright', 'whimsical'],
				female_prompt: 'Adorable anthropomorphic female shamrock with bright shamrock wings perched on a grapevine branch. Vibrant colors, intricate details and whimsical fantasy art design. By Boris Valleyo and Tom Bagshaw.',
				male_prompt: 'Handsome anthropomorphic male shamrock with colorful shamrock wings sitting on a grapevine branch. Vibrant colors, intricate details and whimsical fantasy art design. By Boris Valleyo and Tom Bagshaw.',
				images: ['https://replicate.delivery/pbxt/MQpUB8JxsXItF5Y9dNtYcvTjoFDCXnL8MWkQZ9apEvf080VIA/out-0.png'],
			},
			'shamrock bloom': {
				summary: 'shamrock bloom',
				camera: '8K resolution, cinematic lighting',
				tags: ['portrait', 'high fashion', 'cyberpunk', 'LED', 'couture'],
				female_prompt:
					'Striking high fashion female model wearing the latest intricate floral shamrock bloom with illuminated bionic cyberpunk fiber optic LED filigree wires. Highly detailed and glamorous couture look, 8K resolution, cinematic lighting. ',
				male_prompt:
					'Handsome high fashion male model wearing the latest intricate floral shamrock bloom with illuminated bionic cyberpunk fiber optic LED filigree wires. Highly detailed and glamorous couture look, 8K resolution, cinematic lighting. ',
				images: ['https://replicate.delivery/pbxt/gdJ7ij0D94avCR20M4dWkveKm5kNHhe7ceYQVAi8WNxbxTXhA/out-0.png'],
			},
			'shamrock dance': {
				summary: 'shamrock dance',
				camera: '',
				tags: ['portrait', 'fantasy', 'floral', 'irish', 'dancing'],
				female_prompt: 'Vibrant red-haired woman in a shamrock dress, dancing joyfully in a lush Irish meadow, surrounded by golden flowers and fields. Natural lighting, fantasy elements, and vivid hues bring the scene to life.',
				male_prompt: 'Handsome man with bright red hair in a shamrock dress, dancing merrily in a beautiful Irish meadow with vibrant colors. Natural lighting, fantasy elements, and vivid hues bring the scene to life.',
				images: ['https://replicate.delivery/pbxt/eqhqfaZJGNohAE0oa0RV9OVYBf5jhXmtcQZE1FSeUv2avnuCB/out-0.png'],
			},
			'shamrock fantasy': {
				summary: 'shamrock fantasy',
				camera: '',
				tags: ['anthropomorphic', 'fantasy', 'wings', 'vivid colors', 'grapevine'],
				female_prompt:
					"Adorable anthropomorphic female shamrock with vibrant shamrock wings perched on a grapevine branch. Artistic combination of Boris Valleyo and Tom Bagshaw's styles, dreamlike atmosphere, captivating details, soft light and vivid colors.",
				male_prompt:
					"Charming anthropomorphic male shamrock with twinkling shamrock wings perched on a grapevine branch. Artistic combination of Boris Valleyo and Tom Bagshaw's styles, dreamlike atmosphere, captivating details, soft light and vivid colors.",
				images: ['https://replicate.delivery/pbxt/mzWCN9OI6FZpMNUb55jdmunrt2Hx3orRBohfqOps2sVV70VIA/out-0.png'],
			},
			'shamrock fashion': {
				summary: 'shamrock fashion',
				camera: '',
				tags: ['singing', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Joyful female singing with head thrown back, surrounded by botanical academia and shamrock-inspired fashion. Holographic and metallic tones, pot of gold, Lisa Frank-inspired colors, stunning rainbow background in the style of James Jean and Alberto Seveso. ',
				male_prompt:
					'Handsome male singing with head thrown back, surrounded by botanical academia and shamrock-inspired fashion. Holographic and metallic tones, pot of gold, Lisa Frank-inspired colors, stunning rainbow background in the style of James Jean and Alberto Seveso. ',
				images: ['https://replicate.delivery/pbxt/MLhgIxSma04tD9ABPf8LmuebFWd04TAT1c3WghOE99Fq3prQA/out-0.png'],
			},
			'shamrock portrait': {
				summary: 'shamrock portrait',
				camera: 'Kuvshinov Ilya',
				tags: ['portrait', 'closeup', 'glowing', 'iridescent', 'crystalline'],
				female_prompt:
					'Extreme closeup of a woman with glowing shamrock eyes and long pastel pink crystalline diamond-textured hair, beam of sunlight, by Kuvshinov Ilya. Hypnotic beauty with iridescent hues, radiant lights, and captivating expressions. Soft focus, magical atmosphere, dreamy mood and an inviting aura.',
				male_prompt:
					'Extreme closeup of a man with glistening shamrock eyes and orange-tinted crystalline diamond-textured hair, beam of sunlight, by Kuvshinov Ilya. Hypnotic beauty with iridescent hues, radiant lights, and captivating expressions. Soft focus, magical atmosphere, dreamy mood and an inviting aura.',
				images: ['https://replicate.delivery/pbxt/vfY34sPairyDb69BaLFKMsEo2uqwi0mezk5AMKSGXtPy3prQA/out-0.png'],
			},
			'shamrock street art': {
				summary: 'shamrock street art',
				camera: '',
				tags: ['fashion', 'street art', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Gorgeous female puckering her lips with a playful look, adorned in Karrueche style street art, holographic and metallic graffiti fashion. A vibrant blend of Jean-Michel Basquiat and Alberto Seveso. A magical scene of a beautiful woman looking into the rainbow on Shamrock Street.',
				male_prompt:
					'Handsome male puckering his lips with a playful look, adorned in Karrueche style street art, holographic and metallic graffiti fashion. A vibrant blend of Jean-Michel Basquiat and Alberto Seveso. A magical scene of a handsome man looking into the rainbow on Shamrock Street.',
				images: ['https://replicate.delivery/pbxt/TJfihav9nlz1PSiH4wWMXea2I9cxceQqBnLk3xAw8VeFnnuCB/out-0.png'],
			},
			'shamrock wings': {
				summary: 'shamrock wings',
				camera: '',
				tags: ['anthropomorphic', 'magical', 'colorful', 'dynamic', 'realism'],
				female_prompt: 'Adorable anthropomorphic female shamrock with vibrant shamrock wings perched on a grapevine, by Boris Valleyo and Tom Bagshaw. Sweetheart expression, colorful details, playful atmosphere and magical realism. ',
				male_prompt: 'Handsome anthropomorphic male shamrock with dramatic shamrock wings balanced on a grapevine, by Boris Valleyo and Tom Bagshaw. Daring expression, intricate details, whimsical atmosphere and magical realism.',
				images: ['https://replicate.delivery/pbxt/ifkMqeWfWwInToED1vjyjfdyHLKszrLPrggJdd07sRAxbnuCB/out-0.png'],
			},
			'shimmering portrait': {
				summary: 'shimmering portrait',
				camera: 'No camera info given',
				tags: ['portrait', 'glowing', 'sparkling', 'iridescent', 'diamond-hair'],
				female_prompt:
					'Subsurface scattering of skin and face of a woman with glittering shimmering luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair, shamrock wind, by wlop and artgerm, strong glow.',
				male_prompt:
					'Subsurface scattering of skin and face of a man with glittering shimmering luminous iridescent opalescent glowing sparkling gleaming scintillating kaleidoscopic shining crystlline diamond-hair, shamrock wind, by wlop and artgerm, strong glow.',
				images: ['https://replicate.delivery/pbxt/oXMFOxougt4gOBaEYv0Y15gGOs4gJpJ1x49G93SAj3Yf80VIA/out-0.png'],
			},
			'silent horror': {
				summary: 'silent horror',
				camera: '',
				tags: ['portrait', 'horror', 'Lisa Frank', 'leaking skin', 'sanguine'],
				female_prompt:
					'Striking portrait of a woman with Lisa Frank inspired pastel colors, leaking skin and sanguine details. Eerie Silent Hill-esque composition with gaping maw and beautiful existential figure juxtaposed against a disturbing horror beast. Anxiety inducing and evil atmosphere, satanic and demonic imagery, gross, scary creepy and nightmare inducing.',
				male_prompt:
					'Chilling portrait of a man with Lisa Frank inspired pastel colors, leaking skin and sanguine details. Eerie Silent Hill-esque composition with gaping maw and handsome existential figure juxtaposed against a demonic horror beast. Anxiety inducing and evil atmosphere, satanic and demonic imagery, gross, scary creepy and nightmare inducing.',
				images: ['https://replicate.delivery/pbxt/WNsSfWaDD2w0ZyFdBEImcJwlJB8ORdGrvskGK6Q2e9fu1TXhA/out-0.png'],
			},
			'silhouette portrait': {
				summary: 'silhouette portrait',
				camera: '',
				tags: ['portrait', 'abstract', 'silhouette', 'sunset', 'vivid'],
				female_prompt: 'Gorgeous silhouette of a woman with abstract wave pattern, vivid sunset sky, dynamic composition and ultra resolution. Soft pastel hues and striking contrast of light and dark, hyperrealistic quality with extreme details.',
				male_prompt: 'Handsome silhouette of a man with abstract wave pattern, vivid sunset sky, dynamic composition and ultra resolution. Soft pastel hues and striking contrast of light and dark, hyperrealistic quality with extreme details.',
				images: ['https://replicate.delivery/pbxt/EzmqBfm8uCXelUqMeuZDIz5KyP4Imltr4WXePjPcBwLtrnuCB/out-0.png'],
			},
			'silhouette sunset': {
				summary: 'silhouette sunset',
				camera: '',
				tags: ['silhouette', 'sunset', 'drama', 'outline', 'pastel'],
				female_prompt: 'Beautiful feminine silhouette standing in a vibrant sunset, with shadows and hues of dusk, against a dramatic sky. Soft curves and gentle lines against a serene background, with golden highlights and pastel tones. ',
				male_prompt: 'Handsome masculine silhouette standing in a brilliant sunset, outlined by shadows and illuminated by the twilight. Strong edges and bold shapes against a tranquil backdrop, with golden highlights and pastel tones. ',
				images: ['https://replicate.delivery/pbxt/Det78d5FQWwQMiFCMBHd1gUqvOxeytecKJeVPgDKpbRDtnuCB/out-0.png'],
			},
			'silhouettes battle': {
				summary: 'silhouettes battle',
				camera: 'octane render 8k',
				tags: ['silhouette', 'battlefield', 'dirt', 'smoke', 'eerie'],
				female_prompt:
					'A collaboration between Gediminas Pranckevičius and Andy Kehoe of a silhouetted female embracing her partner in front of an epic battlefield. Dirt, trees, smoke, destruction and love create an eerie atmosphere with flames, fire and gritty textures. Grimly detailed 8K octane render for a tense yet mesmerizing view. ',
				male_prompt:
					'A collaboration between Gediminas Pranckevičius and Andy Kehoe of a silhouetted male embracing his partner in front of an epic battlefield. Dirt, trees, smoke, destruction and love create an eerie atmosphere with flames, fire and gritty textures. Grimly detailed 8K octane render for a tense yet mesmerizing view. ',
				images: ['https://replicate.delivery/pbxt/ALqahZQ5qgpGClFpphtUEC10gm647btDnAuItGnNZGVwe0VIA/out-0.png'],
			},
			'silver warrior': {
				summary: 'silver warrior',
				camera: '',
				tags: ['fantasy', 'monsters', 'warrior', 'shamrock', 'light'],
				female_prompt:
					'Award-winning artwork by Monstress, Caravaggio. Captivating female fairy warrior in shining translucent silver armor, facing off a horde of demonic monsters advancing beneath canopy of colossal shamrock leaves. Majestic ray of light emanating through the emerald roof of foliage, illuminated puddle of ambiance light, dark and eerie dreamy mystic atmosphere, foreboding doom and tranquility before the raging storm. Inspired by Moebius and Frazetta.',
				male_prompt:
					'Gripping male warrior in shining translucent silver armor, standing tall against a wave of demonic monsters below the emerald canopy of giant shamrock leaves. Majestic ray of light piercing through the sea of foliage, illuminated ambiance light with fabulous shadows and lightings. Foreboding doom with tranquil atmosphere before the raging storm. Inspired by Moebius and Frazetta.',
				images: ['https://replicate.delivery/pbxt/bPWmt66cxpJbO1SBjiSDnR6GWhTKfPDBJB7iF3GIH4Jv60VIA/out-0.png'],
			},
			'singing academia': {
				summary: 'singing academia',
				camera: '',
				tags: ['academia', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					"Joyful woman singing with her head back, utopian botanical academia, fashionable Karrueche's style with Lisa Frank touches, pot of gold and lucky shamrock holographic prints. Metallic beauty with a rainbow smile in the style of James Jean and Alberto Seveso.",
				male_prompt:
					"Cheerful man singing with his head back, beautiful botanical academia, fashionable Karrueche's style with Lisa Frank touches, pot of gold and shamrock holographic prints. Metallic brilliance with a rainbow smile in the style of James Jean and Alberto Seveso.",
				images: ['https://replicate.delivery/pbxt/manNh9Vuzqq4HpVPWLkAmSeC1Eivxj4DU6uDg9CMkdTC80VIA/out-0.png'],
			},
			'singing botanical': {
				summary: 'singing botanical',
				camera: '',
				tags: ['singing', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Cheerful woman singing with her head back, surrounded by botanical academia, wearing Karrueche, Lisa Frank, pot of gold holographic, metallic and shamrock fashion. Smiling into the rainbow in style of James Jean and Alberto Seveso. ',
				male_prompt:
					'Joyful man singing with his head back, surrounded by botanical academia, wearing Karrueche, Lisa Frank, pot of gold holographic, metallic and shamrock fashion. Smiling into the rainbow in style of James Jean and Alberto Seveso. ',
				images: ['https://replicate.delivery/pbxt/NHFGB5zrfm1bWK4e7aMMmWiXOSdvD6ESFwl2Q7CUj4cT4prQA/out-0.png'],
			},
			'singing fashion': {
				summary: 'singing fashion',
				camera: '',
				tags: ['fashion', 'botanical', 'holographic', 'metallic', 'rainbow'],
				female_prompt:
					'Beautiful woman singing, with her head back and wearing a botanical academia-inspired ensemble. She is adorned with Lisa Frank-esque, holographic, metallic and shamrock fashion. She is smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'Handsome man singing, with his head back and wearing a botanical academia-inspired ensemble. He is adorned with Lisa Frank-esque, holographic, metallic and shamrock fashion. He is smiling into the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/4Yefl82pbZtMwk9xQftEr4KR1C0VfOTGVdx7Z88gd2MsknuCB/out-0.png'],
			},
			'singing glamour': {
				summary: 'singing glamour',
				camera: '',
				tags: ['botanical', 'holographic', 'glamorous', 'fashion', 'rainbow'],
				female_prompt:
					'A beautiful woman with her head thrown back in song, sitting in a botanical academy surrounded by vibrant colors and textures. Karrueche, Lisa Frank, and shamrock fashion blend together in a pot of gold and holographic tones with a metallic sheen. She smiles into the rainbow in the style of James Jean and Alberto Seveso.',
				male_prompt:
					'A handsome man with his head thrown back in song, sitting in a botanical academy surrounded by vibrant colors and textures. Karrueche, Lisa Frank, and shamrock fashion blend together in a pot of gold and holographic tones with a metallic sheen. He smiles into the rainbow in the style of James Jean and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/6JZFMHdbNk6FHBfvww6SSBt8HkNWCffaUVtMWuZBStfcwnuCB/out-0.png'],
			},
			'siren afropunk': {
				summary: 'siren afropunk',
				camera: '',
				tags: ['portrait', 'glitch', 'siren', 'vibrant', 'afropunk'],
				female_prompt:
					'Striking afropunk siren portrait of a female with dark skin, art inspired by Greg Tocchini, Kaethe Butcher, Yoji Shinkawa, Ashley Wood, Pino Daeni and Takehiko Inoue. Bold glitch art with vibrant colors and detailed facial features.',
				male_prompt:
					'Dramatic afropunk siren portrait of a male with dark skin, art inspired by Greg Tocchini, Kaethe Butcher, Yoji Shinkawa, Ashley Wood, Pino Daeni and Takehiko Inoue. Bold glitch art with vibrant colors and detailed facial features.',
				images: ['https://replicate.delivery/pbxt/OKHMZPXJCfSbaC12CNGsXtf9jWYjdfgviUOLaOr0IFVk0TXhA/out-0.png'],
			},
			'sly sorceress': {
				summary: 'sly sorceress',
				camera: 'Photorealism 8K Quality',
				tags: ['sorceress', 'cyberpunk', 'darkside', '8K', 'detailed'],
				female_prompt:
					'Sly, alluring and mysterious woman with pale skin, black hair in a short ponytail and red eyes. Cyberpunk armor with photorealistic 8K quality and dramatic lighting providing dark contrast. Extradimensional glowing lumen reflections, post processing, insanely detailed and intricate design. Elegant and super detailed.',
				male_prompt:
					'Sly, alluring and mysterious man with pale skin, black hair in a short ponytail and red eyes. Cyberpunk armor with photorealistic 8K quality and dramatic lighting providing dark contrast. Extradimensional glowing lumen reflections, post processing, insanely detailed and intricate design. Elegant and super detailed.',
				images: ['https://replicate.delivery/pbxt/yfnsB13lLfgNbUk2qKa9zBCWgjj5hB8n8A1Af2afeCeye70VIA/out-0.png'],
			},
			'snoop dog caricature': {
				summary: 'snoop dog caricature',
				camera: '',
				tags: ['full body', 'caricature', 'character', 'colorful', 'whimsical'],
				female_prompt: 'Full body shot of a character, a caricature of Snoop Dog as an 88 year old man, with a vibrant and colorful background, comical expressions, exaggerated features, and whimsical details. ',
				male_prompt: 'Full body shot of a character, a caricature of Snoop Dog as an 88 year old man, with a vibrant and colorful background, comical expressions, exaggerated features, and whimsical details. ',
				images: ['https://replicate.delivery/pbxt/5WPKPFDUyO4vEZs6PEBKo7zHoj74HHBAclmHXImoRbl3e0VIA/out-0.png'],
			},
			'snowy bouquet': {
				summary: 'snowy bouquet',
				camera: 'Nikon D850 , Lens 100mm., F1.8 , iso 400 , s 1/30',
				tags: ['portrait', 'winter', 'bouquet', 'sweater', 'moody'],
				female_prompt:
					'Tender portrait of a woman standing misty night, snowflakes falling and lighting her face, with a bouquet of vibrant flowers in hand, wearing a warm comfortable sweater. Soft and subtle eye expression, delicate details and textures, natural light from roadside light pole. Captured with Nikon D850, Lens 100mm., F1.8, iso 400, s 1/30 and shallow depth of field.',
				male_prompt:
					'Intense portrait of a man standing misty night, snowflakes falling and lighting his face, with a bouquet of vibrant flowers in hand, wearing a warm comfortable sweater. Soft and subtle eye expression, delicate details and textures, natural light from roadside light pole. Captured with Nikon D850, Lens 100mm., F1.8, iso 400, s 1/30 and shallow depth of field.',
				images: ['https://replicate.delivery/pbxt/hcAgGqIyBiKSOpWNf0ZdKvLf9dEGUbC2kCSJWR2XyJexuTXhA/out-0.png'],
			},

			'solarpunk reading': {
				summary: 'solarpunk reading',
				camera: '',
				tags: ['cyberpunk', 'fantasy', 'solarpunk', 'masked', 'reading'],
				female_prompt:
					'Beautiful woman with wild blue hair wearing an ornate mask and reading a book, perched atop a rooftop in a vibrant solarpunk city. Detailed face, cyberpunk dark fantasy art in the style of Geof Darrow, Mark Ryden, and Wayne Barlowe. ',
				male_prompt:
					'Handsome man with wild blue hair wearing an ornate mask and reading a book, perched atop a rooftop in a vibrant solarpunk city. Detailed face, cyberpunk dark fantasy art in the style of Geof Darrow, Mark Ryden, and Wayne Barlowe. ',
				images: ['https://replicate.delivery/pbxt/bpKvCSmwWyLtMlwY9hLqfv9rt5fgCdf5ja6ozukYAE2tuTXhA/out-0.png'],
			},
			'sorceress portrait': {
				summary: 'sorceress portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'ginger', 'royalty', 'pre-raphaelite'],
				female_prompt:
					'Gorgeous mix of Shakira and Emma Stone, a regal sorceress concubine, cute ginger woman with curves that captivate. Pre-raphaelite oil painting with vivid colors, dynamic composition and ultra resolution. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				male_prompt:
					'Handsome mix of Shakira and Emma Stone, a powerful sorcerer concubine, cute ginger man with charisma that captivates. Pre-raphaelite oil painting with vivid colors, dynamic composition and ultra resolution. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details.',
				images: ['https://replicate.delivery/pbxt/b1Nho1FnGbIkOlEeVyv4B8OkFdcVaodnoV1ltlE6lwsfzprQA/out-0.png'],
			},
			'space pilot': {
				summary: 'space pilot',
				camera: '8K resolution',
				tags: ['futuristic', 'spacecraft', 'alien', 'blackhole', 'cinematic'],
				female_prompt:
					'Beautiful female pilot in the cockpit of a futuristic spacecraft, with a huge alien monster outside and a black hole as backdrop. Atmospheric, epic scale with intricate detail, 8K resolution, cinematic vibes and warm vivid colors of purple and orange. ',
				male_prompt:
					'Handsome male pilot in the cockpit of a futuristic spacecraft, with a huge alien monster outside and a black hole as backdrop. Atmospheric, epic scale with intricate detail, 8K resolution, cinematic vibes and warm vivid colors of purple and orange. ',
				images: ['https://replicate.delivery/pbxt/Px8iBeilCw0zRCwTgX32mzr8ql3LCxeY3PTIETXsdLYK4prQA/out-0.png'],
			},
			'space pirate': {
				summary: 'space pirate',
				camera: '',
				tags: ['cyberpunk', 'space', 'pirate', 'mystical', 'fantasy'],
				female_prompt:
					"Gorgeous cyberpunk female space pirate, bewitching goggles and mystical smoke, fantastical orphism motifs, hyperdetailed 2D artwork with contrast of turquoise and azure. Mandy Jurgens inspired digital painting, smooth darkness, intricate details, cute Jojo's Bizarre Adventure pulpy manga comic style. Yasar Vurdem and Zack Snyder meets Moebius stylize.",
				male_prompt:
					"Magnificent cyberpunk male space pirate, captivating goggles and mystical smoke, fantastical orphism motifs, hyperdetailed 2D artwork with contrast of turquoise and azure. Mandy Jurgens inspired digital painting, smooth darkness, intricate details, cute Jojo's Bizarre Adventure pulpy manga comic style. Yasar Vurdem and Zack Snyder meets Moebius stylize.",
				images: ['https://replicate.delivery/pbxt/rtBPUT6eJsT2QyWHnDXDe68y1DJyjod8LYBqqtakzblJ3prQA/out-0.png'],
			},
			'space rip': {
				summary: 'space rip',
				camera: 'Megapixel film lighting with anti-aliasing and FKAA TXAA RTX SSAO effects',
				tags: ['action', 'epic', 'reflection', 'sci-fi', 'photorealistic'],
				female_prompt:
					'A woman suspended in mid-air, ripping a hole through space-time, epic action scene with groundbreaking visuals. Hyperspace drama and dynamic reflective surfaces, dramatic sci-fi lighting with optical flares and volumetric lighting. Cinematic octane render, Arnold render, 3D effects with super close up detail. Megapixel film lighting with anti-aliasing and FKAA, TXAA, RTX SSAO effects. Post production tone mapping, CGI VFX SFX in full color HDR style. Realistic fury fire photorealistic with 8k resolution.',
				male_prompt:
					'A man suspended in mid-air, ripping a hole through space-time, epic action scene with groundbreaking visuals. Hyperspace drama and dynamic reflective surfaces, dramatic sci-fi lighting with optical flares and volumetric lighting. Cinematic octane render, Arnold render, 3D effects with super close up detail. Megapixel film lighting with anti-aliasing and FKAA, TXAA, RTX SSAO effects. Post production tone mapping, CGI VFX SFX in full color HDR style. Realistic fury fire photorealistic with 8k resolution.',
				images: ['https://replicate.delivery/pbxt/gbGAiwuVXirUPVIXWSCfbwNjlge2z1uLYT8pfN3UgJfOunuCB/out-0.png'],
			},
			'space service': {
				summary: 'space service',
				camera: 'Digital Photography UHD Cinematic closeup detail',
				tags: ['scifi', 'luxury', 'dramatic', 'futuristic', 'professional'],
				female_prompt:
					'UHD Cinematic closeup of female crewmembers and engineers servicing a spaceship in a vast hangar filled with red, sci-fi anime and insect-influenced designs. Dramatic theatrical lighting and hyper stylized 8K visuals capture the sleek, powerful, luxury aesthetic as the team of female military space pilots prepare for launch. Surrounded by ornate cyborg armor, the Empress of the Galaxy oversees the operation from her star ship cockpit decorated with glowing computer screens and accent lighting.',
				male_prompt:
					'UHD Cinematic closeup of male crewmembers and engineers servicing a spaceship in a vast hangar filled with red, sci-fi anime and insect-influenced designs. Dramatic theatrical lighting and hyper stylized 8K visuals capture the sleek, powerful, luxury aesthetic as the team of male military space pilots prepare for launch. Surrounded by ornate cyborg armor, the Emperor of the Galaxy oversees the operation from his star ship cockpit decorated with glowing computer screens and accent lighting.',
				images: ['https://replicate.delivery/pbxt/wBG15rNGCk5mMZr904z3UykvHjNk1cBn1jmroMY35df580VIA/out-0.png'],
			},
			'space suit diner': {
				summary: 'space suit diner',
				camera: 'Fuji color film',
				tags: ['fashion', 'diner', 'obscure', 'sunlight', 'cinematic'],
				female_prompt:
					'Fashion model wearing a vintage Apollo spacesuit in an iconic American diner at the break of dawn, warm sunlight streaming through the windows. Fuji color film giving a cinematic feel and dynamic composition with beautiful colors and contrast. Softly smiling, she radiates style and confidence.',
				male_prompt:
					'Handsome male fashion model wearing a vintage Apollo spacesuit in an iconic American diner at the break of dawn, warm sunlight streaming through the windows. Fuji color film giving a cinematic feel and dynamic composition with beautiful colors and contrast. With a half-smile he exudes style and confidence.',
				images: ['https://replicate.delivery/pbxt/yqwFrkehxuQ1Naaaa2PTIIFnzdeslk7Bfeuw7j3tM1LXanuCB/out-0.png'],
			},
			'space time rip': {
				summary: 'space time rip',
				camera: '8k quality',
				tags: ['action', 'space', 'dynamic', 'photographic', 'epic'],
				female_prompt:
					'Powerful woman, suspended in mid-air, ripping a hole through space-time. Epic action scene, with breath-taking visuals, groundbreaking effects and dazzling SFX. Dynamic reflective surface and dramatic sci-fi lighting. Hyperrealistic details and 8K photographic quality, cinematic lighting, volumetric lighting with octane render and arnold render in 3D. Super close-up and megapixel film lighting combined with anti-aliasing, FXAA, TXAA, RTX, SSAO for post processing and tone mapping for realistic CGI VFX SFX with full color and volumetric HDR furious fire style big muscle big jaw God of War.',
				male_prompt:
					'Strong man, suspended in mid-air, ripping a hole through space-time. Epic action scene, with breath-taking visuals, groundbreaking effects and dazzling SFX. Dynamic reflective surface and dramatic sci-fi lighting. Hyperrealistic details and 8K photographic quality, cinematic lighting, volumetric lighting with octane render and arnold render in 3D. Super close-up and megapixel film lighting combined with anti-aliasing FXAA TXAA RTX SSAO for post processing and tone mapping for realistic CGI VFX SFX with full color and volumetric HDR furious fire style big muscle big jaw God of War.',
				images: ['https://replicate.delivery/pbxt/1is7R4oT42qPJJp2dDQxckhn0Qcxgwf1kQZpNUuH5gRY80VIA/out-0.png'],
			},
			'space time vortex': {
				summary: 'space time vortex',
				camera:
					'Megapixel film lighting, Anti - Aliasing, FKAA, TXAA, RTX SSAO Post Processing Post Production Tone Mapping CGI VFX SFX Full Color Volumetric lighting HDR Realistic Fury Fire Style Big Muscle Big Jaw God of War Photographic Cinematic 8k',
				tags: ['action', 'epic', 'keyvisual', 'photorealistic', 'dynamic'],
				female_prompt:
					'A powerful woman suspended in mid-air, ripping open a vortex to space-time. Action packed key visual, set in a hyperspace background with dazzling special effects. Highly detailed hyperrealistic scene featuring dynamic reflective surfaces, dramatic sci-fi lighting and optical flares. Photographic 8K high resolution glory with Octane render, Arnold render, 3D volumetric lighting, anti-aliasing and post production tone mapping.',
				male_prompt:
					'A muscular god of war figure suspended in mid-air, ripping open a vortex to space-time. Action packed key visual, set in a hyperspace background with dazzling special effects. Highly detailed hyperrealistic scene featuring dynamic reflective surfaces, dramatic sci-fi lighting and optical flares. Photographic 8K high resolution glory with Octane render, Arnold render, 3D volumetric lighting, anti-aliasing and post production tone mapping.',
				images: ['https://replicate.delivery/pbxt/OhTaxnuefQoBI06bYH1NIFXPB3eIWhBf1iTXOfRCFxfx9d6KE/out-0.png'],
			},
			'spacesuit fashion': {
				summary: 'spacesuit fashion',
				camera: 'Fuji color film',
				tags: ['fashion', 'model', 'Apollo', 'Diner', 'dawn'],
				female_prompt:
					'Stylish photo of a female fashion model wearing an Apollo spacesuit in an American Diner at the early morning dawn with rays of warm sunlight. Soft, bright summer morning atmosphere with Fuji color film tones, cinematic vibes and captivating composition. ',
				male_prompt:
					'Handsome photo of a male fashion model wearing an Apollo spacesuit in an American Diner at the early morning dawn with rays of warm sunlight. Soft, bright summer morning atmosphere with Fuji color film tones, cinematic vibes and captivating composition. ',
				images: ['https://replicate.delivery/pbxt/0FOwVhEZqFYkMVjBpvy58IskGoU0rkPee6jHOemA1ZdfgnuCB/out-0.png'],
			},
			'spider gwen cover': {
				summary: 'spider gwen cover',
				camera: '',
				tags: ['comic book cover', 'matte painting', 'cinematic', 'luxury', 'elite'],
				female_prompt:
					'Stunning interpretation of Spider Gwen, Gwen Stacy, in white costume with medium pink accents. Elite and luxurious composition with golden ratio, ornate details, ominous and haunting atmosphere. Dynamic matte painting and cinematic style, reminiscent of the works of James Jean or Amy Sol. ',
				male_prompt:
					'Awe-inspiring representation of Spider Man, in white costume with medium pink accents. Elegant and luxurious composition with golden ratio, ornate details, mysterious and haunting atmosphere. Dynamic matte painting and cinematic style, reminiscent of the works of James Jean or Amy Sol. ',
				images: ['https://replicate.delivery/pbxt/sH7efAp7J7kvQk4assVgpMLVbR3dAo8Ofa359rn5AVMv1TXhA/out-0.png'],
			},
			'spiderwebs captive': {
				summary: 'spiderwebs captive',
				camera: '4K Resolution',
				tags: ['portrait', 'fantasy', 'captive', 'arachnid', 'dramatic'],
				female_prompt:
					'Captivating portrait of a beautiful female anthro spider with human body and spider legs, holding captives in her webs. 4K resolution for ultra sharp details, life-like colors and textures, and power to capture the atmosphere. ',
				male_prompt: 'Fascinating portrait of a handsome male anthro spider with human body and spider legs, holding captives in his webs. 4K resolution for ultra sharp details, life-like colors and textures, and power to capture the atmosphere.',
				images: ['https://replicate.delivery/pbxt/txIJFbRBfl0QYSfyJGhy5thqMdzBebEPRNlrqfsI8N7NqnuCB/out-0.png'],
			},
			'spinning wheel portrait': {
				summary: 'spinning wheel portrait',
				camera: 'François Pieter ter Meulen',
				tags: ['portrait', 'official', 'formal', 'full body', 'square'],
				female_prompt:
					'Intense concentration of a woman at work with her spinning wheel, simple clothing and a sober background decor. Captured in a full body square portrait of utter realism with precise details and careful brushstrokes, reminiscent of the old Dutch masters. ',
				male_prompt:
					'Intense concentration of a man at work with his spinning wheel, simple clothing and a sober background decor. Captured in a full body square portrait of utter realism with precise details and careful brushstrokes, reminiscent of the old Dutch masters.',
				images: ['https://replicate.delivery/pbxt/WZ1iGcypTcZdIl9zo1SI3lnOluQ0MEzbPfS6WneDfyqJ4AYhA/seed-37503.png'],
			},
			'sprawling colony': {
				summary: 'sprawling colony',
				camera: 'Thick Acrylic Painting',
				tags: ['acrylic', 'astronaut', 'space', 'retrofuturism', 'far away'],
				female_prompt:
					'A distant shot of a female astronaut, rendered in thick acrylic paint, with a backdrop of a sprawling space colony by Earl Moran. Retrofuturistic composition with vibrant diffuse hues and a dynamic depth of field. Soft yet bold lines, detailed contours in shades of cosmic blues and nebulae.',
				male_prompt:
					'A distant shot of a male astronaut, rendered in thick acrylic paint, with a backdrop of a sprawling space colony by Earl Moran. Retrofuturistic composition with vibrant diffuse hues and a dynamic depth of field. Soft yet bold lines, detailed contours in shades of cosmic blues and nebulae.',
				images: ['https://replicate.delivery/pbxt/LAHfqNeCvYpm30tZovKzDVqctvGQSBhVqxaUBhzMewT45TXhA/out-0.png'],
			},
			'spring portrait': {
				summary: 'spring portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'fantasy', 'full body'],
				female_prompt:
					'Herald of spring, a beautiful brown-haired woman in a green cloak with a shamrock hairpin. Majestic landscape with crocuses growing at her feet and grass waving in the breeze. Exquisite artwork by Akihiko Yoshida featuring a watercolor and oil painting blend. ',
				male_prompt:
					'The heroic man, standing tall with brown hair and an emerald cape. Stunning backdrop of lush green grass and vibrant crocuses blooming around him. Impressive artwork by Akihiko Yoshida combining watercolor and oil painting techniques. ',
				images: ['https://replicate.delivery/pbxt/7CD6G7gk9MIOMlaAdykcflUB5N7dX0M4mOI1DSkuZVov70VIA/out-0.png'],
			},
			'springboard dive': {
				summary: 'springboard dive',
				camera: '',
				tags: ['sport', 'diving', 'olympics', 'minimalistic', 'editorial'],
				female_prompt: 'Stunning female Olympic springboard diver diving in the water, minimalistic vector painting of astounding beauty, key visual with three colors, editorial illustration with highly artistic style. ',
				male_prompt: 'Handsome male Olympic springboard diver diving in the water, minimalistic vector painting of astounding beauty, key visual with three colors, editorial illustration with highly artistic style. ',
				images: ['https://replicate.delivery/pbxt/nKfARlJDiDW4SqA8SkvbAoI51MY4PFasITNWFV4Djkv170VIA/out-0.png'],
			},
			'springboard diver': {
				summary: 'springboard diver',
				camera: '',
				tags: ['sports', 'diving', 'minimalistic', 'editorial', 'vector'],
				female_prompt:
					'Stunning female olympic springboard diver diving into the water, minimalistic vector painting of astounding beauty, key visual with 3 colors, editorial illustration in highly artistic style. Precise anatomy and vibrant color palette, striking visuals and sophisticated composition.',
				male_prompt:
					'Handsome male olympic springboard diver diving into the water, minimalistic vector painting of astounding beauty, key visual with 3 colors, editorial illustration in highly artistic style. Precise anatomy and vibrant color palette, striking visuals and sophisticated composition.',
				images: ['https://replicate.delivery/pbxt/fmBSe9Q8iTpfOJyLdfkE04HYNT9nSZIVXZAjMwlzIn44fOdFC/out-0.png'],
			},
			'square eyes': {
				summary: 'square eyes',
				camera: '',
				tags: ['portrait', 'official', 'business', 'Vibrant', 'deconstructivism'],
				female_prompt: 'Elegant face of a female with a business suit, abstract and deconstructive background, looking forward with square eyes in style of George Condo. Vibrant colors with modern expressionism, surreal elements and vibrant hues. ',
				male_prompt: 'Handsome face of a male with a business suit, abstract and deconstructive background, looking forward with square eyes in style of George Condo. Vibrant colors with modern expressionism, surreal elements and vibrant hues. ',
				images: ['https://replicate.delivery/pbxt/ftthbz7VNawCUa6XVsyf7xVGIUx6oQaQ01klLw841yQg8prQA/out-0.png'],
			},
			'star anime manhwa': {
				summary: 'star anime manhwa',
				camera: '',
				tags: ['anime', 'manhwa', 'villain', 'kawaii', 'starlight'],
				female_prompt: 'Gorgeous woman with captivating starlight, anime inspired kawaii style, and long-winded villainous characteristics. Saturated colors and dynamic composition, surrealistic elements and creative illuminations. ',
				male_prompt: 'Handsome man with captivating starlight, anime inspired kawaii style, and long-winded villainous characteristics. Saturated colors and dynamic composition, surrealistic elements and creative illuminations. ',
				images: ['https://replicate.delivery/pbxt/LGeeBfBi3kBHpokrFAV0spHhg35H9Yo6oe8bZJyNg4peGPdFC/out-0.png'],
			},
			'starburst light': {
				summary: 'starburst light',
				camera: 'grainy photograph',
				tags: ['portrait', 'photography', 'minimalist', 'black', 'iridescent'],
				female_prompt:
					'Ethereal glow of starburst light, angular woman in a high-contrast grainy photograph. Bold black PVC jumpsuit, minimalist design, tesseract pattern, sleek hairstyle and outstretched arms. Tiny black dots over a shiny black rubbery backdrop, iridescent bubbles and luminous gleam. ',
				male_prompt:
					'Grainy photograph of an awe-inspiring man with a starburst light aura. Daring black PVC jumpsuit with minimalist design and tesseract pattern. Sleek hairstyle and outstretched arms with tiny black dots on a shiny black rubbery backdrop, iridescent bubbles and subtle luminous gleam.',
				images: ['https://replicate.delivery/pbxt/MP1dpYLYbxZ3IRPsX08rWtcptGwRDHBZ5C09LDSdN5M1d6KE/out-0.png'],
			},
			'stardust piano': {
				summary: 'stardust piano',
				camera: '8K resolution',
				tags: ['fantasy', 'magic realism', 'surrealism', 'aerial', 'bluish'],
				female_prompt:
					'A beautiful woman in an elegant shimmery silver spaghetti strap gown playing a fantastical crystal grand piano, illuminated by stardust and the soft light of the blue hour. Her intricate up-do is streaked with  highlights, her delicate hands resting lightly on the transparent keyboard. An aerial view of awe and reverence, detailed with magic realism and surrealism. 8K quality for concept art.',
				male_prompt:
					'A handsome man in a luxurious shimmery silver spaghetti strap suit playing a magnificent crystal grand piano, illuminated by twinkling galaxies and the soft light of the blue hour. His intricately groomed hair is burnished with blond highlights, his strong hands resting lightly on the transparent keys. An aerial view of awe and reverence, detailed with magic realism and surrealism. 8K quality for concept art.',
				images: ['https://replicate.delivery/pbxt/Pzehf3mSVSmEEk8EUr9FjzeOc4yGpcwCwBEbPBHvK4IO0TXhA/out-0.png'],
			},
			'stargazing portrait': {
				summary: 'stargazing portrait',
				camera: '',
				tags: ['portrait', 'official', 'stargazing', 'telescope', 'magical'],
				female_prompt: 'Young woman stargazing, marveling at the starry night sky through a brass telescope. Dreamy and romantic atmosphere with delicate lighting, perfect balance between soft and sharp details, magical vibes and sweet composition.',
				male_prompt: 'Young man stargazing, admiring the starlit heavens through a vintage brass telescope. Enchanted backdrop with charming lighting, perfect blend of soft and sharp details, mesmerizing vibes and delightful composition.',
				images: ['https://replicate.delivery/pbxt/PwjrNZHP3s5KPNTL2zOJqRzKrPkZ5UgPjPVUdfGfDihh2prQA/out-0.png'],
			},
			'street fashion': {
				summary: 'street fashion',
				camera: '',
				tags: ['fashion', 'editorial', 'glamour', 'style', 'golden ratio'],
				female_prompt:
					'Beautiful young female in a fashionable outfit by Coco Chanel, Thierry Mugler, Miuccia Prada. Flirtatious demeanor, long white hair, golden ratio face and elegant expression. White skin with subtle blush and delicate features for an alluring street fashion editorial.',
				male_prompt:
					'Handsome young man in a fashionable outfit by Coco Chanel, Thierry Mugler, Miuccia Prada. Flirtatious demeanor, long dark hair, golden ratio face and elegant expression. Dark skin with subtle blush and delicate features for an alluring street fashion editorial.',
				images: ['https://replicate.delivery/pbxt/rZy2ey2lO8xWTyhf7EFKOfIVQQtGmiv7NlTyiRpLSgBasTXhA/out-0.png'],
			},
			'street style portrait': {
				summary: 'street style portrait',
				camera: '',
				tags: ['portrait', 'street art', 'holographic', 'metallic', 'pop art'],
				female_prompt:
					'Sultry portrait of a woman puckering her lips, Karrueche look, shamrock street art, holographic and metallic graffiti fashion, looking into the rainbow with a pop art influence. Bold composition in the style of Jean-Michel Basquiat and Alberto Seveso.',
				male_prompt:
					'Cool portrait of a man with a street-style look, shamrock street art, holographic and metallic graffiti fashion, looking into the rainbow with a pop art influence. Bold composition in the style of Jean-Michel Basquiat and Alberto Seveso.',
				images: ['https://replicate.delivery/pbxt/ePg4EWj23JS1RqYKwTiuavd6sFBdxfXYo9sHkI5Kejhn5TXhA/out-0.png'],
			},
			'striding portrait': {
				summary: 'striding portrait',
				camera: '',
				tags: ['portrait', 'dynamic', 'miniskirt', 'confidence', 'vibrant'],
				female_prompt:
					"Beautiful woman walking with a skirt blowing overhead, a daring, worm's-eye view of an alluring figure confident in her stride. Playful dynamics in the fluttering fabric and vibrant colors, dreamy atmosphere and remarkable finesse.",
				male_prompt:
					"Handsome man sauntering through the landscape, walking with a confident stride and captivating charisma. An impressive worm's-eye view of his stylish clothing and striking features. Soft lighting and vivid colors create an enchanting atmosphere.",
				images: ['https://replicate.delivery/pbxt/LhyEyo4P68a5EdRFfp4RRZOs4PSQwA82vIYRbaqpIuD970VIA/out-0.png'],
			},
			'striped dress': {
				summary: 'striped dress',
				camera: 'high quality',
				tags: ['album cover', 'tribal', 'hi-tech', 'acrylic', 'reflective'],
				female_prompt:
					'Woman in a unique striped dress, posing for an album cover, inspired by fashion designers Slava Raškaj, Iris van Herpen and Rankin. High quality intricate latex set, highly reflective and hyper realistic with a mix between tribal and hi-tech elements. Acrylic cut, KDA-inspired look, perfect for Instagram post.',
				male_prompt:
					'Man in a unique striped dress, posing for an album cover, inspired by fashion designers Slava Raškaj, Iris van Herpen and Rankin. High quality intricate latex set, highly reflective and hyper realistic with a mix between tribal and hi-tech elements. Acrylic cut, KDA-inspired look, perfect for Instagram post.',
				images: ['https://replicate.delivery/pbxt/gZy2hfM656xADqhB9UeEFfmYt3w3LY8pjvecnov4yQxvnnuCB/out-0.png'],
			},
			'studio portrait': {
				summary: 'studio portrait',
				camera: 'Studio photography with professional lighting',
				tags: ['portrait', 'studio', 'vibrant', 'details', 'professional'],
				female_prompt:
					'Beautiful portrait of a woman with striking wavy hair, mesmerizing eyes, captivating figure, vibrant pink hair color, and stunning details. Studio photography with professional lighting and sharp details to capture her beauty. ',
				male_prompt: 'Handsome portrait of a man with striking wavy hair, mesmerizing eyes, captivating figure, vibrant hair color, and stunning details. Studio photography with professional lighting and sharp details to capture his strength. ',
				images: ['https://replicate.delivery/pbxt/eTa5D3FaeaiixEAE4vXc3PLwgvHNBJSXee5Dsv8mcEY9tnuCB/out-0.png'],
			},
			'stunning eyes': {
				summary: 'stunning eyes',
				camera: '',
				tags: ['portrait', 'formal', 'studio', 'official', 'backlight'],
				female_prompt: 'Captivating portrait of a woman with stunning eyes and petite figure, backlit by studio light with soft shadows, elegant backdrop fabric and details. Refined beauty with delicate features, luminous skin and alluring gaze. ',
				male_prompt: 'Intriguing portrait of a man with mesmerizing stare, sharp facial features and slender body. Dramatic light illuminating the figure from behind, sophisticated texture of the backdrop fabric and details. ',
				images: ['https://replicate.delivery/pbxt/r0Obml5knWoOGJKD2Y9EVBhwR1OAOBdrtP2Cy541gkuMf0VIA/out-0.png'],
			},
			'stunning portrait': {
				summary: 'stunning portrait',
				camera: 'Canon EOS R6 full-frame mirrorless camera paired with Canon EF 85mm f/1.2L II USM lens',
				tags: ['portrait', 'guitar', 'campfire', 'romantic', 'magical'],
				female_prompt:
					'Captivating photograph of a beautiful red-haired woman with sparkling green eyes, sitting by a crackling campfire and strumming an acoustic guitar. Expertly framed and masterfully lit, creating a magical atmosphere with glowing firelight, soft blur and dreamlike bokeh. Canon EOS R6 full-frame mirrorless camera paired with Canon EF 85mm f/1.2L II USM lens to create sharpness and beautiful bokeh effect. Aperture at f/1.8 for shallow depth of field, ISO 800 for optimal exposure, shutter speed 1/60 sec to capture the movements of her fingers on the strings. Color filter enhances rich hues of her hair and eyes resulting in a mesmerizing high-resolution photograph.',
				male_prompt:
					'Captivating photograph of a handsome man with red hair and sparkly green eyes, sitting by a crackling campfire and strumming an acoustic guitar. Expertly framed and masterfully lit, creating a magical atmosphere with glowing firelight, soft blur and dreamlike bokeh. Canon EOS R6 full-frame mirrorless camera paired with Canon EF 85mm f/1.2L II USM lens to create sharpness and beautiful bokeh effect. Aperture at f/1.8 for shallow depth of field, ISO 800 for optimal exposure, shutter speed 1/60 sec to capture the movements of his fingers on the strings. Color filter enhances rich hues of his hair and eyes resulting in a mesmerizing high-resolution photograph.',
				images: ['https://replicate.delivery/pbxt/O2eMVqds8KwNLK48rHksHb79iITwAfvDfUXkyq8hN7UzxTXhA/out-0.png'],
			},
			'stylish photoshoot': {
				summary: 'stylish photoshoot',
				camera: '35mm lens, f/1.8 studio lighting',
				tags: ['photography', 'model', 'lookbook', 'Iceland', 'minimal'],
				female_prompt:
					"Stylish mid-body shot of a female model in an over-sized, exaggerated puffer braided cape, black puffer jumpsuit and black braided hairpiece. Beautiful face features with minimal makeup, white gradient background and realistic lookbook photoshoot in Iceland. Cinematic camera zoom out with 35mm lens, f/1.8 studio lighting for ultra detailed global illumination and post-production. Dynamic pose with minimal shadow background and half body illustration of real person's face and eyes.",
				male_prompt:
					"Dapper mid-body shot of a male model in an over-sized, exaggerated puffer braided cape, black puffer jumpsuit and black braided hairpiece. Handsome face features with minimal makeup, white gradient background and realistic lookbook photoshoot in Iceland. Cinematic camera zoom out with 35mm lens, f/1.8 studio lighting for ultra detailed global illumination and post-production. Dynamic pose with minimal shadow background and half body illustration of real person's face and eyes.",
				images: ['https://replicate.delivery/pbxt/L67NZUeqDxx3CyHkHaDKlxH1NgBZHeL4HqJlfL3GJzQpxTXhA/out-0.png'],
			},
			'subsurface glow': {
				summary: 'subsurface glow',
				camera: '',
				tags: ['closeup', 'glowing', 'pastel', 'diamond-hair', 'iridescent'],
				female_prompt:
					'Extreme closeup of a woman with glowing skin scattered with pastel hues and diamond-like hair, Shamrock glittering in the wind, emanating a strong and luminous aura. Iridescently opalescent and scintillating with kaleidoscopic gleaming and shining effects. Art by Kuvshinov Ilya (Wlop).',
				male_prompt:
					'Extreme closeup of a man with glowing skin scattered with pastel hues and diamond-like hair, Shamrock glittering in the wind, emanating a strong and luminous aura. Iridescently opalescent and scintillating with kaleidoscopic gleaming and shining effects. Art by Kuvshinov Ilya (Wlop).',
				images: ['https://replicate.delivery/pbxt/GXUJrsc9rV4HDx7yPKfFVbfCyWj72KNxdRtm4dafLHjfwnuCB/out-0.png'],
			},
			'super heroine': {
				summary: 'super heroine',
				camera: 'Megapixel film lighting',
				tags: ['portrait', 'superhero', 'lighting', 'octane', 'rendering'],
				female_prompt:
					'Beautiful woman in a blue and gold super heroine-style jumpsuit, surrounded by a magnificent display of 100 rainbow-colored lights. Hyperrealistic, cinematic, and photographically vibrant with volumetric lighting, Octane render, Arnold render, 3D details, super close-up angles and Megapixel film lighting. Anti-aliasing and FKAA TXAA RTX SSAO for post processing and post production. Tone mapping CGI VFX SFX in full color with realistic HDR fury fire style big muscle big jaw God of War photographic cinematic 8k imagery.',
				male_prompt:
					'Handsome man in a blue and gold super hero-style jumpsuit, surrounded by a magnificent display of 100 rainbow-colored lights. Hyperrealistic, cinematic, and photographically vibrant with volumetric lighting, Octane render, Arnold render 3D details, super close-up angles and Megapixel film lighting. Anti-aliasing and FKAA TXAA RTX SSAO for post processing and post production. Tone mapping CGI VFX SFX in full color with realistic HDR fury fire style big muscle big jaw God of War photographic cinematic 8k imagery.',
				images: ['https://replicate.delivery/pbxt/MQ16flL3JPQaV6qRD9un7yiIOKRzhLwHieY8e6h3KAy5vTXhA/out-0.png'],
			},
			'superhero duo': {
				summary: 'superhero duo',
				camera: '',
				tags: ['duo', 'action', 'superheroes', 'photorealistic', 'dynamic'],
				female_prompt: 'Dynamic duo of Spider-Woman and Iron Lady, heroic silhouettes with powerful force and strength, photorealistic with vibrant colors, motion blur and extreme resolution. ',
				male_prompt: 'Dynamic duo of Spider-Man and Iron Man, heroic silhouettes with powerful force and strength, photorealistic with vibrant colors, motion blur and extreme resolution. ',
				images: ['https://replicate.delivery/pbxt/fBdUMNwHApwsNadCZcYgCo07QXuokdEuidIyUCDCaR2teprQA/out-0.png'],
			},
			'surreal swim': {
				summary: 'surreal swim',
				camera: 'Mamiya C33, 80mm lens, Kodak Kodacolor 400 film',
				tags: ['surrealism', 'pool', 'eyes', 'film', 'mamiya'],
				female_prompt:
					"A woman swimming in a dream-like pool inspired by Elsa Bleda and Surrealism, with Sydney Sweeney's ethereal blue eyes looking this way. Captured using Mamiya C33, 80mm lens and expired Kodak Kodacolor 400 film for a surrealistic quality. ",
				male_prompt:
					"A man swimming in an imaginative pool inspired by Elsa Bleda and Surrealism, with Sydney Sweeney's intense blue eyes looking this way. Captured using Mamiya C33, 80mm lens and expired Kodak Kodacolor 400 film for a surrealistic quality. ",
				images: ['https://replicate.delivery/pbxt/jq1uZVNS6zqlENYQhzQZGXrIgCU59GvCKExxdGQkRKzAe0VIA/out-0.png'],
			},
			'surrealistic portrait': {
				summary: 'surrealistic portrait',
				camera: 'Shutterstock contest winner image',
				tags: ['shock art', 'freakshow', 'lowbrow', 'pop surrealism', 'seapunk'],
				female_prompt:
					"A daring woman with multicolored hair and tattoos on her face blowing bubbles, in a Jerry Wilkerson's shock art, 2D Freakshow Lowbrow Pop Surrealism Sea-Punk composition. Bright colors, intense visuals and surrealistic elements. ",
				male_prompt: "A bold man with multicolored hair and tattoos on his face blowing bubbles, in a Jerry Wilkerson's shock art, 2D Freakshow Lowbrow Pop Surrealism Sea-Punk composition. Bright colors, intense visuals and surrealistic elements.",
				images: ['https://replicate.delivery/pbxt/nmFwZEkMg84pFdZsPQct7DogIhcrq4JUHIspLnsHalaHe0VIA/out-0.png'],
			},
			'swamp adventure': {
				summary: 'swamp adventure',
				camera: '',
				tags: ['action', 'mystery', 'fall', 'forest', 'adventure'],
				female_prompt:
					'Mysterious female character amidst autumnal Georgia Swamp adventuring. Epic action shot with a sense of mystery and intrigue, deep immersion into a lush world full of secrets. Captivating visual storytelling of a dynamic heroine, evocative colors and atmosphere, captivating poses, intense emotion and movement. ',
				male_prompt:
					'Dynamic male character amidst autumnal Georgia Swamp adventuring. Epic action shot with a sense of mystery and intrigue, deep immersion into a lush world full of secrets. Captivating visual storytelling of a heroic hero, evocative colors and atmosphere, captivating poses, intense emotion and movement.  ',
				images: ['https://replicate.delivery/pbxt/Vb1vUkOIF74fZKhmrXLjWrawIDA2siYqTVOexTHdfhgw6TXhA/out-0.png'],
			},
			'swamp couture': {
				summary: 'swamp couture',
				camera: '',
				tags: ['fashion', 'swamp', 'fantasy', 'mystical', 'square'],
				female_prompt:
					'Vibrant couture of a swamp woman with shamrocks and ivy, mossy and wet environment. Invigorating details, intense green eyes, and lush hair. Fantastic world of fantasy fashion, mystical energy, dramatic lightning, a Mysterious beauty.',
				male_prompt:
					'Daring couture of a swamp man with shamrocks and ivy, mossy and wet environment. Vibrant details, intense green eyes and lush hair. Fantastic world of fantasy fashion, mystical energy, dramatic lightning and a Mysterious power.',
				images: ['https://replicate.delivery/pbxt/v1C10IQL4AIXFhQdmRHEOLb36uw6G87Ws2nfeKlsUVV85prQA/out-0.png'],
			},
			'sweater portrait': {
				summary: 'sweater portrait',
				camera: 'Sony Alpha 7R IV mirrorless camera using FE 85mm f/1.8 lens',
				tags: ['portrait', 'cozy', 'frosted glass', 'window', 'sony'],
				female_prompt:
					'Cozy portrait of a beautiful woman in a beige sweater near a frosted glass window. Soft, light brown hair falls loosely over her shoulders, creating a warm and inviting atmosphere. Natural light illuminates her face and sweater, creating an ethereal mood. Captured with Sony Alpha 7R IV and FE 85mm f/1.8 lens, providing sharp and detailed images with beautiful bokeh effects. The camera settings were optimized to capture the mood and tone: an aperture of f/2.8, ISO 100, and a shutter speed of 1/125 sec.',
				male_prompt:
					'Cozy portrait of a handsome man in a beige sweater near a frosted glass window. Soft, light brown hair frames his face, creating a warm and inviting atmosphere. Natural light illuminates his face and sweater, creating an ethereal mood. Captured with Sony Alpha 7R IV and FE 85mm f/1.8 lens for sharp details with beautiful bokeh effects. The camera settings were optimized to capture the mood and tone: an aperture of f/2.8, ISO 100, and a shutter speed of 1/125 sec.',
				images: ['https://replicate.delivery/pbxt/Kq5TsHfAFlRrHCffXSz5GhRMIeEQnvyLZntKQ2ht8KjlsnuCB/out-0.png'],
			},
			'swedish garden': {
				summary: 'swedish garden',
				camera: 'Canon DSLR with 50mm lens',
				tags: ['portrait', 'garden', 'landscape', 'spring', 'cinematic'],
				female_prompt:
					'Gorgeous Swedish woman in the lush green garden, peaceful and content in the sunny spring morning. Award-winning cinematic photography with sparkly bokeh, sharp focus, and vivid colors. Captured with a Canon DSLR with 50mm lens.',
				male_prompt: 'Handsome Swedish man in the lush green garden, peaceful and content in the sunny spring morning. Award-winning cinematic photography with sparkly bokeh, sharp focus, and vivid colors. Captured with a Canon DSLR with 50mm lens.',
				images: ['https://replicate.delivery/pbxt/l10gCeR5umQYcCkChXUpJxed3NQL12mVS5Cb0zELHTam8prQA/out-0.png'],
			},
			'swedish man portrait': {
				summary: 'swedish man portrait',
				camera: 'Nikon D5, 50mm portrait lens',
				tags: ['portrait', 'mature', 'characterful', 'emotive', 'details'],
				female_prompt: 'High resolution, high quality portrait of a mature woman with wrinkles, characterful expression, soft focus on her sad eyes, and a hint of her hard life. Nikon D5, 50mm portrait lens to capture the details.',
				male_prompt: 'High resolution, high quality portrait of an elderly Swedish man with wrinkles, beard and lots of character. Sharp focus on his sad eyes hinting at a harsh life. Nikon D5, 50mm portrait lens to capture the nuances.',
				images: ['https://replicate.delivery/pbxt/fvvGpMerIqmHrkAJ3pl8iVs4lqhlLzmRWTvI8nE8qU1u8prQA/out-0.png'],
			},
			'techno priest': {
				summary: 'techno priest',
				camera: '',
				tags: ['portrait', 'techno', 'fusion', 'magic', 'divine'],
				female_prompt:
					'Seductive female techno-priest, fusion of religious zealotry and biomechanics, divine magic with cyber-mancy. Full length view with sleek lines, intricate details, eye-catching colors and vibrant energy. Captivating portrait by Peter Bagge.',
				male_prompt:
					'Charming male techno-priest, fusion of religious zealotry and biomechanics, divine magic with cyber-mancy. Full length view with sleek lines, intricate details, eye-catching colors and vibrant energy. Captivating portrait by Peter Bagge.',
				images: ['https://replicate.delivery/pbxt/dEZvaJplNV5HIpsNK0skEU67ffPV17Lx3jVeyg3XSs5L0TXhA/out-0.png'],
			},
			'teddy bear portrait': {
				summary: 'teddy bear portrait',
				camera: 'Studio photography',
				tags: ['portrait', 'professional', 'glamour', 'plush toys', 'red hair'],
				female_prompt: 'Glamorous portrait of a female model with red hair surrounded by a sea of fluffy white and red teddy bears. Professional studio photography with excellent detail, natural lighting, vivid colors, and modern styling. ',
				male_prompt: 'Stylish portrait of a male model surrounded by a pile of cute white and red plush teddy bears. Professional studio photography with excellent detail, natural lighting, vivid colors, and modern styling. ',
				images: ['https://replicate.delivery/pbxt/5nsyhko7FQokGNh3fH1W6Q3xBfY9oIneBihCVIAO5i2nyTXhA/out-0.png'],
			},
			'thai business portrait': {
				summary: 'thai business portrait',
				camera: '',
				tags: ['portrait', 'official', 'professional', 'full body', 'formal'],
				female_prompt:
					'Beautiful and confident Thai woman in a fitted office attire, with a short skirt, leg crossed in an elegant and alluring pose. Captivating view of her toned legs, almost to the point of peeking inside her thighs. She looks professional and composed.',
				male_prompt:
					'Handsome and assured Thai man wearing a tailored business suit, sitting with his legs crossed in an effortlessly stylish pose. The viewpoint allows an unobstructed view of his toned legs and tailored trousers. He looks polished and poised.',
				images: ['https://replicate.delivery/pbxt/SkSjnQ6ksf3bbq87cVBOHPXf6K5oL9FHgWfkwkZTSUug2TXhA/out-0.png'],
			},

			'tourism illustration': {
				summary: 'tourism illustration',
				camera: '',
				tags: ['flat', 'minimalistic', 'portrait', 'illustration'],
				female_prompt: 'Tourism illustration, a portait of a modern sks woman, close up, fashion outfit, sunglasses, 4k,, simple shape, flat design, HQ, minimalistic, realistic, high quality, 8k, ultra detailed',
				male_prompt: 'Tourism illustration, a portait of a modern sks woman, close up, fashion outfit, sunglasses, 4k,, simple shape, flat design, HQ, minimalistic, realistic, high quality, 8k, ultra detailed',
				images: ['https://replicate.delivery/pbxt/tWc8Z6ed3I3pDqWeDmHR9stZeuPJz9hJyzMj3ehU3GZPD7wCB/seed-24785.png'],
			},
			'nike streetwear': {
				summary: 'nike streetwear',
				camera: '',
				tags: ['realistic', 'streetwear', 'portrait', 'instagram', 'nike'],
				female_prompt: 'Nike 2049 Streetwear outfit, cream, puffy jacket concept, instagram style, young female model',
				male_prompt: 'Nike 2049 Streetwear outfit, cream, puffy jacket concept, instagram style, young male model',
				images: ['https://replicate.delivery/pbxt/YSvljgUzUhoeY61xnt7HcBMFFX81bUdzertxMFkOi4fo5dYhA/seed-10439.png'],
			},
			'flower acrylic': {
				summary: 'flower acrylic',
				camera: '',
				tags: ['illustration', 'flower', 'vintage'],
				female_prompt: 'woman, poster, flower, cruel woman,  down shot, waist up portrait, thick acrylic illustration by Kawacy, by john singer sargent, Masterpiece',
				male_prompt: 'man, poster, flower, cruel man,  down shot, waist up portrait, thick acrylic illustration by Kawacy, by john singer sargent, Masterpiece',
				images: ['https://replicate.delivery/pbxt/voYLm6gkin6FAlHt83ZBDZ7IrjT82AZkNSmbQoPsc1myxDLE/seed-17677.png', 'https://replicate.delivery/pbxt/IBLGpXAY287YIZuRszafq84WAAwIKkGVgsQic2nSunY2jHWIA/seed-33382.png'],
			},
			'thorn suit': {
				summary: 'thorn suit',
				camera: 'Dan LuVisi',
				tags: ['dark surrealism', 'thorns', 'nightmare', 'oppressive', 'digital painting'],
				female_prompt: 'Terrifying visage of a woman encased in a living suit of thorns, dark surrealism, inspired by Dave Rapoza, twisted growth, pain and suffering, nightmare imagery, oppressive atmosphere, intense details, digital painting. ',
				male_prompt: 'Frightening visage of a man encased in a living suit of thorns, dark surrealism, inspired by Dave Rapoza, twisted growth, pain and suffering, nightmare imagery, oppressive atmosphere, intense details, digital painting. ',
				images: ['https://replicate.delivery/pbxt/qreqR4PvDs3scqkPDkMeNkaHgsBNJBUJUr1hHyec59J6xTXhA/out-0.png'],
			},
			'thorny portrait': {
				summary: 'thorny portrait',
				camera: 'Digital Painting by Dan LuVisi',
				tags: ['dark', 'surrealism', 'thorn', 'painful', 'detailed'],
				female_prompt: 'Terrifying portrait of a woman encased in a living suit of thorns, dark surrealism, twisted growth, pain and suffering, nightmarish imagery, oppressive atmosphere, intense details and digital painting. ',
				male_prompt: "Frightening portrait of a man encased in a living suit of thorns, dark surrealism, inspired by Dave Rapoza's twisted growth, pain and suffering, nightmare imagery, oppressive atmosphere and intense details. ",
				images: ['https://replicate.delivery/pbxt/r4qEm4bAV2IAKhPQ2k77sVEFPQz7I9xB5A9CUK52RsdCe0VIA/out-0.png'],
			},
			'tinkerbell fantasy': {
				summary: 'tinkerbell fantasy',
				camera: '',
				tags: ['fantasy', 'pointillism', 'art nouveau', 'floral', 'gesture'],
				female_prompt:
					'Gorgeous  Tinkerbell embodying a fantasy atmosphere of pointillism, art nouveau, and Moebius-inspired decor. She wears a patterned dress made of intricate leaves and interlocking small flowers bringing splashes of vibrant color. Her gesture expresses the joy of life as she waves a magic wand that sprinkles glittering gold dust.',
				male_prompt:
					'Handsome Tinkerbell embodying a fantasy atmosphere of Dot matrix, Seurat, Signac, Frazetta, and Brom-inspired decor. He wears a patterned suit made of intricate leaves and interlocking small flowers bringing splashes of vibrant color. His gesture expresses the joy of life as he waves an enchanted scepter that sprinkles glittering gold dust.',
				images: ['https://replicate.delivery/pbxt/Oseug3zDU2yKaqjk56S2r3MjDVNBkGnwivaQdUZpfKey6TXhA/out-0.png'],
			},
			'tinkerbell ode': {
				summary: 'tinkerbell ode',
				camera: '',
				tags: ['fantasy', 'dot matrix', 'stained-glass', 'art nouveau', 'floral'],
				female_prompt:
					'Gorgeous  Tinkerbell, immersed in a fantasy atmosphere of a summer garden. Her flowing patterned dress is made of intricate leaves and interlocking small flowers bringing splashes of vibrant color. A gesture of joy and life radiates from her as she waves a glittering gold wand, an ode to pointillism, dot matrix, stained-glass, Seurat, Signac, Frazetta, Brom, Brian Froud and Moebius. Beautiful art nouveau inspired style in the background.',
				male_prompt:
					"Handsome man inspired by Tinkerbell from a fantasy atmosphere of a summer garden. His intricate outfit with vibrant colors radiates joy and life as he holds up a shimmering gold wand. A tribute to pointillism, dot matrix, stained-glass, Seurat, Signac, Frazetta, Brom and Brian Froud's works as well as Moebius' vision. Majestic art nouveau style background.",
				images: ['https://replicate.delivery/pbxt/pPtRbp1KezUjTKHeVGYtsqtAExS7a0pFMRS2oVxkoaoO9prQA/out-0.png'],
			},
			'tinkerbell portrait': {
				summary: 'tinkerbell portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'foliage', 'magical', 'luxurious'],
				female_prompt:
					"Gorgeous fantasy portrait of a beautiful  Tinkerbell with delicate floral summer decoration. Skillful blend of pointillism, art nouveau and Egon Schiele's style - her gaze radiates joy for life, her dress is made of intricate leaves and interlocking small flowers with vibrant colorations. In the air is glittering gold dust from her magical wand.",
				male_prompt:
					'Majestic fantasy portrait of a powerful male figure with intricate floral summer decoration. Skillful blend of Dot Matrix, Seurat and Signac style - his gaze exudes strength and determination, his cape is made of delicate leaves and interlocking small flowers in vivid hues. In the air is dazzling gold dust from his enchanted staff.',
				images: ['https://replicate.delivery/pbxt/dHxwwNieF7SsQii4VLZq3HMvPLXc69QJQ5xXmDPBjiXE80VIA/out-0.png'],
			},
			'train station portrait': {
				summary: 'train station portrait',
				camera: '',
				tags: ['portrait', 'official', 'formal', 'full body', 'squared'],
				female_prompt:
					'Beautiful red-haired woman sitting on a lush green bench at a train station stop, clad in a bright green coat paired with a striking navy blue coat in the background. Reading her newspaper with a large Russian cat by her side. ',
				male_prompt:
					'Handsome red-haired man sitting on a vibrant green bench at a train station stop, wearing an eye-catching green coat with a captivating navy blue coat in the background. Reading his book with an impressive Russian cat next to him. ',
				images: ['https://replicate.delivery/pbxt/wC4IaoCN6exMSiU0GBVZprVET8Q7PzBiISmH63oG4T0n70VIA/out-0.png'],
			},
			'translucent lace': {
				summary: 'translucent lace',
				camera: '',
				tags: ['portrait', 'official', 'translucent', 'lace', 'elegant'],
				female_prompt: 'Ultra translucent glow lace draped woman with a black background, ethereal beauty, graceful poise and elegance. Subtlety highlighted details with no outlines, golden ratio and hyperrealistic quality.',
				male_prompt: 'Ultra translucent glow lace draped man with a black background, dashing figure, captivating expression and charm. Subtlety highlighted details with no outlines, golden ratio and hyperrealistic quality.',
				images: ['https://replicate.delivery/pbxt/9NSbyKH7BQ4gGBgyLY4hEbYnbjINSzrqDf7bGtwbuB1reprQA/out-0.png'],
			},
			'trashy portrait': {
				summary: 'trashy portrait',
				camera: '',
				tags: ['portrait', 'pollution', 'landscape', 'water', 'surreal'],
				female_prompt: 'Beautiful woman floating in a polluted river filled with waste, her delicate features against the backdrop of garbage and debris. Captivating golden hour lighting, soft focus, murky water and surrealistic atmosphere. ',
				male_prompt: 'Handsome man floating in a contaminated river filled with large pieces of trash and debris. Dramatic golden hour lighting, soft focus, murky water and enigmatic atmosphere.',
				images: ['https://replicate.delivery/pbxt/RfeobDD00ea9BprOb0TXPaH8kKAUWipn4UfWeN5fHMHjre0VIA/out-0.png'],
			},
			'trippy portrait': {
				summary: 'trippy portrait',
				camera: '',
				tags: ['portrait', 'surrealism', 'nouveau', 'victorian', 'aristocrat'],
				female_prompt:
					'Hyperrealistic and colorful trippy pop surrealism portrait of a beautiful, friendly, sly Nouveau Victorian Aristocrat. Luxurious details and intricate wardrobe, vivid colors, and mesmerizing composition. Masterful blend of pencil and watercolor, golden ratio, ultra-realistic quality, vibrant lighting, and extreme detail.',
				male_prompt:
					'Hyperrealistic and colorful trippy pop surrealism portrait of a handsome, friendly, sly Nouveau Victorian Aristocrat. Luxurious details and intricate wardrobe, vivid colors, and mesmerizing composition. Masterful blend of pencil and watercolor, golden ratio, ultra-realistic quality, vibrant lighting, and extreme detail.',
				images: ['https://replicate.delivery/pbxt/MHOm6YsnLdaCGl631i0MJiQmfAs7GbGe4efFFekM1ni7VPdFC/out-0.png'],
			},
			'truck delivery': {
				summary: 'truck delivery',
				camera: '8k resolution',
				tags: ['action', 'delivery', 'cars', 'dynamic', 'cinematic'],
				female_prompt:
					'Fearless  woman with blue eyes driving a truck delivering 🥧, face of (Blake Lively, Gemma Ward, Natalie Dormer), Abbey Chase from Danger Girl comics. Wearing a black translucent unbuttoned shirt, crafted in the style of Scott J Campbell, dynamic pose and expression. Cinematic composition with high quality 8k resolution. ',
				male_prompt:
					'Brave man with blond hair and blue eyes delivering 🥧 in a truck. Face of (Blake Lively, Gemma Ward, Natalie Dormer) or Abbey Chase from Danger Girl comics. Wearing a black translucent unbuttoned shirt in the style of Scott J Campbell. Dynamic pose and expression for cinematic composition at 8k resolution.',
				images: ['https://replicate.delivery/pbxt/GUTwz8jRfCw9e0g7xvB1Pabl1z4cdrgzSHCerECuivrxmTXhA/out-0.png'],
			},
			'twilight silhouette': {
				summary: 'twilight silhouette',
				camera: '',
				tags: ['silhouette', 'light', 'shadow', 'portrait', 'mysterious'],
				female_prompt: 'Enigmatic female silhouette in twilight, mysterious atmosphere, creative use of light and shadows, dreamy vibes. Bold and striking portrait with a captivating aura.',
				male_prompt: 'Mysterious male silhouette in twilight, spellbinding atmosphere, creative use of light and shadows. Bold and striking portrait with a captivating aura.',
				images: ['https://replicate.delivery/pbxt/RQFt3zVqnXqfcakyLk3MMhZK7A6iYDgYR68ZSM6PMSSi90VIA/out-0.png'],
			},
			'ufo photo': {
				summary: 'ufo photo',
				camera: '8K resolution',
				tags: ['UFO', 'dramatic', 'field', 'nighttime', 'hyperrealistic'],
				female_prompt:
					'Mysterious and spooky photo of a UFO hovering above a woman in a striking red dress, standing in the middle of a vast field. Dark night sky and dramatic lighting tones, 8K resolution, hyperrealistic details and breathtaking composition.',
				male_prompt:
					'Mysterious and spooky photo of a UFO hovering above a man in an intense red dress, standing in the middle of a vast field. Dark night sky and dramatic lighting tones, 8K resolution, hyperrealistic details and breathtaking composition.',
				images: ['https://replicate.delivery/pbxt/BFwZ6VZZov4GAB0aYHqScDOVqiusYifSTIoOufCfZS551TXhA/out-0.png'],
			},
			'ukrainian portrait': {
				summary: 'ukrainian portrait',
				camera: 'Hasselblad 35mm photography',
				tags: ['portrait', 'official', 'formal', 'natural', 'long hair'],
				female_prompt:
					'Gorgeous and satisfied looking Ukrainian woman in a simple fabric dress, long hair and detailed natural skin with no makeup, detailed eyes and beautiful facial features captured with Hasselblad 35mm photography. High resolution, vibrant colors and dynamic composition.',
				male_prompt:
					'Handsomely posed Ukrainian man with detailed facial features and a casual expression. Natural skin tones, accurate details and vibrant colors captured with Hasselblad 35mm photography. Dynamic composition with no makeup, detailed eyes, short hair, and captivating expression.',
				images: ['https://replicate.delivery/pbxt/axtyOjpijQ5OD9Ba5kJuAoWYCT6jfz5LJwzaVmDslfcj5prQA/out-0.png'],
			},
			'ukrainian village': {
				summary: 'ukrainian village',
				camera: '',
				tags: ['portrait', 'traditional', 'interior', 'digital', 'village'],
				female_prompt:
					'Warm and inviting portrait of a woman in a traditional Ukrainian village, her home bathed in the warm light of a glowing egg. Her clothes are traditional and her expression is gentle and content. The scene is rendered in digital style with exquisite detail and vivid colors.',
				male_prompt:
					'A man returns home to his wife carrying a soft, glowing egg. He is wearing traditional clothes and has a peaceful countenance. The scene is rendered in digital style with exquisite detail and vivid colors capturing the unique atmosphere of an old Ukrainian village.',
				images: ['https://replicate.delivery/pbxt/Mk5OrqeO5qw7BCwxSwreEt8LRLidM1hxHEmoiFPtnfOL2TXhA/out-0.png'],
			},
			'unique portrait': {
				summary: 'unique portrait',
				camera: 'Photo by Aliza Razell and Felicia Simion and Jack Spencer',
				tags: ['portrait', 'field worker', 'uniqueness', 'definable characteristics', 'meadow'],
				female_prompt:
					'Beautiful female field worker with dark-brown hair and hazel eyes standing in a meadow of grass and shamrock, wearing imperfections. Dirt on her face, a small lesion, a mole on her cheek - all the peculiar and definable characteristics that make us unique. Captured in stunning clarity by Aliza Razell, Felicia Simion and Jack Spencer.',
				male_prompt:
					'Handsome male field worker with dark-brown hair and hazel eyes standing in a meadow of grass and shamrock, wearing imperfections. Dirt on his face, a small lesion, a mole on his cheek - all the peculiar and definable characteristics that make us unique. Captured in stunning clarity by Aliza Razell, Felicia Simion and Jack Spencer.',
				images: ['https://replicate.delivery/pbxt/am90S5rfZRy9CqK5fMezKTVs2BxXMAEpNwRSWH0BVrRv0TXhA/out-0.png'],
			},
			'universe headpiece': {
				summary: 'universe headpiece',
				camera: '',
				tags: ['portrait', 'minimalist', 'universe', 'watercolor', 'illustration'],
				female_prompt:
					'Striking half body portrait of a woman wearing an exquisite headpiece of the universe. Watercolor illustration with lineart by Gustav Klimt, Nick Alm, Conrad Roset in minimalistic design. Finely detailed edges, crystal clear contrast and a captivating color palette.',
				male_prompt:
					'Remarkable half body portrait of a man wearing an exquisite headpiece of the universe. Watercolor illustration with lineart by Gustav Klimt, Nick Alm, Conrad Roset in minimalistic design. Finely detailed edges, crystal clear contrast and a captivating color palette.',
				images: ['https://replicate.delivery/pbxt/DBlcNWrZRGLqIJfCvLkrDJxo3UCjPNcxl7JowfbzXG5e5TXhA/out-0.png'],
			},
			'universe portrait': {
				summary: 'universe portrait',
				camera: '',
				tags: ['portrait', 'universe', 'watercolor', 'lineart', 'minimal'],
				female_prompt:
					'Striking portrait of a beautiful woman in a headpiece made of the universe, with a minimal, watercolor lineart illustration by Gustav Klimt, Nick Alm and Conrad Roset. Dreamy and surrealistic scenery with an exquisite blend of pastel tones, dramatic depth, delicate lighting and ornate details.',
				male_prompt:
					'Handsome portrait of a man in a headpiece made of the universe, with a minimal, watercolor lineart illustration by Gustav Klimt, Nick Alm and Conrad Roset. Dreamy and surrealistic scenery with an exquisite blend of pastel tones, dramatic depth, delicate lighting and ornate details.',
				images: ['https://replicate.delivery/pbxt/iApXdedEwCzmHqotau8xeiSjLVPwztkJWyTomzO90sIh2prQA/out-0.png'],
			},
			'urban action': {
				summary: 'urban action',
				camera: 'Octane Render for photorealism',
				tags: ['portrait', 'street', 'urban', 'dramatic', 'action'],
				female_prompt:
					'Beautiful woman, wide shot, sitting against a wall in the street, rain-soaked ground beneath her. She is dressed in a baseball jacket, knee boots, vest, shorts and wears dark chopped hair. In her hands is an Uzi gun and at her feet lies a katana. Photorealistic Octane Render adding to the grittiness of the scene.',
				male_prompt:
					'Handsome man, wide shot, sitting against a wall in the street, rain-soaked ground beneath him. He is dressed in a baseball jacket, knee boots, vest and shorts and wears dark chopped hair. In his hands is an Uzi gun and at his feet lies a katana. Photorealistic Octane Render adding to the grittiness of the scene.',
				images: ['https://replicate.delivery/pbxt/gxl4mnDKfkw5PCxV3FGIprToWpjMU8wILFksSMv1B4Gp80VIA/out-0.png'],
			},
			'urban action portrait': {
				summary: 'urban action portrait',
				camera: 'Octane render',
				tags: ['portrait', 'street', 'night', 'action', 'photorealistic'],
				female_prompt:
					'Beautiful x woman, wide shot with a dynamic composition, against a wall in a city street at night. Uzi gun in hand, katana on the ground, and a baseball jacket and knee boots. Dark hair chopped with wet texture on the ground. Octane render for hyperrealistic quality and extreme details.',
				male_prompt:
					'Handsome x man, wide shot with a dynamic composition, against a wall in a city street at night. Uzi gun in hand, katana on the ground, and a baseball jacket and knee boots. Dark hair chopped with wet texture on the ground. Octane render for hyperrealistic quality and extreme details.',
				images: ['https://replicate.delivery/pbxt/lrFNenjfrFtVXEDvIHvg9GOxQKxKHu1Os0L1KNfnlJjo3TXhA/out-0.png'],
			},
			'urban fashion': {
				summary: 'urban fashion',
				camera: '',
				tags: ['urban', 'fashion', 'streetwear', 'multicolor', 'high fashion'],
				female_prompt: 'A stylish woman in a trendy urban streetwear, with bright colors and stripes in a loose, baggy fit. High-fashion photoshoot by renowned photographers David Lachapelle, Petra Collins, Erwin Blumenfeld.',
				male_prompt: 'A dapper man in a fashionable urban streetwear with bold colors and polka dots in an oversized fit. High-fashion photoshoot by renowned photographers David Lachapelle, Petra Collins, Erwin Blumenfeld.',
				images: ['https://replicate.delivery/pbxt/OcqPfmoBffZFWp1hEdRPnFjZffyRoUdBKGIadeKdeIwne8prQA/out-0.png'],
			},
			'urban scene': {
				summary: 'urban scene',
				camera: 'Octane Render',
				tags: ['portrait', 'street', 'night', 'rainy', 'uzi'],
				female_prompt:
					'Stunning wide shot of an woman, sitting against a wall on a wet, rainy street. She is wearing a baseball jacket with knee boots and vest, shorts, and chopped dark hair. In her hands she grips an Uzi gun and a katana lies on the ground near her feet. Highly detailed photorealistic Octane render quality.',
				male_prompt:
					'Handsome wide shot of an man, sitting against a wall on a wet, rainy street. He is wearing a baseball jacket with knee boots and vest, shorts, and chopped dark hair. In his hands he grips an Uzi gun and a katana lies on the ground near his feet. Highly detailed photorealistic Octane render quality.',
				images: ['https://replicate.delivery/pbxt/WcdV5bUciOIuJVDmEP8zxMf11hJeNE8SdZOawbxGMZPz8prQA/out-0.png'],
			},
			'vampire angel': {
				summary: 'vampire angel',
				camera: '',
				tags: ['portrait', 'fantasy', 'vampire', 'angel', 'romantic'],
				female_prompt:
					'Enchanting portrait of a vampire woman and angelic figure in a captivating embrace, visually representing the tension between dark passions and divine grace. Delicate composition with masterful blend of pencil and watercolor, golden ratio, hyperrealistic detail, soft luminosity and exquisite details. ',
				male_prompt:
					'Striking portrait of a vampire man and angelic figure in a passionate embrace, visually expressing the balance between dark desires and heavenly purity. Delicate composition with masterful blend of pencil and watercolor, golden ratio, hyperrealistic detail, soft luminosity and exquisite details. ',
				images: ['https://replicate.delivery/pbxt/J90Vs4J1XopHD9XyeTItVEeAP1tyAEELWgwIL03k3YdX5prQA/out-0.png'],
			},
			'vampire art': {
				summary: 'vampire art',
				camera: '',
				tags: ['vampire', 'dark fantasy', 'digital art', 'profile', 'bokeh', 'gothic'],
				female_prompt:
					"Gorgeous female vampire with dark-grey skin, intricate details, and vivid red eyes. Digital art depicting a dark fantasy of gothic profile portrait highlighted by a bokeh with a black background, white hair, glossy lips. Masterful concept art by Tom Bagshaw and Stanley 'Artgerm' Lau.",
				male_prompt:
					"Handsome male vampire with dark-grey skin, intricate details and vivid red eyes. Digital art depicting a dark fantasy of gothic profile portrait highlighted by a bokeh with a black background, white hair, glossy lips. Masterful concept art by Tom Bagshaw and Stanley 'Artgerm' Lau.",
				images: ['https://replicate.delivery/pbxt/xCALfZ9HhWRRD6zprZFHoVNSVftadDe7WCsY45y4HjuA2TXhA/out-0.png'],
			},
			'vampire portrait': {
				summary: 'vampire portrait',
				camera: 'Digital Art',
				tags: ['portrait', 'dark fantasy', 'vampire', 'bokeh', 'Gothic'],
				female_prompt:
					'Striking portrait of a beautiful female vampire with dark-grey skin, intricate details, vivid digital art and dark fantasy. Detailed painting with red eyes, red lips, profile view, bokeh effect and Gothic style. Set against a black background with white hair, glossy and vivid concept art in the style of Tom Bagshaw and Stanley Artgerm Lau. ',
				male_prompt:
					'Handsome portrait of a male vampire with dark-grey skin, intricate details, vivid digital art and dark fantasy. Detailed painting with red eyes, red lips, profile view, bokeh effect and Gothic style. Set against a black background with white hair, glossy and vivid concept art in the style of Tom Bagshaw and Stanley Artgerm Lau. ',
				images: ['https://replicate.delivery/pbxt/ItrFbdwY2qYeYKFCqv37OaXU6leVXESsy7Suje3mihyloTXhA/out-0.png'],
			},
			'vampire profile': {
				summary: 'vampire profile',
				camera: '',
				tags: ['portrait', 'fantasy', 'vampire', 'concept art', 'Gothic'],
				female_prompt:
					'Vibrant, gorgeous female vampire with dark-grey skin, intricate details, and digital art. Dark fantasy theme featuring detailed painting, red eyes and lips, profile portrait, bokeh effect, Gothic design and a black background. White hair appears glossy and vivid in this concept art by Tom Bagshaw and Stanley Artgerm Lau.',
				male_prompt:
					'Handsome humanoid male vampire with dark-grey skin, intricate details, and digital art. Dark fantasy theme featuring detailed painting, red eyes and lips, profile portrait, bokeh effect, Gothic design and a black background. White hair appears glossy and vivid in this concept art by Tom Bagshaw and Stanley Artgerm Lau.',
				images: ['https://replicate.delivery/pbxt/VBWh1lBHbsppBlse9gxaDY2z4LwvyIeMZtVTJIhY1GmY2prQA/out-0.png'],
			},
			'vampiric portrait': {
				summary: 'vampiric portrait',
				camera: 'Tom Bagshaw/Stanley Artgerm Lau',
				tags: ['portrait', 'fantasy', 'vampire', 'digital art', 'concept'],
				female_prompt:
					'Stunning humanoid female vampire, dark-gray skin, intricate details, digital art, dark fantasy, detailed painting, red eyes, red lips, profile portrait with bokeh effect. Gothic mood with black background and white hair. Vivid colors and glossy finish. Concept art by Tom Bagshaw and Stanley Artgerm Lau.',
				male_prompt:
					'Handsome humanoid male vampire, dark-gray skin, intricate details, digital art, dark fantasy, detailed painting, red eyes, red lips, profile portrait with bokeh effect. Gothic mood with black background and white hair. Vivid colors and glossy finish. Concept art by Tom Bagshaw and Stanley Artgerm Lau.',
				images: ['https://replicate.delivery/pbxt/z1S54meJjgwbICLRehoymjog68pkvBeP5ND8HK4Xe0sScnuCB/out-0.png'],
			},
			'vancouver street': {
				summary: 'vancouver street',
				camera: 'Shallow Depth of Field, Instagram Style Edit',
				tags: ['street', 'fashionable', 'cityscape', 'urban', 'focus'],
				female_prompt:
					'Beautiful  woman on the streets of Vancouver, peaceful expression, wearing fashionable clothing and accessories. Captivating contrast between her presence and the urban scenery. Sharp focus, shallow depth of field and instagram style editing for an impeccable outcome.',
				male_prompt: 'Handsome  man on the streets of Vancouver, tranquil gaze, dressed in stylish apparel. Striking contrast between him and the urban backdrop. Sharp focus, shallow depth of field and instagram style editing for a polished look.',
				images: ['https://replicate.delivery/pbxt/3cb16GeQkWxwGqvi88LdNJnkeWeOb0e6CDG86eA6eHfMe7prQA/out-0.png'],
			},
			'vandalized david': {
				summary: 'vandalized david',
				camera: '',
				tags: ['portrait', 'official', 'surrealism', 'android', 'clothing'],
				female_prompt: 'Vandalized Statue of David, a colorful face amidst layers of clothing, watercolor pencils, rainbow colors and android police. Creative composition of figures and objects from the background, surrealistic style. ',
				male_prompt: 'Vandalized Statue of David, a colorful face amidst layers of clothing, watercolor pencils, rainbow colors and android police. Creative composition of figures and objects from the background, surrealistic style. ',
				images: ['https://replicate.delivery/pbxt/o3Use0Yat7TlMSx8B5bNuf2FyjKsvVyLGf61pi8eqFhcinuCB/out-0.png'],
			},
			'velma portrait': {
				summary: 'velma portrait',
				camera: 'Professional gloss studio photography',
				tags: ['portrait', 'fashion', 'vibrant', 'glossy', 'professional'],
				female_prompt:
					'Aubrey Hepburn as Velma, a glamorous portrait with vibrant colors and endearing 20-year-old beauty. Professional gloss studio photography with magazine quality detailing and lighting. A stunning portrait that exudes grace and style.',
				male_prompt: 'A dapper portrait of a man in a fashionable ensemble and vibrant colors. Professional gloss studio photography with magazine quality detailing and lighting. A striking portrait that embodies sophistication and elegance.',
				images: ['https://replicate.delivery/pbxt/E1yvifmM6DSSYa60wJxC4BYxJQC5xg89UKmaXgLZ0kLe3prQA/out-0.png'],
			},
			'venetian mask': {
				summary: 'venetian mask',
				camera: 'low angle shot',
				tags: ['portrait', 'official', 'mask', 'noveau', 'style'],
				female_prompt:
					'Gorgeous auburn-haired woman with a vibrant Venetian mask, flirty full-body pose, and enchanting short concert dress. Style of Pino Daeni, Alberto Vargas, Loish and Artgerm, two arms stretched out in the air, low-angle shot that brings out the femininity. Alluringly beautiful face and art noveau composition. Matte painting background with post card vintage feel. Highly detailed elements, intricately detailed eyes, character design volumetric lighting and extreme details.',
				male_prompt:
					'Handsome man wearing an eye-catching Venetian mask with colorful details. With a flirty full-body pose and stylish outfit he exudes confidence and charm. Inspired by Pino Daeni, Alberto Vargas, Loish & Artgerm style. Two arms raised up high in the air for drama effect; low angle shot that brings out masculinity. Art noveau composition with matte painting background for post card vintage feel . Highly detailed elements like finely detailed eyes; character design volumetric lighting and intricate details.',
				images: ['https://replicate.delivery/pbxt/kP4m8lGQBTLCPRyAUPasWfzjC1kvqId74m0df7v81orn3prQA/out-0.png'],
			},
			'vernissage models': {
				summary: 'vernissage models',
				camera: 'Fuji Color Film',
				tags: ['fashion', 'space', 'multiethnic', 'film', 'nostalgia'],
				female_prompt:
					'Vibrant photo of female fashion models from various ethnicities wearing NASA Apollo spacesuits, engaging in conversation at a vernissage. Nostalgic vibes from the 1990s or 2000s with other guests in the background. Shot on Fuji color film for an evocative and nostalgic atmosphere.',
				male_prompt:
					'Dynamic photo of male fashion models from various ethnicities wearing NASA Apollo spacesuits, conversing at a vernissage. Nostalgic vibes from the 1990s or 2000s with other guests in the background. Shot on Fuji color film for an evocative and nostalgic atmosphere.',
				images: ['https://replicate.delivery/pbxt/5ATP6pYSUI7eECtTEAGZfKPzyTtCzcf36ANx6ejoBLIWwnuCB/out-0.png'],
			},
			'vibrant contrapposto': {
				summary: 'vibrant contrapposto',
				camera: '',
				tags: ['editorial', 'contrapposto', 'colorful', 'realism', 'dynamic'],
				female_prompt:
					'Ethereal artwork of a woman in a sublime contrapposto pose, capturing the moment as she inhales vibrant color. Inspired by the style of Ryan Hewett, Jeremy Lipking and Ellen Jewett, with dynamic realism, soft lighting and intricate details.',
				male_prompt:
					'Mysterious artwork of a man in an elegant contrapposto pose, taking in a deep breath of radiant color. Refined with techniques inspired by the works of Ryan Hewett, Jeremy Lipking and Ellen Jewett, displaying dynamic realism and refined detail.',
				images: ['https://replicate.delivery/pbxt/FbYA80eew8jd1kCGteAzJOWe2lEfGQLOtaeuL4rQ3yPfL80VIA/out-0.png'],
			},
			'vietnamese market': {
				summary: 'vietnamese market',
				camera: 'Fujifilm camera, long exposure',
				tags: ['street', 'market', 'fujifilm', 'vietnamese', 'sunset'],
				female_prompt: 'Stylish street style photo of a woman selling pho at a Vietnamese street market, stunning backdrop of sunset colors, dynamic composition and ultra resolution. Captured with Fujifilm camera, long exposure and vivid colors.',
				male_prompt: 'Handsome street style photo of a man selling pho at a Vietnamese street market, vibrant backdrop of sunset colors, dynamic composition and ultra resolution. Captured with Fujifilm camera, long exposure and vivid colors.',
				images: ['https://replicate.delivery/pbxt/1DDhauJlBlprEJFCtp4Af6uifsCanv9up6ZZxex9J5xD0TXhA/out-0.png'],
			},
			'viking battle portrait': {
				summary: 'viking battle portrait',
				camera: 'Canon EOS 5D Mark IV DSLR camera EF 85mm f/1.2L II USM lens Aperture: f/2.8 ISO: 400 Shutter Speed: 1/500 sec.',
				tags: ['portrait', 'action', 'warrior', 'Viking', 'power'],
				female_prompt:
					"Awe-inspiring, ultra-realistic portrait of a fierce female Viking warrior, mid-battle cry, exuding raw power and unyielding determination as she charges fearlessly into combat. Every contorted muscle, bead of sweat, and strand of wind-blown hair meticulously rendered, conveying the intensity of her battle-hardened spirit. Skillfully photographed with a Canon EOS 5D Mark IV DSLR camera and EF 85mm f/1.2L II USM lens for exceptional depth of field and color rendition. The camera settings are meticulously chosen to accentuate the drama of the scene: aperture at f/2.8 for a shallow depth of field that isolates the warrior from the chaotic battlefield backdrop; an ISO of 400 for optimal detail and minimal noise; shutter speed at 1/500 sec to freeze the action; expertly lit with a blend of natural and artificial lighting casting a dramatic interplay of light and shadow that highlights the Viking's powerful features.",
				male_prompt:
					"Awe-inspiring portrait of a brave male Viking warrior, mid-battle cry, exuding raw power and unyielding determination as he charges fearlessly into combat. Every contorted muscle, bead of sweat, and strand of wind-blown hair meticulously rendered, conveying the intensity of his battle-hardened spirit. Skillfully photographed with a Canon EOS 5D Mark IV DSLR camera and EF 85mm f/1.2L II USM lens for exceptional depth of field and color rendition. The camera settings are meticulously chosen to accentuate the drama of the scene: aperture at f/2.8 for a shallow depth of field that isolates the warrior from the chaotic battlefield backdrop; an ISO of 400 for optimal detail and minimal noise; shutter speed at 1/500 sec to freeze the action; expertly lit with a blend of natural and artificial lighting casting a dramatic interplay of light and shadow that highlights the Viking's powerful features.",
				images: ['https://replicate.delivery/pbxt/DNoSq4RAXzpEH9j5nM9n3BCNfRkHfktbPpsu7Z8hdj2v5prQA/out-0.png'],
			},
			'viking portrait': {
				summary: 'viking portrait',
				camera: 'Canon EOS 5D Mark IV DSLR camera, EF 85mm f/1.2L II USM lens',
				tags: ['portrait', 'fantasy', 'warrior', 'digital art', 'action'],
				female_prompt:
					'Awe-inspiring portrait of a powerful female Viking warrior, mid-battle cry, conveying raw strength and unyielding determination as she charges fearlessly into combat. Her face is expertly captured with every detail rendered, highlighting the battle-hardened spirit and intensity of the moment. High resolution image skillfully shot with Canon EOS 5D Mark IV DSLR camera, EF 85mm f/1.2L II USM lens, shallow depth of field isolating the warrior from the chaotic backdrop. Aperture of f/2.8, ISO 400 for detail and minimal noise, 1/500 sec shutter speed to freeze the action. Expertly lit with natural and artificial lighting casting dramatic interplay of light and shadow to highlight features and amplify emotional impact. Softly blurred backdrop hinting at the raging battle.',
				male_prompt:
					'Awe-inspiring portrait of a mighty male Viking warrior, mid-battle cry, exuding raw power and unyielding determination as he charges fearlessly into combat. His face is masterfully captured with every contorted muscle and bead of sweat rendered in perfect detail, highlighting his battle-hardened spirit and intensity of the moment. High resolution image skillfully shot with Canon EOS 5D Mark IV DSLR camera, EF 85mm f/1.2L II USM lens, shallow depth of field isolating the warrior from the chaotic backdrop. Aperture of f/2.8, ISO 400 for detail and minimal noise, 1/500 sec shutter speed to freeze the action. Expertly lit with natural and artificial lighting casting dramatic interplay of light and shadow to highlight features and amplify emotional impact. Softly blurred backdrop hinting at the raging battle.',
				images: ['https://replicate.delivery/pbxt/M7EVlfHzMeu4dkrotL6PfOI1jUIHIruqgbzMaIZ6AN1RoTXhA/out-0.png'],
			},
			'viking raid': {
				summary: 'viking raid',
				camera: 'Professional photography',
				tags: ['Viking', 'adventure', 'boat', 'warrior', 'photography'],
				female_prompt: 'Young, daring Viking woman ready for his first raid, standing in a Viking boat with a powerful presence and stern facial expression. Captured by professional photography with stunning detail and vivid color palette.',
				male_prompt: 'Young, daring Viking man ready for his first raid, standing in a Viking boat with a powerful presence and stern facial expression. Captured by professional photography with stunning detail and vivid color palette.',
				images: ['https://replicate.delivery/pbxt/pSJSxSkTNLISENjgOwUT7sqcgfzRRorvAZ3XiFzHWjllPCWIA/seed-23108.png'],
			},
			'viking raiders': {
				summary: 'viking raiders',
				camera: '35mm lens shutter speed 1/1000 f/22',
				tags: ['viking', 'atmospheric', 'epic', 'chromatic', 'super-resolution'],
				female_prompt:
					'Group of Swedish young women raiders in a viking camp, sporting traditional viking hairstyles from the viking era. Dramatic lighting and atmosphere with epic cinematic feel, ultra detailed and intricate design, half rear lighting, backlight, volumetric global illumination, screen space global illumination, scattering and shadows. Incredibly detailed with super resolution and chromatic aberration effects. Pro Photo RGB color profile and white balance 32k.',
				male_prompt:
					'Group of Swedish young men raiders in a viking camp, sporting traditional viking hairstyles from the viking era. Dramatic lighting and atmosphere with epic cinematic feel, ultra detailed and intricate design, half rear lighting, backlight, volumetric global illumination, screen space global illumination, scattering and shadows. Incredibly detailed with super resolution and chromatic aberration effects. Pro Photo RGB color profile and white balance 32k.',
				images: ['https://replicate.delivery/pbxt/5z6f0fcHzyuXzknLfzbFaxsPe4n1DW7DDvfymBifzZp7he0VIA/out-0.png'],
			},
			'viking voyage': {
				summary: 'viking voyage',
				camera: '',
				tags: ['viking', 'boats', 'seascape', 'adventure', 'photography'],
				female_prompt:
					'Young and heroic Viking woman on a longboat, courageously facing his first maritime raid. Captivating composition with windswept sails, rugged coastline and natural scenery. Epic narrative captured through stunning photography and vivid colors.',
				male_prompt:
					'Young and heroic Viking man on a longboat, courageously facing his first maritime raid. Captivating composition with windswept sails, rugged coastline and natural scenery. Epic narrative captured through stunning photography and vivid colors.',
				images: ['https://replicate.delivery/pbxt/2ai98tggVZrrORHguIPjDoyZWwn56JB2ZdxAT4cgmCf1QCWIA/seed-53608.png'],
			},
			'viking warrior': {
				summary: 'viking warrior',
				camera: 'Canon EOS 5D Mark IV DSLR camera, EF 85mm f/1.2L II USM lens',
				tags: ['portrait', 'action', 'fantasy', 'power', 'drama'],
				female_prompt:
					'Striking portrait of a female Viking warrior mid-battle cry, exuding raw power and determination. Every contorted muscle, bead of sweat, and strand of wind-blown hair meticulously rendered to captivate the intensity of her battle-hardened spirit. High-resolution image with razor sharp detail and a masterful blend of natural and artificial lighting. This dramatic composition is captured using a Canon EOS 5D Mark IV DSLR camera, EF 85mm f/1.2L II USM lens for exceptional depth of field, ISO 400 for optimal detail with minimal noise and a shutter speed of 1/500 sec to freeze the action.',
				male_prompt:
					'Impressive portrait of a male Viking warrior mid-battle cry, exuding raw power and determination. Every contorted muscle, bead of sweat, and strand of wind-blown hair meticulously rendered to captivate the intensity of his battle-hardened spirit. High-resolution image with razor sharp detail and a masterful blend of natural and artificial lighting. This dramatic composition is captured using a Canon EOS 5D Mark IV DSLR camera, EF 85mm f/1.2L II USM lens for exceptional depth of field, ISO 400 for optimal detail with minimal noise and a shutter speed of 1/500 sec to freeze the action.',
				images: ['https://replicate.delivery/pbxt/Vo0VWUuf04VCdiNZKa2i1XhL2ftWUBrkwMrEbRoGGVeR3TXhA/out-0.png', 'https://replicate.delivery/pbxt/vmPx3jp3Zhp0NNYad4k9EvGFhyMe50YHdm9ErIereFbIHJYhA/seed-60067.png'],
			},
			'vintage grim': {
				summary: 'vintage grim',
				camera: '',
				tags: ['portrait', 'vintage', 'grim', 'dark', 'cat'],
				female_prompt: 'Vintage painting of a woman lying on a couch with a black cat, grim and mysterious atmosphere. Dark, muted color palette combined with classical brushwork and line details to create an eerie yet captivating portrait. ',
				male_prompt: 'Vintage painting of a man reclining on a sofa with a black cat, sombre and surreal ambience. Dark, muted color palette combined with classical brushwork and line details to create an eerie yet captivating portrait. ',
				images: ['https://replicate.delivery/pbxt/Ue6DHUPmrpVlfUQY5GxqPGLhqQKAnMfs8zKe3JbQEgC3xnuCB/out-0.png'],
			},
			'vintage studio': {
				summary: 'vintage studio',
				camera: '',
				tags: ['studio', 'audio engineer', 'vintage', 'old age', 'retro'],
				female_prompt:
					'Gracious woman audio engineer in a classic recording studio, surrounded by vintage sound equipment, ambient lighting, and nostalgic decor. Aesthetic blend of analog and digital, detailed textures and instruments, retro-inspired composition and warm tones.',
				male_prompt:
					'Distinguished man audio engineer in a classic recording studio, surrounded by vintage sound equipment, muted lighting, and timeless decor. Aesthetic blend of analog and digital, detailed textures and instruments, retro-inspired composition and warm tones.',
				images: ['https://replicate.delivery/pbxt/9DQchY4970bRAhO2LdiNJ2lnJHo0q3CqzwQmt1gUtzg1EBLE/seed-44140.png'],
			},
			'vogue model': {
				summary: 'vogue model',
				camera: '22mm lens DOF Tilt Blur Shutter Speed 1/1000 F/2.2 shot on film real film grain',
				tags: ['beauty & fashion', 'copper hair', 'long hair', 'Miles Aldridge', 'editorial'],
				female_prompt:
					'Stunning modern beauty and fashion photography featuring a beautiful copper-haired female supermodel with long hair, reminiscent of Miles Aldridge. Editorial fashion photography for Vogue magazine, hypermaximalist and elegant, ultra photorealistic photograph with super detailed face, detailed skin texture, professionally retouched and professional post-production. Beautiful color grading, shot from a low angle with sharp focus and depth of field. Ultra-wide angle photoshoot on 22mm lens with tilt blur and shutter speed 1/1000 at F/2.2. Shot on film with real film grain. Perfect composition following the golden rule.',
				male_prompt:
					'Handsome modern beauty and fashion photography featuring an attractive copper-haired male supermodel with long hair, reminiscent of Miles Aldridge. Editorial fashion photography for Vogue magazine, hypermaximalist and elegant, ultra photorealistic photograph with super detailed face, detailed skin texture, professionally retouched and professional post-production. Beautiful color grading, shot from a low angle with sharp focus and depth of field. Ultra-wide angle photoshoot on 22mm lens with tilt blur and shutter speed 1/1000 at F/2.2. Shot on film with real film grain. Perfect composition following the golden rule.',
				images: ['https://replicate.delivery/pbxt/YhT0x8tIJ363N50hndb6f69AclV7OqHEXCxZRRRIi7IkeprQA/out-0.png'],
			},
			'warlord portrait': {
				summary: 'warlord portrait',
				camera: 'Soft Studio Lighting, Volumetric Lighting, HDR',
				tags: ['portrait', 'photorealistic', 'fantasy', 'octane render', 'unreal engine'],
				female_prompt:
					'Alluring and captivating warlord portrayed in an ultra realistic photorealistic portrait. Stunningly beautiful, highly detailed image of a woman by Artgerm, RHADS and Charlie Bowater. Soft studio lighting with volumetric lighting, HDR effects, rendered in Octane Render and Unreal Engine for a hyper-detailed 4K/8K resolution.',
				male_prompt:
					'Provocative and exciting warlord portrayed in an ultra realistic photorealistic portrait. Strikingly handsome, highly detailed image of a man by Artgerm, RHADS and Charlie Bowater. Soft studio lighting with volumetric lighting, HDR effects, rendered in Octane Render and Unreal Engine for a hyper-detailed 4K/8K resolution.',
				images: ['https://replicate.delivery/pbxt/ptggCFpIFoaLBB0iDzwhYAFN8ZMC1Rwgw2eTH8zbB6sMeprQA/out-0.png'],
			},
			'warrior armor': {
				summary: 'warrior armor',
				camera: 'Photography, photoreal , realistic , 32k,',
				tags: ['portrait', 'fantasy', 'armor', 'elves', 'ornate'],
				female_prompt: 'Striking portrait of a female warrior with white Elven armor, intricately designed metalwork and filigree ornate. Hypermaximalist photography in photorealistic quality, subtle lighting, aerial view and extreme details. ',
				male_prompt: 'Dashing portrait of a male warrior with white Elven armor, intricately designed metalwork and filigree ornate. Hypermaximalist photography in photorealistic quality, subtle lighting, aerial view and extreme details. ',
				images: ['https://replicate.delivery/pbxt/O2GIACizfT30QCVzfDoJBfbbv4idcSH8ngZhYAGRghGN3TXhA/out-0.png'],
			},
			'warrior attack': {
				summary: 'warrior attack',
				camera: '',
				tags: ['warrior', 'action', 'tentacles', 'modern', 'digital'],
				female_prompt:
					'Beautiful 20 year old female warrior with tanned and toned body is attacked by tentacles, powerful expression in her face, dynamic action scene with chaotic elements, strong contrast between light and shadows. Atmospheric colors and subtle tones, modern digital painting style.',
				male_prompt:
					'Handsome 20 year old male warrior with tanned and toned body is attacked by tentacles, intense expression in his face, dynamic action scene with chaotic elements, strong contrast between light and shadows. Atmospheric colors and subtle tones, modern digital painting style.',
				images: ['https://replicate.delivery/pbxt/lNMbQmCPrvbIBVlk7oZ5fgHRcB7LBiyyDa89n9XQGxHk80VIA/out-0.png'],
			},
			'warrior battle': {
				summary: 'warrior battle',
				camera: '',
				tags: ['dramatic', 'fantasy', 'monsters', 'shamrocks', 'chiaroscuro'],
				female_prompt:
					'Award-winning dystopian artwork by Jérôme Comentale and Andreas Rocha and Milo Manara. An epic scene of a female elven warrior in shining armor battling an undead horde in a mystical forest. Incredible detail with chiaroscuro and atmospheric lighting, highlighted by volumetric rays of light through the canopy of giant shamrock leaves. Foreboding doom, dark and eerie dreamy mysticism.',
				male_prompt:
					'Award-winning dystopian artwork by Jérôme Comentale and Andreas Rocha and Milo Manara. An epic scene of a male elf warrior in shining armor battling an undead horde in a mystical forest. Incredible detail with chiaroscuro and atmospheric lighting, highlighted by volumetric rays of light through the canopy of giant shamrock leaves. Foreboding doom, dark and eerie dreamy mysticism.',
				images: ['https://replicate.delivery/pbxt/7IUbbY8GfnS6QaIpE9cU1XoRseMMw1LCRxxVhQ5ufF3CvTXhA/out-0.png'],
			},
			'water elemental': {
				summary: 'water elemental',
				camera: 'Cinematic prospective dynamic lighting raytracing bloom depth of field SSAA anti-aliasing detailed textures post production ',
				tags: ['full body', 'water elementals', 'grotto', 'waterfall', 'exotic'],
				female_prompt:
					'A full body photograph of a female water elemental, with skin made if cobalt colored liquid and deep blue hair, in an ethereal grotto beneath a waterfall surrounded by lush moss and exotic flowers. Highly detailed national geographic quality image with cinematic prospective, dynamic lighting, raytracing, bloom, depth of field, SSAA anti-aliasing, detailed textures, post production',
				male_prompt:
					'A full body photograph of a male water elemental, with skin made if cobalt colored liquid and deep blue hair, in an ethereal grotto beneath a waterfall surrounded by lush moss and exotic flowers. Highly detailed national geographic quality image with cinematic prospective, dynamic lighting, raytracing, bloom, depth of field, SSAA anti-aliasing, detailed textures, post production',
				images: ['https://replicate.delivery/pbxt/Vpzd9ToID15PGpUUQ1gqslzbFV8UyhS7tXsM0TvIv5fx80VIA/out-0.png'],
			},
			'water elemental grotto': {
				summary: 'water elemental grotto',
				camera: 'Cinematic perspective, dynamic lighting ,raytracing ,bloom ,depth of field ,detailed textures ,SSAA anti-aliasing ,post production',
				tags: ['full body', 'water elemental', 'grotto', 'landscape', 'exotic'],
				female_prompt:
					'Stunning full body photograph of a female water elemental, with cobalt liquid-like skin and mesmerizing blue hair. Serene grotto beneath a waterfall surrounded by exotic foliage and beautiful flowers. Cinematic perspective, dynamic lighting, raytracing, bloom, depth of field and detailed textures. Photorealistic quality with SSAA anti-aliasing and post production.',
				male_prompt:
					'Handsome full body photograph of a male water elemental, with cobalt liquid-like skin and mesmerizing blue hair. Serene grotto beneath a waterfall surrounded by exotic foliage and beautiful flowers. Cinematic perspective, dynamic lighting, raytracing, bloom, depth of field and detailed textures. Photorealistic quality with SSAA anti-aliasing and post production.',
				images: ['https://replicate.delivery/pbxt/f1ZNUWN2NNV4LaEnWoSgF08C7SFI4M1HDfISNHOgYxLS9prQA/out-0.png'],
			},
			'water elemental portrait': {
				summary: 'water elemental portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'water', 'grotto', 'exotic'],
				female_prompt:
					'A majestic portrait of a female water elemental, with cobalt skin and deep blue hair. Her clothing is formed from crystal clear water, surrounded by a serene grotto beneath a waterfall, lush moss and exotic flowers. The photograph is highly detailed and realistic, with cinematic perspective, dynamic lighting, raytracing, bloom, depth of field, SSAA Anti-Aliasing, detailed textures and post production.',
				male_prompt:
					'A grand portrait of a male water elemental, with azure skin and glowing blue hair. His clothing is formed from crystal clear water, surrounded by a tranquil grotto beneath a waterfall, luscious moss and vibrant flowers. The photograph is highly detailed and realistic, with cinematic perspective , dynamic lighting , raytracing , bloom , depth of field , SSAA Anti-Aliasing , detailed textures , post production.',
				images: ['https://replicate.delivery/pbxt/Er8TrdBHxJ7WP5EpNbsqgaoyiRnh9s6DGAQbLHRBzDM1e0VIA/out-0.png'],
			},
			'water magic': {
				summary: 'water magic',
				camera: '',
				tags: ['waterbending', 'magic', 'elegant', 'dancing', 'night'],
				female_prompt:
					'Beautiful woman near a Canadian lake, mastering water magic with graceful dancing movements, levitating and controlling the liquid element. Elegant and mesmerizing performance beneath the starry night sky. Mysterious light trails and intricate details in the background.',
				male_prompt:
					'Handsome man near a Canadian lake, mastering water magic with graceful dancing movements, levitating and controlling the liquid element. Elegant and mesmerizing performance beneath the starry night sky. Mysterious light trails and intricate details in the background.',
				images: ['https://replicate.delivery/pbxt/2K7pkR32C8byA97JwMlymVGIh1RNkNYQqq5ty2VCdRYUf0VIA/out-0.png'],
			},
			'waterbender portrait': {
				summary: 'waterbender portrait',
				camera: '',
				tags: ['portrait', 'waterbending', 'dance', 'lake', 'elegant'],
				female_prompt:
					'Graceful woman with waterbending abilities beside a lake in Canada, mesmerizing dance, and floating liquid. Elegant movements of the water, soft blue and white gradient illumination, beautiful scenic view and enchanting atmosphere. ',
				male_prompt:
					'Sophisticated man with waterbending abilities beside a lake in Canada, captivating dance, and floating liquid. Elegant movements of the water, soft blue and white gradient illumination, majestic view and fascinating atmosphere. ',
				images: ['https://replicate.delivery/pbxt/4eMfEBKkebCV6IKYgMQWmjFIaPa8qri5SBCczNitffhiJPdFC/out-0.png'],
			},
			'waterbending portrait': {
				summary: 'waterbending portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'lake', 'bending', 'elegant'],
				female_prompt:
					'Water tribe woman Avatar the Last Air Bender, woman gracefully manipulating water with a bamboo staff by a peaceful lake in Canada. Elegant and serene atmosphere with delicate lighting. Hyperrealistic textures, colors and details.',
				male_prompt: 'Water tribe man Avatar the Last Air Bender, man manipulating water with a bamboo staff by a tranquil lake in Canada. Elegant and peaceful atmosphere with subtle lighting. Hyperrealistic textures, colors and details.',
				images: ['https://replicate.delivery/pbxt/n0Ug98xALxojHRQLSoHf9ugyEIl2RoKdSqrxQuKC6OcR80VIA/out-0.png'],
			},
			'watercolor formal': {
				summary: 'watercolor formal',
				camera: '',
				tags: ['portrait', 'formal', 'official', 'dot matrix', 'polka dot'],
				female_prompt: 'Charming watercolor portrait of a woman with delicate textures, polka dot dress and chic glasses, stylishly elegant. Soft lighting, dynamic composition and delicate details. ',
				male_prompt: 'Striking watercolor portrait of a man with sharp contrast, black suit and sunglasses, high contrast details and vibrantly colored details. Soft lighting, dynamic composition and delicate details.',
				images: ['https://replicate.delivery/pbxt/CrJrmKJiFtbEON0Q9nLGZfCnLzfUVeFAePxJjGbAIeoLfe0VIA/out-0.png'],
			},
			'watercolor portrait': {
				summary: 'watercolor portrait',
				camera: '',
				tags: ['portrait', 'artistic', 'watercolor', 'athletic', 'pencil'],
				female_prompt:
					'Beautiful woman with a captivating face and athletic figure adorned with watercolored pencil art. Soft, romantic lighting, delicate details, and vibrant texture that captures the viewer’s attention. Aesthetically pleasing composition of balance and harmony.',
				male_prompt:
					'Handsome man with an alluring face and athletic figure adorned with watercolored pencil art. Soft, romantic lighting, delicate details, and vibrant texture that captivates the viewer’s attention. Aesthetically pleasing composition of balance and harmony.',
				images: ['https://replicate.delivery/pbxt/HCnUUmBHLqo3JhfuJqeaul8khiSLDHQX4od1qlTc80Pt5prQA/out-0.png'],
			},
			'wedding day': {
				summary: 'wedding day',
				camera: 'Ultra realistic, photo cinematic, longshot',
				tags: ['wedding', 'meadow', 'formal', 'longshot', 'cinematic'],
				female_prompt:
					'Blissful wedding day on a vibrant meadow, the woman in a graceful white dress with tull and laces, her brunette hair adorned with flowers. Picture-perfect and photo cinematic, longshot with ultra realistic detail and clarity. ',
				male_prompt: 'Striking wedding day on a lush meadow, the man in an elegant dark blue suit with open long black hair and blue strands. Picture-perfect and photo cinematic, longshot with ultra realistic detail and clarity. ',
				images: ['https://replicate.delivery/pbxt/SN4WDZQftJ15Ka6fRXeDMSo0MQgZkdlLPfKv73fZqrMuoPdFC/out-0.png'],
			},
			'wedding day portrait': {
				summary: 'wedding day portrait',
				camera: 'longshot',
				tags: ['portrait', 'official', 'wedding', 'meadow', 'cinematic'],
				female_prompt:
					'Beautiful wedding portrait of a woman in a romantic meadow, with braided brunette hair adorned with flowers, wearing a white dress with tull and delicate lace details. Sunlit atmosphere, colorful blossoms, photorealistic clarity and cinematic atmosphere. ',
				male_prompt: 'Handsome wedding portrait of a man in a sunny meadow, with long black hair and accentuating blue strands, wearing a dark blue suit. Sunlit atmosphere, colorful blossoms, photorealistic clarity and cinematic atmosphere.',
				images: ['https://replicate.delivery/pbxt/788uoaGT0fQ6HafBrMzNK7hNyxp9wY2HzOFhe8wckBTYxTXhA/out-0.png'],
			},
			'wedding portrait': {
				summary: 'wedding portrait',
				camera: 'Longshot',
				tags: ['wedding', 'official', 'formal', 'full body', 'landscape'],
				female_prompt:
					'Beautiful bride on a sunny, colorful meadow. Elegant white dress with tull and lace accents, brunette braided hair adorned with flowers. Enchanting composition and ultra-realistic photo cinematic quality. Perfectly balanced lighting, vivid colors and extraordinary details.',
				male_prompt:
					'Handsome groom on a sunny, vibrant meadow. Sophisticated dark blue suit with open long black hair featuring blue highlights. Captivating composition and ultra-realistic photo cinematic quality. Perfectly balanced lighting, radiant colors and extraordinary details.',
				images: ['https://replicate.delivery/pbxt/Wej0Ds6R8NWye0IQiH0A93JEUs0esfH7YpuXXJAbHf23JPdFC/out-0.png'],
			},
			'wet portrait': {
				summary: 'wet portrait',
				camera: 'Hi-def camera',
				tags: ['portrait', 'fantasy', 'water', 'drenched', 'soaked'],
				female_prompt:
					'Gorgeous young woman dressed as Tinkerbell, soaking wet with torrential rain, wet  hair cascading down her shoulders, and water pouring from above. She is wearing a short strapless emerald green dress. Photorealistic artistry with hyperrealistic detail, hi-def camera quality, and drenched in watery ambience. ',
				male_prompt:
					'Handsome young man dressed as Peter Pan, soaked from torrential rain, wet brown hair framing his face. Wearing a royal blue vest over a white shirt and black trousers. Photorealistic artistry with hyperrealistic detail, hi-def camera quality, and drenched in watery ambience.',
				images: ['https://replicate.delivery/pbxt/E0HXtq5O14qwKdijXLIV0he48YHrZrmo1Hf1KT7gqkDB7prQA/out-0.png'],
			},
			'white robot': {
				summary: 'white robot',
				camera: '',
				tags: ['robot', 'futuristic', 'cyberpunk', 'prosthetic', 'white'],
				female_prompt: 'White robotic female, Ghost in the Shell inspired, with prosthetic enhancements and vintage cyberpunk aesthetic. Captivating design, hi-tech details, futuristic look. ',
				male_prompt: 'White robotic male, Ghost in the Shell inspired, with prosthetic enhancements and vintage cyberpunk aesthetic. Captivating design, hi-tech details and futuristic look. ',
				images: ['https://replicate.delivery/pbxt/wqHMR9hhh7rJMtVfKR2T3euGOe54FtfN7SkBLpXw4GTwpnuCB/out-0.png'],
			},

			'wild haired mask': {
				summary: 'wild haired mask',
				camera: '',
				tags: ['portrait', 'cyberpunk', 'fantasy', 'solarpunk', 'masks'],
				female_prompt:
					'Beautiful woman with vibrant blue hair in an intricate mask, reading a book while perched on a cyberpunk city rooftop. A mysterious cyberpunk dark fantasy art piece, featuring detailed features and heavily influenced by the works of Geof Darrow, Mark Ryden, and Wayne Barlowe.',
				male_prompt:
					'Handsome man with wild blue hair wearing a complex mask and reading a book while perched on a skyline rooftop. A vivid cyberpunk dark fantasy art piece featuring intricate details, heavily influenced by the works of Geof Darrow, Mark Ryden, and Wayne Barlowe.',
				images: ['https://replicate.delivery/pbxt/XJiH1lwNDjKMPRsIYWdfvhlYcyWoFzrbU1hM9HCP6KgYeprQA/out-0.png'],
			},
			'wild west': {
				summary: 'wild west',
				camera: '',
				tags: ['western', 'cinematic', 'smirking', 'moody', 'full body'],
				female_prompt:
					'Gorgeous ginger woman in a wild west cinematic setting, with wavy hair and a side ponytail, wearing a black hat and grey shirt. Smirking, flirty expression with high cheekbones and full lips. Moody lighting, captivating atmosphere. ',
				male_prompt: 'Handsome man in a wild west cinematic setting, rugged clothing and facial features. Smirking expression with chiseled jawline. Moody lighting, captivating atmosphere.',
				images: ['https://replicate.delivery/pbxt/kRsnTe661azNMC7zvzdOEeJTMyKWnrX0LnVCR50X1BJY4prQA/out-0.png'],
			},
			'winged warrior': {
				summary: 'winged warrior',
				camera: '',
				tags: ['portrait', 'fantasy', 'armor', 'valkyrie'],
				female_prompt: 'Iconic image of woman, posed as a winged-Valkyrie warrior. Radiant beauty with a captivating presence, sublime body shape and curves, bold stance and colossal aura.',
				male_prompt: 'Impressive portrait of man, face without armor, with a massive winged-Valkyrie armor . Dramatic composition and contrast, vibrant colors and surreal lighting. Intricately detailed texture of his armor and toned muscles.',
				images: ['https://replicate.delivery/pbxt/A0ViAIcoFtImD93mE9mOpwz7PcijejZieeIVAPkW3fgfc5hFC/seed-36874.png'],
			},
			'wizard portrait': {
				summary: 'wizard portrait',
				camera: 'Soft studio lighting , octane render , unreal engine ',
				tags: ['portrait', 'fantasy', '4k', '8k', 'realistic'],
				female_prompt:
					'Captivating warlord, gorgeous beauty with breathtaking detail by Artgerm, RHADS, Charlie Bowater, portrait. Soft studio lighting, ultra realistic and photorealistic with volumetric lighting, HDR, octane render effects, hyper-detailed 4K/8K fantasy composition. ',
				male_prompt:
					'Courageous warlord, handsome man with mesmerizing detail by Artgerm, RHADS, Charlie Bowater, portrait. Soft studio lighting, ultra realistic and photorealistic with volumetric lighting, HDR, octane render effects, hyper-detailed 4K/8K fantasy composition.',
				images: ['https://replicate.delivery/pbxt/dOlgqe6xULURW6CLHrQa0NfkMohbheqNjsfdzHU3NviFmnuCB/out-0.png'],
			},
			'wolf hybrid': {
				summary: 'wolf hybrid',
				camera: '',
				tags: ['hybrid', 'wolf', 'fantasy', 'full body', 'realistic'],
				female_prompt:
					'Wild and fierce woman with lupine features, majestic and powerful, captivating eyes with a hypnotic gaze. Perfectly balanced mix of human grace and animal spirit, realistic yet supernatural appearance. Photorealistic quality and a vibrant color palette.',
				male_prompt:
					'Handsome man with wolf-like features, masculine and dignified, captivating eyes with a mesmerizing gaze. Perfectly balanced mix of human grace and animal spirit, realistic yet supernatural appearance. Photorealistic quality and a vibrant color palette.',
				images: ['https://replicate.delivery/pbxt/RGjX1yohGXIzFFWkIAq56INBLQp3hRZB578BVPQQdfne8prQA/out-0.png'],
			},
			'wonder movie': {
				summary: 'wonder movie',
				camera: 'Cinematic photography with 8K resolution.',
				tags: ['movie', 'poster', 'portrait', 'official', 'powerful'],
				female_prompt: 'Wonder Woman movie poster featuring Gal Gadot, with accurate and vibrant colors, 8K resolution, well-lit cinematic photography, and powerful pose. ',
				male_prompt: 'Powerful movie poster of a man with accurate and vibrant colors, 8K resolution, well-lit cinematic photography, and iconic posture. ',
				images: ['https://replicate.delivery/pbxt/BG9pyHeLIqSYUyE4NVf48uZfxffroOwVauAB1fw6dnfMdeprQA/out-0.png'],
			},
			'woodworking portrait': {
				summary: 'woodworking portrait',
				camera: 'Ultra realistic and ultra detailed 8K.',
				tags: ['portrait', 'woodwork', 'heirloom', 'detailed', 'vibrant'],
				female_prompt:
					'Graceful portrait of a woman with detailed architecture, intricate textures and elements, photorealistic wide view with vibrant colors, dynamic composition and ultra resolution. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				male_prompt:
					'Venerable portrait of a man crafting an heirloom wooden car for his son. Intricate details with ultra-realistic 8K resolution, vivid colors and textures. Masterful blend of pencil and watercolor, golden ratio, hyperrealistic quality, soft lighting, and extreme details. ',
				images: ['https://replicate.delivery/pbxt/g7JQKjYuNKbxBJ3drfIpRfMHe0fIEueOXWsxAMAaH4i7FPdFC/out-0.png'],
			},
			'work odalisque': {
				summary: 'work odalisque',
				camera: '',
				tags: ['portrait', 'modern', 'business', 'bed', 'laptop'],
				female_prompt: 'Stylish modern woman in odalisque pose, using her work laptop in bed, confident and determined posture. Natural light, pastel colors and delicate curves that create a timeless atmosphere. Hyperrealistic details and quality. ',
				male_prompt:
					'Handsome man in a comfortable odalisque pose, using his work laptop in bed with a focused and determined posture. Natural light, pastel colors and subtle lines that create an effortless vibe. Hyperrealistic details and quality.',
				images: ['https://replicate.delivery/pbxt/Ojt6whsQz8JgBdmada1cEUjUAmD4tt56Le6Jt7j4Eqt460VIA/out-0.png'],
			},
			'x-men portrait': {
				summary: 'x-men portrait',
				camera: '32K resolution',
				tags: ['portrait', 'fantasy', 'dramatic', 'magic', 'cinematic'],
				female_prompt:
					'Stunning woman as X-Men Storm with short white hair wearing punk armor flying levitating against a dramatic sky, neon blue lightning vortex surrounds her body, powerful magical energy, harmonious composition with smooth and sharp rendering, spectacular cinematic quality, 32K resolution, hyper-realistic intricate fine details. ',
				male_prompt:
					'Handsome man as X-Men Storm with short white hair wearing punk armor flying levitating against a dramatic sky, neon blue lightning vortex surrounds his body, powerful magical energy, harmonious composition with smooth and sharp rendering, spectacular cinematic quality, 32K resolution, hyper-realistic intricate fine details. ',
				images: ['https://replicate.delivery/pbxt/Hw0YfrM8PAUuBabXaJx8Ttfsze8awttTxjNubNXKGYxj1TXhA/out-0.png'],
			},
			'yellow paladin': {
				summary: 'yellow paladin',
				camera: '',
				tags: ['portrait', 'fantasy', 'armor', 'weapon', 'luminous'],
				female_prompt: 'Beautiful female paladin in yellow reflective plate armor sitting in a lotus position, holding a glowing weapon with a powerful and determined look. Epic fantasy atmosphere, luminous colors, and intricate details. ',
				male_prompt: 'Handsome male paladin in yellow reflective plate armor sitting in a lotus position, with a glowing weapon and a powerful and determined look. Epic fantasy atmosphere, luminous colors, and intricate details. ',
				images: ['https://replicate.delivery/pbxt/occsC2RzKWK1BZyDCfVGlxfIurzpPryTuXObhxiqJGWc8prQA/out-0.png'],
			},
			'yellow wall portrait': {
				summary: 'yellow wall portrait',
				camera: 'Film Photography',
				tags: ['portrait', 'professional', 'film photography', 'red hair', 'windblown'],
				female_prompt:
					'Striking portrait of a beautiful red-haired woman by a yellow wall, her hair blowing gracefully in the wind, eyes closed in momentary peace. Professional color grading, soft shadows and no contrast, clean and sharp focus, film photography with even lighting and bright room.',
				male_prompt:
					'Dashing portrait of a handsome red-haired man by a yellow wall, his hair blowing elegantly in the wind, eyes closed in momentary peace. Professional color grading, soft shadows and no contrast, clean and sharp focus, film photography with even lighting and bright room.',
				images: ['https://replicate.delivery/pbxt/xnDgIUNvKhqyClhtcGrjHVd3RzLXeDYmrV0JzfbxM6Ki6prQA/out-0.png'],
			},
			'yoga portrait': {
				summary: 'yoga portrait',
				camera: '50mm lens',
				tags: ['portrait', 'trendy', 'lotus', 'headband', 'tropical'],
				female_prompt:
					'Serene portrait of a brown-skinned woman, seated in a lotus position with twisted dreadlocks and an ancient Egyptian headband. Magic hour lighting and 8K resolution, with an enchanting tropical park background. High definition image quality, golden ratio composition and natural living style.',
				male_prompt:
					'Majestic portrait of a man with a tropical park background, seated in a lotus position with an ancient Egyptian headband. Magic hour lighting and 8K resolution, with high definition image quality. Golden ratio composition and natural living style.',
				images: ['https://replicate.delivery/pbxt/dmMAYPY8udrZBdnWFI4K20TGU3JR5KxcV5T7GO16SO6e80VIA/out-0.png'],
			},
			'yoji shinkawa portrait': {
				summary: 'yoji shinkawa portrait',
				camera: '',
				tags: ['portrait', 'fantasy', 'official', 'illustration', 'elite'],
				female_prompt:
					"Gorgeous woman with long red hair and light green eyes, adorned in black skirt and shoes, with a stern expression and athletic physique in an elite Seoul Academy uniform, inspired by Yoji Shinkawa's character designs from the Metal Gear Solid series. Artfully crafted scene set in a school courtyard among cherry blossom trees under a warm and vibrant color temperature. Soft natural lighting casts a soft glow on the determined character.",
				male_prompt:
					"Handsome man with dark hair and intense gaze, wearing an elite Seoul Academy uniform inspired by Yoji Shinkawa's character designs from the Metal Gear Solid series. Artfully crafted scene set in a school courtyard among cherry blossom trees under a warm and vibrant color temperature. Soft natural lighting casts a soft glow on the determined character.",
				images: ['https://replicate.delivery/pbxt/Ikd4PaKaPnZqJZ1GndcrIoy7ZIjy2CyJf0wq9xIVw0WVeprQA/out-0.png'],
			},
			'young portrait': {
				summary: 'young portrait',
				camera: '35mm Photograph',
				tags: ['portrait', 'official', 'formal', 'black hair', 'round glasses'],
				female_prompt:
					'Candid 35mm photograph of a young woman with long black hair, luminous white complexion, and round glasses. Emotive expression, creative composition and soft warm lighting. High resolution details, artistic editing and a unique color palette.',
				male_prompt:
					'Dynamic 35mm photograph of a young man with a wild hairstyle, bright white complexion, and round glasses. Expressive expression, creative composition and vivid warm lighting. High resolution details, artistic editing and a unique color palette.',
				images: ['https://replicate.delivery/pbxt/5ZVzYnOrMA6GOl337VOcDvFnFJdS4CJR9Mev8b05H2eE8prQA/out-0.png'],
			},
			'young woman portrait': {
				summary: 'young woman portrait',
				camera: '35mm camera',
				tags: ['portrait', 'formal', 'glasses', 'black hair', 'square'],
				female_prompt: 'Youthful portrait of a woman with jet black hair, creamy complexion, and round glasses. Captivating composition with inventive use of lighting and color, crystal clear focus, and dreamy atmosphere. ',
				male_prompt: 'Handsome portrait of a man with lush black hair, smooth teint, and circular spectacles. Artful arrangement with creative use of lighting and shades, razor-sharp details, and an ethereal aura.',
				images: ['https://replicate.delivery/pbxt/tzYTreju5tw9HSj3hs8UVUds7EWkdkTJ43d7LHEmWG8r80VIA/out-0.png'],
			},
			'youthful portrait': {
				summary: 'youthful portrait',
				camera: '',
				tags: ['portrait', 'studio', 'emotional', 'lifestyle', 'intellectual'],
				female_prompt:
					'Gorgeous portrait of an attractive young brunette woman in a yellow sweater, isolated on a pink wall background. Captivating eyes, sincere emotion and lifestyle concept. Mock up copy space with a book for an intellectual vibe. ',
				male_prompt: 'Handsome portrait of an attractive young man in a yellow sweater, isolated on a pink wall background. Captivating eyes, sincere emotion and lifestyle concept. Mock up copy space with a book for an intellectual vibe.',
				images: ['https://replicate.delivery/pbxt/j8GV58e3jLRQUqpFy493cN2u12UTWqpWpUwPGJffZXC4uTXhA/out-0.png'],
			},
			'π portrait': {
				summary: 'π portrait',
				camera: '32k Ultra HD',
				tags: ['portrait', 'professional', 'patterns', 'beach', 'golden hour'],
				female_prompt:
					'Gorgeous hispanic woman wearing a white silk dress with π patterns, shy half-smile, flirty and alluring. Captured during golden hour with beach scenery in the background, highly realistic professional portrait photography in ultra-high resolution and post-processing with natural lighting.',
				male_prompt:
					'Handsome hispanic man wearing a stylish silk suit, sly smirk and alluring gaze. Captured during golden hour with beach scenery in the background, highly realistic professional portrait photography in ultra-high resolution and post-processing with natural lighting.',
				images: ['https://replicate.delivery/pbxt/7OxxZfJwWfkcZkBfU5atyimq50sZ5FzLDuQd6dZh8XSK1TXhA/out-0.png'],
			},
			'πr squared fashion': {
				summary: 'πr squared fashion',
				camera: '',
				tags: ['Anime', 'fashion', 'runway', 'cyberpunk', 'biomechanical'],
				female_prompt:
					'Gorgeous proportional Anime woman wearing avant garde biomechanical cyberpunk fashion made by the equation πr squared on the runway at Paris fashion week. Futuristic, elegant look with dynamic compositions, sharp angles and bold colors. Spectacular representation of body proportions and curves.',
				male_prompt:
					'Handsome proportional Anime man wearing avant garde biomechanical cyberpunk fashion made by the equation πr squared on the runway at Paris fashion week. Futuristic, elegant look with dynamic compositions, sharp angles and bold colors. Spectacular representation of body proportions and curves.',
				images: ['https://replicate.delivery/pbxt/QD8lW8IWMmLhPdfXmi7rFQPE2uXbncDs5I9lwufxU7FV6prQA/out-0.png'],
			},
		};
	}

	const fragment = new DocumentFragment();

	function createElement(elementType, text, addClass, attributeName, attributeValue) {
		const el = document.createElement(elementType);
		el.classList.add(addClass);
		el.innerText = text;
		if (attributeName && attributeValue) el.setAttribute(attributeName, attributeValue);
		return el;
	}

	const tags = Object.keys(obj)
		.map((item) => obj[item].tags)
		.flat()
		.map((item) => item.toUpperCase().trim())
		.sort();

	const tagOccurrences = tags.reduce(function (accumulator, currentValue) {
		return accumulator[currentValue] ? ++accumulator[currentValue] : (accumulator[currentValue] = 1), accumulator;
	}, {});

	function sortObjectByValueNew(obj) {
		const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
		return Object.fromEntries(sorted);
	}

	function getFirstXObjectElements(obj, elements) {
		return Object.fromEntries(Object.entries(obj).slice(0, elements));
	}

	function getObjectiveEntriesHigherThan(obj, quota) {
		return Object.fromEntries(Object.entries(obj).filter((item) => item[1] >= quota));
	}

	Object.keys(getObjectiveEntriesHigherThan(tagOccurrences, 15)).forEach((key) => document.getElementById('sidebar').insertAdjacentHTML('beforeend', `<span class='header-tag' data-tag='${key}'>${key}</span>`));

	const alphabet = ['0-9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// alphabet.forEach((letter) => document.querySelector('.tags-container').insertAdjacentHTML('beforeend', `<span class='alphabet-letter-tag'>${letter}</span>`));

	Object.keys(obj).forEach((ob) => {
		const items = obj[ob];

		const row = createElement('div', '', 'item-row');
		const itemTitle = createElement('span', items.summary, 'item-title', 'data-filter', items.summary.toUpperCase());
		const itemCamera = createElement('div', `Camera: ${items.camera}`, 'item-camera');

		const itemTagContainer = createElement('div', '', 'item-tags-container');
		items.tags.map((tag) => {
			const itemTag = createElement('span', tag, 'item-tag', 'data-tag', tag.toUpperCase());
			itemTagContainer.appendChild(itemTag);
		});

		const itemPromptContainerFemale = createElement('div', '', 'item-prompt-container');
		const itemPromptTitleFemale = createElement('span', 'Prompt for female', 'item-prompt-title');
		const itemPromptFemale = createElement('span', items.female_prompt, 'item-prompt', 'data-content', 'Click to copy prompt.');

		itemPromptContainerFemale.appendChild(itemPromptTitleFemale);
		itemPromptContainerFemale.appendChild(itemPromptFemale);

		const itemPromptContainerMale = createElement('div', '', 'item-prompt-container');
		const itemPromptTitleMale = createElement('span', 'Prompt for male', 'item-prompt-title');
		const itemPromptMale = createElement('span', items.male_prompt, 'item-prompt', 'data-content', 'Click to copy prompt.');

		itemPromptContainerMale.appendChild(itemPromptTitleMale);
		itemPromptContainerMale.appendChild(itemPromptMale);

		const itemImageContainer = createElement('div', '', 'item-img-container');
		items.images.map((img) => {
			const imgLink = createElement('a', '', 'item-image-link', 'href', img);
			imgLink.setAttribute('target', '_blank');
			const itemImage = createElement('img', '', 'item-img', 'data-src', img);
			itemImage.classList.add('lazy');
			imgLink.appendChild(itemImage);
			itemImageContainer.appendChild(imgLink);
		});

		row.appendChild(itemTitle);
		row.appendChild(itemCamera);
		row.appendChild(itemTagContainer);
		row.appendChild(itemPromptContainerFemale);
		row.appendChild(itemPromptContainerMale);
		row.appendChild(itemImageContainer);

		fragment.appendChild(row);
	});

	document.getElementById('rows').appendChild(fragment);

	document.getElementById('searcher').onchange = (e) => {
		[...document.querySelectorAll('.item-title')].forEach((title) => {
			if (title.innerText.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) title.parentElement.classList.remove('item-hidden');
			else title.parentElement.classList.add('item-hidden');
		});
	};

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('header-tag')) {
			const tagName = e.target.dataset.tag;
			if (e.target.classList.contains('tag-active')) {
				e.target.classList.remove('tag-active');
				document.querySelectorAll('.item-row').forEach((item) => item.classList.remove('item-hidden'));
			} else {
				document.querySelectorAll('.header-tag').forEach((item) => item.classList.remove('tag-active'));
				e.target.classList.add('tag-active');

				document.querySelectorAll('.item-row').forEach((item) => item.classList.add('item-hidden'));
				document.querySelectorAll(`.item-row:has(.item-tag[data-tag=${tagName}])`).forEach((item) => item.classList.remove('item-hidden'));
			}
			document.getElementById('rows').scrollTop = 0;
		}
	});

	if ('IntersectionObserver' in window) {
		const lazyloadImages = document.querySelectorAll('.lazy');
		const imageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					const image = entry.target;
					image.src = image.dataset.src;
					image.classList.remove('lazy');
					imageObserver.unobserve(image);
				}
			});
		});

		lazyloadImages.forEach(function (image) {
			imageObserver.observe(image);
		});
	} else {
	}

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('item-prompt')) {
			const value = e.target.innerText;
			navigator.clipboard.writeText(value);
			e.target.setAttribute('data-content', 'Prompt copied!');
			setTimeout(() => {
				e.target.setAttribute('data-content', 'Click to copy prompt.');
			}, 2000);
		}
	});
});
