import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Values"
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          Our dedicated team has been with us since the beginning, providing top-notch bets, leveraging years of experience and in-depth analysis to deliver winning strategies and valuable insights.
          </GridListItem>
          <GridListItem title="Trust" invert>         
Trust is the heartbeat of our community. We're not just about bets; we're about building relationships grounded in honesty and reliability. Every recommendation, every interaction, is driven by our commitment to earning and preserving your trust.
          </GridListItem>
          <GridListItem title="Passion" invert>
Passion fuels everything we do. From the excitement of game day to the thrill of a well-placed bet, our community is united by a shared love for sports and betting.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}




export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our members at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our members at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Born from the shared passion of three friends, our sports betting community is more than just a platform – it's a tight-knit community where enthusiasts come together to celebrate the thrill of sports and wagering. 
          </p>
          <p>
          With a foundation built on friendship and trust, we've cultivated an environment where members not only enjoy exclusive insights and betting tips but also forge lasting connections with fellow sports aficionados. Whether you're a seasoned bettor or just starting out, join us as we continue to grow and share our love for sports and the excitement of betting.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="500+" label="Members" />
          <StatListItem value="7" label="Handicappers" />
          <StatListItem value="4.95/5" label="Review on Whop" />
        </StatList>
      </Container>

      <Culture />

     

    

      <ContactSection />
    </>
  )
}
