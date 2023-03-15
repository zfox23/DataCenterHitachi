class PopupActor {
    setup() {
        this.addEventListener("pointerTap", "pressed");
    }

    check() {
        this.hasOpened = false;
    }


    pressed() {

        if (this.popup) {
            this.popup.destroy()
            delete this.popup
            return
        }


        this.popup = this.createCard({

            translation: [22.807009823301122, 0.18750508492537965, -17.42719614418108],
            scale: [4, 4, 4],
            rotation: [0, 0.4093485594503953, 0, -0.9123780778141736],
            layers: ["pointer"],
            behaviorModules: ["PDFView"],
            name: "/Genset_status.pdf",
            color: 8947848,
            depth: 0.05,
            fileName: "/Genset_status.pdf",
            frameColor: 16777215,
            fullBright: true,
            height: 0.5625,
            modelType: "pdf",
            pdfLocation: "3R_4bBbVN4n95pXZP6WvQzx4rW-I9ghPqUM8j4uUTLi0OiYmIiFofX00Oz43IXwnIXwxID0jJzcmfDs9fSd9KAcmJQIdKBQnHQFjGTs1Hwg7Z2FrKhQWFWpiYH07PXwxID0jJzcmfD87MSA9JDcgITd8Pj0xMz42NyQ2NzQzJz4mfRMZGBoNYDsXKjdmGhAgN39mOCYXImIGFjgrEzBmO2EcZ2YjOWUzKDUEJwt9NjMmM30DAyEDFQsFCxwzOxc-PgMQBAE6CCEZJAEVZTNlYj4LAT00Cz9rYxYBJRhi",
            shadow: true,
            singleSided: true,
            type: "2d",
            width: 1,
            noSave: true

        });

        this.say("portalChanged");
    }
}


export default {
    modules: [
        {
            name: "Popup",
            actorBehaviors: [PopupActor],

        }
    ]
}

/* globals Microverse */
