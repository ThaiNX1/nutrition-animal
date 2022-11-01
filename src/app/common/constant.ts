export enum NotiType {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

export const MAX_INTEGER_VALUE = 2147483647;
export const printStyle = `<style>
.w-full{
width: 100%
}
.flex{
display: flex;
}
.flex-1{
flex: 1 1 0%;
}
.flex-col{
flex-direction: column;
}
.items-center{
align-items: center;
}
.items-start{
align-items: start;
}
.items-end{
align-items: end;
}
.justify-center{
justify-content: center;
}
.justify-start{
justify-content: start;
}
.justify-between{
justify-content: space-between;
}
.justify-end{
justify-content: end;
}
.py-1{
padding: 0.25rem 0;
}
.px-1{
padding: 0 0.25rem
}
.py-2{
padding: 0.5rem 0;
}
.py-2{
padding: 0.5rem 0;
}
.px-2{
padding: 0 0.5rem
}
.mb-0{
margin-bottom: 0;
}
.mt-0{
margin-top: 0;
}
.mt-10{
margin-top: 2.5rem;
}
.mt-16{
margin-top: 4rem;
}
.mt-20{
margin-top: 5rem;
}
.font-bold{
font-weight: bold;
}
.uppercase{
text-transform: uppercase;
}
.border{
border:1px solid #333333
}
.border-b{
border-bottom:1px solid #333333
}
.border-r{
border-right:1px solid #333333
}
.border-l{
border-left:1px solid #333333
}
.border-double{
border-style: double;
}
.font-bold{
font-weight: bold;
}
.text-base{
font-size: 1rem;
line-height: 1.5rem;
}
.text-lg{
font-size: 1.125rem;
line-height: 1.75rem;
}
.display{
display: grid;
}
.grid-cols-3{
grid-template-columns: repeat(3, minmax(0, 1fr));
}
.col-span-1{
grid-column: span 1 / span 1;
}
.col-span-2{
grid-column: span 2 / span 2;
}
</style>
`;
