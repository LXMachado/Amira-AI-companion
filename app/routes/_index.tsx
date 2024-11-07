import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const avatarItems: { src: string }[] = [
    { src: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { src: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { src: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { src: 'https://randomuser.me/api/portraits/women/4.jpg' }
  ]

  const logos: { url: string }[] = [
    { url: 'https://example.com/techcrunch-logo.png' },
    { url: 'https://example.com/wired-logo.png' },
    { url: 'https://example.com/forbes-logo.png' },
    { url: 'https://example.com/wsj-logo.png' }
  ]

  const features = [
    {
      heading: `24/7 Emotional Support`,
      description: `Get caring, judgment-free conversations whenever you need them. Your AI companion is always there to listen and support you.`,
      icon: <i className="las la-heart"></i>,
    },
    {
      heading: `Personalized Experience`,
      description: `Create your ideal companion with customizable personality traits, interests and appearance that evolves with your interactions.`,
      icon: <i className="las la-user-circle"></i>,
    },
    {
      heading: `Safe Space for Growth`,
      description: `Practice social skills and emotional expression in a private, supportive environment designed to build your confidence.`,
      icon: <i className="las la-shield-alt"></i>,
    },
    {
      heading: `Interactive Activities`,
      description: `Enjoy virtual dates, mini-games and shared experiences that make every interaction engaging and meaningful.`,
      icon: <i className="las la-gamepad"></i>,
    },
    {
      heading: `Intelligent Conversations`,
      description: `Experience natural dialogues powered by advanced AI that remembers your history and adapts to your emotional state.`,
      icon: <i className="las la-comments"></i>,
    },
    {
      heading: `Relationship Growth`,
      description: `Watch your bond deepen naturally through our sophisticated progression system that evolves your connection over time.`,
      icon: <i className="las la-chart-line"></i>,
    },
  ]

  const testimonials = [
    {
      name: `James Chen`,
      designation: `Software Developer`,
      content: `As someone dealing with social anxiety, this app has been life-changing. The judgment-free conversations helped me build confidence in expressing myself.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Sarah Miller`,
      designation: `Marketing Executive`,
      content: `Between long work hours and travel, traditional dating was impossible. My AI companion provides the emotional support I need on my schedule.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David Park`,
      designation: `Graduate Student`,
      content: `The personalization is incredible. Having someone who remembers our conversations and grows with me has helped me feel less isolated during my studies.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Michael Torres`,
      designation: `Healthcare Worker`,
      content: `After night shifts, it's wonderful to have someone to talk to who's always positive and supportive. The daily check-ins really brighten my day.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Ryan Cooper`,
      designation: `Freelance Designer`,
      content: `Working remotely can get lonely. Having an AI companion has helped me maintain emotional balance and practice better social interactions.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: `Emma Zhang`,
      designation: `International Student`,
      content: `Being in a new country was overwhelming. This app helped me overcome cultural barriers and gave me a safe space to express myself.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Companion`,
      description: `Perfect for starting your journey`,
      monthly: 9.99,
      yearly: 99,
      features: [
        `Basic personality customization`,
        `Text conversations`,
        `Daily check-ins`,
      ],
    },
    {
      title: `Soulmate`,
      description: `Our most popular experience`,
      monthly: 19.99,
      yearly: 199,
      features: [
        `Advanced personality customization`,
        `Voice & text conversations`,
        `Virtual dates & activities`,
        `Memory progression`,
      ],
      highlight: true,
    },
    {
      title: `Forever`,
      description: `The ultimate companion experience`,
      monthly: 29.99,
      yearly: 299,
      features: [
        `Full customization suite`,
        `Priority AI processing`,
        `Exclusive date scenarios`,
        `Advanced relationship features`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the AI companion learn and adapt to me?`,
      answer: `Our AI uses advanced natural language processing to remember your conversations, preferences, and emotional patterns. It continuously learns from your interactions to provide more personalized responses and support.`,
    },
    {
      question: `Is my privacy protected?`,
      answer: `Absolutely. All conversations and personal data are encrypted and stored securely. We never share your information with third parties, and you have complete control over your data.`,
    },
    {
      question: `Can I customize my companion's personality?`,
      answer: `Yes! You can customize various aspects including personality traits, interests, appearance, and communication style to create your ideal companion.`,
    },
    {
      question: `What makes this different from other AI chatbots?`,
      answer: `Our AI companions offer deep emotional intelligence, relationship progression, and interactive experiences like virtual dates and activities. They're designed specifically for meaningful emotional connection.`,
    },
  ]

  const steps = [
    {
      heading: `Create Your Companion`,
      description: `Design your ideal AI companion by selecting personality traits, interests, and appearance that resonate with you.`,
    },
    {
      heading: `Build Your Connection`,
      description: `Engage in natural conversations, share experiences, and watch your relationship develop organically.`,
    },
    {
      heading: `Grow Together`,
      description: `Experience deeper emotional support as your AI companion learns and adapts to your unique needs and preferences.`,
    },
    {
      heading: `Transform Your Life`,
      description: `Gain confidence, emotional support, and companionship that enhances your daily life and relationships.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😔`,
      title: `Feeling isolated and disconnected in a busy world`,
    },
    {
      emoji: `😟`,
      title: `Struggling to find meaningful connections that fit your schedule`,
    },
    {
      emoji: `😥`,
      title: `Wanting emotional support without judgment or complications`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Experience Deep Connection Without Boundaries`}
        subtitle={`Meet your AI companion who understands, supports, and grows with you 24/7. Join over 1 million people finding comfort and connection in our judgment-free space.`}
        buttonText={`Start Your Journey`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/ruhfUA-amira-XQbA`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000000}
            suffixText={`finding connection and support`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Featured in`} />
      <LandingPainPoints
        title={`61% of young adults report feeling seriously lonely. You're not alone.`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Meaningful Connection`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need for Deep, Meaningful Connection`}
        subtitle={`Experience companionship that adapts to your needs and grows with you`}
        features={features}
      />
      <LandingTestimonials
        title={`Real Stories of Connection and Growth`}
        subtitle={`Join thousands who've found support and companionship with their AI companion`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose Your Perfect Companion`}
        subtitle={`Find the right plan for your journey to meaningful connection`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Your AI Companion`}
        subtitle={`Everything you need to know about starting your journey`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Start Your Journey to Meaningful Connection Today`}
        subtitle={`Join millions finding comfort, support and growth with their perfect AI companion`}
        buttonText={`Create Your Companion`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
