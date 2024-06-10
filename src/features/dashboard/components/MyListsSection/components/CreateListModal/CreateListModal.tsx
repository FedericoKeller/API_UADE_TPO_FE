import { Form, InputField } from "@/components/Form";
import { Button, Center, Loader } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useState } from "react";
import * as yup from "yup";

type CreateListModalValues = {
  title: string;
};

const schema = yup.object<CreateListModalValues>().shape({
  title: yup.string().required("Se requiere el título de la lista"),
});

type CreateListModalFormProps = {
  onSuccess: (title: string) => Promise<void>;
};

export const CreateListModal = ({ onSuccess }: CreateListModalFormProps) => {
  const [ loading, setLoading ] = useState<boolean>(false);
  return (
    <Button
      style={{ marginLeft: "auto", maxWidth: "fit-content" }}
      onClick={() => {
        modals.open({
          title: "Crear lista",
          children: (
            <Form<CreateListModalValues, typeof schema>
              onSubmit={async (values) => {
                if (loading) return;
                setLoading(true);
                await onSuccess(values.title);
                setLoading(false);
                modals.closeAll();
              }}
              schema={schema}
            >
              {({ register, formState }) => (
                <>
                  <InputField
                    type="text"
                    label="Título"
                    error={formState.errors["title"]}
                    registration={register("title")}
                  ></InputField>
                  <Button fullWidth type="submit" mt="md">
                    {loading ? (
                      <Center p="md">
                        <Loader size={30} />
                      </Center>
                    ) : (
                      "Crear"
                    )}
                  </Button>
                </>
              )}
            </Form>
          ),
        });
      }}
    >
      Crear lista
    </Button>
  );
};
