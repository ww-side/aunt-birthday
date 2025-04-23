import {
  Root,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog';

import st from './gift-dialog.module.css';

export const GiftDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Root open={open} onOpenChange={setOpen}>
      <Portal>
        <Overlay className={st.DialogOverlay} />
        <Content className={st.DialogContent}>
          <Title />
          <Close className={st.close}>X</Close>
          <Description asChild>
            <section className="flex flex-col gap-5">
              <p>These roses are for you from my heart! 🎁</p>
              <img src="/roses.webp" alt="roses" className="rounded-2xl" />
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
