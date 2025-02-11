import Link from "next/link";

export default function Meals() {
  return (
    <main>
        <h2 style={{color: "orange"}}>Meals</h2>
        <p style={{textAlign: 'center'}}>
          <Link href='meals/blog'>Go to Meals</Link>
        </p>
        <p>
          <Link href='community'>Go to Community</Link>
        </p>
       
        
    </main>
  )
}
