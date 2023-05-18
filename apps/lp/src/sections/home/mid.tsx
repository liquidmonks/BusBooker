import { Section } from 'components';
import React from 'react';

const TopPart = ({ section }) => (
    <>
    <h3 className="text-4xl font-bold text-center uppercase">
        {section.title}
        </h3>
<p className="w-1/3 mx-auto mt-4 text-center">{section.description}</p>
    </>
)

const FeatureItem = ({ feature }) => (
    <div>
        <div>{<feature.icon />}</div>
        <div>
            <h5>{feature.title}</h5>
            <p>{feature.description}</p>
        </div>
    </div>
)

export const MidSection = ({ section }) => (
    <Section>
<TopPart section={section} />
    <div className="flex justify-between">
        <div>
            <img src={section.imageUrl} alt={section.imageAlt} />
        </div>
        <div>
            <h3>{section.featuresTitle}</h3>
            <div>
                {section.features.map(feature => (
                    <FeatureItem feature={feature} />
                ))}
            </div>
        </div>
        </div>
    </Section>
) 