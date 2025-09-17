import React, { useState } from 'react';

const prompts = [
    { id: 1, title: '1. Computer Desk 3D Printing', content: '“3D Printed Figurine on a Designer Computer Desk – Realistic Workspace Showcase”\nCreate a 1/7 scale commercialized figurine of the characters in the picture, in a realistic style, in a real environment. The figurine is placed on a computer desk. The figurine has a round transparent acrylic base, with no text on the base. The content on the computer screen is a 3D modeling process of this figurine. Next to the computer screen is a toy packaging box, designed in a style reminiscent of high-quality collectible figures, printed with original artwork. The packaging features two-dimensional flat illustrations.' },
    { id: 2, title: '2. STATUE', content: '“Giant Photorealistic Statue in Dhaka – Urban Construction Realism”\nUltra-photorealistic giant statue based on the uploaded photo, keeping the face exactly the same without changes. The statue stands tall in the middle of a Dhaka roundabout near a famous landmark, under construction with scaffolding. Workers in yellow helmets and orange vests are climbing, welding, and building. Some areas remain exposed metal framework, while other sections are detailed and finished.\nSurroundings capture Dhaka city: crowded streets with colorful rickshaws, buses, and cars circling the roundabout, vendors with tea stalls, fruit carts, and umbrellas, shop signs, big billboards, and messy hanging wires. Daytime sky with tropical trees, vibrant and lively atmosphere.\nCamera & Style: Wide-angle cinematic shot, high dynamic range, ultra-detailed textures, sharp focus on the statue with bustling city life in the background, vibrant color grading, 8K realism.' },
    { id: 3, title: '3. Retro Vibes', content: '“Retro Cafe Portrait – Casual Confidence in a Pop Culture Space”\nMid-shot, eye-level, of [reference man on the photo] sitting in a vibrant pop culture-themed cafe. [reference man on the photo] is seated casually in a wooden chair with a brown leather seat, leaning slightly back. His left elbow rests on his left knee, with his hand near his chin, while his right arm is relaxed on the chair\'s armrest. He looks directly at the camera with a calm and confident expression.' },
    { id: 4, title: '4. Women in Red Saree – Golden Hour Glow', content: '“Golden Hour Portrait – Indian Beauty in a Translucent Red Saree”\nConvert, 4k HD realistic, A stunning portrait of a young Indian woman with long, dark, wavy hair cascading over her shoulders. She is wearing a translucent, elegant red saree draped over one shoulder, revealing a fitted blouse underneath.\nWhite flowers are tucked behind her right ear.\nShe is looking slightly to her right, with a soft, serene expression. I want same face as I uploaded no alternation 100 percent same. The background is a plain, warm-toned wall, illuminated by a warm' },
    { id: 5, title: '5. Snowy Fashion Editorial – Woman in Red Saree', content: '“Snow Elegance – Dramatic Red Saree Fashion Editorial”\nCreate a high-resolution cinematic fashion editorial image of a woman standing in a snowy landscape, wearing a striking red saree. The fabric drapes elegantly and flows with the winter wind, contrasting dramatically against the pure white snow. Snowflakes fall softly around me (same person in image and exactly same facial feature), and the lighting is natural yet dramatic, highlighting the texture of the saree and her poised expression. The mood is bold, powerful, and graceful, like a magazine cover shot in the snow. Close up picture.' },
    { id: 6, title: '6. Snowy Fashion Editorial – Man in Red Shirt', content: '“Bold Winter Style – Man in Red Shirt Amidst Snowy Landscape”\nCreate a high-resolution cinematic fashion editorial image of a man standing in a snowy landscape, wearing a striking red shirt. contrasting dramatically against the pure white snow. Snowflakes fall softly around me (same person in image and exactly same facial feature), and the lighting is natural yet dramatic, highlighting the texture of the shirt and my poised expression. The mood is bold, powerful, and graceful, like a magazine cover shot in the snow. Close up picture.' },
    { id: 7, title: '7. Wicker Sofa Resort Portrait', content: '“Resort Elegance – Black Silk Attire in a Garden-Patio Setting”\nGenerate a 4k DSLR Photography of A distinguished man(same person in image and exactly same facial feature) reclines confidently on a wicker sofa in an open, garden-side patio, framed by lush greenery and soft-focus flowering plants in the background, giving the scene a calm, upscale resort ambiance. He wears a crisp black shirt paired with a flowing black veshti or dhoti finished with a subtle gold border, the fabric draping smoothly across his legs and pooling neatly near his edits.' },
    { id: 8, title: '8. Cinematic Double Exposure – Post Apocalyptic', content: '“Silhouette Meets Apocalypse – Dramatic Double Exposure Portrait”\nCinematic double exposure of me in profile post apocalyptic cityscape inside his silhouette.the inner scene shows the man walking through a destroyed, burning urban street.buildings in ruins glowing embers and fire, with a dramatic sunset in the background.\nMoody lighting, warm tones emotional and introspection mood, high detail,\n8k resolution. Ratio 3:4' },
    { id: 9, title: '9. Retro 90s Pinterest Aesthetic – Couple in Navy & Black', content: '“90s Nostalgia – Couple’s Retro Style with Golden Shadows”\nCreate a print style aesthetic with retro saree Neavy georget and two piece black suit, evoking a 90s movie feel Looking each other serene smiling. The couple (same as uploaded image) should wear Nevy and white outfit, with a flower tucked in a girls hair, standing against a deep wall with sunlight shadow in golden tones.' },
    { id: 10, title: '10. Women in Red Saree – Warm Background Portrait', content: '“Serene Beauty – Translucent Red Saree Against Warm Backdrop”\nConvert, 4k HD realistic, A stunning portrait of a young Indian woman with long, dark, wavy hair cascading over her shoulders. She is wearing a translucent, elegant red saree draped over one shoulder, revealing a fitted blouse underneath.\nWhite flowers are tucked behind her right ear.\nShe is looking slightly to her right, with a soft, serene expression. I want same face as I uploaded no alternation 100 percent same. The background is a plain, warm-toned wall, illuminated by a warm' },
    { id: 11, title: '11. Black Saree Spotlight Portrait', content: '“Black Organza Elegance – Warm Spotlight Cinematic Portrait”\nUltra-realistic 4K HD portrait of a young Indian woman with long, dark, wavy hair, styled with white jasmine flowers tucked behind her right ear. She is wearing a translucent black organza saree draped elegantly over her left shoulder, revealing a fitted black sleeveless blouse underneath. She is looking to her right with a gentle, slightly smiling expression. A warm, directional spotlight from the left casts a soft, distinct shadow of her profile on a plain, warm orange-brown...' },
    { id: 12, title: '12. Garden Portrait – White Blouse & Chiffon Saree', content: '“Sunlit Garden Glamour – Blue & White Chiffon Saree Portrait”\nEye-level portrait of a stunning young woman [100% exact face from the picture], with long wavy black hair gently blowing in the breeze, wearing a delicate white sleeveless blouse and a graceful blue-and-white chiffon saree that flows naturally around her. She stands in a sunlit garden, surrounded by lush greenery and blooming white bougainvillea.' },
    { id: 13, title: '13. Artistic Portrait – Traditional Indian Woman', content: '“Art Meets Tradition – Black-and-White & Color Fusion Portrait”\nCreate an artistic portrait of a traditional Indian woman. \nOn the left side, show a large black-and-white smiling close-up of her face with curly sketch-style hair effects blending into the background. \n, place a smaller full-body image of the same woman in color, wearing a traditional silk saree in shades of red and purple, \nThe background should be minimal merging into white space. \nMake the overall composition elegant and creative, blending photo realism with digital art effects.' },
    { id: 14, title: '14. Polaroid-Style Couple Photo', content: '“Vintage Polaroid Moment – Soft Blur, Flash Lighting, and White Curtain”\nTake a picture with a Polaroid camera. the photo should look like a normal photo, without any clear subject or props. The photo should have a slight blur a a consistent light source. Such as a flash from a dark room, spread throughout the photo. Do not change the faces. Replace the background behind the two people with a white curtain. (With the guy hugging me.) Change outfits with matching couple.' },
    { id: 15, title: '15. High Contrast Fashion Portrait – Bold Floral Skirt', content: '“Dynamic Style – High Contrast Floral Fashion Editorial”\nA dramatic high-contrast portrait of a young woman in profile. Her head is subtly turned toward the camera, creating a dynamic pose. She is in full vibrant color, wearing a crisp white shirt with rolled-up sleeves and a voluminous floor-length skirt with bold colorful floral patterns that stand out vividly. One arm is raised high above her head, elegantly pulling her long hair upward, while the other arm frames her face. Her gaze is intense and piercing, directed straight into the lens.' },
    { id: 16, title: '16. Banana Leaf Dress – Natural Elegance', content: '“Nature’s Couture – Fresh Banana Leaf Fashion Portrait”\nA young girl (same facial features as uploaded) wearing a beautifully crafted dress made of fresh banana leaves, designed with elegance and detail. The leaves are artistically layered like flowing fabric, forming a graceful outfit that looks both natural and stylish. Soft light reflects on the glossy green surface of the leaves, giving them a fresh and vibrant glow.\nNature meets fashion 🍃✨\nBanana leaves se stylish dress 🌿\nAI imagination in reality 🙌' },
    { id: 17, title: '17. Hands in Pockets – Relaxed Authority', content: '“Lavender Luxe – Confident Editorial Portrait with Dramatic Smoke”\nA hyper-realistic cinematic editorial portrait of the uploaded person (preserve face 100%). She stands tall in a dark  Lavender  studio,surrounded by soft drifting black Lavender smoke under a dramatic spotlight.Outfit:Fit  Lavender  luxury suit with fit-leg trousers, paired with a slightly unbuttoned white silk shirt. Both hands tucked casually in pockets, shoulders relaxed, confident expression, head tilted slightly upward...' },
    { id: 18, title: '18. Garba Celebration at Night', content: '“Festive Motion – Realistic Garba Dance Under Night Lights”\nUltra-realistic cinematic depiction of a lively Garba celebration at night, with colorful festive lights illuminating a traditional night.People dance joyfully in the background, clapping hands and moving in energetically.The atmosphere is vibrant and dynamic, with blurred motion showing the rhythm of the dance.Lanterns,decorations,and traditional architecture create a warm,festive ambiance.The scene captures the excitement,colors,and energy of Garba,with a realistic,cinematic photographic feel.' },
    { id: 19, title: '19. Retro 90s Red Saree – Back-to-Back Pose', content: '“Retro Romance – 90s Inspired Back-to-Back Couple Aesthetic”\nRetro 90s Pinterest-style cinematic, grainy bright. Girl in red saree, leaning back to guy, hair moving in wind. Guy in white kurta Chinese collar, back-to-back pose, looking sideways. Faces identical to reference. Medium shot, 50mm lens, dramatic shadows on wall, nostalgic cinematic feel.' },
    { id: 20, title: '20. Temple Portrait – White Shirt & Dhoti', content: '“Temple Elegance – Young Man’s DSLR Portrait with Peacocks”\nGenerate a 4k DSLR Photography of a young man(same person n image, exactly same facial feature and he is 6.1 feet Tall) wearing white half hand shirt with 2 buttons open on top and white dhoti with golden border, sunglasses with bare foot at a Tamil Nadu temple, you can use a detailed prompt that specifies a low-angle, DSLR-style photoshoot. The main subject is a young man sitting on a colorful, traditional temple, with several male peacocks visible in the background.' },
    { id: 21, title: '21. Vintage Black Net Saree – 90s Movie Aesthetic', content: '“Vintage Glamour – 90s Inspired Black Net Saree Portrait”\nCreate a retro , vintage-inspired image -grainy yet bright - based on the reference picture.\nThe girl should be draped in a perfect black net saree and with sleeves less blouse, pintrest -style aesthetic saree. The vibe must capture the essence of a 90s movie brow haired baddie ,long her hair and with a white flower in the hair enhanced by a windy, romantic atmosphere and the guy should be wearing an black kurta with white chinos she sits on a wooden bench.' },
    { id: 22, title: '22. Retro 90s Yellow Saree – Back-to-Back Pose', content: '“Nostalgic Charm – 90s Inspired Yellow Saree Couple Portrait”\nRetro  90s Pinterest-style cinematic, grainy bright. Girl in yellow saree, leaning back to guy, hair moving in wind. Guy in black kurta Chinese collar, back-to-back pose, looking frontways. Faces identical to reference. Medium shot, 60mm lens, dramatic shadows on wall, nostalgic cinematic feel.' },
    { id: 23, title: '23. Women in Red Saree – Warm Light Portrait (Duplicate)', content: '“Soft Serenity – Realistic Red Saree Portrait with Warm Lighting”\nConvert, 4k HD realistic, A stunning portrait of a young Indian woman with long, dark, wavy hair cascading over her shoulders. She is wearing a translucent, elegant red saree draped over one shoulder, revealing a fitted blouse underneath.\nWhite flowers are tucked behind her right ear.\nShe is looking slightly to her right, with a soft, serene expression. I want same face as I uploaded no alternation 100 percent same. The background is a plain, warm-toned wall, illuminated by a warm' },
    { id: 24, title: '24. Flower Chiffon Aesthetic – Golden Hour Drama', content: '“Golden Hour Grace – Retro Chiffon Saree with Floral Accents”\npinteresty aesthetic retro saree It must feel like a 90s movie dark brown wavy curly hair with a small flower tucked visibly into her curls.the girl is standing against a solid wall deep shadows and contrast drama lotus flower bookay in her hand while rose petals are showering on her and creating a mysterious and artistic atmosphere where the lighting is worm a golden tones of evoking a sunset or golden hour glow please do not change the face' },
    { id: 25, title: '25. Radha-Inspired Portrait – Black Background Glow', content: '“Divine Beauty – Radha Inspired Saree Portrait in Warm Light”\nConvert 4K HD realistic portrait of young Indian women converting for into Radha with long dark wavy hair cascading over her shoulder \nShe is wearing a transluctant elegant Radha Ji dress drapped over one shoulder revealing fitted blouse with simple elegant heavy lehenga flower are tucked as a jewellery she is looking sightly to her right with a soft serene expression I want same as I uploaded no alternation 100% same the background is plain blackish blud by a warm light source form' },
    { id: 26, title: '26. Giant Smartphone Surreal Image', content: '“Tech Meets Reality – Person Standing on Giant Smartphone”\nA surreal image of a person standing on a giant smartphone showing a Spotify playlist. The person wears a white shirt, black shorts, white sneakers, and headphones, casually posing with hands in pockets. The background is neutral, blending reality with tech in a playful way.' },
    { id: 27, title: '27. Maharani Vintage Portrait', content: '“Royal Radiance – Maharani Inspired Vintage Portrait in Pastels”\nA regal vintage-style portrait of my real face with natural features, styled as a Maharani. She wears a pastel heavy embroidered lehenga with full-sleeve blouse, ornate flowing dupatta (not on head), light maang-teeka, choker, bangles, and small bindi. Her wavy-curly hair flows softly in breeze. She smiles gracefully in a royal sunlit background, with warm mystical cinematic mood, slightly bright yet elegant HD effect.' },
    { id: 28, title: '28. Bollywood 1970s Car Shoot', content: '“Classic Bollywood Vibes – 1970s Mafia Style Car Portrait”\nCreate a vintage 1970s Bollywood-inspired photograph of a stylish man sitting casually on the hood of a classic car. He is dressed in a cream pinstriped blazer, cream bell-bottom trousers, and a dark brown shirt with the top buttons open, paired with brown formal shoes, giving a confident mafia-style look.The car has wide whitewall tires, chrome details, and a polished metallic body, reflecting sunlight. In the background, tall green trees and hedges frame the scene. The photograph has the' },
    { id: 29, title: '29. Black Streetwear Biker Portrait', content: '“Urban Cool – Moody Biker Aesthetic with Royal Enfield”\nA young man dressed in all-black streetwear - black leather jacket, hoodie, jeans, and sneakers casually leans against a matte black Royal Enfield motorcycle parked by a rustic wooden wall. His hands rest in his jacket pockets as he looks down thoughtfully, exuding a cool, moody biker aesthetic. The scene has a cinematic tone with natural daylight highlighting the textures of the wood and metal.' },
    { id: 30, title: '30. Ethereal Majesty', content: '“Maharani Inspired Portrait in Misty Blues and Gold”\n"A graceful Indian princess in an ancient temple corridor, wearing an elaborate lehenga in deep red and royal blue with gold embroidery and celestial motifs. Her long braided hair is adorned with flowers, and she wears traditional jewelry including bangles, earrings, and a maang tikka. She raises one hand, from which a magical light or spark radiates, illuminating the petals swirling around her. The temple is decorated with carved stone pillars, blooming white flowers, and soft golden lanterns. Soft beams of light filter through the architecture, creating an enchanting, mystical atmosphere, with petals floating in the air."' },
    { id: 31, title: '31. Black Streetwear Biker Portrait', content: '“Urban Cool – Moody Biker Aesthetic with Royal Enfield”\nCreate a movie poster using my face. It will; be a parody of The Good, The Bad, and The Ugly called The Good, The Bad, and The Al. It should have a western theme but with an Al crossover twist, maybe a robot as one of the other characters or something' }
];


