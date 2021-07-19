import React from "react";
import { Route } from "react-router-dom";

//layout
import DefaultLayout from "../layouts/Default.layouts";

const DefaultHOC = ( {component, ...rest } ) => {
    return(
        <>
        <Route 
        {...rest} 
        component={(props) =>(
            <DefaultLayout>
                <component {...props} />
            </DefaultLayout>
          )}
        />
      </>
    );
};

export default DefaultHOC;