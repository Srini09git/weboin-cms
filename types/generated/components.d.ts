import type { Schema, Attribute } from '@strapi/strapi';

export interface ServiceTitle extends Schema.Component {
  collectionName: 'components_service_titles';
  info: {
    displayName: 'Title';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ServiceTestimonial extends Schema.Component {
  collectionName: 'components_service_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Attribute.String;
    role: Attribute.String;
    name: Attribute.String;
    description: Attribute.Text;
    service_data: Attribute.Relation<
      'service.testimonial',
      'oneToMany',
      'api::service-data.service-data'
    >;
  };
}

export interface ServiceSecDm extends Schema.Component {
  collectionName: 'components_service_sec_dms';
  info: {
    displayName: 'secDm';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images'>;
    reverse: Attribute.Boolean;
    service_datum: Attribute.Relation<
      'service.sec-dm',
      'oneToOne',
      'api::service-data.service-data'
    >;
  };
}

export interface ServiceMainDm extends Schema.Component {
  collectionName: 'components_service_main_dms';
  info: {
    displayName: 'MainDm';
    description: '';
  };
  attributes: {
    subheading: Attribute.String;
    heading: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ContentTitle: Attribute.String;
    Buttontext: Attribute.String;
    service_datum: Attribute.Relation<
      'service.main-dm',
      'oneToOne',
      'api::service-data.service-data'
    >;
    Para: Attribute.Component<'para.paragraph', true>;
  };
}

export interface ServiceGetintouch extends Schema.Component {
  collectionName: 'components_service_getintouches';
  info: {
    displayName: 'Getintouch ';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ParaParagraph extends Schema.Component {
  collectionName: 'components_para_paragraphs';
  info: {
    displayName: 'Paragraph';
    description: '';
  };
  attributes: {
    Para: Attribute.Blocks;
    services: Attribute.Relation<
      'para.paragraph',
      'oneToMany',
      'api::service-data.service-data'
    >;
  };
}

export interface PortfolioMaincontent extends Schema.Component {
  collectionName: 'components_portfolio_maincontents';
  info: {
    displayName: 'Maincontent';
  };
  attributes: {
    mobileImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pcimg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Header: Attribute.String;
    paragraph: Attribute.Text;
    Buttontext: Attribute.String;
    year: Attribute.BigInteger;
    closebtn: Attribute.String;
  };
}

export interface HomeOurSponcer extends Schema.Component {
  collectionName: 'components_home_our_sponcers';
  info: {
    displayName: 'OurSponcer';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Icons: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HomeHeroVideo extends Schema.Component {
  collectionName: 'components_home_hero_videos';
  info: {
    displayName: 'HERO VIDEO';
    icon: 'arrowDown';
  };
  attributes: {
    uhj: Attribute.Blocks;
  };
}

export interface HomeHeroMain extends Schema.Component {
  collectionName: 'components_home_hero_mains';
  info: {
    displayName: 'HERO MAIN';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Text;
  };
}

export interface ContactContactForm extends Schema.Component {
  collectionName: 'components_contact_contact_forms';
  info: {
    displayName: 'ContactForm';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    name: Attribute.String;
    type: Attribute.String;
    required: Attribute.String;
  };
}

export interface AboutzMohana extends Schema.Component {
  collectionName: 'components_aboutz_mohanas';
  info: {
    displayName: 'mohana';
  };
  attributes: {
    Mohanapriya: Attribute.Media<'images'>;
    jjj: Attribute.Text;
  };
}

export interface AboutzAboutSEc extends Schema.Component {
  collectionName: 'components_aboutz_about_s_ecs';
  info: {
    displayName: 'AboutSEc';
    icon: 'attachment';
  };
  attributes: {
    heelo: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'service.title': ServiceTitle;
      'service.testimonial': ServiceTestimonial;
      'service.sec-dm': ServiceSecDm;
      'service.main-dm': ServiceMainDm;
      'service.getintouch': ServiceGetintouch;
      'para.paragraph': ParaParagraph;
      'portfolio.maincontent': PortfolioMaincontent;
      'home.our-sponcer': HomeOurSponcer;
      'home.hero-video': HomeHeroVideo;
      'home.hero-main': HomeHeroMain;
      'contact.contact-form': ContactContactForm;
      'aboutz.mohana': AboutzMohana;
      'aboutz.about-s-ec': AboutzAboutSEc;
    }
  }
}
