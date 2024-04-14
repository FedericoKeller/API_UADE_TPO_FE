import { Form, InputField } from "@/components/Form";
import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";
import * as yup from "yup";

type CreateListModalValues = {
  title: string;
};

const schema = yup.object<CreateListModalValues>().shape({
  title: yup.string().required("Se requiere el título de la lista"),
});

type CreateListModalFormProps = {
  onSuccess: (title: string) => void;
};

export const CreateListModal = ({ onSuccess }: CreateListModalFormProps) => {
  return (
    <Button
      style={{ marginLeft: "auto", maxWidth: "fit-content" }}
      onClick={() => {
        modals.open({
          title: "Crear lista",
          children: (
            <Form<CreateListModalValues, typeof schema>
              onSubmit={async (values) => {
                onSuccess(values.title);
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
                    Crear
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
