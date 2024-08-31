import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Carousel from '../components/Carousel';
import MemberCard from '../components/MemberCard';
import Footer from '../components/Footer';
import members from '../assets/members';

const Home = () => {
  return (
    <>
      <Navbar />
      <Section id="welcome" title="ଗଣେଶ ପୂଜା କମିଟି, ଭରଥାପୁରକୁ ସ୍ୱାଗତ |" bgColor="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white " >
        <p className="text-lg lg:text-xl font-medium max-w-3xl mx-auto mb-8 text-center">
          ଆମେ ଗଣେଶ ଚତୁର୍ତ୍ତୀ ପାଳନ କରିବାବେଳେ ତୁମେ ଆମ ସହିତ ଯୋଗଦାନ କରି ଆମେ ଆନନ୍ଦିତ | ରୋମାଞ୍ଚକର ଘଟଣା, ଆମ କମିଟିର ବାର୍ତ୍ତା ଏବଂ ଅତୀତର ଉତ୍ସବର ଜୀବନ୍ତ ଗ୍ୟାଲେରୀ ଆବିଷ୍କାର କରିବାକୁ ଆମର ୱେବସାଇଟ୍ ଏକ୍ସପ୍ଲୋର୍ କରନ୍ତୁ | ଭଗବାନ ଗଣେଶ ଆପଣଙ୍କୁ ଆନନ୍ଦ ଏବଂ ସମୃଦ୍ଧିରେ ଆଶୀର୍ବାଦ କରନ୍ତୁ | ଆମ ସହିତ ଉତ୍ସବକୁ ଉପଭୋଗ କରନ୍ତୁ!
        </p>
      </Section>
      <Carousel />
      <Section id="president-secretary" title="President and Secretary's Message" bgColor="bg-slate-700 text-white">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1 text-center mb-8 lg:mb-0">
            <img src="src/assets/members/member20.jpeg" alt="President" className="mx-auto rounded-full w-32 h-32 mb-4 hover-lift" />
            <h3 className="text-2xl font-bold">Tapan</h3>
            <p className="text-sm mt-2">"ଯେହେତୁ ଆମେ ଗଣେଶ ଚତୁର୍ତ୍ତୀ ପାଳନ କରୁଛୁ, ମୁଁ ତୁମ ସମସ୍ତଙ୍କୁ ମୋର ହୃଦୟରୁ ଶୁଭେଚ୍ଛା ଜଣାଉଛି | ଭଗବାନ ଗଣେଶ ଆମ ଜୀବନରେ ଆନନ୍ଦ, ସମୃଦ୍ଧତା ଏବଂ ସଫଳତା ଆଣନ୍ତୁ | ଉତ୍ସବରେ ଆମ ସହିତ ଯୋଗ ଦିଅନ୍ତୁ ଏବଂ ଆସନ୍ତୁ ଏହି ଉତ୍ସବକୁ ପ୍ରକୃତରେ ସ୍ୱତନ୍ତ୍ର କରିବା!"</p>
          </div>
          <div className="flex-1 text-center">
            <img src="src/assets/members/member32.jpeg" alt="Secretary" className="mx-auto rounded-full w-32 h-32 mb-4 hover-lift" />
            <h3 className="text-2xl font-bold">Happy</h3>
            <p className="text-sm mt-2">"ଶୁଭ ଗଣେଶ ଚତୁର୍ତ୍ତୀ! ପ୍ରଭୁ ଗଣେଶଙ୍କ ଉତ୍ସବରେ ମୁଁ ସମସ୍ତଙ୍କୁ ସ୍ୱାଗତ କରି ଆନନ୍ଦିତ | ଆସନ୍ତୁ ଏକତ୍ରିତ ହୋଇ ଏହି ପର୍ବର ଆତ୍ମାକୁ ଗ୍ରହଣ କରିବା ଏବଂ ଆମର ପ୍ରିୟ ଦେବତାଙ୍କୁ ସମ୍ମାନ ଦେବା ସହିତ ଚମତ୍କାର ସ୍ମୃତି ସୃଷ୍ଟି କରିବା |"</p>
          </div>
        </div>
      </Section>
      <Section id="members" title="Our Committee Members" bgColor="bg-slate-800 text-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {members.map((member) => (
            <MemberCard key={member.name} image={member.image} name={member.name} role={member.role} />
          ))}
        </div>
      </Section>
      <Section id="gallery" title="Photo Gallery" bgColor="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <img src="/src/assets/gallery/gallery1.jpeg" alt="Gallery Image 1" className="w-full h-64 object-cover rounded-lg shadow-lg hover-lift" />
           {/* Add more images as needed */}
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Home;
