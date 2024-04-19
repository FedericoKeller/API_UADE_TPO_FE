import { Form, InputField } from "@/components/Form";
import { List } from "@/types/list.model";
import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";
import * as yup from "yup";

interface AddToListModal {
    listsData: List[];
    onSuccess: (listName: string) => void;
}


type AddToListModalValues = {
    listName: string;
  };
  
  const schema = yup.object<AddToListModalValues>().shape({
    listName: yup.string().required("Se requiere una lista."),
  });

export const AddToListModal = ({ onSuccess, listsData }: AddToListModal) => {
        const [ firstList, ...lists ] = listsData;

        return (
            <Form<AddToListModalValues, typeof schema>
            onSubmit={async (values) => {
              onSuccess(values.listName);
              modals.closeAll();
            }}
            schema={schema}
          >
            {({ register, formState }) => (
              <>
                <InputField
                  type="select"
                  label="Lista"
                  data={lists?.map((list) => list.title)}
                  error={formState.errors["listName"]}
                  registration={register("listName")}
                ></InputField>
                <Button fullWidth type="submit" mt="md">
                  Crear
                </Button>
              </>
            )}
          </Form>
        )
}