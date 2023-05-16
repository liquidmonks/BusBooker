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

export const MidSection = ({ section }) => (
    <Section>
<TopPart section={section} />
<div>
    
</div>
    </Section>
) 