export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "hiring-a-web-designer-for-dummies",
        title: "Hiring a Web Designer for Dummies: Everything You Need to Know",
        excerpt:
            "No tech jargon, no fluff. A plain-English breakdown of what SEO actually means, why Lighthouse scores matter, what headers and cookies do, and how to tell if you're getting a good deal on your next website.",
        category: "Guide",
        author: "Zackariah Grogan",
        date: "February 25, 2026",
        readTime: "12 min read",
        content: (
            <>
                <p>
                    So you need a website for your business. Maybe you&apos;ve been told you need &ldquo;SEO.&rdquo; Maybe someone mentioned
                    your &ldquo;Lighthouse score&rdquo; is bad. Maybe a web designer threw a bunch of acronyms at you and you just smiled and
                    nodded.
                </p>
                <p>
                    That ends here. This guide is written in <strong>plain English</strong> for business owners who don&apos;t have a
                    computer science degree. By the end, you&apos;ll know exactly what to look for, what to ask, and how to avoid paying for
                    things you don&apos;t need.
                </p>

                <h2>What Is SEO (and Why Should You Care)?</h2>
                <p>
                    <strong>SEO</strong> stands for <strong>Search Engine Optimization</strong>. In simple terms, it&apos;s everything you
                    do to make Google show your website when someone types in a search like &ldquo;best plumber in Kennewick&rdquo; or
                    &ldquo;restaurants near me.&rdquo;
                </p>
                <p>
                    Think of Google as a librarian. When someone asks a question, the librarian (Google) scans every book (website) in
                    the library and picks the ones that best answer the question. SEO is how you make sure your &ldquo;book&rdquo; is easy for
                    the librarian to find, read, and recommend.
                </p>
                <p>There are three main types:</p>
                <ul>
                    <li>
                        <strong>On-Page SEO</strong> — The words on your website. Are you using the right keywords naturally in your
                        headings, page titles, and descriptions? Does your page clearly describe what you do and where you do it?
                    </li>
                    <li>
                        <strong>Technical SEO</strong> — The behind-the-scenes code. Is your website fast? Is it mobile-friendly?
                        Can Google&apos;s robots actually read and understand your site? This is where things like Lighthouse scores
                        come in (more on that below).
                    </li>
                    <li>
                        <strong>Off-Page SEO</strong> — Your reputation across the internet. Do other reputable websites link to you?
                        Is your Google Business Profile filled out? Do you have positive reviews? These all signal to Google that you&apos;re
                        a trustworthy business.
                    </li>
                </ul>
                <blockquote>
                    <strong>Bottom line:</strong> If your web designer can&apos;t clearly explain their SEO strategy for your site, that&apos;s
                    a red flag. You should demand specifics — not vague promises.
                </blockquote>

                <h2>What Is a Lighthouse Score?</h2>
                <p>
                    <strong>Lighthouse</strong> is a free tool built by Google that grades your website in four categories, each scored
                    from 0 to 100:
                </p>
                <ul>
                    <li>
                        <strong>Performance</strong> — How fast does your website load? If your site takes more than 3 seconds to show
                        content, over half of your visitors will leave before they ever see your homepage. This score tells you exactly
                        how your speed stacks up.
                    </li>
                    <li>
                        <strong>Accessibility</strong> — Can everyone use your website? This includes people using screen readers,
                        people with color blindness, and people with motor impairments. Beyond being the right thing to do, poor
                        accessibility can expose you to ADA lawsuits.
                    </li>
                    <li>
                        <strong>Best Practices</strong> — Is your website following modern web standards? Does it use HTTPS (the lock
                        icon in the address bar)? Are there any console errors behind the scenes?
                    </li>
                    <li>
                        <strong>SEO</strong> — Did the developer follow the basic technical SEO checklist? This checks things like
                        proper heading hierarchy, meta descriptions, and mobile-friendliness.
                    </li>
                </ul>
                <p>
                    Any web designer worth their fee should be able to deliver a site scoring <strong>90+ across all four
                        categories</strong> on Lighthouse. If they can&apos;t, or they don&apos;t even know what Lighthouse is, walk away.
                </p>
                <blockquote>
                    <strong>How to check yourself:</strong> Open Google Chrome, go to your website, press <code>F12</code> on your
                    keyboard, click the &ldquo;Lighthouse&rdquo; tab at the top, and click &ldquo;Analyze page load.&rdquo; It takes about 30 seconds.
                </blockquote>

                <h2>Headers, Footers, and Navigation: Why Structure Matters</h2>
                <p>
                    When someone visits your website, the <strong>header</strong> (the bar at the top) and the <strong>footer</strong>
                    (the section at the bottom) are the two elements that appear on <em>every single page</em>. They are the backbone
                    of your site&apos;s navigation.
                </p>
                <h3>The Header</h3>
                <p>
                    Your header should include your logo, your main navigation links, and a clear <strong>Call-To-Action</strong>
                    (CTA) — like &ldquo;Get a Quote&rdquo; or &ldquo;Book Now.&rdquo; This is prime real estate.
                    If your header is cluttered, confusing, or hard to read on a phone, people will bounce.
                </p>
                <h3>The Footer</h3>
                <p>
                    The footer typically contains your contact information, business hours, links to your privacy policy, and
                    social media icons. Many businesses overlook the footer, but it serves a critical SEO purpose: it&apos;s where
                    Google looks for your <strong>NAP</strong> (Name, Address, Phone number) to verify your local business info.
                </p>
                <blockquote>
                    <strong>Pro tip:</strong> Make sure your business name, address, and phone number are <em>identical</em> in your
                    footer, your Google Business Profile, and every online directory you&apos;re listed on. Inconsistencies hurt your
                    local search ranking.
                </blockquote>

                <h2>What Are Cookies (and Why Does Every Website Ask About Them)?</h2>
                <p>
                    A <strong>cookie</strong> is a tiny text file that a website saves on your visitor&apos;s computer. Cookies are used for
                    practical things like:
                </p>
                <ul>
                    <li>Remembering if someone is logged in</li>
                    <li>Saving items in a shopping cart</li>
                    <li>Tracking how visitors use your site (analytics)</li>
                    <li>Serving targeted ads based on browsing history</li>
                </ul>
                <p>
                    The reason you see the &ldquo;This site uses cookies&rdquo; banner everywhere is because of privacy laws like the
                    <strong> GDPR</strong> (Europe) and <strong>CCPA</strong> (California). If you&apos;re collecting any
                    data — even anonymous analytics through Google Analytics — you may be legally required to let visitors know
                    and get their consent.
                </p>
                <p>
                    Ask your web designer directly: &ldquo;Will my site use cookies, and do I need a consent banner?&rdquo;
                    A good designer will handle this for you automatically.
                </p>

                <h2>Performance: Speed Is Not Optional</h2>
                <p>
                    Website performance is one of the most overlooked factors in web design, and it has a direct impact on whether
                    people stay on your site or click the back button.
                </p>
                <ul>
                    <li>
                        <strong>53% of mobile users</strong> will leave a webpage if it takes longer than 3 seconds to load (source:
                        Google).
                    </li>
                    <li>
                        A 1-second delay in page load time can reduce conversions by <strong>7%</strong>.
                    </li>
                    <li>
                        Google uses page speed as a direct ranking factor — slow sites get buried in search results.
                    </li>
                </ul>
                <p>
                    When talking to a web designer, ask them specifically: &ldquo;What will my site&apos;s load time be on a mobile
                    phone?&rdquo; If they can&apos;t give you a straight answer, that&apos;s a problem. Any professional will optimize
                    images, minify code, and use proper caching to keep your site lightning-fast.
                </p>

                <h2>Mobile-First Design: If It Doesn&apos;t Work on a Phone, It Doesn&apos;t Work</h2>
                <p>
                    Over <strong>60% of all web traffic</strong> now comes from mobile devices. That means the <em>majority</em> of
                    people visiting your business website are doing so on their phone, not a desktop computer.
                </p>
                <p>
                    &ldquo;Mobile-first&rdquo; design means the designer builds the mobile version of your website <em>first</em> and
                    then scales it up for larger screens — not the other way around. This ensures that the experience on a phone is
                    never an afterthought.
                </p>
                <p>
                    Test this right now: pull up your current website on your phone. Can you read everything without pinching
                    and zooming? Is the menu easy to open? Can you tap a phone number to call directly? If any of these fail,
                    your site is actively turning away customers.
                </p>

                <h2>SSL Certificates: The Lock Icon Matters</h2>
                <p>
                    The <strong>SSL certificate</strong> is what creates the little padlock icon 🔒 in your browser&apos;s address bar
                    and changes your site from <code>http://</code> to <code>https://</code>.
                </p>
                <p>
                    Without SSL, browsers like Chrome will literally display a &ldquo;Not Secure&rdquo; warning to visitors. Think about how
                    that looks if you&apos;re asking someone to fill out a contact form or enter their credit card information.
                </p>
                <p>
                    SSL is <strong>non-negotiable</strong> in 2026. Any credible web designer will include it as standard.
                    If someone tries to charge you extra for SSL in this day and age, that&apos;s a red flag.
                </p>

                <h2>Domain Names and Hosting: You Should Own Both</h2>
                <p>
                    Your <strong>domain name</strong> (e.g., yourbusiness.com) and your <strong>hosting</strong> (the server where your
                    website&apos;s files live) are two separate things, and you need to make absolutely sure
                    <em> you own both of them</em>.
                </p>
                <p>
                    A common trap: some web designers register the domain and hosting under <em>their own</em> account. This means
                    if you ever want to switch designers, they effectively hold your website hostage. Always ask:
                </p>
                <ul>
                    <li>&ldquo;Will the domain be registered under <em>my</em> name and email?&rdquo;</li>
                    <li>&ldquo;Will I have full admin access to the hosting account?&rdquo;</li>
                    <li>&ldquo;If we part ways, can I take my website with me?&rdquo;</li>
                </ul>
                <p>
                    If the answer to any of these is &ldquo;no,&rdquo; find a different designer.
                </p>

                <h2>What Should a Web Designer Actually Deliver?</h2>
                <p>Here is a no-nonsense checklist of what you should expect from a professional web designer:</p>
                <ul>
                    <li>✅ A custom, mobile-responsive website (not a template with your logo slapped on)</li>
                    <li>✅ Lighthouse scores of 90+ across Performance, Accessibility, Best Practices, and SEO</li>
                    <li>✅ On-page SEO (proper headings, meta descriptions, alt text on images)</li>
                    <li>✅ SSL certificate (HTTPS)</li>
                    <li>✅ Google Analytics integration so you can track visitors</li>
                    <li>✅ Clear contact forms that actually work and send notifications to you</li>
                    <li>✅ Ownership of your domain and hosting credentials</li>
                    <li>✅ Post-launch support period (at least 2 weeks)</li>
                    <li>✅ A timeline and scope of work in writing <em>before</em> any work begins</li>
                </ul>

                <h2>Red Flags to Watch For</h2>
                <p>
                    Not all web designers are created equal. Here are warning signs that should make you think twice:
                </p>
                <ul>
                    <li>🚩 They can&apos;t show you a portfolio of live websites they&apos;ve built</li>
                    <li>🚩 They don&apos;t mention SEO at all during the sales process</li>
                    <li>🚩 They give you a quote without asking about your business goals</li>
                    <li>🚩 They insist on owning your domain or hosting account</li>
                    <li>🚩 Their own website is slow, broken, or looks outdated</li>
                    <li>🚩 They can&apos;t explain what Lighthouse is or refuse to share your scores</li>
                    <li>🚩 They charge extra for basic things like SSL or mobile responsiveness</li>
                </ul>

                <h2>The Bottom Line</h2>
                <p>
                    Hiring a web designer doesn&apos;t have to be confusing. To recap, here&apos;s the quick-and-dirty version:
                </p>
                <ul>
                    <li><strong>SEO</strong> = making Google find and rank your site. It&apos;s not optional.</li>
                    <li><strong>Lighthouse</strong> = Google&apos;s free report card for your website. Demand 90+ scores.</li>
                    <li><strong>Headers &amp; Footers</strong> = your site&apos;s skeleton. They need to be clean, clear, and consistent.</li>
                    <li><strong>Cookies</strong> = small files that track behavior. You may need a consent banner.</li>
                    <li><strong>Performance</strong> = speed. Slow sites lose customers. Period.</li>
                    <li><strong>SSL</strong> = the lock icon. Non-negotiable in 2026.</li>
                    <li><strong>Ownership</strong> = if you don&apos;t own your domain and hosting, you don&apos;t own your business online.</li>
                </ul>
                <p>
                    The best web designer is the one who can explain all of this to you in plain English <em>and</em> deliver it.
                    You shouldn&apos;t need a computer science degree to understand what you&apos;re paying for.
                </p>
            </>
        ),
    },
    {
        slug: "how-much-does-a-website-cost-tri-cities",
        title: "How Much Does a Website Cost in the Tri-Cities? A 2026 Pricing Guide",
        excerpt:
            "Kennewick, Pasco, and Richland businesses deserve straight answers about website pricing. Here's a real breakdown of what you should expect to pay — and what you should get for your money.",
        category: "Pricing",
        author: "Zackariah Grogan",
        date: "February 25, 2026",
        readTime: "8 min read",
        content: (
            <>
                <p>
                    If you&apos;ve started shopping for a website in the Tri-Cities, you&apos;ve probably gotten quotes
                    ranging from $300 to $30,000. The pricing feels random because nobody explains what drives the cost.
                    This guide lays out the real numbers so you know exactly what you&apos;re paying for.
                </p>

                <h2>The Short Answer</h2>
                <p>
                    Based on current industry data and real project pricing in 2025-2026, here&apos;s where most small
                    businesses land:
                </p>
                <ul>
                    <li>
                        <strong>DIY website builders</strong> (Wix, Squarespace, GoDaddy): <strong>$16–$159/month</strong>.
                        Fast to set up, but limited performance, poor SEO control, and you don&apos;t truly own your site.
                    </li>
                    <li>
                        <strong>Freelance designer</strong>: <strong>$1,500–$5,000</strong> for a basic 3–5 page site.
                        Quality varies wildly. Some freelancers deliver excellent work; others use pre-made templates and
                        charge custom prices.
                    </li>
                    <li>
                        <strong>Professional web design</strong> (small studio or agency): <strong>$5,000–$15,000</strong> for
                        a fully custom 5–12 page site with SEO, mobile optimization, and real strategy behind it. This is the
                        sweet spot for most Tri-Cities businesses that want to compete online.
                    </li>
                    <li>
                        <strong>E-commerce / complex sites</strong>: <strong>$10,000–$50,000+</strong> depending on
                        product count, payment integrations, custom functionality, and database needs.
                    </li>
                </ul>
                <blockquote>
                    <strong>Reality check:</strong> If someone quotes you $500 for a &ldquo;custom&rdquo; website, you&apos;re
                    getting a template with your logo on it. Custom means custom — designed specifically for your business,
                    your audience, and your goals.
                </blockquote>

                <h2>What Drives the Price Up (and Down)</h2>
                <p>
                    Website pricing isn&apos;t arbitrary. Here are the specific factors that move the number:
                </p>
                <h3>Number of Pages</h3>
                <p>
                    A 5-page brochure site (Home, About, Services, Blog, Contact) costs less than a 20-page site
                    with individual service pages, location pages, and resource sections. More pages means more
                    content, more design, and more development time.
                </p>
                <h3>Custom Design vs. Template</h3>
                <p>
                    A template-based site uses a pre-built layout that gets tweaked with your colors and content.
                    A custom-designed site is built from scratch around your specific brand, audience, and conversion
                    goals. The difference is visible to your customers — and to Google.
                </p>
                <h3>SEO and Content Strategy</h3>
                <p>
                    A website without SEO is a billboard in the desert. Proper on-page SEO includes keyword research,
                    optimized headings, meta descriptions, image alt text, internal linking, and local schema markup.
                    This takes real expertise and should be included in any professional build — not sold as an expensive add-on.
                </p>
                <h3>Functionality</h3>
                <p>
                    Contact forms, booking systems, payment processing, member portals, live chat — every feature
                    adds development time. Be specific about what your business actually needs vs. features that
                    sound nice but won&apos;t get used.
                </p>

                <h2>Ongoing Costs to Budget For</h2>
                <p>
                    The build is just the beginning. Every website has recurring costs:
                </p>
                <ul>
                    <li>
                        <strong>Domain name:</strong> ~$10–$20/year for a standard .com domain. Register it under
                        <em> your own</em> account (Google Domains, Namecheap, or Cloudflare).
                    </li>
                    <li>
                        <strong>Hosting:</strong> $10–$50/month for reliable hosting. Managed WordPress hosting
                        (Kinsta, WP Engine) runs $30–$50/month. Cheaper shared hosting ($5/month) often means slow
                        load times and downtime.
                    </li>
                    <li>
                        <strong>SSL certificate:</strong> Usually free through your hosting provider (Let&apos;s Encrypt).
                        If someone charges you separately for SSL, question it.
                    </li>
                    <li>
                        <strong>Maintenance and updates:</strong> $50–$200/month depending on the scope. This covers
                        security patches, plugin updates, content changes, backups, and performance monitoring.
                    </li>
                </ul>

                <h2>Why the Tri-Cities Market Is Different</h2>
                <p>
                    The Tri-Cities metro area reached an estimated <strong>322,875 residents</strong> in 2025,
                    with <strong>2,725 new residents</strong> added in just the past year according to Washington&apos;s
                    Office of Financial Management. The region has grown <strong>68% since 2000</strong> — that&apos;s
                    over 131,000 new people in 25 years.
                </p>
                <p>
                    That growth means more businesses competing for the same local customers. Ten years ago, you
                    might have gotten away with no website at all. Today, when someone searches &ldquo;HVAC repair
                    Kennewick&rdquo; or &ldquo;dentist near Pasco,&rdquo; Google returns a list — and the businesses
                    with professional, fast, SEO-optimized websites show up first.
                </p>
                <p>
                    A cheap template site might have been fine when the Tri-Cities was a smaller market. With nearly
                    323,000 people and growing, the businesses investing in a real online presence are the ones
                    capturing that demand.
                </p>

                <h2>Ask These Questions Before You Sign</h2>
                <p>
                    No matter who you hire, get clear answers to these questions in writing before any money changes hands:
                </p>
                <ul>
                    <li>What is the total project cost, and what does it include?</li>
                    <li>Are there any recurring monthly or annual fees?</li>
                    <li>Will I own my domain name and have admin access to hosting?</li>
                    <li>Is SEO included, or is it billed separately?</li>
                    <li>What are the expected Lighthouse scores for the finished site?</li>
                    <li>What is the timeline from start to launch?</li>
                    <li>What happens if I need changes after launch?</li>
                    <li>Can I see Lighthouse scores from sites you&apos;ve built for other clients?</li>
                </ul>
                <blockquote>
                    <strong>Bottom line:</strong> A website is an investment, not an expense. A $7,000 site that brings in
                    3 new customers a month pays for itself within 60 days for most local businesses. A $500 site that
                    nobody finds on Google costs you money every day it&apos;s live.
                </blockquote>
            </>
        ),
    },
    {
        slug: "google-business-profile-setup-tri-cities",
        title: "How to Set Up Your Google Business Profile for the Tri-Cities (Step-by-Step)",
        excerpt:
            "Your Google Business Profile is how customers in Kennewick, Pasco, and Richland actually find you. This step-by-step guide walks you through setting it up correctly so you show up on Google Maps and local search results.",
        category: "Local SEO",
        author: "Zackariah Grogan",
        date: "February 25, 2026",
        readTime: "10 min read",
        content: (
            <>
                <p>
                    When someone in the Tri-Cities Googles &ldquo;plumber near me&rdquo; or &ldquo;best coffee shop in
                    Richland,&rdquo; Google doesn&apos;t just show a list of websites. It shows a <strong>map pack</strong>
                    — that block of three local businesses at the top of the results with the Google Map next to them.
                </p>
                <p>
                    Getting your business into that map pack is one of the highest-impact things you can do for local
                    visibility. And it starts with one thing: your <strong>Google Business Profile</strong> (formerly
                    called Google My Business).
                </p>

                <h2>What Is a Google Business Profile?</h2>
                <p>
                    Your Google Business Profile (GBP) is a free listing that Google provides for local businesses. It
                    controls what people see when they search for your business name or when they find you in Google Maps.
                    This includes your business name, address, phone number, hours, reviews, photos, and a link to your website.
                </p>
                <p>
                    <strong>This is not optional.</strong> If you don&apos;t set up your GBP, you are invisible to
                    local searchers on Google Maps. Even if you have a website, Google won&apos;t show you in the
                    map pack without a verified GBP listing.
                </p>

                <h2>Step 1: Create or Claim Your Listing</h2>
                <p>
                    Google may have already created a basic listing for your business based on public data. Here&apos;s
                    how to check:
                </p>
                <ul>
                    <li>Go to <strong>business.google.com</strong></li>
                    <li>Sign in with a Google account (use one you control — not your web designer&apos;s account)</li>
                    <li>Search for your business name and address</li>
                    <li>If a listing exists, click &ldquo;Claim this business&rdquo; and follow the verification steps</li>
                    <li>If no listing exists, click &ldquo;Add your business to Google&rdquo; and fill in the details</li>
                </ul>
                <blockquote>
                    <strong>Important:</strong> Use a Google account that <em>you</em> own and will always have access to.
                    If someone else sets this up on their account, they control your listing — and your reviews, photos,
                    and responses go with them if you part ways.
                </blockquote>

                <h2>Step 2: Verify Your Business</h2>
                <p>
                    Google needs to confirm you&apos;re a real business at a real address. Verification methods include:
                </p>
                <ul>
                    <li><strong>Postcard by mail:</strong> Google sends a postcard with a verification code to your business address. This takes 5–14 days.</li>
                    <li><strong>Phone:</strong> Some businesses qualify for instant verification via phone call or text.</li>
                    <li><strong>Email:</strong> Less common, but available in some cases.</li>
                    <li><strong>Video verification:</strong> Google may ask you to record a short video showing your business location and signage.</li>
                </ul>
                <p>
                    <strong>Do not skip verification.</strong> An unverified profile won&apos;t show up in search results
                    or on Google Maps. It&apos;s the single most important step in this entire process.
                </p>

                <h2>Step 3: Fill Out Every Single Field</h2>
                <p>
                    Google rewards completeness. The more information you provide, the more likely Google is to show your
                    listing to searchers. Here&apos;s what to fill out:
                </p>
                <ul>
                    <li>
                        <strong>Business name:</strong> Use your <em>exact</em> legal business name. Don&apos;t stuff
                        keywords in here (e.g., &ldquo;Joe&apos;s Plumbing — Best Plumber in Kennewick WA&rdquo;). Google
                        penalizes this.
                    </li>
                    <li>
                        <strong>Address:</strong> Your real, physical address. If you serve customers at their location
                        (like a mobile mechanic or contractor), you can set a service area instead.
                    </li>
                    <li>
                        <strong>Phone number:</strong> Use a local phone number, not a toll-free number. A (509) area
                        code signals to Google (and customers) that you&apos;re actually local.
                    </li>
                    <li>
                        <strong>Business hours:</strong> Keep these accurate and update them for holidays. Incorrect
                        hours are one of the top complaints in negative Google reviews.
                    </li>
                    <li>
                        <strong>Category:</strong> Pick the most specific primary category that describes your business.
                        Google uses this heavily to determine which searches you show up for. You can add secondary
                        categories too.
                    </li>
                    <li>
                        <strong>Business description:</strong> Write a clear, 750-character description of what you do,
                        who you serve, and where. Mention Kennewick, Pasco, or Richland naturally.
                    </li>
                    <li>
                        <strong>Website URL:</strong> Link to your homepage, or better yet, a dedicated landing page
                        optimized for your primary service.
                    </li>
                </ul>

                <h2>Step 4: Add Photos (This Matters More Than You Think)</h2>
                <p>
                    According to Google&apos;s own data, businesses with photos on their GBP receive <strong>42% more
                        requests for directions</strong> and <strong>35% more click-throughs</strong> to their website than
                    businesses without photos.
                </p>
                <p>Upload the following:</p>
                <ul>
                    <li><strong>Exterior photos:</strong> What your building looks like from the street (helps people find you)</li>
                    <li><strong>Interior photos:</strong> Your workspace, storefront, or office</li>
                    <li><strong>Team photos:</strong> Headshots or candid photos of your staff</li>
                    <li><strong>Work examples:</strong> Before/after shots, completed projects, products</li>
                    <li><strong>Logo and cover photo:</strong> Use your brand logo and a high-quality cover image</li>
                </ul>
                <p>
                    Use real photos — not stock images. Google and your customers can tell the difference.
                </p>

                <h2>Step 5: Get Reviews (and Respond to Every One)</h2>
                <p>
                    Reviews are the single biggest ranking factor for local search after basic listing completeness.
                    Google explicitly uses review count, average rating, and response activity to determine where you
                    show up in the map pack.
                </p>
                <p>Here&apos;s how to build reviews the right way:</p>
                <ul>
                    <li>After completing a job, send a direct link to your Google review page (you can find this in your GBP dashboard)</li>
                    <li>Ask in person at the point of service — this is the most effective method</li>
                    <li>Include a review link in your email signature and on your website</li>
                    <li><strong>Respond to every review</strong> — positive and negative. Google tracks this.</li>
                </ul>
                <blockquote>
                    <strong>Never buy fake reviews.</strong> Google&apos;s detection is sophisticated and getting better.
                    Businesses caught buying reviews get their profiles suspended or removed entirely.
                </blockquote>

                <h2>Step 6: Post Updates Regularly</h2>
                <p>
                    Google Business Profile has a built-in posting feature, similar to social media. You can post updates,
                    offers, events, and news directly to your listing. These posts show up when people find your business
                    in search results.
                </p>
                <p>
                    Posting regularly signals to Google that your business is active and engaged. Aim for at least
                    one post per week. Examples:
                </p>
                <ul>
                    <li>A seasonal promotion or discount</li>
                    <li>A recent project you completed (with photos)</li>
                    <li>An upcoming event or community involvement</li>
                    <li>A helpful tip related to your industry</li>
                </ul>

                <h2>Why This Matters in the Tri-Cities Specifically</h2>
                <p>
                    The Tri-Cities metro area hit an estimated <strong>322,875 residents</strong> in 2025. That&apos;s
                    an increase of over <strong>131,000 people</strong> since 2000, a growth rate of <strong>68%</strong>.
                    Kennewick added 670 new residents in the past year alone. Pasco added 770. Richland added 740.
                </p>
                <p>
                    All those new residents are searching Google to find local businesses. They don&apos;t know
                    who the established players are. They&apos;re typing &ldquo;best electrician in Kennewick&rdquo;
                    and &ldquo;family dentist Pasco WA&rdquo; into their phones. If your Google Business Profile
                    isn&apos;t set up, optimized, and full of real reviews, you&apos;re handing those customers to your
                    competitors.
                </p>
                <p>
                    This is free. It costs you nothing but time. And for a growing metro area adding nearly 3,000 new
                    residents per year, the businesses that take this seriously will be the ones capturing that new demand.
                </p>
            </>
        ),
    },
];
