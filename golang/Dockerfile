FROM golang AS stage1

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN go build fullcycle.go

FROM scratch AS stage2
WORKDIR /usr/src/app
COPY --from=stage1 /usr/src/app .
CMD ["./fullcycle"]
