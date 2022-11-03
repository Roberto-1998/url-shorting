import React from 'react';
import Button from '../shared/Button/Button';
import { Form } from './LinkForm.styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { linkSchema } from '../../schemas/link.schema';
import useCreateShortLink from '../../hooks/useCreateShortLink';
import { useLinks } from '../../context/LinkContext';

const LinkForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(linkSchema),
  });

  const { mutate } = useCreateShortLink();
  const { addLinks } = useLinks();

  const onSubmit = ({ link }) =>
    mutate(link, {
      onSuccess: (data) => {
        data.data.result &&
          addLinks({
            originalLink: link,
            full_short_link: data.data.result.full_short_link,
          });
      },
    });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} error={errors.link}>
      <div>
        <input
          type='text'
          {...register('link')}
          name='link'
          placeholder='Shorten a link here...'
        />

        <p>{errors.link?.message}</p>
      </div>

      <Button borderRadius={'2px'} padding={'10px'} fontSize={'14px'}>
        Shorten it!
      </Button>
    </Form>
  );
};

export default LinkForm;
