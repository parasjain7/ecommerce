import sanityClient from '@sanity/client';
import imageUrlBuider from '@sanity/image-url';

export const client = sanityClient({
    projectId: '2gb934ee',
    dataset: 'production',
    apiVersion: '2022-10-15',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuider(client);

export const urlFor = (source)=> builder.image(source);