const App: React.FC = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <main className="bg-gray-900 min-h-screen w-full flex flex-col items-center font-sans p-4 pt-16 sm:pt-24 pb-8">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-lighten filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-lighten filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-lighten filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      
      <div className="relative w-full max-w-2xl text-center mb-16 md:mb-24">
        <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-8 md:p-12">
            <div className="flex justify-center items-center mb-6">
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
            </div>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 tracking-tight">
            TAMILAN TECH INFO
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
            Your Gateway to the World of Technology
          </p>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="relative w-full max-w-5xl px-4">
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-700/50 overflow-hidden">
            <button
                onClick={() => setIsContentVisible(!isContentVisible)}
                aria-expanded={isContentVisible}
                aria-controls="gemini-content"
                className="w-full p-6 flex justify-between items-center cursor-pointer hover:bg-gray-800/80 transition-colors duration-300"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-200 text-left">
                    Gemini & Nano Banana: Trending Prompts
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-7 w-7 text-gray-400 transform transition-transform duration-300 ${isContentVisible ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            
            <div
                id="gemini-content"
                className={`transition-all duration-700 ease-in-out overflow-hidden ${isContentVisible ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-8 border-t border-gray-700/50">
                    <div className="space-y-12">
                       {prompts.map((prompt) => (
                          <div key={prompt.id}>
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                              {prompt.title}
                            </h3>
                            <p className="text-gray-300 text-base whitespace-pre-wrap leading-relaxed font-mono">
                              {prompt.content}
                            </p>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <footer className="relative w-full max-w-5xl text-center py-8 mt-auto">
          <div className="border-t border-gray-700/50 pt-6">
             <p className="text-gray-500 text-sm">&copy; 2024 TAMILAN TECH INFO. All rights reserved.</p>
          </div>
      </footer>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
};

export default App;
