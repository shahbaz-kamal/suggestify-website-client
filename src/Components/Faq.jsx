import React from 'react';
import Title from './Shared/Title';

const Faq = () => {
    return (
       <div>
        <Title title={"Frequently Asked Questions"}> </Title>
         <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">1. How does Suggestify recommend devices or gadgets for me?</div>
          <div className="collapse-content">
            <p>Suggestify uses advanced algorithms to analyze your preferences, budget, and requirements. Whether you're looking for the latest smartphone, a reliable laptop, or gaming accessories, we provide tailored suggestions that fit your needs. Just let us know what you're searching for, and we’ll do the rest!</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">2. Can Suggestify help me find movies to watch?</div>
          <div className="collapse-content">
            <p>Absolutely! Suggestify offers personalized movie recommendations based on your favorite genres, actors, or even your mood. Whether you're in the mood for a thrilling action film, a heartwarming romance, or a family-friendly flick, we’ve got you covered.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">3. Does Suggestify provide suggestions for other categories too?</div>
          <div className="collapse-content">
            <p>Yes, Suggestify is a versatile platform that can recommend a wide range of things beyond devices and movies. From books and travel destinations to restaurants and lifestyle products, we aim to make your decision-making process effortless and enjoyable.</p>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Faq;