import Header from "@/components/Banner/Header";
import React from "react";

const PrivacyPolicy = () => {
  const privacyPolicy = [
    "1 Click Design, LLC, a Nevada limited liability company (“1 Click Design, LLC,” “we”, “our” or “us”) has implemented this Privacy Policy (“Privacy Policy”) for its 1 Click Design, LLC website, www.iclickdesign.com, (including all areas of the site) (the “Website”), and its applications and software provided online and made available offline through or in connection with the service, including through a mobile device (collectively, the “Service”) to provide our registered users (“Members”) and unregistered users and visitors (collectively “Users” or “you”) information regarding the collection and use of your information on the Service so that you can make an informed decision about your use of the Service.",
    "Capitalized terms that are not defined in this Privacy Policy have the meaning ascribed to them in our Terms of Use. When using the Service, there are general elements of our Service that you should know. We will not use or share your Personally Identifiable Information with anyone except as described in this Privacy Policy. 1 Click Design, LLC does not own your user-generated content. For further details on using the Service please refer to our Terms of Use Agreement available here.",
    "This Privacy Policy applies to information collected by 1 Click Design, LLC and does not apply to information collected by any third-party sites to which the Service may link or to information provided to or collected by third-parties through third-party cookies, web beacons, or other third-party technologies served during your visit to the Service.",
    "Please see the Do Not Track section of this Privacy Policy for how the Service responds to “Do Not Track Mechanisms”.",
    "Note that you can withdraw the consent you have given us to process your information at any time by going to the Settings in your account. Please see the Your Choices section of this Privacy Policy for additional detail.",
    "If you have questions or concerns regarding this Privacy Policy, you should contact us via email to privacy@1clickdesign.com, or send mail to Privacy, 1 Click Design, LLC, 9440 Santa Monica Blvd, Suite 301, Beverly Hills, CA 90210.",
    "As we update and expand our Service, this Privacy Policy may change, so please check this web page for updates to our Privacy Policy. In the event we make material changes to this Privacy Policy, we will provide notice through our Service, or by other means, to provide you with an opportunity to review the changes before they become effective. If you object to any changes, you may close your account.",
    "By using the Service, you agree to the terms and conditions of this Privacy Policy. You acknowledge that your continued use of our Service after we publish or send a notice about changes to our Privacy Policy means that the collection, use and sharing of your personal data is subject to this Privacy Policy.",
  ];
  const privacyPolicySections = [
    {
      title: "Sign-up Information and Profile.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            We will ask you to provide certain information if you choose to
            register with our Service, including your name, email address, your
            date of birth, address, telephone number, and other information
            which identifies you (collectively “Personally Identifiable
            Information”).
          </p>
          <p className="text-justify">
            We may ask for additional Personally Identifiable Information, such
            as driver’s license information, professional licensure information,
            or other methods of age verification, in order to participate in
            certain aspects of our Service. Do not supply to us or disclose on
            the Service any Personally Identifiable Information of any person
            under 18 years of age, as we do not intend to collect information
            from anyone under 18 or invite them to participate in the Service.
          </p>
          <p className="text-justify">
            1 Click Design, LLC complies with the California Online Privacy
            Protection Act of 2003, as amended (“CalOPPA”) with respect to
            Personally Identifiable Information about you (the individual
            consumer) collected online and maintained in an accessible form by
            us (the operator). Do not supply to us or disclose on the Service
            any Personally Identifiable Information of any person under 13 years
            of age, as we do not intend to collect information from anyone under
            13 or invite them to participate in the Service.
          </p>
        </div>
      ),
    },
    {
      title: "User Content.",
      content: (
        <p className="text-justify">
          Our Service may offer its users the opportunity to post User Content,
          comments, reviews, and tag messages via bulletin boards, blogs,
          articles, and chat rooms. If you choose to use these features, you
          should be aware that any Personally Identifiable Information you
          submit through these public Service features can be read, collected,
          or used by other viewers and could be used to send you unsolicited
          messages. We are not responsible for the Personally Identifiable
          Information you choose to submit in these public forums of the
          Service.
        </p>
      ),
    },
    {
      title: "Contact Us.",
      content: (
        <p className="text-justify">
          If you email us through the “contact us” link on our Service, we may
          ask you for information such as your name and email address so we can
          respond to your questions and comments. If you choose to correspond
          with us via email, we may retain the content of your email messages,
          your email address, and our response to you. In certain cases, and
          with your permission, we may post content from your emails to us on
          the Service.
        </p>
      ),
    },
    {
      title: "Website Usage Information Cookies.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The Service may use cookies to collect information for
            record-keeping purposes and make it easier to navigate the Service.
          </p>
          <p className="text-justify">
            Cookies are small text files that are stored on users’ hard drives,
            which often include an anonymous unique identifier. The Service uses
            both “session ID cookies” and “persistent cookies.” Session ID
            cookies are used to store information while a user is logged into
            the site and expire when the user closes their browser. Persistent
            cookies are used to make tasks like logging into the site easier for
            returning users by remembering a user’s login information and may be
            used by your browser on subsequent visits to the Website. Persistent
            cookies stay on a user’s hard drive from one session to the next.
            Persistent cookies can be removed by following your web browser’s
            directions. A session cookie is temporary and disappears after you
            close your browser.
          </p>
          <p className="text-justify">
            When you visit our Website, our computer may ask your computer for
            permission to employ the use of a session cookie or persistent
            cookie. Our Website will then send a cookie to your browser if your
            browser’s preferences allow it.
          </p>
          <p className="text-justify">
            Most web browsers can be adjusted to inform you when a cookie has
            been sent to you and provide you with the opportunity to refuse that
            cookie. However, refusing a cookie may, in some cases, preclude you
            from using or negatively impact the display or function of our
            Website or certain areas or features of our Website. You may choose
            not to receive cookies from the Service by following instructions in
            your web browser’s “help” file, but this may make certain features
            of the Services inaccessible to you.
          </p>
        </div>
      ),
    },
    {
      title: "Clear GIFs/Beacons.",
      content: (
        <p className="text-justify">
          When visiting our Website, we may also use “Clear GIFs” (aka “web
          beacons” or “pixel tags”) or similar technologies in our Website
          and/or in our communications with you. A Clear GIF is typically a
          one-pixel, transparent image located on a web page or in an e-mail or
          other type of message, which helps us to verify an individual’s
          viewing or receipt of a web page or message. Clear GIFs allow us to
          know whether you have viewed a web page prior to visiting our Website
          and may enable us to relate such information to other information,
          including your Personally Identifiable Information. We use the
          information provided from Clear GIFs to enable more accurate
          reporting, improve the effectiveness of our marketing, and make our
          Service better for our users.
        </p>
      ),
    },
    {
      title: "IP Address and Clickstream Data.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Our servers automatically collect data about your Internet Protocol
            address when you visit us. When you request pages from our Website,
            our servers may log your IP Address and sometimes your domain name.
            Our server may also record the referring page that linked you to us
            (e.g., another website or a search engine); the pages you visit on
            this Website; the website you visit after this Website; other
            information about the type of web browser, computer, platform,
            related software and settings you are using; any search terms you
            have entered on this Website or a referral website; and other web
            usage activity and data logged by our web servers.
          </p>
          <p className="text-justify">
            We use this information for internal system administration, to help
            diagnose problems with our servers, to analyze general usage
            patterns, and to administer our Website. Such information may also
            be used to gather broad demographic information, such as country of
            origin and Internet Service Provider. We may aggregate user
            information in a non-personally identifiable manner to share with
            advertisers, to enhance the Website with new features, and for our
            general business purposes. Any or all of these activities with
            regard to the above-described Website Usage Information may be
            performed on our behalf by our third-party service providers.
          </p>
        </div>
      ),
    },
  ];
  const howWeUseInformation = [
    {
      title: "Personal Information",
      content: (
        <p className="text-justify">
          If you submit information to us through the Service, including
          registration and profile information, then we use this information to
          operate, maintain, and provide the features and functionality of the
          Service. We will use your email address to complete the signup
          process. By providing your email address to 1Click Design, LLC, you
          consent to our using the email address to send you Service-related
          notices, including among other things notices required by law, in lieu
          of postal mail. You may not opt-out of Service-related e-mails. We may
          also use your email address to send you other messages, including
          changes to Service features and special offers.
        </p>
      ),
    },
    {
      title: "Usage Information",
      content: (
        <p className="text-justify">
          We use non-Personally Identifiable Information, such as anonymous
          Website use data and IP addresses, to improve the quality and design
          of the Service and to create new features and services by storing,
          tracking, and analyzing your preferences and trends. We may use such
          information to (a) remember information so that you will not have to
          re-enter it during your current or subsequent visits to the Service;
          (b) provide customized content and information; (c) monitor the
          effectiveness of our marketing campaigns and aggregate metrics such as
          the total number of visitors and traffic; (d) diagnose or fix
          technology problems; (e) access your information after you sign in;
          (f) market our Service to advertisers and other third parties; (g)
          aggregate general user and Member statistics including demographic and
          geographic information; and (h) other purposes for which your personal
          identity is not revealed.
        </p>
      ),
    },
    {
      title: "Location-Based Services.",
      content: (
        <p className="text-justify">
          We collect location-based information in order to provide the specific
          location-based services which you request. You understand that certain
          location-based services require a location to function properly and
          your use of our Service on your mobile device with such features
          enabled signifies your agreement to use your location for the purposes
          of the Service.
        </p>
      ),
    },
  ];

  const whenWeSharesInformation = [
    "1 Click Design, LLC will not share your email address with advertisers or unaffiliated third parties without first obtaining your express permission. We may provide information, including personal information, to our subsidiaries, affiliated companies, licensees, or subcontractors, so such parties can, among other things (a) perform services and/or process such information on our behalf, (b) gain feedback from you on our product offerings and services (c) use the information to offer greater functionality and enhanced services through the Service and provide you with additional product and service opportunities, (d) authorize your participation in certain aspects of our Service, and (e) communicate these opportunities to you. When we do this, the recipients of your information are bound by the terms of this Privacy Policy.",
    "We may share non-Personally Identifiable Information (such as anonymous Website and/or mobile application use data) with third-parties to assist them in understanding our Service, including Users’ use of our Service and the services we provide and the success of advertisements and promotions.",
    "We may share non-personally identifiable aggregated user data, such as aggregated gender, age, geographic, and usage data (without the inclusion of a user’s name or other identifying information) to advertisers and other third parties for their marketing and promotional purposes.",
    "We may use analytics services provided by third parties that use cookies and other similar technologies to collect information about the Service without identifying individual visitors. The third parties that provide us with these services may also collect information about your use of third-party websites and applications. We may share location-based information with third parties for their marketing and promotional purposes if you have allowed location-based services as described above. We may release your information if required to do so by law, or in the good-faith belief that such action is necessary to comply with state or federal laws or respond to a court order, subpoena, law enforcement, or regulatory request, or search warrant. We reserve the right to collect and share any information: (i) in order to investigate, prevent, or take action regarding suspected or actual illegal activities; (ii) as appropriate or necessary to enforce our Terms of Use or investigate potential or actual violations of the Terms of Use or Privacy Policy; (iii) take precautions against liability; (iv) to protect the security or integrity of our Service; (v) to exercise or protect our rights and property, the Service, or the rights and personal safety of 1 Click Design, LLC affiliates, Users or others; or (vi) for other legitimate purposes.",
    "We may assign or transfer the information we collect to a third party in the event that 1 Click Design, LLC is acquired by or merged with a third party entity, or due to our bankruptcy, insolvency, reorganization, receivership, or similar situation. We reserve the right to transfer any information we have about you in the event we sell or transfer all or a portion of our business or assets. Should such a sale or transfer occur, we will use reasonable efforts to direct the transferee to use personal information you have provided through our Service in a manner that is consistent with this Privacy Policy.",
  ];
  const rightsToOpt = [
    "You have the right to “opt-in” and/or “opt-out” of certain of our uses of your Personally Identifiable Information. For example, you may have the opportunity to elect whether you would like to receive correspondence from us and/or third-party service providers. Your personal information will not be shared with third-party service providers unless consent is given by you. You will have the opportunity to opt out of our promotional e-mails by clicking the “opt-out” or “unsubscribe” link in the e-mail you receive. You can also request this by sending an e-mail to privacy@1clickdesign.com specifying whether: (i) you would like to opt-out of receiving promotional correspondence from 1 Click Design, LLC in general, or just via e-mail, postal mail and/or by phone, and/or whether (ii) you would only like to opt-out of certain of our e-newsletters or correspondence. Please understand that if you opt-out of receiving promotional correspondence from us, we may still contact you in connection with your relationship, activities, transactions, and communications with us.",
    "Our Commitment to Children’s Privacy: Protecting the privacy of young children is especially important and is mandated by U.S. law. For these reasons, 1 Click Design, LLC does not knowingly collect Personally Identifiable Information on the Service from persons under 13 years of age, and no part of our Service is directed to persons under 13. If you are under 13 years of age, then you must not use or access the Service at any time or in any manner or provide any information to the Service. If we become aware that we have inadvertently received personal information from a visitor under the age of 13 on our Service, we will delete the information from our records.",
  ];
  const rightsToAccess = [
    {
      title: "Delete Data.",
      content: (
        <p className="text-justify">
          You can ask us to erase or delete all or some of your personal data
          (e.g., if it is no longer necessary to provide services to you).
        </p>
      ),
    },
    {
      title: "Change or Correct Data..",
      content: (
        <p className="text-justify">
          You can edit some of your personal data through your account. You can
          also ask us to change, update or fix your data in certain cases,
          particularly if it’s inaccurate.
        </p>
      ),
    },
    {
      title: "Object to, or Limit or Restrict, Use of Data,.",
      content: (
        <p className="text-justify">
          You can ask us to stop using all or some of your personal data (e.g.,
          if 1 Click Design, LLC has no legal right to keep using it) or to
          limit our use of it (e.g., if your data is inaccurate or unlawfully
          held).
        </p>
      ),
    },
    {
      title: "Right to Access and/or Take Your Data.",
      content: (
        <p className="text-justify">
          You can ask us for a copy of your personal data and can ask for a copy
          of the personal data you provided in machine-readable form. You may
          contact us at privacy@1clickdesign.com and we will consider your
          requests in accordance with applicable laws. Residents in Designated
          Countries may have additional rights under the laws of those
          countries.
        </p>
      ),
    },
  ];
  const lastSections = [
    {
      title: "Retention Period",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            1 Click Design, LLC has a variety of obligations to retain the data
            that you provide to us,both to ensure that transactions can be
            appropriately processed, and also to comply with laws applicable to
            us and to our banking providers and credit card processors.
            Accordingly, even if you close your account, we will retain certain
            information as necessary to meet our legal obligations and fulfill
            the purposes outlined in this Privacy Policy.
          </p>
          <p className="text-justify">
            We retain your Personally Identifiable Information even after you
            have closed your account if reasonably necessary to comply with our
            legal obligations (including law enforcement requests), meet
            regulatory requirements, resolve disputes, maintain security,
            prevent fraud and abuse, enforce our Terms of Use, or fulfill your
            request to “unsubscribe” from us. We will retain de-personalized
            information after your account has been closed.
          </p>
          <p className="text-justify">
            Information you have shared with others (e.g. comments, posted
            reviews, group posts) will remain visible after you closed your
            account or deleted the information from your own profile, and we do
            not control the data that other Account holders copied out of our
            Service. User Content associated with closed accounts will show an
            unknown user as the source.
          </p>
        </div>
      ),
    },
    {
      title: "International Users",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The Service is hosted in the United States and is intended for and
            directed to Users in the United States. The Service is void where
            prohibited. If you are accessing the Service from outside the United
            States, your use of the Service is governed by U.S. law, you are
            transferring your personally identifiable Information to the United
            States, and you consent to that transfer. By providing Personally
            Identifiable Information to us through this Service, you agree that
            it may be used by us and our Affiliated Parties for the purposes
            described herein and you further understand and consent to the
            collection, maintenance, processing, and transfer of such
            information in and to the United States and other countries and
            territories, which may have different privacy laws from your country
            of residence and which may afford varying levels of protection for
            your Personally Identifiable Information. Regardless of the laws in
            place in these countries, we will treat the privacy of your
            information in accordance with this Privacy Policy. By providing
            your Personally Identifiable Information to this Service, you
            consent to our transmission to, and processing of your information
            in, any jurisdiction, in accordance with this Privacy Policy.
          </p>
          <p className="text-justify">
            EU CONSIDERATIONS – Users from the EU, EEA, and Switzerland – This
            section of the Privacy Policy applies only if you use our Service
            from a country that is a Member State of the European Union (“EU”),
            European Economic Area (“EEA”) or Switzerland (the EU, EEA, and
            Switzerland collectively, “Designated Countries”), and supplements
            the information in this Privacy Policy. To the extent that 1 Click
            Design, LLC is subject to the laws of the Designated Countries when
            processing personal data, it shall be the “data controller” under
            such laws. We have lawful bases to collect your data, as detailed in
            this Privacy Policy. The nature of our business means the Personally
            Identifiable Information and Usage Information will be transferred
            to the United States. We take appropriate steps to ensure that
            recipients of your personal data are bound to duties of
            confidentiality and we implement measures such as standard data
            protection contractual clauses to ensure that any transferred
            personal data remains protected and secure. You may request copies
            of these clauses by contacting privacy@1clickdesign.com. You may
            lodge a complaint with the applicable supervisory authority if you
            consider that our Privacy Policy is defying your country’s data law.
          </p>
        </div>
      ),
    },
    {
      title: "Your Choices",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            We have lawful bases to collect, use and share data about you. You
            have choices about the use of your data. We will only collect and
            process Personally Identifiable Information about you where we have
            lawful bases. Lawful bases include consent (where you have given
            consent), contract (where processing is necessary for the
            performance of a contract with you (e.g. to deliver 1 Click Design,
            LLC services you have requested)) and our legitimate interests,
            provided that such processing shall not outweigh your rights and
            freedoms.1 Click Design, LLC will seek to obtain your additional
            consent where required by applicable law. At any time, you can
            withdraw the consent you have provided by going to settings. You
            may, of course, decline to submit Personally Identifiable
            Information to the Service, in which case you may not be able to
            register or 1 Click Design, LLC may not be able to provide certain
            services to you. You may access, update or correct your Personally
            Identifiable Information by using your account settings to edit,
            delete, update, or change the Personally Identifiable Information
            you have provided to this Service. You may also request that we
            correct, update, or remove your information from the current Service
            by contacting us at privacy@1clickdesign.com.
          </p>
          <p className="text-justify">
            We will respond to your request within 30 days. However, before we
            are able to provide you with any information or correct any
            inaccuracies, we may ask you to verify your identity and provide
            other details to help us to respond to your request. To protect your
            privacy and security, we take reasonable steps (such as requesting a
            password) to verify your identity before granting you profile access
            or making corrections. You are responsible for maintaining the
            secrecy of your password and account information at all times. You
            may decline to utilize location-based services on your mobile
            device. If you do not want us to use location-based information,
            please refrain from using a location-based service or click “Don’t
            Allow” when your mobile device requests your location-based
            information.
          </p>
        </div>
      ),
    },
    {
      title: "Online Tracking Disclosures —“Do Not Track” Settings",
      content: (
        <p className="text-justify">
          You may be accessing the Service via a browser that has a “Do Not
          Track” setting. Under AB 370 of CalOPPA, we are required to disclose
          our response to a browser’s “do not track” signal. If you have turned
          this setting in your browser on, or if you are using a browser with
          the default setting of “Do Not Track”, please be advised that all
          features of the Service may not function in such setting. As detailed
          above, we collect a variety of functional and analytic cookies in
          order for you to completely engage with our services. If you wish to
          opt-out of the collection of tracking information you may do so
          according to your browser settings; however, please be advised that
          such an election may limit the functionality of the Website available
          to you.
        </p>
      ),
    },
    {
      title: "Our Commitment To Data Security",
      content: (
        <p className="text-justify">
          We have implemented commercially reasonable technical and
          organizational measures designed to secure your Personally
          Identifiable Information from accidental loss and from unauthorized
          access, use, alteration, or disclosure. Such measures include, but are
          not limited to, the utilization of SecureSockets Layer (SSL)
          encryption to transmit sensitive information through the Service.
          However, we cannot guarantee that unauthorized third parties will
          never be able to defeat those measures or use your personal
          information for improper purposes. You acknowledge that you provide
          your Personally Identifiable Information at your own risk. While 1
          Click Design, LLC strives to protect the security and integrity of
          Personally Identifiable Information on its Service, due to the
          inherent nature of the Internet as an open global communications
          vehicle, we cannot guarantee that your information, during
          transmission through the Internet or while otherwise in our care, will
          be safe from the intrusion of others. You should also be aware that if
          you contact us by email or a “contact us” or similar feature on the
          Service, your transmission might not be secure. An unaffiliated third
          party could view information you send by these methods in transit. You
          should also be aware that if you are accessing the Service via a
          mobile device, your transmissions may not be secure due to the
          inherent nature of mobile data carrier networks. We will have no
          liability for disclosure of your information due to errors or
          unauthorized acts of third parties during or after transmission. If
          you have reason to believe that your interaction with us is no longer
          secure (for example, if you feel that the security of any account with
          us has been compromised), please immediately notify us of the problem
          by contacting us in accordance with the information provided in the
          Introduction to this Privacy Policy.
        </p>
      ),
    },
    {
      title: "Compromise of Personal Information",
      content: (
        <p className="text-justify">
          In the event that personal information is compromised as a result of a
          breach of security, 1 Click Design, LLC will promptly notify those
          persons whose personal information has been compromised, in accordance
          with the notification procedures set forth in this Privacy Policy, or
          as otherwise required by applicable law. In the event the breach
          involves your online account credentials, we will provide notification
          in electronic form and direct you to promptly change your password and
          security question, as applicable, or to take other appropriate steps
          to protect the online account as well as any other online accounts for
          which you use the same credentials or security question and answer.
          You consent to our use of e-mail as a means of such notification. If
          you would prefer us to use another method to notify you in this
          situation, please e-mail us at privacy@1clickdesign.com with the
          alternative and/or additional contact information you would like us to
          use.
        </p>
      ),
    },
    {
      title: "Notification Procedures",
      content: (
        <p className="text-justify">
          It is our policy to provide notifications, whether such notifications
          are required by law or are for marketing or other business-related
          purposes, to Users via email notice, written or hard copy notice, or
          through conspicuous posting of such notice on our Service, as
          determined by 1 Click Design, LLCin its sole discretion.1 Click
          Design, LLC reserves the right to determine the form and means of
          providing notifications to our Users, provided that you may opt out of
          certain means of notification as described in this Privacy Policy.
        </p>
      ),
    },
    {
      title: "Shine the Light",
      content: (
        <p className="text-justify">
          Under California’s “Shine the Light” law (California Civil Code
          §1798.83), California residents who provide personal information in
          obtaining products or services for personal, family or household use
          are entitled once per calendar year to request and obtain from us
          information about the customer information we shared, if any, with
          other businesses for their own direct marketing uses. If applicable,
          this information would include the categories of customer information
          and the names and addresses of those businesses with which we shared
          customer information for the immediately prior calendar year (e.g.
          requests made in 2020 will receive details concerning 2019 sharing
          activities).To obtain this information, please send an email message
          to privacy@1clickdesign.com with “Request for California Privacy
          Information –Shine the Light” on the subject line and in the body of
          your message. We will in turn provide the requested information on
          covered sharing to you at your e-mail address.
        </p>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <p className="text-justify">
          This Privacy Policy may be revised periodically and without prior
          notice to you to reflect changes in our online information practices.
          We will post a prominent notice on this Service to notify you of any
          significant changes to our Privacy Policy and indicate at the top of
          the statement when it was most recently updated. Your use of the
          Service indicates your acceptance of this Privacy Policy and any
          then-current revisions.
        </p>
      ),
    },
  ];
  return (
    <div>
      <Header
        title={"1 Click Design Privacy Policy"}
        description={"Last updated: Feb 22, 2022"}
        bgImg={"/terms and privacy/bg.png"}
      ></Header>
      <div className="px-8 md:px-72 pt-10 md:pt-20">
        <h1 className=" text-[36px] font-semibold">
          1 Click Design, LLC Privacy Policy
        </h1>
        <div className="flex flex-col gap-7 py-8">
          {privacyPolicy.map((paragraph, index) => (
            <p key={index} className="text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        <h1 className="text-[24px] font-semibold">
          The Information We Collect
        </h1>
        <div className="flex flex-col gap-7 pb-8 pt-6">
          <p className="text-justify">
            When you visit our Service we may collect information regarding your
            visit from your computer. Such information helps us to determine
            information about how you found our Service, the date that you
            visited our Service, and search engines that may have led you to our
            Service. We collect this information in order to continually improve
            and enhance the functionality of the Service.
          </p>
          <p className="text-justify">
            Generally, you may provide us with two types of information, User
            Content, which may include Personally Identifiable Information, and
            Website Usage Information, both of which are discussed in greater
            detail below.
          </p>
        </div>
        <p className="text-[20px]">
          Personal Information you choose to provide:
        </p>
        <div className="pb-2 pt-6">
          <ul>
            {privacyPolicySections.map((section, index) => (
              <li key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "5px" }}>&#8226;</span>
                  <h2 className="font-medium italic">{section.title}</h2>
                </div>
                <div className="flex flex-col gap-7 pl-[10px] pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[24px] font-semibold">How We Use Your Information</p>
        <div className="pb-8 pt-6">
          <ul className="flex flex-col gap-7">
            {howWeUseInformation.map((section, index) => (
              <li key={index}>
                <h2 className="text-[20px] font-medium mb-4">
                  {section.title}
                </h2>
                {section.content}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-[24px] font-semibold">When We Share Information</p>
        <div className="flex flex-col gap-7 py-8">
          {whenWeSharesInformation.map((paragraph, index) => (
            <p key={index} className="text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="text-[24px] font-semibold">Rights to Opt-In / Opt-out</p>
        <div className="flex flex-col gap-7 py-8">
          {rightsToOpt.map((paragraph, index) => (
            <p key={index} className="text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="pb-4">
          <p className="text-[24px] font-semibold mb-4">
            Rights to Access and Control Your Data
          </p>
          <p>
            You can access or delete your personal data. You have many choices
            about how your data is collected, used, and shared. We offer you
            settings within your Account to control and manage the personal data
            we have about you.
          </p>
        </div>
        <div>
          <p>For personal data that we have about you, you can:</p>
          <div>
            <ul>
              {rightsToAccess.map((section, index) => (
                <li key={index}>
                  <div
                    className="pt-4"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span style={{ marginRight: "5px" }}>&#8226;</span>
                    <h2 className="font-medium italic">{section.title}</h2>
                  </div>
                  <div className="flex flex-col gap-7 pl-[10px] pb-8 pt-2">
                    {section.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul>
            {lastSections.map((section, index) => (
              <li key={index}>
                <h2 className="text-[24px] font-semibold">{section.title}</h2>
                <div className="flex flex-col gap-7 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[24px] font-semibold mb-4">Contact Information</p>
          <p>
            Please contact us with any questions or comments about this Privacy
            Policy or the Service, the ways in which 1 Click Design, LLC
            collects and uses your information, your choices and rights
            regarding such use, as follows:
          </p>
          <div className="flex flex-col py-8">
            <p>Write to us by physical mail at:</p>
            <p>
              Attn: Privacy 1 Click Design, 9701 Wilshire Blvd, 10th floor,
              Beverly Hills, California 90212
            </p>
          </div>
          <div className="flex flex-col">
            <p>Write to us by email at:</p>
            <p className="underline">privacy@1clickdesign.com</p>
            <p>Call us at: (310) 859-8200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
