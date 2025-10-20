import React from 'react';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';

const { Panel } = Collapse;

const FaqSection = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      key: '1',
      question: t('faq.q1'),
      answer: (
        <ul className="list-disc pl-5">
          <li>{t('faq.q1_a1')}</li>
          <li>{t('faq.q1_a2')}</li>
          <li>{t('faq.q1_a3')}</li>
          <li>{t('faq.q1_a4')}</li>
        </ul>
      ),
    },
    {
      key: '2',
      question: t('faq.q2'),
      answer: t('faq.q2_a'),
    },
    {
      key: '3',
      question: t('faq.q3'),
      answer: t('faq.q3_a'),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6 ">FAQ</h2>
      <Collapse accordion>
        {faqItems.map((item) => (
          <Panel header={item.question} key={item.key}>
            <div className="text-green-700 text-base hover:text-green-700 transition">{item.answer}</div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FaqSection;
