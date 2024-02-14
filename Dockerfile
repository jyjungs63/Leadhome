FROM golang:alpine AS builder

ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

WORKDIR /build

COPY go.mod go.sum  server.go ./

RUN go mod download

RUN go build -o server .

WORKDIR /dist

ADD public /public

RUN cp /build/server .

FROM scratch

COPY --from=builder /dist/server .

#COPY . . copy all(*) contents directory to host docker build directory
COPY . .

ENTRYPOINT ["/server"]